/*
 *   mixin to dialog
 */



import Vue from 'vue'
import Modal from './modal.vue'

let zIndex = 1000;
const getZindex = function() {
    return ++zIndex;
}


Modal.newInstance = params => {
    const _props = params || {};
    _props.zindex = getZindex();
    let props = '';
    Object.keys(_props).forEach((key) => {
        props += ' :' + key + '=' + key;
    });




    const div = document.createElement("div");
    div.innerHTML = `<Modal ${props}></Modal>`;
    document.body.appendChild(div);
    const modal = new Vue({
        el: div,
        components: [Modal],
        data: Object.assign(_props, {
            show: false
        }),
        computed: {},
        method: {

        },
        created() {

        }
    }).$children[0];



    return {
        show(props) {
            if ('title' in props) {
                modal.title = props.title;
            }

            if ('icon' in props) {
                modal.icon = props.icon;
            }

            // modal.zIndex = getZindex()

            modal.show = true;
        },

        hide() {
            modal.$parent.show = false;
        },

        component: modal
    }
}

export default Modal;