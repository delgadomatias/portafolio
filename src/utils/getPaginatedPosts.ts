import { SITE } from "config";

export function getPaginatedPosts<T>(page: number, posts: T[]) {
  const offset = SITE.blog.pagesPerSection;

  let firstPostIndex;
  let lastPostIndex;

  if (page === 1) {
    firstPostIndex = 0;
    lastPostIndex = offset;
  } else {
    firstPostIndex = (offset + 1) * (page - 1) - 1;
    lastPostIndex = firstPostIndex + offset - 1;

    // Restamos uno porque el slice empieza a contar desde cero, y si obtenemos, por ejemplo, un indice de [3, 5] el slice tomaría el cuarto elemento como inicial, y eso no es lo que queremos.
  }

  return posts.slice(firstPostIndex, lastPostIndex);
}
