function loadMap()
{
 for (i=0;i<75;i++)
{
 mapX[i]=Array(75).fill(12)
 mapY[i]=Array(75).fill(11)
}

for (i=0;i<75;i++)
 for (j=0;j<75;j++)
 {
  mapX[i][j]=Math.round(Math.random()*5)
 }

tileSquare( 8, 6,68, 6,2,5)
tileSquare( 8, 6, 8,66,2,5)
tileSquare(68, 6,68,66,2,5)
tileSquare( 8,66,68,66,2,5)
tileSquare( 8,36,68,36,2,5)
tileSquare(38, 6,38,66,2,5)
tileSquare(33,31,43,41,2,5)
}

function tileSquare(x1,y1,x2,y2,tileX,tileY)
{
 for (i=x1;i<=x2;i++)
  for (j=y1;j<=y2;j++)
  {
   mapX[j][i]=tileX
   mapY[j][i]=tileY
  }
}