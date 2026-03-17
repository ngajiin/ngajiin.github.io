# Ngajiin.id - Official Website

This is the official repository for **Ngajiin.id** (accessible at [ngajiin.web.id](https://ngajiin.web.id)), an online Islamic learning platform focused on the systematic study of *Turath* (classical) books with expert teachers. Built with **Astro 5**, **Tailwind CSS**, and **TypeScript**.

## 🎨 Design Standards

The project follows a strict typography and capitalization strategy to ensure a professional and academic aesthetic suitable for Islamic studies:

- **Typography Pairing**:
  - `Plus Jakarta Sans`: Used for UI elements, navigation, buttons, and small labels.
  - `Lora (Serif)`: Used for titles, article content, and quotes to provide a classic, scholarly feel.
- **Capitalization Strategy**:
  - **Small Labels/Metadata**: Full Uppercase with letter-spacing (e.g., `CATEGORY`, `AUTHOR`).
  - **Headings (H1, H2)**: Title Case for readability.
  - **Body Content**: Sentence Case.

## 🚀 Project Architecture

### 📂 Directory Structure

```text
/
├── src/
│   ├── assets/       # Optimized images and static assets
│   ├── components/   # Reusable UI components (Navbar, Hero, Program, etc.)
│   ├── content/      # Markdown-based Article Collections (Fiqih, Aqidah, etc.)
│   ├── layouts/      # Base page templates
│   ├── pages/        # File-based routing
│   └── styles/       # Global CSS and Tailwind configurations
└── public/           # Static files (favicon, robots.txt, sitemap)
```

### 🛣️ Routing & Pages

Astro uses file-based routing. The primary routes are:

- `/`: The Homepage, featuring programs, teachers, and curriculum sections.
- `/artikel`: The Article Listing page, dynamically generated from the `artikel` content collection.
- `/artikel/[id]`: Dynamic routes for individual articles, utilizing Astro's `getStaticPaths` for high-performance static generation.

### 🧩 Core Components

- **Navbar.astro**: Responsive navigation with floating scroll effects.
- **Hero.astro**: Main landing section with call-to-action.
- **Program.astro / Teachers.astro**: Showcase of courses and scholars.
- **Layout.astro**: The shell component containing SEO metadata, font imports, and common header/footer.

## ⚙️ Content Management

Articles are managed via **Astro Content Collections** located in `src/content/artikel/`. Each article is a directory containing an `index.md` and a `cover.webp` image.

**Article Frontmatter Schema:**

```typescript
{
  title: string;
  description: string;
  author: string;
  pubDate: Date;
  category: string;
  tags: string[];
  featured: boolean;
  image: ImageMetadata;
}
```

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the build locally |

---
© 2026 Ngajiin.id. All rights reserved.
