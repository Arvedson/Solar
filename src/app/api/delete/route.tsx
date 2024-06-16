import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Installer from '../../../../models/Installer';

export async function DELETE(req: NextRequest) {
    await connectToDatabase();
    try {
        const id = new URL(req.url).searchParams.get('id');
        if (!id) {
            return NextResponse.json({ success: false, error: 'ID not provided' }, { status: 400 });
        }
        const installer = await Installer.findByIdAndDelete(id);
        if (!installer) {
            return NextResponse.json({ success: false, error: 'Installer not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: installer }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
