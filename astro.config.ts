import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";

import react from "@astrojs/react";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "Tabla de contenidos" }],
      [
        remarkCollapse,
        {
          test: "Tabla de contenidos",
          summary: "Abrir",
        },
      ],
    ],
  },
});
