# 🚀 Deployment Guide for Agrica Website

This guide covers multiple deployment options for the Agrica agricultural website.

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js 16+ installed
- npm or yarn package manager
- Git repository (for automated deployments)
- Built production files (`npm run build`)

## 🏗️ Building for Production

```bash
# Install dependencies
npm install

# Create production build
npm run build
```

This creates a `build/` folder with optimized static files.

## 🌐 Deployment Options

### 1. Vercel (Recommended)

**Automatic Deployment:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

**Manual Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Benefits:**
- ✅ Automatic deployments on git push
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Perfect for React apps

### 2. Netlify

**Drag & Drop Deployment:**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder

**Git-based Deployment:**
1. Connect your repository to Netlify
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

**Benefits:**
- ✅ Easy drag-and-drop deployment
- ✅ Form handling
- ✅ Free SSL
- ✅ Branch previews

### 3. GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Add homepage to package.json:
"homepage": "https://yourusername.github.io/agrica-website"

# Deploy
npm run deploy
```

**Benefits:**
- ✅ Free hosting for public repositories
- ✅ Integrated with GitHub workflow
- ✅ Good for open source projects

### 4. AWS S3 + CloudFront

**Setup S3 Bucket:**
```bash
# Install AWS CLI
aws configure

# Create S3 bucket
aws s3 mb s3://agrica-website

# Enable static website hosting
aws s3 website s3://agrica-website --index-document index.html
```

**Deploy:**
```bash
# Upload build files
aws s3 sync build/ s3://agrica-website --delete

# Set public read permissions
aws s3api put-bucket-policy --bucket agrica-website --policy file://bucket-policy.json
```

**Benefits:**
- ✅ Highly scalable
- ✅ Enterprise-grade
- ✅ Custom domain support
- ✅ CDN integration

### 5. Traditional Web Hosting

**Via cPanel/FTP:**
1. Run `npm run build`
2. Upload contents of `build/` folder to your web root
3. Ensure your hosting supports single-page applications

**Apache .htaccess (for React Router):**
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

**Nginx Configuration:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production` file:
```env
REACT_APP_API_URL=https://api.agrica.com
REACT_APP_CONTACT_EMAIL=info@agrica.com
REACT_APP_ANALYTICS_ID=GA_TRACKING_ID
```

### Build Optimization

**package.json optimizations:**
```json
{
  "homepage": "https://your-domain.com",
  "scripts": {
    "build": "react-scripts build && npm run build:optimize"
  }
}
```

## 🚀 Deployment Checklist

### Pre-deployment
- [ ] Test locally (`npm start`)
- [ ] Run build successfully (`npm run build`)
- [ ] Check for console errors
- [ ] Test responsive design
- [ ] Verify all images load correctly
- [ ] Test contact form functionality

### SEO & Performance
- [ ] Update meta tags in `public/index.html`
- [ ] Add favicon and app icons
- [ ] Configure social media preview images
- [ ] Test page loading speed
- [ ] Verify mobile responsiveness
- [ ] Check accessibility compliance

### Post-deployment
- [ ] Test all routes work correctly
- [ ] Verify contact form submissions
- [ ] Check SSL certificate
- [ ] Test cross-browser compatibility
- [ ] Set up analytics tracking
- [ ] Monitor performance metrics

## 🔐 Security Considerations

### Headers Configuration
```javascript
// In your hosting provider, add these headers:
{
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Content-Security-Policy": "default-src 'self'"
}
```

### HTTPS Setup
- Ensure SSL/TLS certificate is configured
- Redirect HTTP to HTTPS
- Use HSTS headers for security

## 📊 Monitoring & Analytics

### Google Analytics Setup
1. Create GA4 property
2. Add tracking ID to environment variables
3. Install analytics package:
```bash
npm install react-ga4
```

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking (Sentry, LogRocket)

## 🔄 Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy to Production
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy to Vercel
      uses: vercel/action@v1
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🐛 Troubleshooting

### Common Issues

**404 on Page Refresh:**
- Configure your server to serve `index.html` for all routes
- Add appropriate rewrite rules

**Images Not Loading:**
- Ensure images are in the `public/` folder or imported correctly
- Check image paths in production build

**CSS Not Applied:**
- Verify Bootstrap CSS is imported in `index.tsx`
- Check for CSS conflicts in production

**Contact Form Not Working:**
- Set up backend API or form handling service
- Configure CORS if using external API

## 📞 Support

For deployment issues:
- Check the [React deployment docs](https://create-react-app.dev/docs/deployment/)
- Review hosting provider documentation
- Test builds locally before deploying

---

**Happy Deploying! 🚀**