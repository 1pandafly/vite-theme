import liveReload from 'vite-plugin-live-reload'
const { resolve } = require('path')

export default {
  root: 'src',
  base: './',
  publicDir: 'dist',

  plugins: [
    liveReload(__dirname+'/**/*.php')
  ],

  build: {
    outDir: resolve(__dirname, 'dist/'),
    emptyOutDir: false,
    manifest: true,
    assetsDir: './',
    rollupOptions: {
      input: {
        global: resolve(__dirname, 'src/js/global.js'),
        homepage: resolve(__dirname, 'src/js/homepage.js'),
        blog: resolve(__dirname, 'src/js/blog.js'),
        test: resolve(__dirname, 'src/js/test.js'),
      },
      output: {
        dir: 'dist/js'
      }
    }
  },
  server: {

    // required to load scripts from custom host
    cors: true,

    // we need a strict port to match on PHP side
    // change freely, but update in your functions.php to match the same port
    strictPort: true,
    port: 3000,

    // serve over http
    https: false,

    // serve over httpS
    // to generate localhost certificate follow the link:
    // https://github.com/FiloSottile/mkcert - Windows, MacOS and Linux supported - Browsers Chrome, Chromium and Firefox (FF MacOS and Linux only)
    // installation example on Windows 10:
    // > choco install mkcert (this will install mkcert)
    // > mkcert -install (global one time install)
    // > mkcert localhost (in project folder files localhost-key.pem & localhost.pem will be created)
    // uncomment below to enable https
    //https: {
    //  key: fs.readFileSync('localhost-key.pem'),
    //  cert: fs.readFileSync('localhost.pem'),
    //},

    hmr: {
      host: 'localhost',
      //port: 443
    },

  },
}