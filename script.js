var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var sprite = document.getElementById("linkImg");
var x = 0;
var y = 0;
var canvasPressed=0;
var touchPos;
var sx=0;
var sy=1;
var upButton=0;
var downButton=0;
var leftButton=0;
var rightButton=0;
var direction='down';
var walking=false;
const sxWalkAnimRight=[0,1,2,3,4,5,6,7,8,9];
const syWalkAnimRight=[7,7,7,7,7,7,7,7,7,7];
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
}, false);

function loop() 
{
 update();
 draw();
}
setInterval(loop, 5);