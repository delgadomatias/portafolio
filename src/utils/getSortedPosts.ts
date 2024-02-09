import type { CollectionEntry } from "astro:content";

export function getSortedPosts(posts: CollectionEntry<"blog">[]) {
  return posts.sort((a, b) =>
    a.data.publishDate > b.data.publishDate ? -1 : 1,
  );
}
