# neXa Website — Project Rules & Guidelines

## PROJECT OVERVIEW

Repository: https://github.com/aungbobokyaw124/nexa-websites
Live URL: https://aungbobokyaw.com
Domain: aungbobokyaw.com
Deployment: Vercel (connected to GitHub auto-deploy)
Brand: neXa
Tagline: Build Faster. Create Smarter.
Positioning: AI-powered digital platform for web development, AI solutions, automation, cloud solutions, and digital services.

---

## BRAND IDENTITY

Brand Name: neXa
Personality: Premium, Futuristic, Minimal, Intelligent, Practical, Professional
Target Users: Businesses, Creators, Developers, Online Service Providers

---

## DESIGN SYSTEM (STRICT)

### Colors
Background: #0B1F3A (Deep Navy)
Surface: #0F2847
Card: #132F52
Border: #1E3A5F
Primary: #10B981 (Emerald)
Primary Hover: #059669
Text: #FFFFFF (White)
Muted Text: #8FA3BF
Secondary Text: #B8C7DB

### Design Rules
Dark mode only (default)
NO gradients
NO excessive glow
NO glassmorphism
NO excessive rounded corners
NO unnecessary animations
NO visual clutter
Minimal, premium, restrained
Emerald accent only for hierarchy/interaction
Strong spacing and hierarchy

### Typography
Font: Inter (Google Fonts)
Weights: 300, 400, 500, 600, 700, 800
Large but controlled Hero heading
Strong section headings
Medium card headings
Comfortable body text
Small metadata text

---

## FILE STRUCTURE

nexa-websites/
├── index.html          # Main homepage (all sections)
├── blog.html           # Blog page (separate)
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── refund.html         # Refund Policy
├── style.css           # All styles (single file)
├── script.js           # All JavaScript (single file)
├── favicon.svg         # neXa logo favicon
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── images/             # Image folder (to be created)
    ├── hero-visual.jpg
    ├── project-web.jpg
    ├── project-ai.jpg
    ├── project-automation.jpg
    └── project-cloud.jpg

---

## HOMEPAGE SECTIONS (in order)

1. Navbar (Logo, Navigation, EN/MM toggle, Hamburger)
2. Hero (Headline, description, CTA, Hero Visual)
3. Stats (4 capability labels)
4. Services (6 cards)
5. Solutions (4 cards)
6. AI Section (5 cards)
7. Projects (4 cards)
8. Process (4 steps)
9. Why neXa (4 cards + CTA)
10. Testimonials (3 placeholder cards)
11. Pricing (3 tiers)
12. Contact (form + info)
13. FAQ (10 items)
14. Final CTA
15. Platforms Slider (16 platforms)
16. Footer

---

## FEATURES IMPLEMENTED

### Navigation
Desktop: Logo left, links center/right, EN|MM button, Hamburger (mobile)
Mobile: Logo left, Hamburger right, slide-down menu
Menu links: Home, Services, Solutions, AI, Projects, Pricing, About, Contact, Blog

### EN/MM Language Toggle
Button in navbar toggles between English and Myanmar
Currently translates: Nav links, Hero, Section headers, Section descriptions
JavaScript object translations in script.js contains all translations

### Contact Form
Fields: Name, Email, Service (dropdown), Message
On submit: Opens user email client via mailto link
Email: contact@aungbobokyaw.com

### FAQ Accordion
10 questions
JavaScript toggle shows/hides answers
Only one answer open at a time

### Platform Slider
CSS animation auto-scrolls 16 platform names
Platforms: GitHub, Vercel, React, Node.js, Tailwind CSS, VS Code, Figma, Python, Docker, AWS, Cloudflare, Firebase, ChatGPT, DeepSeek, Gemini, Claude

### Mobile Menu
Hamburger toggles nav links
Links close menu when clicked

---

## SEO ELEMENTS

Title: neXa — Build Faster. Create Smarter.
Meta Description: neXa provides AI-powered web development, automation, cloud solutions, digital services, and technology solutions.
Open Graph tags: Yes
Twitter/X card tags: Yes
Favicon: favicon.svg
Robots.txt: Yes
Sitemap.xml: Yes

---

## RESPONSIVE BREAKPOINTS

Mobile: 320px - 480px (single column)
Tablet: 768px (2 columns where appropriate)
Desktop: 1024px+ (full multi-column)
Max width container: 1200px

---

## WHAT NOT TO DO

Do NOT change brand colors
Do NOT add gradients
Do NOT add fake testimonials/clients
Do NOT add fake statistics
Do NOT use lorem ipsum
Do NOT remove EN/MM toggle
Do NOT remove Platform Slider
Do NOT break mobile responsiveness
Do NOT remove contact form
Do NOT change email address
Do NOT remove SEO tags

---

## WHAT TO DO NEXT (PRIORITY ORDER)

### P0 - Critical
Add project images to cards
Add hero visual image
Complete Myanmar translations for all sections

### P1 - Important
Create Login/Signup pages
Create proper Blog page with articles
Add real project images

### P2 - Growth
Admin dashboard
User authentication
Blog content

### P3 - Future
AI tools integration
Billing system
Documentation

---

## CONTACT

Email: contact@aungbobokyaw.com
GitHub: https://github.com/aungbobokyaw124
Website: https://aungbobokyaw.com

---

## INSTRUCTIONS FOR AI

When helping with this project:

1. Read the existing files first
2. Preserve existing design system
3. Use the exact color values provided
4. Follow the existing code structure
5. Add code, do not replace working code
6. Test responsive behavior
7. Keep dark mode only
8. Maintain minimal aesthetic
9. Use Inter font
10. Follow the section order above
