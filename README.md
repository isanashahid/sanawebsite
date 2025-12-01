# Sana Shahid - Neo-Brutalism Portfolio

A bold, unapologetic neo-brutalism themed portfolio website showcasing AI-driven product growth and marketing automation expertise.

## 🎨 Design Aesthetic

- **Neo-Brutalism**: Raw, bold design with thick borders and harsh contrasts
- **Dark Theme**: Deep blacks with neon accents (electric blue, hot pink, lime green, neon yellow)
- **Clashing Typography**: Multiple typefaces (Space Grotesk, Inter, JetBrains Mono)
- **Asymmetric Layouts**: Deliberately misaligned elements with exposed grid systems
- **Harsh Interactions**: Color inversions, glitch effects, and sudden movements

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk, Inter, JetBrains Mono)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 SEO Features

- Comprehensive metadata configuration
- Structured data (JSON-LD) for Person and ProfilePage schemas
- Auto-generated sitemap
- robots.txt for search engine crawling
- Open Graph and Twitter Card support
- Optimized fonts and images
- PWA manifest

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with asymmetric layout
│   │   ├── About.tsx         # Terminal-style about section
│   │   ├── CaseStudies.tsx   # Project showcases with metrics
│   │   ├── Skills.tsx        # Exposed grid skills display
│   │   └── Contact.tsx       # Direct contact links
│   ├── layout.tsx            # Root layout with SEO metadata
│   ├── page.tsx              # Main homepage
│   ├── globals.css           # Global styles & animations
│   ├── loading.tsx           # Brutalist loading state
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── manifest.ts           # PWA manifest
├── public/
│   └── robots.txt            # Search engine directives
└── package.json
```

## 🎯 Key Features

### Navigation Header
- Fixed navigation with smooth scroll
- Prominent "GET IN TOUCH" CTA
- Mobile-responsive hamburger menu
- Links to all major sections

### Hero Section
- Strategic B2B SaaS positioning
- Value propositions with proof points
- €6M+ ARR growth metrics
- Animated entrance with glitch effects

### About Section (Expandable)
- Core identity & "By The Numbers" metrics
- **12 Core Competencies** (expandable)
- **5-Phase GTM Framework** (expandable)
- Terminal-style design elements

### Case Studies (Deep-Dive)
- 3 detailed project breakdowns
- Challenge → Strategy → Results format
- Expandable for full details
- TrustYou: €470K ARR, 30% conversion increase
- TCL SunPower: 40% MQL increase, 3x organic traffic
- LexisNexis IPlytics: €6M ARR growth, 15% shorter sales cycles

### Full Experience Section
- Complete career timeline (11 roles)
- Expandable role details
- Main roles + Side projects toggle
- Toptal, LexisNexis, ACCEO, Zigron + more

### Skills Display
- 30+ skills across 5 categories
- Exposed grid layout with terminal style
- Stats box: 8+ years, €6M+ ARR, 50+ campaigns
- Category-based organization

### Contact Section
- Direct email and LinkedIn links
- Terminal-style availability status
- Harsh hover effects with color inversions
- Location information

## 🎨 Color Palette

```css
--background: #0a0a0a (Deep Black)
--foreground: #f5f5f5 (Off-White)
--electric-blue: #00d4ff
--hot-pink: #ff006e
--lime-green: #adff00
--neon-yellow: #ffff00
```

## 📝 Customization

### Update Content
Edit the component files in `app/components/` to update:
- Hero section messaging
- About section content
- Case studies and metrics
- Skills and categories
- Contact information

### Modify Colors
Update color variables in `app/globals.css`:
```css
:root {
  --electric-blue: #your-color;
  --hot-pink: #your-color;
  /* ... */
}
```

### Change Fonts
Update font imports in `app/layout.tsx`:
```typescript
import { Your_Font } from "next/font/google";
```

## 🌍 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📊 Performance

- **Server Components**: Fast initial page load
- **Optimized Fonts**: Preloaded with next/font
- **Lazy Loading**: Images optimized with next/image
- **Code Splitting**: Automatic route-based splitting
- **Animations**: Hardware-accelerated with Framer Motion

## 🔒 SEO Best Practices

✅ Comprehensive meta tags
✅ Structured data (Schema.org)
✅ Semantic HTML
✅ Sitemap generation
✅ robots.txt configuration
✅ Open Graph support
✅ Twitter Card support
✅ Canonical URLs
✅ Mobile-responsive
✅ Fast page speed

## 📄 License

This project is for personal portfolio use.

## 📧 Contact

**Sana Shahid**
- Email: isanashahid@gmail.com
- LinkedIn: [linkedin.com/in/isanashahid](https://linkedin.com/in/isanashahid)
- Location: Berlin, Germany

---

Built with ❤️ using Next.js, TypeScript & Brutalist Aesthetics
