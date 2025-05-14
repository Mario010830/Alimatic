
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Alimatic/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Alimatic"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Alimatic",
    "route": "/Alimatic/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26941, hash: '3e5d043f61cc8040892f99e9b0bb228a1ef524ccc03628d968b6c803e436dee2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20379, hash: '66e21932a8926f7e9bb01a980c3181e9a2149458c2fa9fe93abd9f9bdbbd407e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 66296, hash: 'e741d2fe736dcd1327774ad913838da83d9ae63b38987d5b2355cec1ac881a17', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EGANWTGU.css': {size: 8679, hash: 'OTGMZyQTbqY', text: () => import('./assets-chunks/styles-EGANWTGU_css.mjs').then(m => m.default)}
  },
};
