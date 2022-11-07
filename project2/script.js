//for transition:
let homeBack = document.getElementById('homeBack');
let pro1_img = document.getElementById('back-link');
let ship = document.getElementById('ship');

pro1_img.onclick = (e) => {
    e.preventDefault();
    ship.style.animation = "moveShip 5s";
    homeBack.style.animation = "moveBack 5500ms";
    setTimeout(function(){
        window.location = "../index.html";
    }, 5000);
}