import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fetch from 'node-fetch'
import cleanCSS from 'clean-css'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const response = await fetch('https://raw.githubusercontent.com/shaaaaaQ/chrome-ext/main/src/krunker/style.css');
const css = await response.text();
const out = new cleanCSS().minify(css);
fs.writeFileSync(path.join(__dirname, './public/krunker-css/1.css'), out.styles);