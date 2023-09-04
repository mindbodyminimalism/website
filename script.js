document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    const dots = document.querySelectorAll(".dot");
    
    dots.forEach(dot => {
        dot.style.transform = `translateY(${scrollY * dot.getAttribute("data-speed")}px)`;
    });
});




document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    
    const redDot = document.querySelector(".redDot");
    const yellowDot = document.querySelector(".yellowDot");
    const blueDot = document.querySelector(".blueDot");
    const greenDot = document.querySelector(".greenDot");
    const orangeDot = document.querySelector(".orangeDot");
    const indigoDot = document.querySelector(".indigoDot");
    const purpleDot = document.querySelector(".purpleDot");
    const pinkDot = document.querySelector(".pinkDot");
    const greyDot = document.querySelector(".greyDot");
    

    redDot.style.transform = `translateY(${scrollY * .9}px) translateX(${scrollY * 0.1}px)`;
    yellowDot.style.transform = `translateY(${scrollY * 1.9}px) translateX(${scrollY * -0.2}px)`;
    blueDot.style.transform = `translateY(${scrollY * -0.9}px) translateX(${scrollY * 0.15}px)`;

    greenDot.style.transform = `translateY(${scrollY * 0.25}px) translateX(${scrollY * -0.05}px)`;
    orangeDot.style.transform = `translateY(${scrollY * 0.5}px) translateX(${scrollY * 0.05}px)`;
    indigoDot.style.transform = `translateY(${scrollY * 0.1}px) translateX(${scrollY * -0.1}px)`;

    purpleDot.style.transform = `translateY(${scrollY * 0.25}px) translateX(${scrollY * -0.1}px)`;
    pinkDot.style.transform = `translateY(${scrollY * 0.5}px) translateX(${scrollY * 0.2}px)`;
    greyDot.style.transform = `translateY(${scrollY * 0.1}px) translateX(${scrollY * -0.05}px)`;
});
