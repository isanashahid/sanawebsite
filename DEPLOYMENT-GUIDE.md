# Deployment Guide

## Quick Start

Your neo-brutalism portfolio is ready to deploy! Follow these steps:

## 1️⃣ Pre-Deployment Checklist

Before deploying, make sure to:

### Add Required Images
- [ ] Create and add `public/og-image.jpg` (1200x630px) for social media previews
- [ ] Create and add `public/icon-192.png` (192x192px) for PWA
- [ ] Create and add `public/icon-512.png` (512x512px) for PWA

See `public/OG-IMAGE-README.md` for detailed instructions.

### Update Domain References
If you have a custom domain, update these files:
- [ ] `app/layout.tsx` - Update `metadataBase` URL
- [ ] `app/sitemap.ts` - Update `baseUrl`
- [ ] `public/robots.txt` - Update sitemap URL

## 2️⃣ Deployment Options

### Option A: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Neo-brutalism portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✨

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add `sanashahid.me`
   - Update your domain's DNS settings as instructed

### Option B: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Or use Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

### Option C: Self-Hosting (VPS/Cloud)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx as reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name sanashahid.me;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 3️⃣ Post-Deployment

### Verify SEO Setup
1. **Test with Google Rich Results**
   - Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your URL
   - Verify structured data is detected

2. **Check Social Media Previews**
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

3. **Performance Testing**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - Aim for 90+ performance score

### Submit to Search Engines
1. **Google Search Console**
   - Add your property
   - Verify ownership
   - Submit sitemap: `https://sanashahid.me/sitemap.xml`

2. **Bing Webmaster Tools**
   - Add your site
   - Submit sitemap

## 4️⃣ Environment Variables (If Needed)

If you add analytics or other services later:

```env
# .env.local
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_SITE_URL=https://sanashahid.me
```

Add these in your deployment platform's environment variables section.

## 5️⃣ Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- Instant rollbacks if needed

## 6️⃣ Monitoring & Analytics

Consider adding:
- **Google Analytics** - Traffic monitoring
- **Vercel Analytics** - Performance monitoring
- **Hotjar** - User behavior tracking
- **Sentry** - Error tracking

## 🚀 You're Done!

Your portfolio is now live and optimized for:
✅ Search engines (Google, Bing)
✅ Social media sharing
✅ Mobile devices
✅ Performance
✅ Accessibility

## 📧 Need Help?

If you encounter any issues:
1. Check the build logs
2. Verify all environment variables
3. Test locally with `npm run build && npm start`
4. Review Next.js deployment docs: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**Built with Next.js 15 • Deployed with ❤️**

