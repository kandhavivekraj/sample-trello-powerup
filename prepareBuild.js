const fs = require('fs');
const rimraf = require('rimraf');

const path = require('path');

let outputPath = path.join(process.cwd(), 'build');

rimraf.sync(outputPath);

fs.mkdirSync(outputPath);

fs.mkdirSync( path.join(outputPath, 'js'));


fs.copyFileSync(path.join(process.cwd(), 'index.html'), path.join(outputPath, 'index.html'));

fs.copyFileSync(path.join(process.cwd(), 'js', 'client.js'), path.join(outputPath, 'js', 'client.js'));