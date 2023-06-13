const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
      faq.addEventListener('click', () => {
          faq.classList.toggle('open');

            const icon = faq.querySelector('.faq__icon i');
            if(icon.className === 'uil uil-plus') {
                 icon.className = "uil uil-minus";
            } else {
               icon.className = "uil uil-plus";
          }

     })
})


// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menu = document.querySelector("#open-menu-btn");
const menu = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
   menu.style.display = "flex";
   closeBtn.style.display = "inline-block";
   menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
   menu.style.display = "none";
   closeBtn.style.display = "none";
   menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)