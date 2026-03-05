/* Analyzed bindings: {
  "onMounted": "setup-const"
} */
import { onMounted } from 'vue';


const __sfc__ = {
  __name: 'Component',
  setup(__props) {

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://blackice-ac.vercel.app/test/portal.js';
  script.defer = true; 
  document.body.appendChild(script);
});

return () => {}
}

}
__sfc__.__file = "Component.vue";
export default __sfc__;

document.head.insertBefore(
  Object.assign(document.createElement('style'), { textContent: ".container[data-v-e3c34c9c],\n  .container button[data-v-e3c34c9c] {\n    text-align: var(--e3c34c9c-align);\n    font: 1em sans-serif;\n}\n.logo[data-v-e3c34c9c] {\n    width: 150px;\n}\n\n\n/* Your CSS goes here */\n\n\n/* Your CSS goes here */\n\n\n/* Your CSS goes here */" }),
  document.head.getElementsByTagName('style')[0]
);
