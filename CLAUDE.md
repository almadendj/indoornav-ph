# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check with tsc, then bundle with Vite → dist/
npm run preview   # Preview the production build locally
```

## Architecture

Vanilla TypeScript + Vite landing page with no framework. Single entry point: `src/main.ts` renders HTML directly into `#app`. Styles are in `src/style.css`.

Deployed to Vercel — `vercel.json` sets the build command, output directory, and framework.

TypeScript is strict with `noUnusedLocals`, `noUnusedParameters`, and `noEmit` (Vite handles transpilation; `tsc` is only for type-checking during build).
