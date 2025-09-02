# React

Minimal base to start projects with **React 19**, **TypeScript**, and **Vite**.  
Includes ready-to-use configuration with **Tailwind**, **LightningCSS**, **Biome**, and **Wouter**.  
Uses **PNPM** as package manager and requires **Node.js 24 or higher**.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Stack

- **[React 19](https://react.dev/)** – UI library.
- **[Vite](https://vite.dev/)** – Fast bundler and dev server.
- **[TypeScript](https://www.typescriptlang.org/)** – Static typing.
- **[TailwindCSS 4](https://tailwindcss.com/)** + [`@tailwindcss/vite`](https://tailwindcss.com/docs/vite) – Utility-first CSS.
- **[LightningCSS](https://lightningcss.dev/)** – Modern CSS processor.
- **[Biome](https://biomejs.dev/)** – Unified linter and formatter.
- **[Wouter](https://github.com/molefrog/wouter)** – Minimal router for React.
- **[Zod](https://zod.dev/)** – TypeScript-first schema validation.
- **[Zustand](https://zustand-demo.pmnd.rs/)** – Small, fast, and scalable state management.
- **[nuqs](https://nuqs.47ng.com/)** – Type-safe search params state manager for Next.js and React.
- **[React Query](https://tanstack.com/query)** – Powerful data synchronization for React.

## Aliases and Paths

`vite.config.ts` and `tsconfig.json` are configured with the alias `@ → /src`.

```ts
import MyComponent from "@/components/MyComponent";
```

## Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Compile and build
pnpm preview   # Preview production build
pnpm lint      # Lint with Biome
pnpm format    # Format with Biome
```
