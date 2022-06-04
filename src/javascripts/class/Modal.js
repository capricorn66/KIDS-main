class Modal {
    constructor() {
        this.body = document.querySelector('body');
        const modalOpenBtns = [...document.querySelectorAll('[data-modal-open]')];
        const modalCloseBtns = [...document.querySelectorAll('[data-modal-close]')];
        this.closeHandler = this.closeOnEsc.bind(this, modal)

        modalOpenBtns.length && modalOpenBtns.forEach(btn => {
            const modal = btn.dataset.modalOpen && document.querySelector(btn.dataset.modalOpen)
            if (modal) {
                btn.addEventListener('click', e => this.openModal(modal))
            }
            else {
                console.warn('It seems like modal can\'t be selected')
            }
        })

        modalCloseBtns.length && modalCloseBtns.forEach(btn => {
            const modal = btn.dataset.modalClose && document.querySelector(btn.dataset.modalClose)
            if (modal) {
                btn.addEventListener('click', e => this.closeModal(modal))
            }
            else {
                console.warn('It seems like modal can\'t be selected')
            }
        })
    }

    bindEsc() {
        document.addEventListener('keyup', this.closeHandler)
    }

    clearEsc() {
        document.removeEventListener('keyup', this.closeHandler)
    }

    closeOnEsc(modal, e) {
        this.clearEsc()
        e.key === 'Escape' && this.closeModal(modal)
    }

    openModal(modal) {

        modal.classList.add('shown') ;
        setTimeout(() => this.body.classList.add('modal-open'),100);
        this.bindEsc(modal);
    }

    closeModal(modal) {
        modal.classList.remove('shown');
        this.body.classList.remove('modal-open')
    }
}

export default Modal
