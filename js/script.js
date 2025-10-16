window.onload = init;
let canvas, ctx;

function init() {
    console.log("Page loaded");

    // first, get the canvas element
    canvas = document.querySelector("#myCanvas");

    // in order to be able to draw on it, we need to get 
    // its "context"
    ctx = canvas.getContext("2d");

    defineKeyboardEvents();

    // ask the browser to call the animationLoop
    // function after 1/60th of a second
    requestAnimationFrame(animationLoop);
}

function defineKeyboardEvents() {
    document.onkeydown = function (e) {
        console.log("key down: " + e.key);
        if (e.key === "ArrowRight") {
            speedX = 2;
        } else if (e.key === "ArrowLeft") {
            speedX = -2;
        }
    }

    document.onkeyup = function (e) {
        console.log("key up: " + e.key);
        speedX = 0;
    }
}

let x = 0
let speedX = 0;
function animationLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

     drawEverything();
    // move the rectangle
    
    x += speedX;
    if (x+200 > canvas.width) {
        x = canvas.width - 200;
        speedX = 0; // rectangle width
    }
    if (x < 0) {
        x = 0;
        speedX = 0;
    }
    

   

    // ask the browser to call the animationLoop
    // function after 1/60th of a second
    requestAnimationFrame(animationLoop);
}

function drawEverything() {
    // draw a simple rectangle
    // parameters: x, y, width, height
    ctx.fillStyle = "red"; // red color
    ctx.fillRect(x, 50, 200, 100);

    ctx.fillStyle = "blue"; // blue color
    ctx.fillRect(100, 200, 150, 75);

    // "stroke" means "draw only the contour"
    ctx.strokeStyle = "green"; // green color
    ctx.lineWidth = 5; // 5 pixels width
    ctx.strokeRect(100, 350, 150, 75);
}
