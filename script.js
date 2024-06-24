let toggleBtn = document.querySelector(".toggle-btn");
let toggleBtnIn = document.querySelector(".toggle-btn-in");
let span1 = document.querySelector(".toggle-btn span:nth-child(1)");
let span2 = document.querySelector(".toggle-btn span:nth-child(2)");
let scrollBtn = document.querySelector(".page-8-content button");
let testimonials = document.querySelector(".testimonials");
let leftSide = document.querySelector(".left-side");
let rightSide = document.querySelector(".right-side");
let kidImage = document.querySelector(".kid-img");
let parentImage1 = document.querySelector(".parent-img");
let parentImage2 = document.querySelector(".parent-img-2");
let splitTypes = document.querySelectorAll(".reveal-type");
let state = 0;

const ParentImageChanger = () => {
  if (state === 0) {
    toggleBtnIn.style.transform = "translateX(100%)";
    span1.style.color = "#5645da";
    span2.style.color = "#fff";
    leftSide.style.opacity = 0;
    rightSide.style.opacity = 1;
    parentImage1.style.transform = "translateX(-70%)";
    parentImage1.style.scale = 0.7;
    parentImage1.style.bottom = "-12%";
    parentImage1.style.filter = "blur(0.3rem)";
    parentImage2.style.left = "40%";
    parentImage2.style.bottom = 0;
    parentImage2.style.transform = "translateX(0)";
    parentImage2.style.scale = 1;
    parentImage2.style.filter = "blur(0)";
    state = 1;
  } else {
    toggleBtnIn.style.transform = "translateX(0)";
    span2.style.color = "#5646da";
    span1.style.color = "#fff";
    rightSide.style.opacity = 0;
    leftSide.style.opacity = 1;
    parentImage2.style.transform = "translateX(140%)";
    parentImage2.style.scale = 0.7;
    parentImage2.style.bottom = "-12%";
    parentImage2.style.filter = "blur(0.3rem)";
    parentImage1.style.left = "30%";
    parentImage1.style.scale = 1;
    parentImage1.style.filter = "blur(0)";
    parentImage1.style.transform = "translateX(0)";
    parentImage1.style.bottom = 0;

    state = 0;
  }
};

toggleBtn.addEventListener("click", ParentImageChanger);

function swiper() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: "9%",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      600: {
        slidesPerView: 1.5,
        spaceBetween: "9%",
      },
    },
  });
}

function lenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function splitAnimation() {
  splitTypes.forEach((char) => {
    const text = new SplitType(char, { types: "chars" });

    gsap.from(text.chars, {
      opacity: 0.4,
      stagger: 0.2,
      scrollTrigger: {
        trigger: char,
        scroller: "body",
        start: "top 80%",
        end: "top 0%",
        scrub: 3,
      },
    });
  });

  // ....................................page3Animation.............................................

  gsap.to(".page-3-content-back", {
    ease: "slow(0.9,1,false)",
    scale: 3,
    scrollTrigger: {
      trigger: ".page-3-content",
      start: "top 50%",
      end: "top -20%",
      scrub: 3,
    },
  });
}

function elemAnimation() {
  gsap.to(".elem1", {
    opacity: 1,
    duration: 0.7,
    scale: 1.01,
    scrollTrigger: {
      trigger: ".elem1",
      start: "top 50%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
      ease: "circ.out",
    },
  });

  gsap.to(".elem2", {
    opacity: 1,
    duration: 0.7,
    scale: 1.01,
    scrollTrigger: {
      trigger: ".elem2",
      start: "top 50%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
      ease: "circ.out",
    },
  });

  gsap.to(".elem3", {
    opacity: 1,
    duration: 0.7,
    scale: 1.01,
    scrollTrigger: {
      trigger: ".elem3",
      start: "top 50%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
      ease: "circ.out",
    },
  });

  gsap.to(".elem4", {
    opacity: 1,
    duration: 0.7,
    scale: 1.01,
    scrollTrigger: {
      trigger: ".elem4",
      start: "top 50%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
      ease: "circ.out",
    },
  });

  gsap.to(".elem5", {
    opacity: 1,
    duration: 0.7,
    scale: 1.01,
    scrollTrigger: {
      trigger: ".elem5",
      start: "top 50%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
      ease: "circ.out",
    },
  });

  gsap.to(".elem6", {
    opacity: 1,
    duration: 0.7,
    scale: 1.01,
    scrollTrigger: {
      trigger: ".elem6",
      start: "top 50%",
      end: "bottom 30%",
      toggleActions: "play reset play reset",
      ease: "circ.out",
    },
  });
}

function page5Animation() {
  gsap.from(".page5-content-left", {
    delay: 0.3,
    duration: 1,
    opacity: 0,
    x: -300,
    scrollTrigger: {
      trigger: ".page-5-content",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play reset play reset",
    },
  });

  gsap.from(".page5-content-right", {
    delay: 0.3,
    duration: 1,
    opacity: 0,
    x: 300,
    scrollTrigger: {
      trigger: ".page-5-content",
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play reset play reset",
    },
  });
}

function imageSelector() {
  let image1 =
    "https://www.firstinmath.in/Content/Theme/img/2023/girl1-min.png";
  let image2 =
    "https://www.firstinmath.in/Content/Theme/img/2023/girl4-min.png";
  let image3 = "https://www.firstinmath.in/Content/Theme/img/2023/boy3-min.png";
  let image4 =
    "https://www.firstinmath.in/Content/Theme/img/2023/girl2-min.png";
  let image5 = "https://www.firstinmath.in/Content/Theme/img/2023/boy2-min.png";

  let random = Math.random();

  if (random > 0 && random < 1 / 5) {
    kidImage.src = image1;
  } else if (random > 1 / 5 && random < 2 / 5) {
    kidImage.src = image2;
  } else if (random > 2 / 5 && random < 3 / 5) {
    kidImage.src = image3;
  } else if (random > 3 / 5 && random < 4 / 5) {
    kidImage.src = image4;
  } else if (random > 4 / 5 && random < 1) {
    kidImage.src = image5;
  }
}

let mediaQuery = window.matchMedia("(max-width:600px)");

function headerAnimation() {
  let tl = gsap.timeline();

  if (mediaQuery.matches) {
    tl.from(".navbar img ,.navbar button", {
      stagger: 0.3,
      delay: 0.5,
      opacity: 0,
      y: -50,
    });

    tl.from(
      ".header-content-left",
      {
        opacity: 0,
        x: -50,
      },
      "left-right"
    );

    tl.from(
      ".header-content-right",
      {
        opacity: 0,
        x: 150,
      },
      "left-right"
    );
  } else {
    tl.from(".navbar :nth-child(n)", {
      delay: 0.5,
      opacity: 0,
      y: -50,
      stagger: 0.14,
    });

    tl.from(
      ".header-content-left",
      {
        opacity: 0,
        x: -50,
      },
      "left-right"
    );

    tl.from(
      ".header-content-right",
      {
        opacity: 0,
        x: 150,
      },
      "left-right"
    );
  }
}

lenis();
swiper();
splitAnimation();
elemAnimation();
imageSelector();
page5Animation();

headerAnimation();
mediaQuery.addListener(headerAnimation);
