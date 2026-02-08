# 🚀 Deployment Guide - Keyur & Isha Wedding Invitation

## Prerequisites Checklist

- [ ] MongoDB Atlas account created
- [ ] MongoDB cluster set up
- [ ] Database user created
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string obtained
- [ ] Vercel account created
- [ ] GitHub repository (optional, for GitHub deployment)

---

## 📊 MongoDB Atlas Setup (Detailed)

### Step 1: Create Account & Cluster

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free" or "Sign Up"
3. Choose "Starter Cluster" (M0 - FREE)
4. Select a cloud provider and region (choose nearest to your target audience)
5. Cluster Name: `wedding-invitations` (or any name)
6. Click "Create Cluster" (takes 3-5 minutes)

### Step 2: Create Database User

1. Click "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Authentication Method: Password
4. Username: `weddingadmin` (or your choice)
5. Password: Generate a secure password (SAVE IT!)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### Step 3: Configure Network Access

1. Click "Network Access" (left sidebar)
2. Click "Add IP Address"
3. Option 1: Click "Allow Access from Anywhere" (for Vercel)
   - IP Address: `0.0.0.0/0`
   - Comment: "Vercel deployment"
4. Click "Confirm"

**Security Note**: For production, you can add specific Vercel IPs later for better security.

### Step 4: Get Connection String

1. Click "Database" (left sidebar)
2. Click "Connect" button on your cluster
3. Choose "Connect your application"
4. Driver: Node.js
5. Version: 5.5 or later
6. Copy the connection string:
   ```
   mongodb+srv://weddingadmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
7. Replace `<password>` with your actual database password
8. Add database name:
   ```
   mongodb+srv://weddingadmin:yourpassword@cluster0.xxxxx.mongodb.net/wedding-invitations?retryWrites=true&w=majority
   ```

---

## 🌐 Vercel Deployment (Detailed)

### Method 1: Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Choose your preferred login method (GitHub, GitLab, Email, etc.)

#### Step 3: Deploy

```bash
# From your project directory
cd "c:\Users\omvat\OneDrive\Desktop\Keyuar bhai\newproejct"

# Deploy to Vercel
vercel
```

Follow the prompts:
- Set up and deploy: `Y`
- Which scope: Choose your account
- Link to existing project: `N`
- Project name: `keyur-isha-wedding` (or your choice)
- Directory: `.` (current directory)
- Override settings: `N`

#### Step 4: Add Environment Variables

```bash
# Add MongoDB URI
vercel env add MONGODB_URI

# When prompted, enter your MongoDB connection string
# Choose: Production, Preview, Development (select all)

# Add admin password
vercel env add ADMIN_PASSWORD

# When prompted, enter a secure password
# Choose: Production, Preview, Development (select all)

# Add base URL (do this AFTER first deployment)
vercel env add NEXT_PUBLIC_BASE_URL

# Enter your Vercel URL: https://your-project.vercel.app
# Choose: Production, Preview, Development (select all)
```

#### Step 5: Deploy to Production

```bash
vercel --prod
```

Your site will be live at: `https://your-project.vercel.app`

---

### Method 2: Vercel Dashboard (Via GitHub)

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Wedding invitation website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/wedding-invitation.git

# Push
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

#### Step 3: Add Environment Variables

Click "Environment Variables" and add:

| Name | Value | Environment |
|------|-------|-------------|
| `MONGODB_URI` | Your MongoDB connection string | Production, Preview, Development |
| `ADMIN_PASSWORD` | Your chosen admin password | Production, Preview, Development |
| `NEXT_PUBLIC_BASE_URL` | (Add after deployment) | Production, Preview, Development |

#### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Copy your deployment URL: `https://your-project.vercel.app`
4. Go back to Environment Variables
5. Add `NEXT_PUBLIC_BASE_URL` with your deployment URL
6. Redeploy (Vercel will auto-redeploy on env change)

---

## ✅ Post-Deployment Checklist

### 1. Test Admin Panel

1. Go to `https://your-project.vercel.app/admin`
2. Enter your `ADMIN_PASSWORD`
3. Verify login works

### 2. Create Test Invitation

1. Add a test guest: "Test Guest"
2. Copy the generated link
3. Open in new incognito/private window
4. Verify all 8 pages load correctly
5. Test voice-over (click audio button if autoplay blocked)

### 3. Verify Database

1. Go to MongoDB Atlas
2. Click "Browse Collections"
3. Database: `wedding-invitations`
4. Collection: `invitations`
5. Verify test guest appears

### 4. Check Mobile Responsiveness

1. Open invitation on mobile device
2. Test all pages scroll smoothly
3. Verify buttons are touch-friendly
4. Check voice-over works on mobile

---

## 🎯 Production Checklist

Before sharing with real guests:

- [ ] Update base URL to production URL
- [ ] Test on multiple devices (iPhone, Android, Desktop)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Verify MongoDB connection is stable
- [ ] Test admin panel access
- [ ] Create 2-3 real guest invitations
- [ ] Share test links with family members
- [ ] Ensure voice-over works in all browsers
- [ ] Check Google Maps embed displays correctly
- [ ] Verify all dates and details are correct
- [ ] Double-check family names and contacts
- [ ] Test delete guest functionality
- [ ] Verify "viewed" tracking works

---

## 🔒 Security Best Practices

1. **Strong Admin Password**
   - Use 16+ characters
   - Mix letters, numbers, symbols
   - Don't share publicly

2. **MongoDB Security**
   - Use strong database password
   - Consider IP whitelisting (after testing)
   - Enable MongoDB Atlas alerts

3. **Environment Variables**
   - Never commit `.env.local` to Git
   - Keep production secrets separate
   - Use Vercel's environment variables dashboard

---

## 📊 Custom Domain (Optional)

### Add Your Own Domain

1. Buy domain from Namecheap, GoDaddy, etc.
2. In Vercel dashboard → Settings → Domains
3. Add your domain: `keyur-isha-wedding.com`
4. Update DNS records (Vercel provides instructions)
5. Wait for DNS propagation (up to 24 hours)
6. Update `NEXT_PUBLIC_BASE_URL` with new domain
7. Redeploy

---

## 🐛 Common Issues & Solutions

### Issue: "Unable to connect to database"

**Solution**:
- Check MongoDB Atlas is not paused (free tier auto-pauses)
- Verify IP `0.0.0.0/0` is in Network Access
- Check connection string format
- Ensure password doesn't contain special characters (URL encode if needed)

### Issue: "Admin login not working"

**Solution**:
- Verify `ADMIN_PASSWORD` is set in Vercel env vars
- Clear browser cache
- Try incognito mode
- Check Vercel function logs

### Issue: "Voice-over not playing"

**Solution**:
- Click the audio button manually (browser autoplay policy)
- Ensure HTTPS is enabled (Vercel provides this)
- Try different browser (Chrome/Safari work best)
- Check browser console for errors

### Issue: "Slow page loading"

**Solution**:
- Optimize images (use WebP format)
- Check MongoDB query performance
- Enable Vercel Analytics to identify bottlenecks
- Consider upgrading Vercel plan for better performance

---

## 📱 Sharing Invitations

### Best Practices

1. **WhatsApp**:
   ```
   नमस्ते [Name]! 🙏
   
   You're invited to Keyur & Isha's wedding! 💍
   
   Open your personal invitation:
   [paste link]
   
   Looking forward to seeing you! ✨
   ```

2. **SMS**:
   ```
   Hi [Name]! You're invited to Keyur & Isha's wedding.
   Your invitation: [short link]
   ```

3. **Email**:
   - Use HTML email template
   - Include QR code of invitation link
   - Add calendar event attachment

---

## 📈 Analytics (Optional)

Add Vercel Analytics to track views:

1. Vercel Dashboard → Analytics → Enable
2. Or add Google Analytics 4:
   ```typescript
   // app/layout.tsx
   <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
   ```

---

## 🎊 Final Steps

1. **Backup Guest List**
   - Export from MongoDB Atlas regularly
   - Keep spreadsheet of all guests

2. **Monitor Invitations**
   - Check admin panel daily
   - Track "viewed" status
   - Follow up with guests who haven't viewed

3. **Update Information**
   - Keep contact numbers updated
   - Update venue details if changed
   - Add new events if planned

---

## 📞 Support & Maintenance

### Regular Checks

- Weekly: Check MongoDB connection
- Weekly: Verify Vercel deployment is active
- Daily: Monitor guest views (closer to wedding date)

### Before Wedding Day

- Ensure website is accessible
- Print backup copies of guest list
- Take screenshots of all pages

---

**Deployment Complete! 🎉**

Your wedding invitation website is now live and ready to share!

**Live URL**: `https://your-project.vercel.app`
**Admin Panel**: `https://your-project.vercel.app/admin`

Share the love! 💑✨

---

## 🆘 Emergency Contacts

- **Vercel Status**: https://www.vercel-status.com
- **MongoDB Status**: https://status.mongodb.com
- **Vercel Support**: support@vercel.com
- **MongoDB Support**: https://www.mongodb.com/support

---

**Best wishes for Keyur & Isha's special day!** 🎊💍
