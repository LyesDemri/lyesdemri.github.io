function draw()
{
 //refresh
 ctx.clearRect(0,0,480,320);

 //draw background
 for (i=-1;i<16;i++)
 {
  for (j=-1;j<11;j++)
  {
   imap=Math.floor((x+i*32)/32)
   jmap=Math.floor((y+j*32)/32)
   ctx.drawImage(terrainImg,
   //coordonnees du tile a afficher
   mapX[jmap][imap]*32,mapY[jmap][imap]*32,32,32,
   //coordonnees ou afficher le tile
   imap*32-x,jmap*32-y,32,32);
  }
 }

 //draw characters
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
  animCtr=(animCtr+1)%66;
  sx=sxVector[animCtr];
  sy=syVector[animCtr];
  ctx.drawImage(sprite,sx*120,sy*130,120,130,480/2-16,320/2-16,60/2,65/2);
 }
 else
 {
  //ctx.drawImage(sprite,sx*120,(sy+4)*130,120,130,x,y,60,65);
  animCtr=(animCtr+1)%10;
  sx=sxVector[animCtr];
  sy=syVector[animCtr];
  ctx.drawImage(sprite,sx*120,sy*130,120,130,480/2-16,320/2-16,60/2,65/2);
 }

 //draw other characters
 ctx.drawImage(lyesImg,12*32-x,15*32-y,16,32);
  //draw arrow buttons
 ctx.fillRect(2*40,6*40,40,40); //Down
 ctx.fillRect(3*40,5*40,40,40); //Right
 ctx.fillRect(2*40,4*40,40,40); //Up
 ctx.fillRect(1*40,5*40,40,40); //Left
}