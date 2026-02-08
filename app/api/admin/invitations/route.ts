import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Invitation from '@/models/Invitation';
import { generateInvitationUrl } from '@/lib/utils';

export async function GET(request: NextRequest) {
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

    const invitations = await Invitation.find({})
      .sort({ createdAt: -1 })
      .select('guestName uniqueSlug phoneNumber viewed viewedAt createdAt');

    const invitationsWithUrls = invitations.map((inv) => ({
      id: inv._id,
      guestName: inv.guestName,
      slug: inv.uniqueSlug,
      phoneNumber: inv.phoneNumber,
      viewed: inv.viewed,
      viewedAt: inv.viewedAt,
      createdAt: inv.createdAt,
      invitationUrl: generateInvitationUrl(inv.uniqueSlug),
    }));

    return NextResponse.json({
      success: true,
      invitations: invitationsWithUrls,
    });
  } catch (error: any) {
    console.error('Error fetching invitations:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch invitations' },
      { status: 500 }
    );
  }
}
