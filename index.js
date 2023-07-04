// interactive header
const links = document.querySelectorAll('.with-icon');
const svgs = document.querySelectorAll('.with-icon>svg>path');
const topLevelEntryContainers = document.querySelectorAll('.top-level-entry-container');

links[0].addEventListener('click', (e) => {
    topLevelEntryContainers[0].classList.toggle('show-sub-menu');
    if (!links[0].classList.contains('activeSvg')) {
        links[0].classList.add('activeSvg');
        links[0].classList.add('activeLink');
        svgs[0].classList.add('activePath');
    }
    else if (links[0].classList.contains('activeSvg')) {
        links[0].classList.remove('activeSvg');
        links[0].classList.remove('activeLink');
        svgs[0].classList.remove('activePath');

        links[0].classList.add('inactiveSvg');

        setTimeout(() => {
            links[0].classList.remove('inactiveSvg');
        }, 500);
    }
})

links[1].addEventListener('click', (e) => {
    topLevelEntryContainers[1].classList.toggle('show-sub-menu');
    if (!links[1].classList.contains('activeSvg')) {
        links[1].classList.add('activeSvg');
        links[1].classList.add('activeLink');
        svgs[1].classList.add('activePath');
    }
    else if (links[1].classList.contains('activeSvg')) {
        links[1].classList.remove('activeSvg');
        links[1].classList.remove('activeLink');
        svgs[1].classList.remove('activePath');

        links[1].classList.add('inactiveSvg');

        setTimeout(() => {
            links[1].classList.remove('inactiveSvg');
        }, 500);
    }
})

// interactive nav side
const burgerMenu = document.querySelector('#burger-menu');
const navSide = document.querySelector('main>nav');
const btnClose = document.querySelector('#btn-close');
const body = document.querySelector('body');
const subMenusSide = document.querySelectorAll('.sub-menu');

burgerMenu.addEventListener('click', () => {
    navSide.classList.add('nav-side');
    body.style.overflowY = 'hidden';
})

btnClose.addEventListener('click', () => {
    navSide.classList.remove('nav-side');
    body.style.overflowY = 'visible';
})

links[2].addEventListener('click', () => {
    subMenusSide[0].classList.toggle('show-sub-menu-side');
    if (!links[2].classList.contains('activeSvg')) {
        links[2].classList.add('activeSvg');
        links[2].classList.add('activeLink');
        svgs[2].classList.add('activePath');
    }
    else if (links[2].classList.contains('activeSvg')) {
        links[2].classList.remove('activeSvg');
        links[2].classList.remove('activeLink');
        svgs[2].classList.remove('activePath');

        links[2].classList.add('inactiveSvg');

        setTimeout(() => {
            links[2].classList.remove('inactiveSvg');
        }, 500);
    }
})

links[3].addEventListener('click', () => {
    subMenusSide[1].classList.toggle('show-sub-menu-side');
    if (!links[3].classList.contains('activeSvg')) {
        links[3].classList.add('activeSvg');
        links[3].classList.add('activeLink');
        svgs[3].classList.add('activePath');
    }
    else if (links[3].classList.contains('activeSvg')) {
        links[3].classList.remove('activeSvg');
        links[3].classList.remove('activeLink');
        svgs[3].classList.remove('activePath');

        links[3].classList.add('inactiveSvg');

        setTimeout(() => {
            links[3].classList.remove('inactiveSvg');
        }, 500);
    }
})