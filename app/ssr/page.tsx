import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const PayloadSchema = z.object({
  id: z.string(),
  ts: z.number(),
  items: z.array(z.object({ k: z.string(), v: z.number() })),
});

async function fakeFetch() {
  await new Promise((r) => setTimeout(r, 100));
  const payload = {
    id: crypto.randomUUID(),
    ts: Date.now(),
    items: Array.from({ length: 12 }, (_, i) => ({ k: `metric_${i}`, v: Math.random() * 100 })),
  };
  return PayloadSchema.parse(payload);
}

export default async function SsrPage() {
  const data = await fakeFetch();
  return (
    <main className="container mx-auto py-16 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">/ssr</h1>
        <p className="text-muted-foreground">
          Server component with async data-fetch (100ms simulated latency) + zod validation.
          Rendered at {format(new Date(data.ts), 'yyyy-MM-dd HH:mm:ss.SSS')}.
        </p>
      </header>
      <Card>
        <CardHeader><CardTitle>Payload ({data.id})</CardTitle></CardHeader>
        <CardContent>
          <pre className="text-xs overflow-x-auto">{JSON.stringify(data.items, null, 2)}</pre>
        </CardContent>
      </Card>
    </main>
  );
}
