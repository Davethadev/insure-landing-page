const hamburgerIcon = document.querySelector('.hamburger-icon')
const headerMobileLinks = document.querySelector('.header-mobile-links')
// const headerTextImageWrapper = document.querySelector('.header-text-image-wrapper')
// const header = document.querySelector('.header')
// const headerText = document.querySelector('.header-text')
// const imageIntro = document.querySelector('.image-intro-mobile')

hamburgerIcon.addEventListener('click', function() {
    headerMobileLinks.classList.toggle('active')
    // headerTextImageWrapper.classList.toggle('active')
    // header.classList.toggle('active')
    // headerText.classList.toggle('active')
    // imageIntro.classList.toggle('active')
    if (this.classList.contains('active')) {
        this.innerHTML = `
        <img src="./images/icon-hamburger.svg" alt="">
        `
    } else {
        this.innerHTML = `
        <img src="./images/icon-close.svg" alt="">
        `
    }
    this.classList.toggle('active')
})
