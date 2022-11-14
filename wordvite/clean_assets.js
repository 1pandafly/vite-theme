/*
|--------------------------------------------------------------------------
| Wordvite v0.1.0 Clean Assts Folder Function
|--------------------------------------------------------------------------
*/

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

console.log(chalk.cyan('cleaning assets folder...'))

// remove old files
if (fs.existsSync('./dist/js')) {
  fs.readdir('./dist/js', (err, files) => {
    if (err) console.log(err);
    for (const file of files) {
      if (file != "img") {
        fs.unlink(path.join('./dist/js', file), err => {
          if (err) console.log(err);
        });
      }
    }
  });
}

// remove watch file
if (fs.existsSync('./dist/watch')) {
  fs.unlink(path.join('./dist/', 'watch'), err => {
    if (err) console.log(err);
  });
}
