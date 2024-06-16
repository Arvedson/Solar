import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Installer from '../../../models/Installer';

export async function POST(req: NextRequest) {
    await connectToDatabase();
    try {
        const body = await req.json();
        const installer = await Installer.create(body);
        return NextResponse.json({ success: true, data: installer }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
