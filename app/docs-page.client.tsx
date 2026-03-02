'use client';

import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/layouts/docs/page';
import type { TOCItemType } from 'fumadocs-core/toc';

export function DocsPageClient({
  toc,
  full,
  title,
  description,
  actions,
  children,
}: {
  toc: TOCItemType[];
  full?: boolean;
  title: string;
  description?: string;
  actions: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <DocsPage toc={toc} full={full}>
      <DocsTitle>{title}</DocsTitle>
      <DocsDescription className="mb-0">{description}</DocsDescription>
      {actions}
      <DocsBody>{children}</DocsBody>
    </DocsPage>
  );
}
