document.addEventListener('DOMContentLoaded', function (){

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    const navButton = document.querySelector('.navbar-toggler')
    // const videoClick = document.getElementById('video-wrap')

    function addShadow() {
        if (window.scrollY >= 50) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    }

    function addShadowNavBar() {
        nav.classList.add('shadow-bg');
        // if (nav.classList.contains('shadow-bg')) {
        //     nav.classList.remove('shadow-bg');
        // } else {
        // }
    }

    // function hideVideo() {
        
    // }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))




    window.addEventListener('scroll', addShadow);
    nav.addEventListener('click', addShadowNavBar);
})