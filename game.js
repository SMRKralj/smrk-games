var canvas = null,
    ctx = null;
var x = 50,
    y = 50;

window.requestAnimationFrame = (function() { return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(callback) { window.setTimeout(callback, 17); }; }());

function paint(ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.fillRect(x, y, 10, 10);
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}

function run() {
    window.requestAnimationFrame(run);
    act();
    paint(ctx);
}

function act() {
    x += 2;
    if (x > canvas.width) { x = 0; }
}

window.addEventListener('load', init, false);