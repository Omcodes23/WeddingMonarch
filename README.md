# 💍 Keyur & Isha Wedding Invitation Website

A beautiful, modern, mobile-responsive Gujarati wedding invitation website with MongoDB database integration and personalized voice greetings.

## ✨ Features

- **🎨 8 Beautiful Pages**: Ganesh Sthapana, Couple Intro, Guest Welcome, Engagement, Wedding, Family, Venue, and RSVP
- **🔗 Unique Shareable Links**: Generate personalized invitation links for each guest
- **🎙️ Voice-over Greetings**: Auto-play personalized Gujarati voice greetings
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **✨ Smooth Animations**: Framer Motion animations throughout
- **🎯 Admin Panel**: Password-protected dashboard to manage guests
- **💾 MongoDB Database**: Store guest information and track views
- **🚀 Vercel Ready**: One-click deployment to Vercel

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **MongoDB Atlas** (database)
- **Mongoose** (ODM)
- **Web Speech API** (voice-over)

## 📋 Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier works)
- npm or yarn package manager

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-invitations

# Admin Panel Password
ADMIN_PASSWORD=your_secure_password

# Base URL (change for production)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (M0 Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Paste into `.env.local` as `MONGODB_URI`

**Important**: Add `0.0.0.0/0` to Network Access for Vercel deployment:
- Database Access → Add Database User
- Network Access → Add IP Address → Allow Access from Anywhere

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the admin panel.

## 📱 Usage

### Admin Panel

1. Navigate to `/admin` (or root `/`)
2. Enter your admin password (from `.env.local`)
3. Add guests with their names
4. Copy the generated invitation links
5. Share links with guests via WhatsApp, SMS, or email

### Guest Experience

1. Guests open their unique link (`/invite/[uniqueId]`)
2. Personalized voice greeting plays automatically
3. Smooth scroll through 8 beautiful pages
4. View all wedding details, venue, and family info

## 🎨 Customization

### Wedding Details

Edit the wedding information in these files:

- **Dates & Times**: `components/invitation/Page1Ganesh.tsx`, `Page4Engagement.tsx`, `Page5Wedding.tsx`
- **Couple Names**: `components/invitation/Page2CoupleIntro.tsx`
- **Family Details**: `components/invitation/Page6Family.tsx`
- **Venue Info**: `components/invitation/Page7Venue.tsx`
- **Contact Numbers**: `components/invitation/Page8RSVP.tsx`

### Colors & Fonts

Modify colors in `tailwind.config.ts`:

```typescript
colors: {
  wedding: {
    gold: '#FFD700',
    darkGold: '#B8860B',
    maroon: '#800020',
    cream: '#FFF8DC',
    rose: '#C9A07C',
    burgundy: '#6B1529',
  }
}
```

Fonts are configured in `app/globals.css`.

### Voice-over Message

Edit the greeting template in `lib/voiceover.ts`:

```typescript
generateGreeting(guestName: string): string {
  return `નમસ્તે ${guestName}, આપનું કેયુર અને ઈશાના લગ્નમાં હાર્દિક સ્વાગત છે...`;
}
```

## 🚀 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `MONGODB_URI`
   - `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_BASE_URL` (your Vercel URL)
6. Click "Deploy"

### Post-Deployment

1. Update `NEXT_PUBLIC_BASE_URL` in Vercel environment variables with your production URL
2. Redeploy to apply changes
3. Test the admin panel and create a test invitation

## 📂 Project Structure

```
wedding-invitation/
├── app/
│   ├── admin/
│   │   └── page.tsx              # Admin dashboard
│   ├── invite/[slug]/
│   │   └── page.tsx              # Dynamic invitation page
│   ├── api/
│   │   ├── admin/                # Admin API routes
│   │   └── invitation/           # Guest API routes
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page (redirects to admin)
│   └── globals.css               # Global styles
├── components/
│   ├── invitation/               # 8 invitation page components
│   ├── admin/                    # Admin panel components
│   └── ui/                       # Reusable UI components
├── lib/
│   ├── mongodb.ts                # Database connection
│   ├── utils.ts                  # Utility functions
│   └── voiceover.ts              # Voice-over service
├── models/
│   └── Invitation.ts             # MongoDB schema
└── public/                       # Static assets
```

## 🔐 Security

- Admin panel is password-protected
- Environment variables for sensitive data
- MongoDB connection with authentication
- API routes validate admin password

**Important**: Use a strong password for `ADMIN_PASSWORD`!

## 📱 Mobile Optimization

- Responsive design with Tailwind CSS
- Touch-friendly buttons and navigation
- Optimized animations for mobile
- Fast loading with Next.js optimization

## 🎯 Key Features Explained

### Unique Invite Links

Each guest gets a unique URL like:
```
https://yourdomain.vercel.app/invite/abc123def456
```

Links are generated using timestamps and random strings for security.

### Voice-over

- Uses Web Speech API for browser-native text-to-speech
- Tries to use Gujarati/Hindi voice if available
- Falls back to default browser voice
- Auto-plays on page load (with user interaction requirement)

### View Tracking

- Automatically tracks when a guest views their invitation
- Admin can see "Viewed" status and timestamp
- Helps track RSVPs and engagement

## 🐛 Troubleshooting

### MongoDB Connection Error

- Verify your connection string in `.env.local`
- Check MongoDB Atlas Network Access allows your IP
- Ensure database user has read/write permissions

### Voice-over Not Working

- Voice-over requires user interaction in some browsers
- Check browser console for errors
- Ensure HTTPS for production (Vercel provides this)

### Admin Login Not Working

- Verify `ADMIN_PASSWORD` is set in `.env.local`
- Clear browser cache and cookies
- Check browser console for API errors

## 📞 Support

For questions or issues:
- Check the code comments
- Review MongoDB Atlas documentation
- Check Next.js 14 documentation

## 🎊 Wedding Details

**Couple**: Keyur & Isha

**Events**:
- Ganesh Sthapana: Sunday, 23rd February 2025, 4:00 PM
- Engagement: Monday, 24th February 2025, 6:30 PM
- Wedding: Tuesday, 25th February 2025, 9:00 PM

**Venue**: Navneet Lawns, Ahmedabad

## 📝 License

This project is created for personal use for Keyur & Isha's wedding.

## 🙏 Credits

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.

---

**Made with love for Keyur & Isha's Special Day** 💑✨

#ShubhVivah #KeyurWeedsIsha
#   W e d d i n g M o n a r c h  
 