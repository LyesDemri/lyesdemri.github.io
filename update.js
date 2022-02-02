function update()
{
 //handle input:
 handleInput();

 //update character
 if (downButton==1)
 {
  //I don't get the +16s
  if ((collisionMap[Math.floor((y+16)/32)+4+1][Math.floor(x/32)+7]==1)&&(collisionMap[Math.floor((y+16)/32)+4+1][Math.floor((x+31)/32)+7]==1))
   y=Math.min(y+speed,mapSize*26);
  walking=true;
  direction='down'
 }
 if (rightButton==1)
 {
  if ((collisionMap[Math.floor((y+16)/32)+4][Math.floor(x/32)+7+1]==1)&&(collisionMap[Math.floor((y+16+31)/32)+4][Math.floor(x/32)+7+1]==1))
   x=Math.min(x+speed,mapSize*26)
  walking=true
  direction='right'
 }
 if (upButton==1)
 {
  if ((collisionMap[Math.floor((y+16-1)/32)+4][Math.floor(x/32)+7]==1)&&(collisionMap[Math.floor((y+16-1)/32)+4][Math.floor((x+31)/32)+7]==1))
   y=Math.max(y-speed,32);
  walking=true
  direction='up'
 }
 if (leftButton==1)
 {
  if ((collisionMap[Math.floor((y+16)/32)+4][Math.floor((x-1)/32)+7]==1)&&(collisionMap[Math.floor((y+16+31)/32)+4][Math.floor((x-1)/32)+7]==1))
   x=Math.max(x-speed,32);
  walking=true
  direction='left'
 }
}

function handleInput()
{
 if (canvasPressed==1)
 {
  if (touchPos.x>80 && touchPos.x<120 && touchPos.y>240 && touchPos.y<280)
  {
   downButton=1;
  }
  else if (touchPos.x>120 && touchPos.x<160 && touchPos.y>200 && touchPos.y<240)
  {
   rightButton=1;
  }
  else if (touchPos.x>80 && touchPos.x<120 && touchPos.y>160 && touchPos.y<200)
  {
   upButton=1;
  }
  else if (touchPos.x>40 && touchPos.x<80 && touchPos.y>200 && touchPos.y<240)
  {
   leftButton=1;
  }
 }
 else if (keyPressed==1)
 {
  if (keyCode==40)
  {
   downButton=1;
  }
  if (keyCode == 39)
  {
   rightButton=1;
  }
  if (keyCode==38)
  {
   upButton=1;
  }
  if (keyCode==37)
  {
   leftButton=1;
  }
 }
 else
 {
  downButton=0;
  rightButton=0;
  upButton=0;
  leftButton=0;
  walking=0;
 }
}