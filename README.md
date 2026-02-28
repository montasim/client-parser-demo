# Client Parser Demo

[![npm version](https://img.shields.io/npm/v/client-parser.svg)](https://www.npmjs.com/package/client-parser)
[![npm downloads](https://img.shields.io/npm/dm/client-parser.svg)](https://www.npmjs.com/package/client-parser)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

> Interactive demo website for the **client-parser** npm package - A lightweight, fast, and accurate user-agent parser for JavaScript and TypeScript.

**[🌐 Live Demo](https://client-parser-demo.netlify.app/)** | **[📦 npm Package](https://www.npmjs.com/package/client-parser)** | **[💻 GitHub Repository](https://github.com/montasim/client-parser)**

---

## ✨ Features

- 🚀 **Lightning Fast** - Optimized parsing algorithms for minimal performance impact
- 🎯 **Highly Accurate** - Comprehensive regex patterns covering thousands of user-agent variations
- 📘 **TypeScript Ready** - Full TypeScript support with comprehensive type definitions
- 🌍 **Browser Detection** - Identify Chrome, Firefox, Safari, Edge, Opera, and more
- 💻 **OS & Device Info** - Extract operating system, device type, brand, and model
- ⚙️ **Engine Detection** - Detect WebKit, Blink, Gecko, and other rendering engines
- 🔒 **Zero Dependencies** - Lightweight package with no external dependencies
- 📱 **Mobile Detection** - Distinguish between mobile, tablet, desktop, and bot traffic

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** 9.x or higher (or npm/yarn)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/montasim/client-parser-demo.git
cd client-parser-demo
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo website.

---

## 📦 Using the client-parser Package

### Installation

```bash
npm install client-parser
# or
pnpm add client-parser
# or
yarn add client-parser
```

### Basic Usage

```typescript
import { parseUserAgent } from 'client-parser';

// In the browser
const userAgent = navigator.userAgent;
const result = parseUserAgent(userAgent);

console.log(result.browser); // { name: 'Chrome', version: '120.0.0.0' }
console.log(result.os); // { name: 'Windows', version: '10' }
console.log(result.device); // { type: 'desktop' }
```

### Server-Side Usage (Node.js)

```typescript
import { parseUserAgent } from 'client-parser';
import { IncomingMessage } from 'http';

function getUserInfo(req: IncomingMessage) {
  const userAgent = req.headers['user-agent'] || '';
  const client = parseUserAgent(userAgent);

  return {
    browser: client.browser?.name,
    os: client.os?.name,
    isMobile: client.device?.type === 'mobile',
  };
}
```

### TypeScript Types

```typescript
interface ParseResult {
  browser?: {
    name: string;
    version: string;
  };
  os?: {
    name: string;
    version: string;
  };
  device?: {
    type: 'mobile' | 'tablet' | 'desktop' | 'bot';
    brand?: string;
    model?: string;
  };
  engine?: {
    name: string;
    version: string;
  };
  cpu?: {
    architecture: string;
  };
}
```

---

## 🎨 Demo Website Features

This demo website showcases the client-parser package with:

- **Interactive Demo** - Try parsing real user-agent strings in your browser
- **Live Results** - See parsed browser, OS, device, and engine information instantly
- **Sample User-Agents** - Pre-loaded examples from popular devices and browsers
- **API Documentation** - Clear examples and type definitions
- **Responsive Design** - Works beautifully on all screen sizes
- **Dark Mode Support** - Easy on the eyes in any lighting condition

---

## 🏗️ Project Structure

```
client-parser-demo/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main demo page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── navbar.tsx        # Navigation header
│   ├── footer.tsx        # Footer with developer link
│   ├── demo-section.tsx  # Interactive parser demo
│   ├── feature-card.tsx  # Feature display cards
│   ├── code-block.tsx    # Syntax highlighted code blocks
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
│   ├── constants.ts      # App constants
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

---

## 📜 Available Scripts

| Command             | Description               |
| ------------------- | ------------------------- |
| `pnpm dev`          | Start development server  |
| `pnpm build`        | Build for production      |
| `pnpm start`        | Start production server   |
| `pnpm lint`         | Run ESLint                |
| `pnpm lint:fix`     | Fix ESLint issues         |
| `pnpm format`       | Format code with Prettier |
| `pnpm format:check` | Check code formatting     |
| `pnpm typecheck`    | Run TypeScript type check |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [Netlify](https://www.netlify.com/)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[client-parser](https://github.com/montasim/client-parser)** - The amazing user-agent parser package
- **[Next.js](https://nextjs.org/)** - The React framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide](https://lucide.dev/)** - Beautiful icons

---

## 👨‍💻 Developer

**Montasim**

- **GitHub**: [@montasim](https://github.com/montasim)
- **npm**: [@montasim](https://www.npmjs.com/~montasim)

---

Made with ❤️ by [Montasim](https://github.com/montasim)
