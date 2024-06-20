// src/app/api/read-image/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Tesseract from 'tesseract.js';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('imagePath') as File;

    if (!file) {
      console.log('No file provided');
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    console.log('File received:', file.name);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('Starting Tesseract recognition');
    const { data: { text } } = await Tesseract.recognize(
      buffer,
      'eng',
      {
        logger: m => console.log(m)
      }
    );

    console.log('Tesseract recognition completed');
    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error during Tesseract recognition:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
