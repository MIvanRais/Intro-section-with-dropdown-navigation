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