import path from 'path';
import fs from 'fs';
import prettier from 'prettier';

const LICENSE_COMMENT = `/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
`;

export function writeFile(filePath: string, content: string) {
  const contentWithLicense = `${LICENSE_COMMENT}\n\n${content}`;

  const formattedContent = prettier.format(contentWithLicense, {
    parser: 'typescript',
    singleQuote: true,
  });

  try {
    fs.writeFileSync(path.resolve(__dirname, filePath), formattedContent);
  } catch (e) {
    console.error(`Failed to write file to ${filePath}`);
    console.error(e);
    process.exit(1);
  }
}
