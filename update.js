function update()
{
 //handle input:
 handleInput();

 //update character
 if (downButton==1)
 {
  y=Math.min(y+1,320-65);
  direction='down'
  walking=true;
 }
 else if (rightButton==1)
 {
  x=Math.min(x+1,480-60)
  direction='right'
  walking=true;
 }
 else if (upButton==1)
 {
  y=Math.max(y-1,0);
  direction='up'
  walking=true;
 }
 else if (leftButton==1)
 {
  x=Math.max(x-1,0);
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
  if (touchPos.x>80 && touchPos.x<120 && touchPos.y>160 && touchPos.y<200)
  {
   upButton=1;
  }
  else if (touchPos.x>40 && touchPos.x<80 && touchPos.y>200 && touchPos.y<240)
  {
   leftButton=1;
  }
 }
 else
 {
  downButton=0;
  upButton=0;
  leftButton=0;
  rightButton=0;
  walking=0;
 }
 rightButton=1;
}