# next-ssr-realistic-bench

Layero benchmark fixture: realistic SSR Next.js project for measuring cold-start TTFB.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui primitives + sharp + zod + date-fns.

## Routes
- `/` — landing with shadcn cards, `force-dynamic`
- `/ssr` — async server component, 100ms simulated fetch, zod validation
- `/api/health` — liveness probe
- `/api/echo` — route handler with query echo

## Local dev
```bash
npm install
npm run build
npm start
```
