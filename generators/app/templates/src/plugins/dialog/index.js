import Modal from './confirm'

let modalInstance;

function getModalInstance(options) {

    modalInstance = modalInstance || Modal.newInstance(options);

    return modalInstance;
}


function confirm(options) {
    let instance = getModalInstance(options);

    options.onRemove = function() {
        modalInstance = null;
    }
    instance.show(options);
}


Modal.alert = function(props = {}) {
    props.icon = 'warn';
    // console.log(props);
    return confirm(props);
}

export default Modal;