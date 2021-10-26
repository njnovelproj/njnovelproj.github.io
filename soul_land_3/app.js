
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

var is_changed = false
function change() {
    var parent = document.getElementById("description")
    var btn = document.getElementById("btn")
    if (!is_changed) {
        btn.innerHTML = "<"
        parent.children[0].innerHTML = "Personality"
        parent.children[2].innerHTML = `In Soul Land 4, due to his amnesia, Wulin acts rather stoic. He talks very little and regularly has an emotionless expression. Still, he retains his kind heart, being grateful to Le Qingling for taking him in.

    But in Soul Land 4 volume 14, when he met with Gu Yuena, his heart was open for her again, and he turned back to the outgoing man.
    
    In Soul Land 4 volume 16, after he and Xuanyu both knew each other's father-son relationship, he became quite stable and mature.`

    } else {
        btn.innerHTML = ">"
        parent.children[0].innerHTML = "Personality"
        parent.children[2].innerHTML = `Tang Wulin is an honest and kindhearted individual, which is apparent when he saved Na'Er from a group of teenagers, who were trying to kidnap her and sell her off. He is incredibly hardworking, not letting the words of others affect him negatively. Also having been raised in an impoverished family, he is significantly more sensible and mature than others of his age.`
    }
    is_changed = !is_changed
    height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    canvas.height = height; //document.height is obsolete
}