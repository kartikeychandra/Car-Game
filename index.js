let raceimg = document.getElementById('race');
let rx = parseInt(window.getComputedStyle(raceimg, null).getPropertyValue('margin-left'));
let blueimg = document.getElementById('blue');
let bx = parseInt(window.getComputedStyle(blueimg, null).getPropertyValue('margin-left'));
let blue = document.querySelector('.blueimg')
let by = parseInt(window.getComputedStyle(blue, null).getPropertyValue('margin-top'));
let race = document.querySelector('.raceimg')
let ry = parseInt(window.getComputedStyle(race, null).getPropertyValue('margin-top'));
let arr = ["370px", "600px", "830px", "1060px"];
blueimg.style.marginLeft = arr[Math.floor(Math.random()*arr.length)];
offsetY = Math.abs(ry-by);
function stop(){
    if(offsetY > 185 && rx!==bx){
        let arr = ["370px", "600px", "830px", "1060px"];
        blueimg.style.marginLeft = arr[Math.floor(Math.random()*arr.length)];
    }
}
setInterval(stop, 3000)
document.onkeydown = function(e){
     if((e.key == "ArrowRight" && offsetY > 185) || (e.key == "ArrowRight" && offsetY <= 185 && rx!==bx)){
        let raceimg = document.getElementById('race');
        let rx = parseInt(window.getComputedStyle(raceimg, null).getPropertyValue('margin-left'));
        raceimg.style.marginLeft = rx + 230 + "px"
        if(rx==1060){
            raceimg.style.marginLeft = rx + "px"
        }
    }
    if(e.key == "ArrowLeft" && ((offsetY > 185 && rx!==bx) || (rx==bx && offsetY > 185) || (rx!==bx && offsetY <=185))){
        let raceimg = document.getElementById('race');
        let rx = parseInt(window.getComputedStyle(raceimg, null).getPropertyValue('margin-left'));
        raceimg.style.marginLeft = rx - 230 + "px"
        if(rx==370){
            raceimg.style.marginLeft = rx + "px"
        }
    }
}
setInterval(() => {
    let blue = document.querySelector('.blueimg')
    let by = parseInt(window.getComputedStyle(blue, null).getPropertyValue('margin-top'));
    let race = document.querySelector('.raceimg')
    let ry = parseInt(window.getComputedStyle(race, null).getPropertyValue('margin-top'));
    let rx = parseInt(window.getComputedStyle(raceimg, null).getPropertyValue('margin-left'));
    let blueimg = document.getElementById('blue');
    let bx = parseInt(window.getComputedStyle(blueimg, null).getPropertyValue('margin-left'));
    offsetY = Math.abs(ry-by);
    let burst = document.getElementById("burst")
    let gameover = document.querySelector('.gameover')
    if(offsetY <= 185 && rx==bx){
        blue.style.animation = "none"
        blue.style.marginTop = "350px"
        blueimg.style.marginLeft = rx + "px"
        burst.style.visibility = "visible"
        burst.style.marginLeft = rx - 50 + "px"
        blueimg.style.display = "none"
        raceimg.style.display = "none"
        gameover.style.visibility = "visible"
    }
}, 100);
