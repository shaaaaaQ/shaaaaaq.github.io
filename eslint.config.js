import js from '@eslint/js';
import astro from 'eslint-plugin-astro';

export default [
    {
        ignores: ['dist/**', '.astro/**'],
    },
    js.configs.recommended,
    ...astro.configs.recommended,
];
