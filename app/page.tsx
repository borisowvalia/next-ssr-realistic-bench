import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Activity, Zap, Database } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function Home() {
  const renderedAt = new Date().toISOString();
  return (
    <main className="container mx-auto py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">next-ssr-realistic-bench</h1>
        <p className="text-muted-foreground">
          Layero SSR cold-start benchmark fixture. Rendered server-side at {renderedAt}.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <Rocket className="w-5 h-5 text-primary" />
            <CardTitle>App Router</CardTitle>
            <CardDescription>Next 14 server components</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">force-dynamic page</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Activity className="w-5 h-5 text-primary" />
            <CardTitle>SSR endpoint</CardTitle>
            <CardDescription>data-fetching demo</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" size="sm"><a href="/ssr">Open /ssr</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-5 h-5 text-primary" />
            <CardTitle>Health</CardTitle>
            <CardDescription>liveness probe</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" size="sm"><a href="/api/health">GET /api/health</a></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Database className="w-5 h-5 text-primary" />
            <CardTitle>Echo API</CardTitle>
            <CardDescription>route handler demo</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" size="sm"><a href="/api/echo?ping=1">GET /api/echo</a></Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-xs text-muted-foreground border-t border-border pt-4">
        Bundle includes: Tailwind, shadcn/ui primitives, Radix, lucide-react, sharp, zod, date-fns.
      </footer>
    </main>
  );
}
