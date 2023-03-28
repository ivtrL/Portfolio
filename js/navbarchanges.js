export function navChangePosition() {
    const navClass = document.querySelector('.navegação');
    const logoName = document.querySelector('.logo-nome');
    const navLinkName = document.querySelectorAll('.nav-nome');
    document.addEventListener('scroll', () => {
        const offset = window.scrollY;
        if (window.matchMedia('(min-width: 767px)').matches) {
            if (offset > 90) {
                navClass.classList.add('nav_bottom');
                navClass.classList.remove('navegação');
                logoName.style.display = 'none';
                navLinkName.forEach(name => {
                    name.style.display = 'none';
                });
            }
            else {
                navClass.classList.add('navegação');
                navClass.classList.remove('nav_bottom');
                logoName.style.display = null;
                navLinkName.forEach(name => {
                    name.style.display = null;
                });
            }
        }
    });
}