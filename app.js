var container = document.getElementById("novel_container")


Array.prototype.forEach.call(container.children, child => {
    child.addEventListener("mouseover", function () {
        child.children[1].style.display = "block"
    })
    child.addEventListener("mouseout", function () {
        child.children[1].style.display = "none"
    })
});

var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
var canvas = document.getElementById("myCanvas");
canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = height; //document.height is obsolete
var ctx = canvas.getContext("2d");
var grd = ctx.createLinearGradient(0, -1000, 0, canvas.height + 10);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "black");


function drawBall() {
    var x = Math.floor(Math.random() * document.body.clientWidth);
    var y = Math.floor(Math.random() * height);
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFFFFF96";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 1000; i++) {
        drawBall();
    }

}
// draw()
  setInterval(draw, 1000);