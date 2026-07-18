# Gagan A J - Data Analyst & Software Portfolio

## 📌 Purpose

This repository contains the source code for my personal portfolio website — built to showcase my projects, skills, and experience as I apply for roles in data analytics, software, and cloud/application support. It's a living project I continue to update as I learn and build.

## 🔗 Live Demo

- 🌐 **GitHub Pages:** https://gaganaj-45.github.io/gaganaj-portfolio-v2/
- ☁️ **AWS (S3 + CloudFront):** https://d20cosxjc33soy.cloudfront.net/

Both links point to the same portfolio, deployed on two different platforms.

## 🚀 Features

- ✨ Modern, glassmorphism design with animated backgrounds
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth scroll animations and transitions
- 📊 Real-time GitHub statistics integration
- 💼 Project showcase with filtering
- 📧 Contact form with Formspree integration
- 🌐 SEO optimized with meta tags and structured data
- ⚡ Fast loading with Vite build system

## 🛠️ Tech Stack

- **React** 18.3.1 - UI Framework
- **Vite** 5.0.8 - Build tool
- **Tailwind CSS** 3.4.0 - Styling
- **Framer Motion** 11.0.0 - Animations
- **React Icons** 5.0.0 - Icon library

## 📁 What's in This Repository

```
portfolio/
├── frontend/                 # React frontend application
│   ├── public/               # Static assets
│   │   ├── assets/           # Images, resume, certificates
│   │   ├── robots.txt        # SEO robots file
│   │   └── sitemap.xml       # SEO sitemap
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── About/
│   │   │   ├── Hero/
│   │   │   ├── Skills/
│   │   │   ├── Projects/
│   │   │   ├── Contact/
│   │   │   └── ...
│   │   ├── data/              # Static data (projects, etc.)
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── package.json           # Dependencies
│   ├── vite.config.js         # Vite configuration
│   └── tailwind.config.js     # Tailwind configuration
└── README.md                  # This file
```

## 📱 Components

- **Hero** - Introduction with typewriter effect
- **About** - Personal information with inline badges
- **Stats** - Animated statistics banner
- **Skills** - Tech stack with categorized cards
- **AI Tools** - AI automation tools showcase
- **GitHub Stats** - Real-time GitHub statistics
- **Projects** - Filterable project gallery
- **Timeline** - Education timeline
- **Certifications** - Certificates showcase
- **Blog** - Blog posts (placeholder)
- **Contact** - Contact form with Formspree

## 🎨 Design

- **Colors:** Custom brand palette (blue/teal gradient), configured in `frontend/tailwind.config.js`
- **Fonts:** Syne (headings), Inter (body)
- **Animations:** Smooth scroll transitions, fade-in with scale on scroll (Framer Motion), animated gradient backgrounds, hover effects on cards

## 📧 Contact Form

The contact form is wired up with **Formspree**, configured in `frontend/src/components/Contact/Contact.jsx`.

## 🌐 Deployment

This project is deployed on two platforms:
- **GitHub Pages** — configuration lives in `frontend/vite.config.js` and the repository's GitHub Actions/Pages settings
- **AWS S3 + CloudFront** — a static hosting setup using CloudFront with Origin Access Control (OAC) in front of a private S3 bucket

## 📊 SEO Features

- ✅ Meta tags for all pages
- ✅ Open Graph tags (Facebook/LinkedIn)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast loading time

## 📄 License

MIT License

## 👤 Author

**Gagan A J**
- LinkedIn: [gagan-a-j](https://www.linkedin.com/in/gagan-a-j)
- GitHub: [@GaganAJ-45](https://github.com/GaganAJ-45)
- Email: gaganaj45@gmail.com

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)
- GitHub Stats by [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

---

⭐ If you like this project, please give it a star on GitHub!
