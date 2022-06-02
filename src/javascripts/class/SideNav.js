class SideNav {
    constructor() {
        this.sideNav = document.querySelector('[data-side-nav]');
        const sideNavToggles = [...document.querySelectorAll('[data-side-toggle]')];

        sideNavToggles.length && sideNavToggles.forEach(btn => {
            btn.addEventListener('click', e => this.toggleNav() )
        })
    }

    toggleNav() {
        if (this.sideNav.classList.contains('pointer-events-none')) {
            this.sideNav.classList.remove('-translate-x-72', 'opacity-0', 'pointer-events-none')
        } else {
            this.sideNav.classList.add('-translate-x-72', 'opacity-0', 'pointer-events-none')
        }
    }
}

export default SideNav
