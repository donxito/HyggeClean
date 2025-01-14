# HyggeClean - Professional Cleaning Service Website

## Overview

HyggeClean is a modern, bilingual (Danish/English) web application for a professional cleaning service in Copenhagen. Built with Next.js 15, React 19, Tailwind CSS, and shadcn/ui, it offers a seamless user experience with a focus on elegant design and functionality.

### 🌐 [Live Demo](https://hyggeclean.vercel.app)

---

## ✨ Features

### 🌍 Bilingual Support

- Seamless switching between Danish and English
- Fully localized content and UI elements
- Automatic language detection

### 🎨 Modern UI/UX

- Elegant design with custom animations
- Responsive layout for all devices
- Interactive before/after image gallery
- Smooth transitions and micro-interactions

### 💎 Service Packages

- Clear pricing structure
- Multiple cleaning package options
- Special offers and referral system
- Dynamic pricing calculator

### 📞 Contact Management

- Interactive contact form
- Integration with Resend for email notifications
- WhatsApp and SMS quick contact options
- Real-time form validation

### ⚡ Performance Optimized

- Next.js 15 app router implementation
- Optimized image loading and caching
- Smooth animations and transitions
- Mobile-first responsive design

---

## 🛠 Tech Stack

### Frontend

- Next.js 15 (React 19)
- Tailwind CSS
- shadcn/ui components
- Typescript

### Design

- Custom Tailwind configuration
- Playfair Display & DM Sans fonts
- Responsive design patterns
- Custom animations

### Backend

- Next.js API routes
- Resend email service

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/hyggeclean.git
   cd hyggeclean
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   Create a `.env.local` file:

   ```env
   RESEND_API_KEY=your_resend_api_key
   RESEND_EMAIL_ADDRESS=your_email@domain.com
   ```

4. **Start Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```
hyggeclean/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── public/              # Static files
└── styles/             # Additional styles
```

---

## 🤝 Contributing

While this is a personal project, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
