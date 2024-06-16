import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Installer from '../../../models/Installer';

export async function PUT(req: NextRequest) {
    await connectToDatabase();
    try {
        const body = await req.json();
        const id = new URL(req.url).searchParams.get('id');
        if (!id) {
            return NextResponse.json({ success: false, error: 'ID not provided' }, { status: 400 });
        }
        const installer = await Installer.findByIdAndUpdate(id, body, { new: true });
        if (!installer) {
            return NextResponse.json({ success: false, error: 'Installer not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: installer }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
