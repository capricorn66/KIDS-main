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

}, false);

