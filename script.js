window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    const icon = faq.querySelector('.faqs-icon i')
    if(icon.className === "fa-solid fa-plus"){
        icon.className = "fa-solid fa-minus"

    } else{
         icon.className = "fa-solid fa-plus"
    }
    })
})

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-bttn");
const closeBtn = document.querySelector("#close-menu-bttn");

menuBtn.addEventListener('click', () =>{   
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
    }
)

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        menu.style.display = "flex";
        closeBtn.style.display = "none";
        menuBtn.style.display = "none";
    } else {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
    }
});