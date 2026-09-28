import type { CollectionEntry } from 'astro:content';

// Route slug for a post bundle: `topic/index.md` becomes `topic`.
// Standalone Markdown files still use their filename for backwards compatibility.
export function postSlug(post: CollectionEntry<'blog'>): string {
  const id = post.id.replace(/\.(md|mdx)$/i, '');
  return id.endsWith('/index') ? id.slice(0, -'/index'.length) : id;
}

// The one date format posts display, e.g. "January 1, 2026".
export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
