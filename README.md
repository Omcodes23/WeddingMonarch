# 💍 Keyur & Isha Wedding Invitation Website

A beautiful, modern, and fully responsive Gujarati wedding invitation website featuring personalized voice greetings, admin dashboard, and MongoDB database integration.

## ✨ Features

- **🎨 4-Page Beautiful Design**: Ganesh Invocation, Couple Introduction, Guest Information, and Cover Page
- **🎙️ Voice-over Greetings**: Auto-playing personalized Gujarati voice greetings with multiple voice options
- **🔄 Pre-recorded Audio**: Support for high-quality pre-recorded Gujarati greeting
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **✨ Smooth Animations**: Framer Motion animations and transitions throughout
- **🔐 Password-Protected Admin Panel**: Secure dashboard to manage guest invitations
- **💾 MongoDB Integration**: Store guest information and track invitation views
- **🔗 Unique Shareable Links**: Generate personalized invitation URLs for each guest
- **🌐 Deployment Ready**: Ready for Vercel deployment

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling framework
- **Framer Motion** - Advanced animations
- **MongoDB Atlas** - Cloud database
- **Mongoose** - Object Data Modeling (ODM)
- **Web Speech API** - Browser-based voice synthesis
- **HTML5 Audio API** - Pre-recorded audio playback

## 📋 Prerequisites

- Node.js 18.x or higher
- MongoDB Atlas account (free tier available)
- npm or yarn package manager
- Vercel account (for deployment)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone [your-repo-url]
cd "newproejct"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding_invitations

# Admin Panel Password (Set Your Secure Password)
ADMIN_PASSWORD=your_secure_password_here
```

### 4. Add Audio File

Place your pre-recorded greeting audio file as `gretting.mp3` in:
- `app/public/gretting.mp3` (for development)
- `public/gretting.mp3` (for production)

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📖 Usage

### Admin Panel

1. Navigate to `/admin`
2. Enter the admin password
3. Add guests with:
   - Guest name (Gujarati or English)
   - Phone number (optional)
   - Voice selection (Pre-recorded or browser voice)
   - Custom message (optional, for browser voices only)
4. Click "Create Invitation" to generate a unique invitation link
5. Share the link with guests

### Guest Experience

1. Guest opens their unique invitation link
2. Single-click overlay with Gujarati text appears
3. Click overlay to:
   - Play personalized voice greeting
   - View the beautiful invitation cards
4. Scroll through all 4 pages of the invitation
5. Optional RSVP functionality available

### Voice Options

- **🎙️ Pre-recorded Gujarati**: High-quality pre-recorded greeting (constant quality)
- **🗣️ Browser Voices**: Multiple device voices (Google, Siri, etc.)
  - Gujarati voices (best quality)
  - Hindi voices (good fallback)
  - Other Indian language voices
  - Generic voices (last resort)

## 📂 Project Structure

```
newproejct/
├── app/
│   ├── admin/                 # Admin dashboard
│   ├── invite/[slug]/        # Guest invitation pages
│   ├── api/                  # API routes
│   │   ├── admin/            # Admin API endpoints
│   │   └── invitation/       # Invitation API endpoints
│   └── page.tsx              # Home page
├── components/
│   ├── invitation/           # Invitation page components
│   │   ├── Page1Ganesh.tsx
│   │   ├── Page2MangalParivar.tsx
│   │   ├── Page3VigataHostInfo.tsx
│   │   └── Page4ShubhvichaarCover.tsx
│   ├── admin/                # Admin panel components
│   │   ├── GuestForm.tsx
│   │   ├── GuestList.tsx
│   │   └── CopyButton.tsx
│   └── ui/                   # Reusable UI components
├── lib/
│   ├── voiceover.ts         # Voice-over service
│   ├── mongodb.ts           # Database connection
│   └── utils.ts             # Utility functions
├── models/
│   └── Invitation.ts        # MongoDB schema
├── public/
│   ├── gretting.mp3         # Pre-recorded audio
│   └── [images]/            # Wedding card images
└── README.md
```

## 🔐 Security

- Admin password required for dashboard access
- Password persistence using localStorage (development only)
- Authentication headers on API requests
- Environment variables for sensitive data
- MongoDB connection string stored securely

## 🌐 Deployment to Vercel

### Easy Deployment (Recommended)

1. Push code to GitHub
2. Visit [Vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Add environment variables:
   - `MONGODB_URI`
   - `ADMIN_PASSWORD`
5. Click "Deploy"

### Manual Deployment

```bash
npm install -g vercel
vercel  # Follow the prompts
```

## 🎵 Voice Features

### Browser Voice Support

The system intelligently selects the best available voice based on:
1. **Language Priority**: Gujarati > Hindi > Indian Languages > Others
2. **Quality Filtering**: Removes low-quality voices
3. **Gender Detection**: Shows voice gender indicators
4. **Test Playback**: Test any voice before creating invitations

### Pre-recorded Audio

- Upload your custom greeting as `gretting.mp3`
- Supports MP3 format
- High-quality audio recommended
- Works on all devices

## 🐛 Troubleshooting

### Database Connection Issues

```
Error: Failed to connect to MongoDB
```

Check your `MONGODB_URI` in `.env.local` and ensure:
- Credentials are correct
- IP address is whitelisted in MongoDB Atlas
- Network connectivity is available

### Admin Password Not Working

- Clear browser localStorage: `localStorage.clear()`
- Hard refresh the page: `Ctrl+Shift+Delete`
- Verify password in `.env.local` matches

### Voice Not Playing

- Check browser supports Web Speech API (not supported in IE)
- Verify `gretting.mp3` is in `public/` folder
- Check browser console for error messages
- Try a different browser

### Pre-recorded Audio Cuts Off

- Ensure audio file is not corrupted
- Use a shorter greeting (< 2 minutes)
- Check file format is MP3
- Verify file size is reasonable

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ❌ No   |

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` for wedding color scheme:

```typescript
colors: {
  'wedding-maroon': '#800020',
  'wedding-burgundy': '#6B1B1B',
  'wedding-gold': '#FFD700',
  'wedding-cream': '#FFF8DC',
}
```

### Gujarati Content

Edit the component files to customize:
- Guest names
- Family information
- Event dates and times
- Venue details
- Contact information

### Animations

Adjust animation timings in component `transition` props:

```tsx
transition={{ duration: 1, delay: 0.2 }}
```

## 📊 Analytics

Track invitations viewed in MongoDB:
- Guest name
- Unique slug
- View count
- View timestamp
- Phone number (optional)

## 🤝 Contributing

To contribute improvements:

1. Create a feature branch
2. Make your changes
3. Test locally
4. Create a pull request

## 📄 License

This project is private and created specifically for the Keyur & Isha wedding.

## 📞 Support

For issues or questions:
- Check console logs (F12 in browser)
- Review MongoDB connection
- Verify environment variables
- Test in different browser

## 🎉 Acknowledgments

- Framer Motion for smooth animations
- Next.js team for the amazing framework
- MongoDB for reliable database
- Vercel for seamless deployment

---

**Made with ❤️ for Keyur & Isha's Wedding**

Last Updated: February 2026
