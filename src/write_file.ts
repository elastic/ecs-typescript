import path from 'path';
import fs from 'fs';
import prettier from 'prettier';

export function writeFile(filePath: string, content: string) {
  try {
    fs.writeFileSync(
      path.resolve(__dirname, filePath),
      prettier.format(content, { parser: 'typescript' })
    );
  } catch (e) {
    console.error(`Failed to write file to ${filePath}`);
    console.error(e);
    process.exit(1);
  }
}
