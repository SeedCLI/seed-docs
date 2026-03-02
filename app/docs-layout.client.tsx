'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { Root } from 'fumadocs-core/page-tree';

export function DocsLayoutClient({
  tree,
  options,
  children,
}: {
  tree: Root;
  options: BaseLayoutProps;
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <DocsLayout tree={tree} {...options}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
