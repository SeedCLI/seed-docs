import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  // Dynamic import to avoid @vercel/og eagerly fetching fonts via import.meta.url
  // at module init time, which crashes in Cloudflare Workers
  const { ImageResponse } = await import('next/og');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          color: 'white',
          padding: '4rem',
          backgroundColor: '#0c0c0c',
          backgroundImage: 'linear-gradient(to top right, rgba(124, 197, 118, 0.3), transparent)',
        }}
      >
        <p
          style={{
            fontSize: '56px',
            fontWeight: 600,
            margin: 0,
            marginBottom: '12px',
            color: 'rgb(124, 197, 118)',
          }}
        >
          Seed CLI
        </p>
        <p style={{ fontWeight: 800, fontSize: '82px', margin: 0 }}>
          {page.data.title}
        </p>
        <p style={{ fontSize: '52px', color: 'rgba(240,240,240,0.8)', margin: 0 }}>
          {page.data.description}
        </p>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
