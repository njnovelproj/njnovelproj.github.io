
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
        parent.children[0].innerHTML = "Hospitality"
        parent.children[2].innerHTML = `Prior to his rebirth in Soul Land (Douluo Dalu), he was a member of the Outer Sect of the Tang Sect. Tang Sect was a school of assassins who specialized in Poisons and Hidden Weapon. Among the Tang Sect Outer Sect disciples, he was the third most senior and therefore came to be known as Tang San. Even among them, he was considered a genius not seen in two hundred years. Wanting to know the secrets of the Tang Sect that was only taught only to the Inner Sect disciples, he broke into their sacred place stealing the knowledge. Having read and mastered its contents, knowing he committed a crime, he committed suicide by jumping off the Hell's Peak

        Suicide.gif
        Upon his birth in Soul Land, (Douluo Dalu) he realized that he retained his memories from his previous life. Coincidentally he was named Tang San. He was raised by his father Tang Hao who was an alcoholic and a blacksmith, he was a spirit master too (Douluo) in the village of the Holy Spirit.`

    }else{
        btn.innerHTML = ">"
        parent.children[0].innerHTML = "Personality"
        parent.children[2].innerHTML = `Tang San possesses a very calm and serene personality. He is kind, thoughtful of others, and selfless. He always calculates his options before taking action. As a person of two lives, since childhood, he possessed the maturity of an adult. His thirst for knowledge is astounding as in his previous life, and that thirst for knowledge was the reason he committed suicide. He deeply loves his parents and has a deep regard for his friends, especially Xiao Wu. He would selflessly put himself in front of danger to help his friends. He harbors a dark personality in which he eliminates, dissipates, or renders those who oppose him dead or imbecile if they're considered as enemies who can no longer be reconciled with. Tang San appears to be an intellectual and cool-headed person in combat. He keeps to his promises, like protecting Xiao Wu "forever".`
    }
    is_changed = !is_changed
}