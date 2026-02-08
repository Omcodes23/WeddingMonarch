import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Invitation from '@/models/Invitation';
import { generateUniqueSlug, generateInvitationUrl } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { guestName, phoneNumber, customMessage, voiceName, adminPassword } = body;

    console.log('=== CREATE INVITATION API ===');
    console.log('📥 Full body received:', body);
    console.log('📝 voiceName:', voiceName);
    console.log('📝 typeof voiceName:', typeof voiceName);
    console.log('📝 voiceName === "PRE_RECORDED":', voiceName === 'PRE_RECORDED');
    console.log('📝 voiceName === undefined:', voiceName === undefined);
    console.log('📝 !voiceName:', !voiceName);

    // Simple password authentication
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!guestName || guestName.trim() === '') {
      return NextResponse.json(
        { success: false, error: 'Guest name is required' },
        { status: 400 }
      );
    }

    await connectDB();

    const uniqueSlug = generateUniqueSlug();
    
    console.log('💾 Creating invitation with:');
    console.log('  guestName:', guestName.trim());
    console.log('  voiceName:', voiceName);
    console.log('  phoneNumber:', phoneNumber?.trim());
    console.log('  customMessage:', customMessage?.trim());
    
    // Build the invitation object carefully
    const invitationObj: any = {
      guestName: guestName.trim(),
      uniqueSlug: uniqueSlug,
      phoneNumber: phoneNumber?.trim() || null,
      customMessage: customMessage?.trim() || null,
    };

    // EXPLICITLY add voiceName if it exists
    if (voiceName) {
      invitationObj.voiceName = voiceName;
      console.log('✅ voiceName added to object:', invitationObj.voiceName);
    } else {
      invitationObj.voiceName = null;
      console.log('⚠️ voiceName is null/undefined');
    }
    
    console.log('💾 Final object to create:', invitationObj);
    
    // Use new instance approach for better control
    const newInvitation = new Invitation(invitationObj);
    console.log('📝 Created instance, voiceName in instance:', newInvitation.voiceName);
    
    const savedInvitation = await newInvitation.save();
    console.log('✅ After save(), voiceName:', savedInvitation.voiceName);

    // Reload from database to verify persistence
    const reloadedInvitation = await Invitation.findById(savedInvitation._id);
    console.log('✅ After reload from DB, voiceName:', reloadedInvitation?.voiceName);

    console.log('✅ SAVED to DB:');
    console.log('  invitation._id:', reloadedInvitation?._id);
    console.log('  invitation.voiceName:', reloadedInvitation?.voiceName);
    console.log('  typeof invitation.voiceName:', typeof reloadedInvitation?.voiceName);
    console.log('  Full saved invitation:', reloadedInvitation?.toObject());

    const invitationUrl = generateInvitationUrl(uniqueSlug);

    const responseObject = {
      success: true,
      invitation: {
        id: savedInvitation?._id,
        guestName: savedInvitation?.guestName,
        slug: savedInvitation?.uniqueSlug,
        voiceName: savedInvitation?.voiceName, // Return the actually saved voiceName
        invitationUrl,
      },
    };
    
    console.log('📤 RETURNING to client:');
    console.log('  responseObject:', responseObject);
    console.log('  responseObject.invitation.voiceName:', responseObject.invitation.voiceName);

    return NextResponse.json(responseObject);
  } catch (error: any) {
    console.error('❌ Error creating invitation:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create invitation' },
      { status: 500 }
    );
  }
}
