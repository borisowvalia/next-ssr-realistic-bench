import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  return NextResponse.json({
    method: 'GET',
    path: req.nextUrl.pathname,
    query: params,
    ts: Date.now(),
  });
}
