import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    publishDate: z.date(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
