import '../css/global.css';
import '../css/test.scss';

console.log('global')


// hmr
if (import.meta.hot) {
  import.meta.hot.accept()
}