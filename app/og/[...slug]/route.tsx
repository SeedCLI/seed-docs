import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { generateOGImage, generate as DefaultImage } from 'fumadocs-ui/og';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'Seed CLI',
    primaryColor: 'rgba(124, 197, 118, 0.3)',
    primaryTextColor: 'rgb(124, 197, 118)',
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
