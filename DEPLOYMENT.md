# Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've updated:

- [ ] Personal information in components
- [ ] Profile photo (`frontend/public/assets/gagan_ph.jpg`)
- [ ] Resume PDF (`frontend/public/assets/Gagan_CV.pdf`)
- [ ] Project data (`frontend/src/data/projects.js`)
- [ ] Social media links
- [ ] GitHub username in GitHubStats component
- [ ] Contact form Formspree endpoint
- [ ] SEO meta tags in `index.html`
- [ ] Sitemap URLs
- [ ] Environment variables

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- ✅ Free tier with custom domain
- ✅ Automatic deployments from GitHub
- ✅ Built-in CDN
- ✅ Zero configuration for Vite
- ✅ Serverless functions support

**Steps:**

1. **Push to GitHub** (see below)

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

3. **Import Project**
   - Click "New Project"
   - Select your `gagan-aj-portfolio` repository
   - Framework: Auto-detected (Vite)
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `dist`

4. **Environment Variables**
   - Add `REACT_APP_BACKEND_URL` if using backend

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

6. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., gaganaj.com)

**Auto-Deploy:**
Every push to `main` branch automatically deploys!

---

### Option 2: Netlify (Easy)

**Why Netlify?**
- ✅ Free tier available
- ✅ Drag-and-drop deployment
- ✅ Form handling built-in
- ✅ Continuous deployment

**Steps:**

1. **Build locally**
```bash
cd frontend
yarn build
```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag `frontend/dist` folder to deploy area

**OR**

**Deploy via CLI:**
```bash
npm install -g netlify-cli
cd frontend
netlify deploy --prod
```

**OR**

**Connect GitHub:**
   - Go to Netlify dashboard
   - "New site from Git"
   - Choose your repo
   - Build command: `yarn build`
   - Publish directory: `frontend/dist`
   - Base directory: `frontend`

---

### Option 3: GitHub Pages (Free)

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Integrated with GitHub
- ✅ Good for portfolios

**Steps:**

1. **Update `vite.config.js`**
```javascript
export default defineConfig({
  base: '/gagan-aj-portfolio/', // Your repo name
  // ... rest
})
```

2. **Add deploy script to `package.json`**
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. **Install gh-pages**
```bash
cd frontend
yarn add -D gh-pages
```

4. **Build and Deploy**
```bash
yarn build
yarn deploy
```

5. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

Your site: `https://gaganaj-45.github.io/gagan-aj-portfolio/`

**OR**

Use GitHub Actions (already configured in `.github/workflows/deploy.yml`):
- Just push to main branch
- Automatic deployment!

---

### Option 4: Render (Good for Full-Stack)

**Why Render?**
- ✅ Free static site hosting
- ✅ Can host backend too
- ✅ Auto-deploy from GitHub

**Steps:**

1. **Go to [render.com](https://render.com)**
2. Sign in with GitHub
3. **New Static Site**
4. Connect repository
5. Settings:
   - Build Command: `cd frontend && yarn install && yarn build`
   - Publish Directory: `frontend/dist`
6. Deploy

---

### Option 5: Railway (Full-Stack)

**Why Railway?**
- ✅ Can host both frontend and backend
- ✅ Free tier available
- ✅ MongoDB support

**Steps:**

1. **Go to [railway.app](https://railway.app)**
2. Sign in with GitHub
3. **New Project from GitHub**
4. Select repository
5. Configure services (frontend + backend)

---

## 📤 Push to GitHub

### First Time Setup

1. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name: `gagan-aj-portfolio`
   - Description: "My Data Analyst Portfolio"
   - Public or Private
   - Don't initialize with README (we have one)

2. **Initialize Git** (if not already)
```bash
cd /app
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

3. **Connect to GitHub**
```bash
git remote add origin https://github.com/GaganAJ-45/gagan-aj-portfolio.git
git branch -M main
git push -u origin main
```

### Update Later

```bash
cd /app
git add .
git commit -m "Update: describe your changes"
git push
```

---

## 🔐 Environment Variables

### For Deployment Platforms

**Vercel/Netlify/Render:**
Add in dashboard:
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

**GitHub Pages:**
No backend URL needed (static only)

---

## 🌐 Custom Domain Setup

### 1. Buy Domain
- Namecheap, GoDaddy, Google Domains
- Recommended: `gaganaj.com` or `gaganaj.dev`

### 2. Add to Deployment Platform

**Vercel:**
- Project Settings → Domains
- Add domain
- Update DNS records as instructed

**Netlify:**
- Site Settings → Domain Management
- Add custom domain
- Update DNS

**GitHub Pages:**
- Add `CNAME` file in `frontend/public/`
- Content: your domain name
- Update DNS to point to GitHub

### DNS Records Example:
```
Type: A
Name: @
Value: [Platform IP]

Type: CNAME
Name: www
Value: your-site.vercel.app
```

---

## 🔍 SEO Checklist After Deployment

- [ ] Submit to Google Search Console
- [ ] Submit sitemap.xml
- [ ] Add to LinkedIn profile
- [ ] Add to GitHub profile README
- [ ] Share on social media
- [ ] Add to portfolio directories

---

## 🐛 Troubleshooting

### Build Errors

**Node version mismatch:**
```bash
nvm use 18  # or install Node 18+
```

**Module not found:**
```bash
cd frontend
rm -rf node_modules
yarn install
```

### Deployment Issues

**404 on refresh (SPA routing):**
- Make sure redirect rules are set (see vercel.json/netlify.toml)

**Environment variables not working:**
- Double-check variable names start with `REACT_APP_`
- Rebuild after adding variables

**Assets not loading:**
- Check `vite.config.js` base path
- Make sure assets are in `public/` folder

---

## 📊 Post-Deployment

### Monitor Performance

1. **Google Analytics** (Optional)
   - Create account at analytics.google.com
   - Add tracking code to `index.html`

2. **Google Search Console**
   - Add property
   - Submit sitemap
   - Monitor indexing

### Update Regularly

- Add new projects monthly
- Update GitHub stats (automatic)
- Write blog posts
- Update certifications

---

## 💡 Pro Tips

1. **Use Vercel** for easiest deployment
2. **Get custom domain** for better SEO
3. **Enable HTTPS** (automatic on most platforms)
4. **Set up automatic deployments** from GitHub
5. **Monitor with Google Search Console**
6. **Update regularly** for better SEO

---

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

---

**Your portfolio is ready for the world! 🚀**
