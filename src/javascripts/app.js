import PassToggle from "./class/PassToggle";
import Modal from "./class/Modal";

const onDomReady = function() {
    new PassToggle();
    new Modal();
}


document.addEventListener('DOMContentLoaded', function(){

    onDomReady();

}, false);

