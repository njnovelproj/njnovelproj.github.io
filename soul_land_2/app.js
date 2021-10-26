
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
function change(){
var parent = document.getElementById("description")
var btn = document.getElementById("btn")
if(!is_changed){
    btn.innerHTML = "<"
    parent.children[0].innerHTML = "History"
    parent.children[2].innerHTML = `Huo Yuhao was born as the son of the Duke of the White Tiger Clan and his maid. Following the Duke's departure to the on-going war, the Duchess took over the reins of the manor and, being jealous and seeing Huo Yuhao as a threat to her children, secluded him and his mother in a shack making up stories that she contracted an infectious disease. This plus the malnourishment caused Huo Yuhao's mother, who already had a weak constitution, to fall sick and die when Huo Yuhao was 10 years old. He vowed to become a great Spirit Master and take revenge.

    At the age of six, he awakened his spirit, an extremely rare variant body spirit known as Spirit Eyes. However, at the time of awakening, his Spirit Power was only at rank 1 and it took him 5 years to get to rank 10 which is 2 years more than what people usually take.`

}else{
    btn.innerHTML = ">"
    parent.children[0].innerHTML = "Personality"
    parent.children[2].innerHTML = `Huo Yuhao is a kind person, not hesitating to help others in need. He has a strong determination and works very hard towards achieving his goals. He is a bit distrustful of others since his past experiences. Sadly despite his kind nature, due to his past, he has become narrow-minded and filled with an inner hatred that blinds him if it is related to his past.`
}
is_changed = !is_changed
}