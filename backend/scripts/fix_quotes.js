import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, 'build_full_franchises.js');
let content = fs.readFileSync(targetPath, 'utf8');

// Replace all occurrences of \\' with \'
// Note: In string literals, \\' was written as double backslash quote. We want \' (a single backslash quote).
// Or even better: replace \\' with \'
content = content.split("\\\\'").join("\\'");

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Fixed quotes in build_full_franchises.js');
