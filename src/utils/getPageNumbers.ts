import { SITE } from "config";

export function getPageNumbers(itemsLength: number) {
  const totalPages = Math.ceil(itemsLength / SITE.blog.pagesPerSection);
  const arrayOfNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return arrayOfNumbers;
}
