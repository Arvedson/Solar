import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Installer from '../../../models/Installer';

export async function GET(req: NextRequest) {
    await connectToDatabase();
    try {
        const installers = await Installer.find({});
        const headers = new Headers();
        headers.set('Content-Range', `installers 0-9/${installers.length}`);
        headers.set('Access-Control-Expose-Headers', 'Content-Range');
        return NextResponse.json({ success: true, data: installers }, { status: 200, headers });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
    }
}
