# Vishnu Kumar Singh - Portfolio Website

A modern, professional portfolio website built with React to showcase Full Stack Development expertise and experience.

## 🚀 Features

### Design & UX
- **Modern Dark Theme**: Professional blue and cyan gradient design
- **Responsive Layout**: Fully responsive across mobile, tablet, and desktop devices
- **Smooth Animations**: Fade-in effects, slide-up transitions, and floating animations
- **Interactive Components**: Hover effects, expandable skill categories, and smooth scrolling navigation
- **Professional Typography**: Clean, readable font hierarchy with gradient text accents

### Sections

1. **Navigation Bar**
   - Fixed header with smooth scroll navigation
   - Mobile-responsive hamburger menu
   - Active section highlighting

2. **Hero Section**
   - Eye-catching gradient background
   - Call-to-action buttons (Download Resume, Get in Touch)
   - Contact information badges with icons
   - Animated scroll indicator

3. **About Section**
   - Professional profile overview
   - Key highlights with check marks
   - Two-column layout with profile area

4. **Work Experience**
   - Timeline-style experience cards
   - Achievement bullet points
   - Career statistics (Years, Projects, Technologies)

5. **Skills**
   - Organized by categories
   - Expandable skill cards
   - Core competencies section

6. **Education**
   - Academic background with CGPA
   - Certifications display
   - Continuous learning section

7. **Contact**
   - Contact information (Email, Phone, LinkedIn)
   - Functional contact form
   - Direct mailto integration

8. **Footer**
   - Quick links and social media connections

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Build Tool**: Create React App
- **CSS Processing**: PostCSS with Autoprefixer

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
cd portfolio-website
npm install
```

### Running Locally
```bash
npm start
```

The development server will start at `http://localhost:3000`

### Building for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Experience.jsx      # Work experience
│   ├── Skills.jsx          # Skills
│   ├── Education.jsx       # Education
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer
├── App.js                  # Main component
├── data.js                 # Resume data
└── index.css               # Global styles
```

## 🎨 Customization

### Update Resume Data
Edit `src/data.js` to update personal information, experience, education, and skills.

### Modify Styles
- **Colors**: Update `tailwind.config.js`
- **Animations**: Customize in `App.css`
- **Component Styles**: Edit component JSX files

## 📱 Responsive Design

Fully responsive with mobile, tablet, and desktop support.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Build the project and upload the `build/` folder.

## 📄 Resume

Place your resume PDF at: `public/Vishnu_Kumar_Singh_Resume.pdf`

## 📝 Notes

- Keep all resume data in `src/data.js`
- Each section is modular and easy to customize
- Animations are GPU-accelerated for smooth performance
- All components are responsive out of the box

---

Built with ❤️ as a modern portfolio website.
