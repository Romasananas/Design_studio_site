let images = [
    {
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 mounths',
        cost: 'Upon request',
        url: './images/slider-pr1.jpg'
    },
    {
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 mounths',
        cost: 'Upon request',
        url: './images/slider-pr2.jpg'
    },
    {
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 mounths',
        cost: 'Upon request',
        url: './images/slider-pr3.jpg'
    },
];

function initSlider () {
    if (!images || !images.length) {
        return;
    }
}

let sliderImages = document.querySelector('.slider-images');
let sliderCities = document.querySelector('.cities');
let sliderAreas = document.querySelector('.areas');
let sliderTimes = document.querySelector('.times');
let sliderCosts = document.querySelector('.costs');
let sliderBtns = document.querySelectorAll('.completed-projects .slider-btn');
let sliderDots = document.querySelector('.slider-dots');
let sliderTitles = document.querySelector('.completed-projects__menu');

initImages();
initBtns();
initDots();
initProps();
initTitles();

function initImages () {
    images.forEach((image, index) => {
        let imageDiv = `<div class="image pr${index} ${index === 0? "active" : ""}"
        style="background-image:url(${images[index].url})"; data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
    });
}

function initBtns () {
    sliderBtns.forEach(btn => {
        btn.addEventListener ("click", function () {
            let curNumber = +sliderImages.querySelector('.active').dataset.index;
            let nextNumber;
            if (btn.classList.contains('back')) {
                nextNumber = curNumber === 0? images.length - 1: curNumber - 1;
            } else {
                nextNumber = curNumber === images.length - 1? 0: curNumber + 1;
            }
            moveSlide(nextNumber);
        });
    });
}

function initDots () {
    images.forEach((image, index) => {
        let dot = `<div class="slider-dot pr${index} ${index === 0? "active" : ""}"
         data-index="${index}"></div>`;
         sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider-dot").forEach(dot => {
        dot.addEventListener("click", function() {
            moveSlide(this.dataset.index);
        });
    });
}

function initProps () {
    let cityDiv = `<div class="text info-item__text">${images[0].city}</div>`;
    sliderCities.innerHTML += cityDiv;
    let areaDiv = `<div class="text info-item__text">${images[0].area}</div>`;
    sliderAreas.innerHTML += areaDiv;
    let timeDiv = `<div class="text info-item__text">${images[0].time}</div>`;
    sliderTimes.innerHTML += timeDiv;
    let costDiv = `<div class="text info-item__text">${images[0].cost}</div>`;
    sliderCosts.innerHTML += costDiv;
}

function changeProps (num) {
    if (!images[num].city || !images[num].area || !images[num].time || !images[num].cost) return;
    let sliderCity = sliderCities.querySelector('.info-item__text');
    sliderCity.innerText = images[num].city;
    let sliderArea = sliderAreas.querySelector('.info-item__text');
    sliderArea.innerText = images[num].area;
    let sliderTime = sliderTimes.querySelector('.info-item__text');
    sliderTime.innerText = images[num].time;
    let sliderCost = sliderCosts.querySelector('.info-item__text');
    sliderCost.innerText = images[num].cost;
}

function initTitles() {
    let current = sliderTitles.querySelector(".completed-projects__menu-link");
    current.classList.add("active");
    sliderTitles.querySelectorAll(".completed-projects__menu-link").forEach((title,index) => {
        title.addEventListener("click", function() {
            moveSlide(index);
        })});
}

function moveSlide (num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".pr" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".pr" + num).classList.add("active");
    sliderTitles.querySelector(".active").classList.remove("active");
    sliderTitles.querySelector(".pr" + num).classList.add("active");
    changeProps(num);
}

document.addEventListener('DOMContentLoaded', initSlider);
