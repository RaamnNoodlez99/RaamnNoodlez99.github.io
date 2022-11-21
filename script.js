"use strict";

let text = document.getElementById('text');

let stars1 = document.getElementById('stars1');
let stars2 = document.getElementById('stars2');
let stars3 = document.getElementById('stars3');
let stars4 = document.getElementById('stars4');

let sam = document.getElementById('sam');
let eric = document.getElementById('eric');
let aboutDiv = document.getElementById('about');
let donutMan = document.getElementById('donutMan');

let opacity = 1;
let lastScrollTop = 0;

window.addEventListener('scroll', function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;


    let value = window.scrollY;

    if(value*0.25 <= 50){
        console.log(value * 0.25);
        stars1.style.left = value * 0.25 + 'px';
        stars2.style.left = value * 0.25 + 'px';
        stars3.style.left = value * 0.25 + 'px';
        stars4.style.left = value * 0.25 + 'px';
    }

    if(value*4 <= 1500){
        sam.style.transform = 'translateY(' + value * 1.05 + 'px)';
        eric.style.transform = 'translateY(' + value * 1.05 + 'px)';
    }

    if(value*4 >= 3100){
        donutMan.style.transform = 'rotate(90deg) translateY(' + (value-800) * -0.2 + 'px)';
    }
    // if (st > lastScrollTop){
    //     if(opacity > 0){
    //         opacity = opacity - 0.02;
    //     }
    //     sam.style.opacity = opacity;
    //     eric.style.opacity = opacity;
    //  } else {
    //     if(opacity < 1){
    //         opacity = opacity + 0.05;
    //     }
    //     sam.style.opacity = opacity;
    //     eric.style.opacity = opacity;
    //  }
    //  lastScrollTop = st <= 0 ? 0 : st;

    if(aboutDiv.getBoundingClientRect().top <= sam.getBoundingClientRect().bottom){
        if(opacity > 0){
            opacity = opacity - 0.05;
            sam.style.opacity = opacity;
            eric.style.opacity = opacity;
            console.log('someting');
        }
    }else{
        if(opacity < 1){
            opacity = opacity + 0.25;
            sam.style.opacity = opacity;
            eric.style.opacity = opacity;
            console.log('someting');
        }
    }

    text.style.marginRight = value * 4 + 'px';
})

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('ashir');

    const rekt = anchor.getBoundingClientRect();

    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })


})

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

function slider(){
    let slider = document.querySelector(".slider");
    let list = document.querySelector(".slider-list");
    let item = document.querySelectorAll(".slider-item");
    let list2;

    const speed = 0.5;

    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone(){
        list2 = list.cloneNode(true);
        slider.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst(){
        x -= speed;

        if(width >= Math.abs(x)){
            list.style.left = `${x}px`;
        }else{
            x = width;
        }
    }

    function moveSecond(){
        x2 -= speed;

        if(list2.offsetWidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`;
        }else{
            x2 = width;
        }
    }

    function hover(){
        clearInterval(a);
        clearInterval(b);
    }

    function unhover(){
        a = setInterval(moveFirst, 20);
        b = setInterval(moveSecond, 20);
    }
    clone();

    let a = setInterval(moveFirst, 20);
    let b = setInterval(moveSecond, 20);

    slider.addEventListener("mouseenter", hover);
    slider.addEventListener("mouseleave", unhover);
}

slider();



//for transition:
let pro1_img = document.getElementById('pro1-link');
let ship = document.getElementById('ship');
let proj1Back = document.getElementById('proj1Background');
let proj2Back = document.getElementById('proj2Background');

pro1_img.onclick = (e) => {
    e.preventDefault();
    ship.style.animation = "moveShip 5500ms";
    proj1Back.style.animation = "moveProj 5500ms";
    setTimeout(function(){
        window.location = "project1/infographicfla.html";
    }, 5000);
}

//for transition:
let pro2_img = document.getElementById('pro2-link');

pro2_img.onclick = (e) => {
    e.preventDefault();
    ship.style.animation = "moveShip 6s";
    proj2Back.style.animation = "moveProj 5500ms";
    setTimeout(function(){
        window.location = "project2/saminspace.html";
    }, 5000);
}

//for sound:
let sound = false;
let audio;
audio = new Audio('spaceship_ambient.mp3');

let soundButton = document.getElementById("sound-outer");

soundButton.onclick = () => {
    if(sound == false){
        soundButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        audio.play();
        sound = true;
    }else{
        soundButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        audio.pause();
        sound = false;
    }
}