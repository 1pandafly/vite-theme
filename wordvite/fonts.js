const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const SRC_FOLDER = './src/fonts/';
const OUTPUT_FOLDER = './dist/fonts/';

// check if has --watch args
var IS_WATCH = false;
const args = process.argv;
if (args.includes('--watch')) {
    IS_WATCH = true;
}


if (IS_WATCH) {
    // chokidar.watch(SRC_FOLDER).on('add', (event, path) => {
    //     copyFontFile(event);
    // });
} else {

    walkDir(SRC_FOLDER, function (filePath) {
        copyFontFile(filePath)
    });
}


function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};

function copyFontFile (path) {
    const file = path.substring(path.lastIndexOf('\\') + 1);
    const file_with_folder = path.replace(/\\/g, "/").replace("src/fonts/", "")
    const folder = file_with_folder.split('/').slice(0, -1).join()

    const i = fs.readFileSync(path);

    // create folder if dont exists
    if (!fs.existsSync(OUTPUT_FOLDER + folder)) {
        fs.mkdirSync(OUTPUT_FOLDER + folder, { recursive: true });
    }

    fs.copyFile(file, OUTPUT_FOLDER + file_with_folder, (err) => {
        if (err) throw err;
        console.log(`${file} was copied to ${OUTPUT_FOLDER}`);
    });
}