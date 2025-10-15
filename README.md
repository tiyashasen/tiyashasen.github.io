# Tiyasha Sen - Portfolio Website

A modern, responsive portfolio website showcasing my work as an AI Research Professional.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**:
  - Hero section with social links
  - About me with highlights
  - Professional experience timeline
  - Skills and technologies
  - Project showcase with filtering
  - Publications and research
  - Contact section
- **Smooth Scrolling**: Enhanced navigation with active link highlighting
- **Project Filtering**: Filter projects by category (NLP, Computer Vision, ML, Web Dev)
- **Animations**: Scroll-triggered animations and hover effects

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactions and animations
- **Font Awesome**: Icons
- **Unsplash**: High-quality images

## Structure

```
tiyashasen.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript for interactivity
├── TiyashaSen_Resume.pdf  # Resume PDF
├── assets/            # Images and other assets
│   ├── profile.jpg
│   ├── rag-chatbot.jpg
│   ├── sentiment-analysis.jpg
│   ├── object-detection.jpg
│   ├── recommendation.jpg
│   ├── text-summarization.jpg
│   └── image-segmentation.jpg
└── README.md          # This file
```

## Customization

### Update Profile Information

1. **Personal Details**: Edit the HTML content in `index.html`
2. **Resume**: Replace `TiyashaSen_Resume.pdf` with your updated resume
3. **Profile Image**: Replace `assets/profile.jpg` with your photo
4. **Social Links**: Update the links in the hero and contact sections

### Update Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Add New Projects

Add a new project card in the projects section:

```html
<div class="project-card" data-category="nlp">
    <div class="project-image">
        <img src="assets/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fab fa-github"></i> GitHub</a>
        </div>
    </div>
</div>
```

## Local Development

Simply open `index.html` in your web browser. No build process required!

For a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (npx)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Deployment

### GitHub Pages

1. Create a repository named `tiyashasen.github.io`
2. Push all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://tiyashasen.github.io`

### Other Platforms

This portfolio can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

**Tiyasha Sen**
- Email: sen.tiy@northeastern.edu
- LinkedIn: [tiyasha-sen](https://www.linkedin.com/in/tiyasha-sen)
- GitHub: [tiyashasen](https://github.com/tiyashasen)

---

Built with ❤️ using HTML, CSS, and JavaScript