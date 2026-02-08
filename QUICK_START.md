# 🚀 QUICK START GUIDE

Follow these steps to get the wedding invitation website running locally in under 10 minutes!

## Step 1: Install Dependencies (2 minutes)

Open PowerShell in the project directory and run:

```powershell
npm install
```

Wait for all packages to download and install.

---

## Step 2: Setup MongoDB (5 minutes)

### Option A: MongoDB Atlas (Recommended - Free)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a FREE cluster (M0)
4. Create database user:
   - Username: `weddingadmin`
   - Password: Choose a strong password (save it!)
5. Network Access: Add IP `0.0.0.0/0` (Allow from anywhere)
6. Click "Connect" → "Connect your application"
7. Copy the connection string

### Sample Connection String:
```
mongodb+srv://weddingadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/wedding-invitations?retryWrites=true&w=majority
```

---

## Step 3: Configure Environment Variables (1 minute)

The `.env.local` file already exists. Edit it:

```env
MONGODB_URI=mongodb+srv://weddingadmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/wedding-invitations

ADMIN_PASSWORD=keyur2025

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Important:** Replace with your actual MongoDB connection string!

---

## Step 4: Run the Development Server (1 minute)

```powershell
npm run dev
```

Wait for "Ready" message.

---

## Step 5: Test the Website (1 minute)

1. Open browser: http://localhost:3000
2. You'll be redirected to `/admin`
3. Enter password: `keyur2025` (or what you set)
4. Click "Login"

**Success!** 🎉 You should see the admin panel.

---

## Step 6: Create Your First Invitation

In the admin panel:

1. Enter guest name: "Test Guest"
2. (Optional) Phone number: "+91 98765 43210"
3. (Optional) Custom message in Gujarati
4. Click "Create Invitation"
5. Click "Copy Link" button
6. Open the link in a new tab

**You should see:**
- All 8 beautifully designed pages
- Voice-over greeting (click audio button if needed)
- Smooth animations

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] MongoDB Atlas account created
- [ ] Cluster & database user created
- [ ] Network access configured
- [ ] Connection string copied
- [ ] `.env.local` file updated
- [ ] Dev server running (`npm run dev`)
- [ ] Admin panel accessed
- [ ] Test invitation created
- [ ] Invitation link opened and working

---

## 🐛 Troubleshooting

### "MongooseError: Unable to connect"
- Check your MongoDB connection string
- Verify password is correct
- Ensure `0.0.0.0/0` is in Network Access
- Wait 2-3 minutes for cluster to wake up (free tier sleeps)

### "Admin login not working"
- Check `.env.local` has `ADMIN_PASSWORD=keyur2025`
- Clear browser cache
- Try incognito/private window

### "Port 3000 already in use"
```powershell
# Find and kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use different port
$env:PORT=3001; npm run dev
```

### "Voice-over not playing"
- Click the audio button in top-right corner
- Try in Chrome browser (best support)
- Voice-over works better in production (HTTPS)

---

## 📱 Test on Mobile

1. Find your computer's IP address:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. On your phone's browser, go to:
   ```
   http://192.168.1.100:3000
   ```
   (Replace with your actual IP)

3. Test the invitation on mobile device

---

## 🎯 What to Test

- [ ] Admin login works
- [ ] Can create guest invitation
- [ ] Copy link button works
- [ ] Guest name displays correctly
- [ ] All 8 pages load
- [ ] Animations are smooth
- [ ] Voice-over plays
- [ ] Text is readable on mobile
- [ ] Google Maps shows correctly
- [ ] Can delete guest
- [ ] Search guests works

---

## 🚀 Next Steps

Once everything works locally:

1. **Read DEPLOYMENT.md** for production deployment
2. **Customize content** (dates, names, venue details)
3. **Deploy to Vercel** (free hosting)
4. **Share with real guests**

---

## 💡 Quick Tips

### Add Multiple Guests Quickly

Use the admin panel to add guests one by one. For each guest:
1. Enter name
2. Click Create
3. Copy & save the link (in Excel/Notes)
4. Share via WhatsApp/SMS

### Organize Guest Links

Create a spreadsheet:
| Guest Name | Phone | Link | Sent | Viewed |
|------------|-------|------|------|--------|
| John Doe | +91... | https://... | ✓ | ✓ |

### Test Different Scenarios

- [ ] Guest with phone number
- [ ] Guest without phone number
- [ ] Guest with custom message
- [ ] Long guest names
- [ ] Gujarati names

---

## 🎊 You're Ready!

Your wedding invitation website is now running locally!

**Current Status:**
- ✅ Development environment working
- ✅ Database connected
- ✅ Admin panel accessible
- ✅ Invitations can be created
- ⏭️ Ready for customization and deployment

---

## 📞 Need Help?

1. Check **README.md** for general information
2. Check **DEPLOYMENT.md** for deployment steps
3. Check **PROJECT_SUMMARY.md** for technical details

---

**Happy Wedding Planning!** 💑✨

**Total Setup Time:** ~10 minutes
**Difficulty:** Easy
**Cost:** $0 (Free tier for everything)

---

## 🎯 Common Commands Reference

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for errors
npm run lint

# Update all packages
npm update
```

---

**Now go ahead and create beautiful wedding invitations!** 🎉
