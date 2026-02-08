import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Invitation from '@/models/Invitation';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();

    const invitation = await Invitation.findOne({ uniqueSlug: params.slug });

    if (!invitation) {
      return NextResponse.json(
        { success: false, error: 'Invitation not found' },
        { status: 404 }
      );
    }

    // Mark as viewed if not already
    if (!invitation.viewed) {
      invitation.viewed = true;
      invitation.viewedAt = new Date();
      await invitation.save();
    }

    // Reload from database to ensure fresh data
    const freshInvitation = await Invitation.findOne({ uniqueSlug: params.slug });

    console.log('=== FETCH INVITATION API ===');
    console.log('✅ Found invitation:', freshInvitation?._id);
    console.log('📊 freshInvitation.voiceName:', freshInvitation?.voiceName);
    console.log('📊 typeof freshInvitation.voiceName:', typeof freshInvitation?.voiceName);
    console.log('📊 Full object:', freshInvitation?.toObject());

    const responseData = {
      success: true,
      invitation: {
        guestName: freshInvitation?.guestName,
        customMessage: freshInvitation?.customMessage,
        voiceName: freshInvitation?.voiceName,
      },
    };
    
    console.log('📤 Returning to client:', responseData);

    return NextResponse.json(responseData);
  } catch (error: any) {
    console.error('Error fetching invitation:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch invitation' },
      { status: 500 }
    );
  }
}
