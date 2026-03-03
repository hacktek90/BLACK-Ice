/* Analyzed bindings: {
  "h": "setup-const",
  "Fragment": "setup-const",
  "ref": "setup-const",
  "props": "setup-reactive-const",
  "count": "setup-ref",
  "align": "literal-const",
  "Greeting": "setup-const",
  "name": "props"
} */
import { useCssVars as _useCssVars, defineComponent as _defineComponent } from 'vue';
import { createVNode as _createVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
const _hoisted_1 = { class: "container" };
import { h } from "vue";
import { ref } from 'vue';
const align = 'center';
// define inline component
const __sfc__ = /*@__PURE__*/ _defineComponent({
    __name: 'Component',
    props: {
        name: { type: String, required: false }
    },
    setup(__props) {
        _useCssVars(_ctx => ({
            "e3c34c9c-align": (align)
        }));
        const props = __props;
        const count = ref(0);
        function Greeting(props) {
            return h("h1", null,
                "Hello, ",
                props.name || 'World',
                "!");
        }
        return (_ctx, _cache) => {
            return (_openBlock(), _createElementBlock("div", _hoisted_1, [
                _createVNode(Greeting, {
                    name: props.name
                }, null, 8 /* PROPS */, ["name"]),
                _cache[1] || (_cache[1] = _createElementVNode("img", {
                    class: "logo",
                    alt: "logo",
                    src: "https://livecodes.io/livecodes/assets/templates/vue.svg"
                }, null, -1 /* CACHED */)),
                _createElementVNode("p", null, "You clicked " + _toDisplayString(count.value) + " times.", 1 /* TEXT */),
                _createElementVNode("button", {
                    onClick: _cache[0] || (_cache[0] = ($event) => (count.value++))
                }, "Click me")
            ]));
        };
    }
});

__sfc__.__scopeId = "data-v-e3c34c9c";
__sfc__.__file = "Component.vue";
export default __sfc__;

document.head.insertBefore(
  Object.assign(document.createElement('style'), { textContent: ".container[data-v-e3c34c9c],\n  .container button[data-v-e3c34c9c] {\n    text-align: var(--e3c34c9c-align);\n    font: 1em sans-serif;\n}\n.logo[data-v-e3c34c9c] {\n    width: 150px;\n}" }),
  document.head.getElementsByTagName('style')[0]
);
