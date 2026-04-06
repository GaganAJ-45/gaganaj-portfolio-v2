# Gagan A J - Data Analyst Portfolio


### Frontend
- **React** 18.3.1 - UI Framework
- **Vite** 5.0.8 - Build tool
- **Tailwind CSS** 3.4.0 - Styling
- **Framer Motion** 11.0.0 - Animations
- **React Icons** 5.0.0 - Icon library

### Backend
- **FastAPI** - Python web framework

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   │   ├── assets/          # Images, resume, certificates
│   │   ├── robots.txt       # SEO robots file
│   │   └── sitemap.xml      # SEO sitemap
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── About/
│   │   │   ├── Hero/
│   │   │   ├── Skills/
│   │   │   ├── Projects/
│   │   │   ├── Contact/
│   │   │   └── ...
│   │   ├── data/            # Static data (projects, etc.)
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── .env                 # Environment variables
│   ├── package.json         # Dependencies
│   ├── vite.config.js       # Vite configuration
│   └── tailwind.config.js   # Tailwind configuration
├── backend/                 # FastAPI backend (optional)
│   ├── server.py            # Main server file
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # Backend environment variables
└── README.md                # This file

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/GaganAJ-45/gagan-aj-portfolio.git
cd gagan-aj-portfolio
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
# or
yarn install
```

3. **Set up Environment Variables**

Create `frontend/.env`:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

4. **Run Development Server**
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`

### Backend Setup (Optional)

```bash
cd backend
pip install -r requirements.txt
python server.py
```

## 🌐 Deployment

### Deploy to Vercel (Recommended for Frontend)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
cd frontend
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

**Build Settings:**
- Framework Preset: `Vite`
- Build Command: `yarn build`
- Output Directory: `dist`
- Root Directory: `frontend`

### Deploy to Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Deploy**
```bash
cd frontend
netlify deploy --prod
```

Or drag and drop the `frontend/dist` folder to Netlify dashboard.

**Build Settings:**
- Build command: `yarn build`
- Publish directory: `frontend/dist`
- Base directory: `frontend`

### Deploy to GitHub Pages

1. **Update `vite.config.js`** with your repo name:
```javascript
export default defineConfig({
  base: '/gagan-aj-portfolio/',  // Your repo name
  // ... rest of config
})
```

2. **Build and deploy**
```bash
cd frontend
npm run build
npm run deploy
```

### Deploy Backend (Optional)

**Recommended platforms:**
- **Railway** - Easy Python deployment
- **Render** - Free tier available
- **Heroku** - Simple deployment
- **DigitalOcean App Platform**

## 🔧 Configuration

### Update Personal Information

1. **Profile Photo**: Replace `frontend/public/assets/gagan_ph.jpg`
2. **Resume**: Replace `frontend/public/assets/Gagan_CV.pdf`
3. **Projects**: Edit `frontend/src/data/projects.js`
4. **Social Links**: Update in `frontend/src/components/Navbar/Navbar.jsx`
5. **GitHub Username**: Update in `frontend/src/components/GitHubStats/GitHubStats.jsx`

### SEO Updates

1. **Meta Tags**: Edit `frontend/index.html`
2. **Sitemap**: Update URLs in `frontend/public/sitemap.xml`
3. **Robots.txt**: Update domain in `frontend/public/robots.txt`

## 📧 Contact Form Setup

The contact form uses **Formspree**. To set it up:

1. Go to [Formspree.io](https://formspree.io)
2. Create an account and get your form endpoint
3. Update the form action in `frontend/src/components/Contact/Contact.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  // ...
});
```

## 🎨 Customization

### Colors

Edit `frontend/tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'brand-blue': '#2563eb',
      'brand-teal': '#0d9488',
      accent: 'linear-gradient(135deg, #2563eb, #0d9488)',
    },
  },
}
```

### Fonts

Current fonts: Syne (headings) and Inter (body)
- Change in `frontend/index.html` Google Fonts link
- Update in `frontend/tailwind.config.js`

## 📱 Features Breakdown

### Components
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

### Animations
- Smooth scroll between sections
- Fade-in with scale on scroll (Framer Motion)
- Animated gradient backgrounds
- Hover effects on cards

## 🔒 Environment Variables

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=your_backend_url_here
```

### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
```

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

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork for your own use
- Report bugs
- Suggest improvements

## 📄 License

MIT License - feel free to use this project for your own portfolio!

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
