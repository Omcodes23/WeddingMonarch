import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Invitation from '@/models/Invitation';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const adminPassword = request.headers.get('x-admin-password');

    // Simple password authentication
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const invitation = await Invitation.findByIdAndDelete(params.id);

    if (!invitation) {
      return NextResponse.json(
        { success: false, error: 'Invitation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Invitation deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting invitation:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete invitation' },
      { status: 500 }
    );
  }
}
