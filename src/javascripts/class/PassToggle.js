class PassToggle {
    constructor() {
        const passBtns = [...document.querySelectorAll('[data-input-password]')]
        passBtns.length && passBtns.forEach(btn => {
            const iconPassBtn = btn.querySelector('i')
            const passInput = btn.dataset.inputPassword && document.querySelector(btn.dataset.inputPassword)
            if (passInput) {
                btn.addEventListener('click', e => this.togglePass(iconPassBtn, passInput))
            }
            else {
                console.warn('It seems like password input can\'t be selected')
            }
        })
    }
    togglePass(iconPassBtn, passInput) {
        if (passInput.type === "password") {
            passInput.type = "text";
            iconPassBtn.classList.remove('icon-eye-close')
            iconPassBtn.classList.add('icon-eye-open')
        } else {
            passInput.type = "password";
            iconPassBtn.classList.add('icon-eye-close')
            iconPassBtn.classList.remove('icon-eye-open')
        }
    }
}

export default PassToggle
