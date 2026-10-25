import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { POSTER_OVERRIDES_BY_ID } from './apply_exact_poster_fixes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  path.join(__dirname, 'scifi_standalone_data.js'),
  path.join(__dirname, 'add_more_scifi.js'),
  path.join(__dirname, 'anime_master_data.js')
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let count = 0;
  for (const [id, url] of Object.entries(POSTER_OVERRIDES_BY_ID)) {
    const idRegex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?poster_url:\\s*['"])([^'"]+)(['"])`);
    if (idRegex.test(content)) {
      content = content.replace(idRegex, `$1${url}$3`);
      count++;
    }
  }
  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated ${count} overrides in ${path.basename(f)}`);
});
