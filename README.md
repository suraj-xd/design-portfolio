# Design Portfolio

A modern, responsive, fully server-side rendered portfolio website built with the powerful [T3 Stack](https://create.t3.gg/). This portfolio showcases my work, experience, and provides a way for potential clients or employers to connect with me.

# Live Link: [https://design-portfolio-eight-gules.vercel.app/](https://design-portfolio-eight-gules.vercel.app/)

## 🌟 Features

- **Modern Design**: Built with Next.js 15 and Tailwind CSS for a beautiful, responsive interface
- **Type Safety**: End-to-end type safety with TypeScript
- **Server-Side Rendering**: Fully server-side rendered for optimal performance and SEO
- **Contact Form**: Integrated email functionality using Gmail API
- **Dynamic Routes**:
  - `/`: Home page/Portfolio showcase
  - `/experience`: Professional experience and skills
  - `/connect`: Contact form and social links

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) - React framework for production with SSR
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Email**: Gmail API integration for contact form
- **Type Safety**: TypeScript for enhanced development experience
- **Code Quality**:
  - ESLint for code linting
  - Prettier for code formatting

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Configure your Gmail credentials:
     - GMAIL_APP_ID: Your Gmail address
     - GMAIL_APP_PASSWORD: Your 16-character app password
     - EMAIL_TO: Destination email for contact form

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Email Configuration

The contact form uses Gmail API for sending emails. To set it up:

1. Enable 2-factor authentication in your Google Account
2. Generate an app password:
   - Go to Security > 2-Step Verification > App passwords
   - Generate a new password for "Mail"
3. Use the generated 16-character password in your `.env.local`

## 📁 Project Structure
