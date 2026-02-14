import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const POSTS_DIR = 'src/content/posts';
const OUTPUT_FILE = 'netlify/functions/valid-slugs.json';

const files = await readdir(POSTS_DIR);
const slugs = [];

for (const file of files) {
  if (!file.endsWith('.md')) continue;

  const content = await readFile(join(POSTS_DIR, file), 'utf-8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) continue;

  const slugMatch = frontmatterMatch[1].match(/^slug:\s*['"]?(.+?)['"]?\s*$/m);
  if (slugMatch) {
    slugs.push(slugMatch[1]);
  } else {
    slugs.push(file.replace(/\.md$/, ''));
  }
}

await writeFile(OUTPUT_FILE, JSON.stringify(slugs, null, 2) + '\n');
console.log(`Generated ${OUTPUT_FILE} with ${slugs.length} slugs`);
