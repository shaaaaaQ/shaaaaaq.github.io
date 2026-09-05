import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const note = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/note' }),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = { note };
