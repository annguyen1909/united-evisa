# 🌍 eVisa Application Portal

A modern, full-stack web application for users to conveniently apply for electronic visas (eVisas) online. Built with **Next.js 15**, **Tailwind CSS 4**, **Prisma**, and **NextAuth**, it delivers a smooth and secure visa application experience.

---

## ✨ Features

- 📝 Simple and responsive visa application form  
- 🔒 Secure authentication system using **NextAuth**  
- 👤 User dashboard to view visa status and profile  
- 📄 Blog/info center built with **MDX + remark + rehype**  
- 🌐 Admin/moderator panel (planned or implemented)  
- 📱 Mobile-first responsive UI  
- 💅 Stylish UI using **Radix UI**, **Lucide Icons**, and **Tailwind CSS**

---

## 🛠️ Tech Stack

| Category       | Tech                                 |
|----------------|--------------------------------------|
| Frontend       | Next.js 15, React 19                 |
| Styling        | Tailwind CSS 4, Framer Motion        |
| UI Components  | Radix UI, Lucide React, Headless UI |
| Backend        | Next.js API Routes                   |
| Auth           | NextAuth.js                          |
| Database       | Prisma ORM + PostgreSQL (or other)  |
| Markdown Blog  | remark, rehype, gray-matter          |
| Date Handling  | date-fns, moment-timezone            |
| Other          | clsx, cmdk, sonner, bcryptjs         |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/annguyen1909/evisa.git
cd evisa
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root with your environment config:

```env
DATABASE_URL=your_postgresql_connection_string
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
```

> You may also need API keys or additional configs depending on your setup.

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to explore the app.

---

## 🧪 Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server |
| `npm run lint`  | Run ESLint checks        |

---

## 📁 Folder Structure (Typical)

```
/app           # Next.js app directory
/components    # Reusable UI components
/pages         # Custom pages or API routes
/lib           # Utility functions, helpers
/styles        # Tailwind & global styles
/public        # Static assets
/prisma        # Prisma schema & migrations
```

---

## 📸 Screenshots (optional)

> _Add screenshots or GIFs of the app for better visual presentation._

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome!  
Please fork the repo and submit a pull request.

---

## 🧑‍💻 Author

Developed by [An Nguyen](https://github.com/annguyen1909)
