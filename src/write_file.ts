import path from 'path';
import fs from 'fs';

export function writeFile(filePath: string, content: string) {
  try {
    fs.writeFileSync(path.resolve(__dirname, filePath), content);
  } catch (e) {
    console.log(e);
  }
}
