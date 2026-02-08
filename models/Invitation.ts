import mongoose, { Model, Schema, Document } from 'mongoose';

export interface IInvitation extends Document {
  guestName: string;
  uniqueSlug: string;
  phoneNumber?: string;
  customMessage?: string;
  voiceName?: string;
  createdAt: Date;
  viewed: boolean;
  viewedAt?: Date;
}

const InvitationSchema: Schema<IInvitation> = new Schema({
  guestName: {
    type: String,
    required: [true, 'Guest name is required'],
    trim: true,
  },
  uniqueSlug: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    default: null,
  },
  customMessage: {
    type: String,
    trim: true,
    default: null,
  },
  voiceName: {
    type: String,
    default: null,  // EXPLICIT: Allow voiceName to be saved
    sparse: false,  // EXPLICIT: Don't use sparse index, allow null values
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  viewed: {
    type: Boolean,
    default: false,
  },
  viewedAt: {
    type: Date,
    default: null,
  },
}, { 
  strict: true,  // EXPLICIT: Ensure schema is enforced
  timestamps: false,  // Handle createdAt manually
});

// Prevent model recompilation in development
const Invitation: Model<IInvitation> = 
  mongoose.models.Invitation || mongoose.model<IInvitation>('Invitation', InvitationSchema);

export default Invitation;
