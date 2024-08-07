import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb', // Ajusta esto según sea necesario
    },
  },
};

export async function POST(req: NextRequest) {
  try {
    const { imageData } = await req.json();
    const base64Data = imageData.replace(/^data:image\/png;base64,/, "");
    const filePath = path.join(process.cwd(), 'public', 'chart.png');

    fs.writeFileSync(filePath, base64Data, 'base64');
    return NextResponse.json({ url: '/chart.png' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save image' }, { status: 500 });
  }
}
