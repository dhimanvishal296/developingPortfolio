// ========================================
// creating a portfolio tabbed component
// ========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    // console.log(e.target);s

    // we will get which child element was clicked
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);
   
    p_btn.forEach((curElem) => curElem.classList.remove("p_btn_active"));
    
    p_btn_clicked.classList.add("p_btn_active");
    
});

//  *********************************************************
//          swiper js code
// ************************************************

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
        delay: 2500,
       
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//  *********************************************************
//          animate number
// ************************************************

        
const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);

//  *********************************************************
//         creating a responsive navbar component
// ********************************************************************
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElement = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {

    headerElement.classList.toggle('active');
})


// ========================================
// sticky navbar
// ========================================

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(sectionHero);

// ========================================
//   JS media query
// ================================================================
  
const myjsmedia = (widthSize) => {
    if(widthSize.matches){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay:{
                delay: 2500,
               
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

    }
    else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay:{
                delay: 2500,
               
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

    }
}

 const widthSize =  window.matchMedia("(max-width: 780px)")
//   call listener functionn at run time  
myjsmedia(widthSize);

// attach listener function on state change 
 widthSize.addEventListener('change',myjsmedia);