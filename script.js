var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.filter="none";
var sprite = document.getElementById("linkImg");
var lyesSprite = document.getElementById("lyesImg");
var bgImg = document.getElementById("bgImg");
var dudeImg = document.getElementById("dudeImg");
var terrainImg = document.getElementById("terrainImg");
var x = 32;
var y = 32;
var mapSize=15*5;
var speed=4
var canvasPressed=0;
var keyPressed = 0;
var keyCode;
var key;
var touchPos;
var sx=0;
var sy=1;
var upButton=0;
var downButton=0;
var leftButton=0;
var rightButton=0;
var direction='down';
var walking=false;
 var imap
 var jmap
const sxWalkAnimDown=[0,1,2,3,4,5,6,7,8,9];
const syWalkAnimDown=[4,4,4,4,4,4,4,4,4,4];
const sxWalkAnimRight=[0,1,2,3,4,5,6,7,8,9];
const syWalkAnimRight=[7,7,7,7,7,7,7,7,7,7];
const sxWalkAnimUp=[0,1,2,3,4,5,6,7,8,9];
const syWalkAnimUp=[6,6,6,6,6,6,6,6,6,6];
const sxWalkAnimLeft=[0,1,2,3,4,5,6,7,8,9];
const syWalkAnimLeft=[5,5,5,5,5,5,5,5,5,5];

const sxIdleAnimDown=[1,2,1,0].concat(Array(62).fill(0));
const syIdleAnimDown=Array(66).fill(0);
const sxIdleAnimRight=sxIdleAnimDown;
const syIdleAnimRight=Array(66).fill(3)
const sxIdleAnimUp=Array(66).fill(0)
const syIdleAnimUp=Array(66).fill(2)
const sxIdleAnimLeft=sxIdleAnimDown;
const syIdleAnimLeft=Array(66).fill(1);

var mapX
var mapY
//TODO: mettre ca dans un fichier externe
/*
const mapX=[[0,1,0,1,1,0,2,1,2,1,3,2,1,4,1],
           [5,5,4,3,2,1,2,0,1,2,1,2,0,0,0],
           [0,0,0,0,2,2,2,2,3,3,1,4,2,5,0],
           [4,4,4,3,1,4,2,5,3,1,2,5,5,4,1],
           [2,2,2,2,2,2,2,4,3,2,1,0,1,2,1],
           [1,2,1,2,2,2,2,2,2,2,2,1,1,1,2],
           [5,4,5,4,3,4,3,4,2,4,1,2,1,2,0],
           [5,1,4,2,3,0,5,1,4,2,3,0,5,1,4],
           [0,1,2,1,2,3,2,3,4,3,4,5,4,3,2],
           [0,1,0,1,1,0,0,1,2,1,3,2,1,4,1],
           [4,4,4,3,1,4,2,5,3,1,2,5,5,4,1],
           [2,2,2,2,2,2,2,4,3,2,1,0,1,2,1],
           [1,2,1,2,2,2,2,2,2,2,2,1,1,1,2],
           [5,4,5,4,3,4,3,4,2,4,1,2,1,2,0],
           [5,1,4,2,3,0,5,1,4,2,3,0,5,1,4]]
const mapY=[[11,11,11,11,11,11, 5,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11, 5,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11, 5,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11, 5,11,11,11,11,11,11,11,11],
            [ 5, 5, 5, 5, 5, 5, 5,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
            [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11]]
*/
/*
var tile=0
for (i=0;i<15*5;i++)
 for (j=0;j<15*5;j++)
 {
  tile=Math.round(Math.random()*5)
  mapX[i][j]=tile
 }
*/
mapX=Array(mapSize).fill(Array(mapSize).fill(0))
mapY=Array(mapSize).fill(Array(mapSize).fill(11))

mapX[20][4]=3
mapX[3][50]=5

var animCtr=0;

function getTouchPos(canvasDom, touchEvent)
{
 var rect = canvasDom.getBoundingClientRect();
 return { x: touchEvent.touches[0].clientX - rect.left, 
          y: touchEvent.touches[0].clientY - rect.top };
}

canvas.addEventListener("touchstart", function (e) 
{
 touchPos = getTouchPos(canvas, e); 
 var touch = e.touches[0];
 canvasPressed=1;
}, false);

canvas.addEventListener("touchend", function (e) 
{
 canvasPressed=0;
 animCtr=0;
}, false);

function loop() 
{
 update();
 draw();
}

window.addEventListener('keydown', function (e)
{
 keyPressed=1;
 keyCode=e.keyCode;
 key=e.key;
});

window.addEventListener('keyup', function (e)
{
 keyPressed=0;
 keyCode=-1;
 key='';
});

setInterval(loop, 33);