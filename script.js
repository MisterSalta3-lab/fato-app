/* ===========================================================
   HAPPY BIRTHDAY SALMA
   SCRIPT.JS
   PART 1 / 5

   Core System
   Start Button
   Music
   Typing Message
   Celebration Setup
=========================================================== */


// ===============================
// Elements
// ===============================

const startBtn = document.getElementById("startBtn");

const intro = document.getElementById("intro");

const celebration = document.getElementById("celebration");

const music = document.getElementById("bgMusic");

const messageBox = document.getElementById("typingMessage");

const giftBox = document.getElementById("giftBox");

const giftMessage = document.getElementById("giftMessage");

const cake = document.getElementById("cake");

const blowBtn = document.getElementById("blowBtn");

const heartsContainer =
document.getElementById("heartsContainer");

const flowersContainer =
document.getElementById("flowersContainer");

const balloonsContainer =
document.getElementById("balloonsContainer");

const confettiContainer =
document.getElementById("confettiContainer");

const fireworksContainer =
document.getElementById("fireworksContainer");



// ===============================
// Birthday Message
// ===============================


const birthdayMessage = `

Dear Salma ❤️

Today is not just another day...

It is the day someone special
came into this world.

I hope your life is always filled
with happiness, success and love.

Keep smiling.

Keep shining.

Because the world is more beautiful
with you in it.

Happy Birthday Salma ❤️

`;



// ===============================
// Variables
// ===============================


let typingIndex = 0;

let candlesOff = false;

let started = false;



// ===============================
// Start Celebration
// ===============================


startBtn.addEventListener(
"click",

()=>{


if(started)
return;


started=true;



// Hide intro

intro.style.display="none";



// Show celebration

celebration.style.display="flex";

celebration.classList.add("show");



// Start music

music.volume=.5;


music.play()
.catch(()=>{});



// Start Effects

startTyping();

createStars();

createFloatingHearts();

createConfettiBurst();

createFireworks();



}

);



// ===============================
// Typing Effect
// ===============================


function startTyping(){


messageBox.innerHTML="";


typingIndex=0;



let typing=setInterval(()=>{


messageBox.innerHTML += 
birthdayMessage.charAt(typingIndex);



typingIndex++;



if(typingIndex >= birthdayMessage.length){

clearInterval(typing);


}



},50);



}



// ===============================
// Random Helper
// ===============================


function random(min,max){

return Math.random()*(max-min)+min;

}



// ===============================
// Create Floating Hearts
// ===============================


function createFloatingHearts(){


setInterval(()=>{


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="absolute";


heart.style.left=random(0,100)+"vw";


heart.style.bottom="-50px";


heart.style.fontSize=random(18,45)+"px";


heart.style.animation=
"up 6s linear forwards";



heartsContainer.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);



},700);



}



// ===============================
// Create Flowers
// ===============================


function createFlower(){


let flower=document.createElement("div");


flower.innerHTML="🌹";


flower.style.position="absolute";


flower.style.left=random(0,100)+"vw";


flower.style.top="-50px";


flower.style.fontSize=random(25,50)+"px";


flower.style.animation=
"fall 7s linear forwards";



flowersContainer.appendChild(flower);



setTimeout(()=>{

flower.remove();

},7000);



}



setInterval(()=>{


createFlower();


},1200);



// ===============================
// Create Confetti
// ===============================


function createConfettiBurst(){


for(let i=0;i<150;i++){


let piece=document.createElement("span");


piece.style.position="absolute";


piece.style.width="10px";


piece.style.height="10px";


piece.style.left=
random(0,100)+"vw";


piece.style.top="-20px";


piece.style.background=
`hsl(${random(0,360)},100%,60%)`;



piece.style.borderRadius="50%";


piece.style.animation=
"confettiFall "+random(2,6)+"s linear forwards";



confettiContainer.appendChild(piece);



setTimeout(()=>{

piece.remove();

},6000);



}


}



// ===============================
// Gift Opening
// ===============================


giftBox.addEventListener(
"click",

()=>{


giftBox.style.transform=
"scale(1.5) rotate(20deg)";


setTimeout(()=>{


giftMessage.style.display="block";


createConfettiBurst();


},500);



}

);



// ===============================
// Cake Candles
// ===============================


blowBtn.addEventListener(
"click",

()=>{


if(candlesOff)
return;



candlesOff=true;



cake.innerHTML="🎂💨";



createConfettiBurst();



});



// ===============================
// End Part 1
// ===============================
/* ===========================================================
   HAPPY BIRTHDAY SALMA
   SCRIPT.JS
   PART 2 / 5

   Balloons
   Stars
   Particles
   Fireworks Engine
=========================================================== */



// ===============================
// Balloons System
// ===============================


function createBalloon(){


let balloon=document.createElement("div");


const colors=[

"🎈",
"🎈",
"🎈",
"🎈"

];


balloon.innerHTML=
colors[Math.floor(Math.random()*colors.length)];



balloon.style.position="absolute";


balloon.style.bottom="-100px";


balloon.style.left=
random(0,100)+"vw";



balloon.style.fontSize=
random(40,80)+"px";



balloon.style.animation=
"balloonUp "+random(6,12)+"s linear forwards";



balloonsContainer.appendChild(balloon);



setTimeout(()=>{


balloon.remove();


},12000);



}



setInterval(()=>{


createBalloon();


},1500);





// ===============================
// Stars Generator
// ===============================


function createStars(){


for(let i=0;i<120;i++){


let star=document.createElement("div");



star.style.position="absolute";


star.style.width=
random(1,4)+"px";



star.style.height=
star.style.width;



star.style.background="white";


star.style.borderRadius="50%";


star.style.left=
random(0,100)+"vw";



star.style.top=
random(0,100)+"vh";



star.style.opacity=
random(.2,1);



star.style.boxShadow=
"0 0 10px white";



star.style.animation=
"twinkleStar "+random(1,4)+"s infinite";



document.body.appendChild(star);



}



}




// ===============================
// Fireworks Canvas
// ===============================


const canvas =
document.createElement("canvas");


canvas.id="fireworkCanvas";


document.body.appendChild(canvas);



const ctx =
canvas.getContext("2d");



function resizeCanvas(){


canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;


}



resizeCanvas();



window.addEventListener(
"resize",
resizeCanvas
);




let fireworks=[];



// ===============================
// Firework Object
// ===============================


class Firework{


constructor(){


this.x=
random(100,canvas.width-100);



this.y=
canvas.height;



this.targetY=
random(100,canvas.height/2);



this.speed=
random(4,8);



this.radius=3;



this.color=
`hsl(${random(0,360)},100%,60%)`;



this.exploded=false;


this.particles=[];



}




update(){



if(!this.exploded){


this.y-=this.speed;



if(this.y<=this.targetY){


this.explode();


}



}


else{


this.particles.forEach(p=>{

p.update();

});


this.particles=
this.particles.filter(
p=>p.alpha>0
);


}




}




draw(){



if(!this.exploded){


ctx.beginPath();


ctx.arc(
this.x,
this.y,
this.radius,
0,
Math.PI*2
);


ctx.fillStyle=this.color;


ctx.fill();



}

else{


this.particles.forEach(p=>{

p.draw();

});


}



}




explode(){


this.exploded=true;



for(let i=0;i<80;i++){


this.particles.push(

new Particle(
this.x,
this.y,
this.color
)

);


}



}



}




// ===============================
// Particle Object
// ===============================


class Particle{


constructor(x,y,color){


this.x=x;

this.y=y;


this.color=color;



let angle=
Math.random()*Math.PI*2;



let velocity=
random(2,8);



this.vx=
Math.cos(angle)*velocity;



this.vy=
Math.sin(angle)*velocity;



this.alpha=1;


this.size=
random(2,5);


}




update(){


this.x+=this.vx;


this.y+=this.vy;



this.vy+=0.04;



this.alpha-=0.015;



}




draw(){



ctx.save();



ctx.globalAlpha=
this.alpha;



ctx.beginPath();



ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);



ctx.fillStyle=
this.color;



ctx.fill();



ctx.restore();



}



}



// ===============================
// Start Fireworks
// ===============================


function launchFirework(){


fireworks.push(
new Firework()
);



}



setInterval(()=>{


launchFirework();


},900);




// ===============================
// Animation Loop
// ===============================


function animateFireworks(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



fireworks.forEach(f=>{


f.update();


f.draw();


});



fireworks=
fireworks.filter(f=>{


if(!f.exploded)

return true;



return f.particles.length>0;



});



requestAnimationFrame(
animateFireworks
);



}



animateFireworks();



// ===============================
// End Part 2
// ===============================
/* ===========================================================
   HAPPY BIRTHDAY SALMA
   SCRIPT.JS
   PART 3 / 5

   Advanced Effects
   Gift Animation
   Candle Effects
   Hearts
   Music Control
=========================================================== */



// ===============================
// Music Controller
// ===============================


function fadeMusicIn(){


music.volume=0;


let volume=0;



let fade=setInterval(()=>{


volume+=0.02;


music.volume=volume;



if(volume>=0.5){


clearInterval(fade);


}



},100);



}





function toggleMusic(){


if(music.paused){


music.play();


}

else{


music.pause();


}



}



// ===============================
// Create Love Hearts Explosion
// ===============================


function heartExplosion(){



for(let i=0;i<80;i++){



let heart=document.createElement("div");



heart.innerHTML="❤️";



heart.style.position="fixed";



heart.style.left="50%";


heart.style.top="50%";



heart.style.fontSize=
random(15,45)+"px";



heart.style.zIndex="999";



let x=
random(-500,500);



let y=
random(-500,500);



heart.style.transition=
"all 2s ease";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform=
`translate(${x}px,${y}px) rotate(360deg)`;



heart.style.opacity="0";



},50);



setTimeout(()=>{


heart.remove();



},2200);



}



}



// ===============================
// Gift Advanced Animation
// ===============================


giftBox.addEventListener(
"mouseenter",

()=>{


giftBox.style.filter=
"drop-shadow(0 0 30px gold)";



}

);



giftBox.addEventListener(
"mouseleave",

()=>{


giftBox.style.filter="none";



}

);




// Replace Gift Click
// ===============================


giftBox.onclick=function(){



giftBox.innerHTML="🎁✨";



giftBox.style.animation=
"giftOpen 1s forwards";



setTimeout(()=>{



giftBox.innerHTML="💝";



giftMessage.style.display=
"block";



giftMessage.innerHTML=
`

<div class="giftText">

Salma ❤️

<br><br>

This little gift is a reminder...

<br>

You are someone special.

<br>

Never stop smiling.

<br>

Never stop dreaming.

<br><br>

✨ Happy Birthday ✨

</div>

`;



heartExplosion();


createConfettiBurst();



},1000);



};





// ===============================
// Candle Smoke Effect
// ===============================


function createSmoke(){



for(let i=0;i<20;i++){



let smoke=document.createElement("div");



smoke.innerHTML="☁️";



smoke.style.position="absolute";



smoke.style.left=
random(45,55)+"%";



smoke.style.top=
"45%";



smoke.style.fontSize=
random(20,40)+"px";



smoke.style.opacity=".8";



smoke.style.animation=
"smokeUp "+random(2,5)+"s ease forwards";



document.body.appendChild(smoke);



setTimeout(()=>{


smoke.remove();



},5000);



}



}




blowBtn.onclick=function(){



if(candlesOff)
return;



candlesOff=true;



cake.innerHTML="🎂";



createSmoke();


heartExplosion();



createConfettiBurst();



};




// ===============================
// Floating Love Messages
// ===============================


const loveWords=[


"❤️ Love",

"✨ Beautiful",

"🌹 Amazing",

"💖 Wonderful",

"⭐ Special",

"🎂 Happy Birthday"



];



function floatingWords(){



let word=document.createElement("div");



word.innerHTML=
loveWords[
Math.floor(
Math.random()*loveWords.length
)
];



word.style.position="fixed";


word.style.left=
random(10,90)+"vw";



word.style.bottom="-50px";



word.style.color="#ffb6df";



word.style.fontSize=
random(18,30)+"px";



word.style.textShadow=
"0 0 15px pink";



word.style.animation=
"wordFloat 7s linear forwards";



document.body.appendChild(word);



setTimeout(()=>{


word.remove();



},7000);



}



setInterval(()=>{


floatingWords();



},2500);




// ===============================
// Cursor Sparkles
// ===============================


document.addEventListener(
"mousemove",

(e)=>{


let sparkle=document.createElement("span");



sparkle.innerHTML="✨";



sparkle.style.position="fixed";



sparkle.style.left=
e.clientX+"px";



sparkle.style.top=
e.clientY+"px";



sparkle.style.pointerEvents=
"none";



sparkle.style.fontSize=
random(10,25)+"px";



sparkle.style.animation=
"sparkleMove 1s forwards";



document.body.appendChild(sparkle);



setTimeout(()=>{


sparkle.remove();



},1000);



});




// ===============================
// End Part 3
// ===============================
/* ===========================================================
   HAPPY BIRTHDAY SALMA
   SCRIPT.JS
   PART 3 / 5

   Advanced Effects
   Gift Animation
   Candle Effects
   Hearts
   Music Control
=========================================================== */



// ===============================
// Music Controller
// ===============================


function fadeMusicIn(){


music.volume=0;


let volume=0;



let fade=setInterval(()=>{


volume+=0.02;


music.volume=volume;



if(volume>=0.5){


clearInterval(fade);


}



},100);



}





function toggleMusic(){


if(music.paused){


music.play();


}

else{


music.pause();


}



}



// ===============================
// Create Love Hearts Explosion
// ===============================


function heartExplosion(){



for(let i=0;i<80;i++){



let heart=document.createElement("div");



heart.innerHTML="❤️";



heart.style.position="fixed";



heart.style.left="50%";


heart.style.top="50%";



heart.style.fontSize=
random(15,45)+"px";



heart.style.zIndex="999";



let x=
random(-500,500);



let y=
random(-500,500);



heart.style.transition=
"all 2s ease";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.transform=
`translate(${x}px,${y}px) rotate(360deg)`;



heart.style.opacity="0";



},50);



setTimeout(()=>{


heart.remove();



},2200);



}



}



// ===============================
// Gift Advanced Animation
// ===============================


giftBox.addEventListener(
"mouseenter",

()=>{


giftBox.style.filter=
"drop-shadow(0 0 30px gold)";



}

);



giftBox.addEventListener(
"mouseleave",

()=>{


giftBox.style.filter="none";



}

);




// Replace Gift Click
// ===============================


giftBox.onclick=function(){



giftBox.innerHTML="🎁✨";



giftBox.style.animation=
"giftOpen 1s forwards";



setTimeout(()=>{



giftBox.innerHTML="💝";



giftMessage.style.display=
"block";



giftMessage.innerHTML=
`

<div class="giftText">

Salma ❤️

<br><br>

This little gift is a reminder...

<br>

You are someone special.

<br>

Never stop smiling.

<br>

Never stop dreaming.

<br><br>

✨ Happy Birthday ✨

</div>

`;



heartExplosion();


createConfettiBurst();



},1000);



};





// ===============================
// Candle Smoke Effect
// ===============================


function createSmoke(){



for(let i=0;i<20;i++){



let smoke=document.createElement("div");



smoke.innerHTML="☁️";



smoke.style.position="absolute";



smoke.style.left=
random(45,55)+"%";



smoke.style.top=
"45%";



smoke.style.fontSize=
random(20,40)+"px";



smoke.style.opacity=".8";



smoke.style.animation=
"smokeUp "+random(2,5)+"s ease forwards";



document.body.appendChild(smoke);



setTimeout(()=>{


smoke.remove();



},5000);



}



}




blowBtn.onclick=function(){



if(candlesOff)
return;



candlesOff=true;



cake.innerHTML="🎂";



createSmoke();


heartExplosion();



createConfettiBurst();



};




// ===============================
// Floating Love Messages
// ===============================


const loveWords=[


"❤️ Love",

"✨ Beautiful",

"🌹 Amazing",

"💖 Wonderful",

"⭐ Special",

"🎂 Happy Birthday"



];



function floatingWords(){



let word=document.createElement("div");



word.innerHTML=
loveWords[
Math.floor(
Math.random()*loveWords.length
)
];



word.style.position="fixed";


word.style.left=
random(10,90)+"vw";



word.style.bottom="-50px";



word.style.color="#ffb6df";



word.style.fontSize=
random(18,30)+"px";



word.style.textShadow=
"0 0 15px pink";



word.style.animation=
"wordFloat 7s linear forwards";



document.body.appendChild(word);



setTimeout(()=>{


word.remove();



},7000);



}



setInterval(()=>{


floatingWords();



},2500);




// ===============================
// Cursor Sparkles
// ===============================


document.addEventListener(
"mousemove",

(e)=>{


let sparkle=document.createElement("span");



sparkle.innerHTML="✨";



sparkle.style.position="fixed";



sparkle.style.left=
e.clientX+"px";



sparkle.style.top=
e.clientY+"px";



sparkle.style.pointerEvents=
"none";



sparkle.style.fontSize=
random(10,25)+"px";



sparkle.style.animation=
"sparkleMove 1s forwards";



document.body.appendChild(sparkle);



setTimeout(()=>{


sparkle.remove();



},1000);



});




// ===============================
// End Part 3
// ===============================
/* ===========================================================
   HAPPY BIRTHDAY SALMA
   SCRIPT.JS
   PART 5 / 5

   Final Effects
   Extra Animations
   Performance
   Ending Scene
=========================================================== */



// ===============================
// Add Dynamic Animations
// ===============================


const dynamicStyle =
document.createElement("style");


dynamicStyle.innerHTML = `


@keyframes up{

0%{

transform:
translateY(0)
scale(1);

opacity:1;

}


100%{

transform:
translateY(-120vh)
scale(1.5);

opacity:0;

}

}



@keyframes fall{


0%{

transform:
translateY(-100px)
rotate(0deg);

opacity:1;

}



100%{

transform:
translateY(110vh)
rotate(720deg);

opacity:0;

}


}



@keyframes balloonUp{


0%{

transform:
translateY(0);

opacity:1;

}


100%{

transform:
translateY(-120vh);

opacity:0;

}


}



@keyframes twinkleStar{


0%,100%{

opacity:.2;

transform:scale(1);

}


50%{

opacity:1;

transform:scale(1.8);

}


}



@keyframes giftOpen{


0%{

transform:
scale(1)
rotate(0deg);

}


50%{

transform:
scale(1.5)
rotate(20deg);

}


100%{

transform:
scale(1)
rotate(0deg);

}


}



@keyframes smokeUp{


0%{

opacity:.8;

transform:
translateY(0)
scale(1);

}


100%{

opacity:0;

transform:
translateY(-200px)
scale(2);

}


}



@keyframes wordFloat{


0%{

transform:
translateY(0);

opacity:0;

}


20%{

opacity:1;

}


100%{

transform:
translateY(-700px);

opacity:0;

}


}



@keyframes sparkleMove{


0%{

transform:
scale(1)
rotate(0deg);

opacity:1;

}



100%{

transform:
scale(2)
rotate(180deg);

opacity:0;

}


}



@keyframes confettiFall{


0%{

transform:
translateY(-20px)
rotate(0deg);

}


100%{

transform:
translateY(110vh)
rotate(720deg);

}


}


`;


document.head.appendChild(
dynamicStyle
);




// ===============================
// Welcome Message After Start
// ===============================


function welcomeEffect(){


let title =
document.createElement("div");



title.innerHTML =
"✨ Welcome Salma ✨";



title.style.position =
"fixed";



title.style.top =
"15%";



title.style.left =
"50%";



title.style.transform =
"translateX(-50%)";



title.style.fontSize =
"45px";



title.style.color =
"#fff";



title.style.textShadow =
`
0 0 20px pink,
0 0 50px hotpink
`;



title.style.zIndex =
"3000";


title.style.animation =
"fadeIn 2s";



document.body.appendChild(
title
);



setTimeout(()=>{


title.remove();


},5000);



}



// Run after celebration

setTimeout(()=>{


if(started){

welcomeEffect();

}


},3000);




// ===============================
// Final Surprise
// ===============================


function finalSurprise(){



screenFlash();



createConfettiBurst();



heartExplosion();



for(let i=0;i<20;i++){


launchFirework();


}



let finalBox =
document.createElement("div");



finalBox.innerHTML=
`

<div>

<h1>
❤️ Salma ❤️
</h1>

<p>
May your days always be full of
love, laughter and beautiful memories.
</p>

<p>
Happy Birthday 🎂✨
</p>

</div>

`;



finalBox.style.position=
"fixed";


finalBox.style.inset=
"0";



finalBox.style.display=
"flex";



finalBox.style.alignItems=
"center";


finalBox.style.justifyContent=
"center";



finalBox.style.flexDirection=
"column";



finalBox.style.textAlign=
"center";



finalBox.style.background=
"rgba(0,0,0,.65)";



finalBox.style.backdropFilter=
"blur(15px)";



finalBox.style.zIndex=
"5000";



finalBox.style.fontSize=
"35px";



finalBox.style.color=
"white";



document.body.appendChild(
finalBox
);



}



// Activate final surprise after gift

giftBox.addEventListener(
"dblclick",

()=>{


finalSurprise();


});




// ===============================
// Prevent Errors
// ===============================


window.addEventListener(
"error",

(e)=>{


console.log(
"Birthday Page Running ❤️"
);



});




// ===============================
// END SCRIPT
// HAPPY BIRTHDAY SALMA ❤️
// ===============================
