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
   if (walking==1)
   {
    sxVector=sxWalkAnimDown;
    syVector=syWalkAnimDown;
   }
   else
   {
    sxVector=sxIdleAnimDown;
    syVector=syIdleAnimDown;
   }
  break;
  case 'right': 
   if (walking==1)
   {
    sxVector=sxWalkAnimRight;
    syVector=syWalkAnimRight;
   }
   else
   {
    sxVector=sxIdleAnimRight;
    syVector=syIdleAnimRight;
   }
   break;
  case 'up': 
      if (walking==1)
   {
    sxVector=sxWalkAnimUp;
    syVector=syWalkAnimUp;
   }
   else
   {
    sxVector=sxIdleAnimUp;
    syVector=syIdleAnimUp;
   }
  break;
  case 'left': 
   if (walking==1)
   {
    sxVector=sxWalkAnimLeft;
    syVector=syWalkAnimLeft;
   }
   else
   {
    sxVector=sxIdleAnimLeft;
    syVector=syIdleAnimLeft;
   }
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