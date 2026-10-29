import { NextResponse } from 'next/server';
import { CAFES_DATA } from '@/data/cafesData';

/**
 * Next.js API Route Handler
 * GET /api/cafes?district=tagamoa&limit=10
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const district = searchParams.get('district');
  const search = searchParams.get('q');
  const limit = parseInt(searchParams.get('limit') || '120', 10);

  let results = [...CAFES_DATA];

  if (district && district !== 'all') {
    results = results.filter((c) => c.district === district);
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.nameAr && c.nameAr.includes(q)) ||
        c.tags.some((t) => t.includes(q))
    );
  }

  return NextResponse.json({
    success: true,
    total: results.length,
    district: district || 'all',
    data: results.slice(0, limit)
  });
}
