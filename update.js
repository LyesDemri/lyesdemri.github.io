function update()
{
 //handle input:
 handleInput();

 //update character
 if (downButton==1)
 {
  y=Math.min(y+speed,mapSize*26);
  direction='down'
  walking=true;
 }
 if (rightButton==1)
 {
  x=Math.min(x+speed,mapSize*26)
  direction='right'
  walking=true;
 }
 if (upButton==1)
 {
  y=Math.max(y-speed,32);
  direction='up'
  walking=true;
 }
 if (leftButton==1)
 {
  x=Math.max(x-speed,32);
  direction='left'
  walking=true
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