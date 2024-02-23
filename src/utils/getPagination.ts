import { getPageNumbers } from "./getPageNumbers";
import { getPaginatedPosts } from "./getPaginatedPosts";

interface Props<T> {
  posts: T[];
  page: string;
}

export function getPagination<T>({ page, posts }: Props<T>) {
  const paginatedPosts = getPaginatedPosts(Number(page), posts);
  const totalPages = getPageNumbers(posts.length).at(-1) || 1;

  return { paginatedPosts, totalPages };
}
