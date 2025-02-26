# Modern Portfolio Website 🚀

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Deepshah0308/modern-portfolio)

A beautiful, responsive portfolio website built with React and Tailwind CSS. Perfect for creatives, professionals, and anyone looking to showcase their work online.

## 🎨 Template Author

This template was crafted by [Deep Shah](https://shahdeep.ca), founder of [JSByteWise](https://jsbytewise.com).

- GitHub: [@Deepshah0308](https://github.com/Deepshah0308)
- Email: deep@jsbytewise.com
- Portfolio: [shahdeep.ca](https://shahdeep.ca)

## ✨ Features

- 🎨 Modern, Dark Theme Design
- 📱 Fully Responsive
- ⚡ Fast & Optimized
- 🔄 Easy Content Updates
- 🎯 SEO Friendly
- 💫 Smooth Animations
- 📝 Working Contact Forms
- 📄 Downloadable Resume

## 🛠 Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Customizing Your Portfolio

### Easy Content Updates

All portfolio content can be edited in one file: `src/content.ts`

1. Open `src/content.ts`
2. Update the following sections:
   - Basic Information (name, tagline)
   - Hero Section
   - About Section
   - Projects
   - Contact Information
   - Social Media Links

### Customizing Images

1. Profile Image: Replace the URL in `about.profileImage`
2. Project Images: Update the `preview` URLs in the projects section
3. For best results:
   - Use high-quality images
   - Recommended aspect ratio for project images: 16:9
   - Profile image: Square (1:1)

### Customizing the Resume

1. Replace the sample resume:
   - Locate `public/sample-resume.pdf`
   - Replace it with your own PDF resume
   - Keep the filename as `sample-resume.pdf` or update the download link in `src/App.tsx`

### Updating Colors

The portfolio uses a modern dark theme with customizable accent colors:

- Primary: `#5E3AEE` (Purple)
- Accent: `#C56BF0` (Light Purple)
- Background: `#121212` (Dark)
- Text: `#FFFFFF` (White)

To change colors, search for these hex codes in `src/App.tsx` and replace them with your preferred colors.

## 📱 Sections

1. **Hero Section**
   - Main introduction
   - Call-to-action buttons

2. **Projects**
   - Showcase your work
   - Images with hover effects
   - Project tags

3. **About**
   - Personal bio
   - Skills & expertise
   - Profile image

4. **Contact**
   - Contact form
   - Social media links
   - Working form submissions (Hire Me & Contact forms)
   - Downloadable resume

### Setting Up Google Analytics

1. Create a Google Analytics account and get your Measurement ID
2. Open `index.html`
3. Replace `MEASUREMENT_ID` with your actual Google Analytics ID
4. That's it! Your site will now track visitor data

### Setting Up the Contact Form

The portfolio uses [FormSubmit](https://formsubmit.co/) for handling form submissions. Both the contact form and hire me form will work automatically:

1. In `src/App.tsx`, locate the `<form>` element
2. Change the form's action URL to include your email:
   ```html
   <form action="https://formsubmit.co/your@email.com" method="POST">
   ```
3. Replace `your@email.com` with your actual email address
4. That's it! FormSubmit will:
   - Send you an activation email
   - Start delivering form submissions to your inbox
   - Protect against spam

### Resume Download

The portfolio includes a downloadable resume feature:

1. The sample resume is located at `public/sample-resume.pdf`
2. To use your own resume:
   - Replace `public/sample-resume.pdf` with your PDF resume
   - Keep the filename as `sample-resume.pdf` or update the download link in `src/App.tsx`
3. The resume button in the hero section will automatically download the PDF file

No sign-up or backend needed! Just change the email address and your form will work.

## 🚀 Deployment

Build your portfolio for production:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages

## 📄 License

This project is licensed under the MIT License with Attribution Requirements.

### Usage Terms

1. **Attribution Requirement**
   - You MUST maintain the footer credit "Template by Deep Shah" with the link to shahdeep.ca
   - The attribution MUST remain visible and clickable in the footer of every page
   - The attribution link MUST point to https://shahdeep.ca
   - The attribution text and link CANNOT be modified or removed under any circumstances

2. **Permitted Uses**
   - Commercial use
   - Modification
   - Distribution
   - Private use
   - Using the template for personal or client projects
   - Modifying the design and content

3. **Restrictions**
   - The template cannot be resold as is
   - The attribution cannot be removed or modified
   - The template cannot be redistributed as a template without explicit permission
   - You cannot claim the template design as your own
   - You cannot resell or redistribute the template as a template/theme
   - You cannot create derivative templates/themes based on this design

### MIT License

Copyright (c) 2024 Deep Shah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice, this permission notice, and the attribution
requirements shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Important Note

By using this template, you agree to:
1. Keep the attribution intact and visible
2. Not remove or modify the attribution in any way
3. Maintain the link to the author's website (shahdeep.ca)

## 🤝 Support

If you find any issues or have questions, please open an issue in the repository.