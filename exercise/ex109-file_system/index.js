const fs = require('node:fs/promises');

(async () => {
  try {
    // 1. Write / Create a file (overwrites existing content)
    await fs.writeFile('example.txt', 'Hello, file system in Node.js!');

    // 2. Append data to a file
    await fs.appendFile('example.txt', '\nAdding a second line.');

    // 3. Read a file (specify 'utf8' to get a string instead of a raw Buffer)
    const content = await fs.readFile('example.txt', 'utf8');
    console.log(content);

    // 4. Rename or move a file
    await fs.rename('example.txt', 'renamed.txt');

    // 5. Create a directory ('recursive: true' avoids errors if it already exists)
    await fs.mkdir('my-folder/sub-folder', { recursive: true });

    // 6. Read directory contents
    const files = await fs.readdir('.');
    console.log(files);

    // 7. Delete a file
    await fs.unlink('renamed.txt');

    // 8. Delete a directory and everything inside it
    await fs.rm('my-folder', { recursive: true, force: true });

  } catch (error) {
    console.error('File operation failed:', error);
  }
})()
