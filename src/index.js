import Template from './templates/Template.js';
import '@styles/main.css'
import '@styles/vars.styl'

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();

console.log('-> hello GUX')

/*
  Bundle sin todos los extras del entorno dev
  npx webpack --profile --json > stats.json
  npx webpack-bundle-analyzer stats.json
 */