import PassToggle from "./class/PassToggle";
import Modal from "./class/Modal";
import SideNav from "./class/SideNav";

const onDomReady = function() {
    new PassToggle();
    new SideNav();
    const modal = new Modal();

    modal.openModal(document.querySelector('#cookie-modal'));
    modal.openModal(document.querySelector('#wizard-modal'));
}

document.addEventListener('DOMContentLoaded', function(){

    onDomReady();

}, false);
