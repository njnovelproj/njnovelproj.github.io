
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
    parent.children[2].innerHTML = `During an expedition of a research team in the Northern Lands of the Douluo Planet, they found a golden-silver patterned egg with Insulation of Soul Power of a Hundred Thousand years old spirit beast, during incubation time it hatched, and the level drop to less than ten years old, and a male baby got out from the egg. After hatching, he started to eat the shell of his own egg.

    Captain pilot of the team, Lan Xiao and his wife, Nan Cheng returned to Tian Dou Planet together with the team and adopted son, Tang Xuanyu.
    
    When Xuanyu was 6, his Spirit was rank 10, which is the max level innate soul power, he has " Innate Full Spirit Power ". Lan Xiao was worried about his son's safety, so he told Xuanyu to lie about his real power: his initial spirit rank was 3 and he attended school, Tian Luo Elementary Soul Academy - Zi Luo Branch, one year later because of sickness.
    
    Xuanyu studied in Zi Luo Branch Soul Academy for one year and was recommended to advance into Elite Youth Class in Tian Luo Elementary Soul Academy because he was the top of the class (best combat ability and spiritual power), and he passed the entrance exam.`

}else{
    btn.innerHTML = ">"
    parent.children[0].innerHTML = "Personality"
    parent.children[2].innerHTML = `As a child, Xuanyu was described as being "too well mannered". He always did as told and was rather blunt and naive, openly stating how he feels to others. He was also blissfully unaware of all the strange things happening around him. Overall, unlike other Soul Land protagonists, who were forced to grow up quickly, Xuanyu was a genuine child.

    However, after meeting Nana and training under her for a while, he matured at a rapid pace. He gained a calm sense towards battle and has shown genuine care for others. As he got older, he began displaying the qualities of a leader as well as being extremely sly and cunning. He also possesses business acumen and became the richest Shrek Student in his year.
    
    Later on he also showed both decisive and merciless streaks against his enemies.`
}
is_changed = !is_changed
}