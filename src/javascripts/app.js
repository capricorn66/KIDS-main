import PassToggle from "./class/PassToggle";
import Modal from "./class/Modal";
import SideNav from "./class/SideNav";

const onDomReady = function() {
    new PassToggle();
    new Modal();
    new SideNav();
}


document.addEventListener('DOMContentLoaded', function(){

    onDomReady();

    const cookieModal = document.querySelector('#cookie-modal');
    const modal = new Modal();
    modal.openModal(cookieModal)

}, false);

