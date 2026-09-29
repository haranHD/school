# Deeksha Preschool — "The Little Foundation"
## Premium Preschool Demo Website

A modern, playful, colorful, and fully responsive static website built with **React**, **Vite**, and **CSS** for **Deeksha Preschool** in Bhavani, Tamil Nadu.

Crafted specifically as a high-impact **client proposal demo** to pitch to the preschool owner.

---

### 🚀 Quick Start

Run the website locally:

```bash
npm install
npm run dev
```

Then open your browser at `http://localhost:5173` (or the URL shown in your terminal).

To produce an optimized production build:

```bash
npm run build
```

---

### 🎨 Visual Identity & Design Balance

The design harmonizes two distinct target audiences:
1. **Children:** Colorful, playful, warm, and friendly with soft pastels (sky blue, warm yellow, orange, mint green, soft pink, purple), gentle floating animations (⭐, ☁️, 🌈, ✏️, 📚), and rounded cards.
2. **Parents:** Trustworthy, safe, organized, informative, and professional with crisp typography ('Fredoka' & 'Plus Jakarta Sans'), clear program pathways, transparent contact details, and direct WhatsApp / Phone access.

---

### 🏢 Real Business Information Included

- **Business Name:** Deeksha Preschool
- **Tagline:** The Little Foundation
- **Category:** Preschool / Early Childhood Education
- **Programs:** Playgroup, Pre-KG, Jr KG, Sr KG
- **Special Enrichment:** Phonics Classes / Phonics Education
- **Campus Address:** 1/187 A, Natarajapuram, Bhavani, Tamil Nadu
- **Admissions Helpline:** +91 99944 74316
- **WhatsApp Integration:** Direct one-tap click-to-chat with pre-filled message
- **Instagram Handle:** [@deeksha_preschool_bhavani](https://www.instagram.com/deeksha_preschool_bhavani/)
- **YouTube Channel:** Deeksha Preschool Bhavani
- **Google Maps:** Direct navigation link to Natarajapuram, Bhavani

---

### 🧩 Component Architecture

All sections are built as modular, reusable components:

- [`src/components/DemoBanner.jsx`](file:///home/haran/SolveXaTech/school/src/components/DemoBanner.jsx): Top proposal preview bar.
- [`src/components/Navbar.jsx`](file:///home/haran/SolveXaTech/school/src/components/Navbar.jsx): Sticky responsive navigation with logo emblem, smooth scroll links, admissions badge, and mobile drawer.
- [`src/components/Hero.jsx`](file:///home/haran/SolveXaTech/school/src/components/Hero.jsx): Immediate 5-second impact banner with headline *"Where Little Minds Begin Big Journeys"*, program pills, floating badges, and dual CTAs.
- [`src/components/TrustIntro.jsx`](file:///home/haran/SolveXaTech/school/src/components/TrustIntro.jsx): *"Every Little Step Matters"* — Joyful Learning, Confident Children, Strong Foundations.
- [`src/components/About.jsx`](file:///home/haran/SolveXaTech/school/src/components/About.jsx): *"Welcome to Deeksha Preschool"* with learning visual and *"Designed for Little Learners"* 5-point checklist.
- [`src/components/Programs.jsx`](file:///home/haran/SolveXaTech/school/src/components/Programs.jsx): *"Our Programs"* — Playgroup, Pre-KG, Jr KG, Sr KG cards with unique themed icons and enquire buttons.
- [`src/components/Phonics.jsx`](file:///home/haran/SolveXaTech/school/src/components/Phonics.jsx): *"Discover the Joy of Phonics"* — Letters, Sounds, Early Reading, Word Recognition.
- [`src/components/LearningApproach.jsx`](file:///home/haran/SolveXaTech/school/src/components/LearningApproach.jsx): *"Learning Should Feel Like Fun"* — 4-stage progressive timeline (01 Explore, 02 Create, 03 Play, 04 Grow).
- [`src/components/Activities.jsx`](file:///home/haran/SolveXaTech/school/src/components/Activities.jsx): *"Little Learners, Big Adventures"* — Art & Creativity, Story Time, Music & Movement, Fun Learning, Exploration, Creative Activities.
- [`src/components/Gallery.jsx`](file:///home/haran/SolveXaTech/school/src/components/Gallery.jsx): *"Moments From Our Little World"* — filterable image grid with direct link to Instagram `@deeksha_preschool_bhavani`.
- [`src/components/ParentCorner.jsx`](file:///home/haran/SolveXaTech/school/src/components/ParentCorner.jsx): *"A Place Where Parents Feel Connected"* — Communication, Learning Journey, Easy Enquiries.
- [`src/components/AdmissionsCTA.jsx`](file:///home/haran/SolveXaTech/school/src/components/AdmissionsCTA.jsx): High-contrast gradient banner with WhatsApp and call CTAs.
- [`src/components/FAQ.jsx`](file:///home/haran/SolveXaTech/school/src/components/FAQ.jsx): *"Everything Parents Need to Know"* accordion covering all 5 key parent questions.
- [`src/components/LocationSection.jsx`](file:///home/haran/SolveXaTech/school/src/components/LocationSection.jsx): *"Visit Deeksha Preschool"* with campus address, phone, and interactive Google Maps locator card.
- [`src/components/FinalCTA.jsx`](file:///home/haran/SolveXaTech/school/src/components/FinalCTA.jsx): *"Let Their Learning Journey Begin"*.
- [`src/components/Footer.jsx`](file:///home/haran/SolveXaTech/school/src/components/Footer.jsx): Complete footer with quick links, contact, Instagram & YouTube links, and © 2026 copyright.
- [`src/components/MobileStickyCTA.jsx`](file:///home/haran/SolveXaTech/school/src/components/MobileStickyCTA.jsx): Sticky bottom bar for mobile parents (Call, WhatsApp, Enquire Now).
- [`src/components/EnquiryModal.jsx`](file:///home/haran/SolveXaTech/school/src/components/EnquiryModal.jsx): Interactive admission modal with one-click pre-filled WhatsApp routing.

---

### 🛠️ Easy Customization for the Preschool Owner

All content, telephone numbers, addresses, social channels, and photos are centralized in:

👉 [`src/data/schoolData.js`](file:///home/haran/SolveXaTech/school/src/data/schoolData.js)

When the preschool owner provides their real photos, fee circulars, or timetable, simply edit this single file to update the entire website automatically.
