function draw()
{
 //refresh
 ctx.clearRect(0,0,480,320);
 //draw arrow buttons
 ctx.fillRect(2*40,6*40,40,40); //Down
 ctx.fillRect(3*40,5*40,40,40); //Right
 ctx.fillRect(2*40,4*40,40,40); //Up
 ctx.fillRect(1*40,5*40,40,40); //Left
 //draw character
 switch (direction)
 {
  case 'down': 
   sxVector=sxWalkAnimDown;
   syVector=syWalkAnimDown;
  break;
  case 'right': 
   sxVector=sxWalkAnimRight;
   syVector=syWalkAnimRight;
   break;
  case 'up': 
   sxVector=sxWalkAnimUp;
   syVector=syWalkAnimUp;
  break;
  case 'left': 
   sxVector=sxWalkAnimLeft;
   syVector=syWalkAnimLeft;
  break;
 }
 if (walking==0)
 {
  ctx.drawImage(sprite,sx*120,sy*130,120,130,x,y,60,65);
 }
 else
 {
  //ctx.drawImage(sprite,sx*120,(sy+4)*130,120,130,x,y,60,65);
  sx=sxVector[Math.floor(animCtr/10)];
  sy=syVector[Math.floor(animCtr/10)];
  ctx.drawImage(sprite,sx*120,sy*130,120,130,x,y,60,65);
  animCtr=(animCtr+1)%100;
 }
}