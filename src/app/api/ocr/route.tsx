import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import { fromBuffer } from 'pdf2pic';
import Tesseract from 'tesseract.js';

async function preprocessImage(buffer: Buffer): Promise<Buffer> {
  return buffer;
}

async function extractTextFromImage(buffer: Buffer): Promise<string> {
  const preprocessedBuffer = await preprocessImage(buffer);
  const { data } = await Tesseract.recognize(preprocessedBuffer, 'spa', {
    logger: m => console.log(m),
  });
  return data.text;
}

async function pdfToImages(buffer: Buffer): Promise<Buffer[]> {
  const pdfDoc = await PDFDocument.load(buffer);
  const totalPages = pdfDoc.getPageCount();

  const convert = fromBuffer(buffer, {
    density: 300,
    saveFilename: "untitled",
    savePath: "/tmp",
    format: "png",
    width: 2550,
    height: 3300,
  });

  const images: Buffer[] = [];
  for (let i = 1; i <= totalPages; i++) {
    const page = await convert(i);
    const pageWithBase64 = page as { base64: string };  // Aserción de tipo
    if (pageWithBase64.base64) {
      const imageBuffer = Buffer.from(pageWithBase64.base64, 'base64');
      images.push(imageBuffer);
    } else {
      console.error(`Error: Page ${i} does not have base64 data`);
    }
  }

  return images;
}

async function extractTextFromPdf(buffer: Buffer): Promise<string> {
  const images = await pdfToImages(buffer);
  let extractedText = '';

  for (const image of images) {
    const pageText = await extractTextFromImage(image);
    extractedText += pageText + '\n';
  }

  return extractedText;
}

function extractKwhUsingDollarSign(text: string): { period: string, kwh: string, cost: string }[] {
  const lines = text.split('\n');
  const results = [];
  const dollarSignRegex = /\$(\d{1,3}(?:,\d{3})*\.\d{2})/;

  for (const line of lines) {
    const dollarMatch = dollarSignRegex.exec(line);
    if (dollarMatch) {
      const cost = dollarMatch[1];
      const parts = line.split('$');
      const kwhMatch = parts[0].match(/\d+/g);
      if (kwhMatch) {
        const kwh = kwhMatch[kwhMatch.length - 1];
        const periodMatch = line.match(/del\s+\d+\s+[A-Z]+\s+\d+\s+al\s+\d+\s+[A-Z]+\s+\d+/);
        const period = periodMatch ? periodMatch[0] : '';
        results.push({ period, kwh, cost });
      }
    }
  }

  return results;
}

function calculateAnnualKwh(data: { period: string, kwh: string, cost: string }[]): { periods: string[], annualKwh: number } {
  let annualKwh = 0;
  const selectedPeriods = data.slice(0, 6);

  selectedPeriods.forEach(entry => {
    annualKwh += parseInt(entry.kwh, 10);
  });

  return { periods: selectedPeriods.map(entry => entry.period), annualKwh };
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      console.log('No file provided');
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    console.log('File received:', file.name);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let text = '';
    if (file.type === 'application/pdf') {
      text = await extractTextFromPdf(buffer);
    } else if (file.type.startsWith('image/')) {
      text = await extractTextFromImage(buffer);
    } else {
      return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
    }

    console.log('Text recognition completed:', text);

    const extractedData = extractKwhUsingDollarSign(text);
    console.log('Extracted data:', extractedData);

    const annualKwhData = calculateAnnualKwh(extractedData);
    console.log('Annual Kwh Data:', annualKwhData);

    return NextResponse.json({
      annualKwhData,
    });
  } catch (error) {
    console.error('Error during text recognition:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
