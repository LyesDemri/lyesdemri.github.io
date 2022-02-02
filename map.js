function loadMap()
{
//draw default grass
for (i=0;i<mapSize;i++)
{
 map[i]=Array(mapSize)
 map2[i]=Array(mapSize)
 collisionMap[i]=Array(mapSize)
 for (j=0;j<mapSize;j++)
 {
  map[i][j]=[12,11,0]
  map2[i][j]=[12,11,0]
  collisionMap[i][j]=1;
 }
}

//draw flowers at random places
for (i=0;i<mapSize;i++)
{
 for (j=0;j<mapSize;j++)
 {
  num=Math.round(Math.random()*5)
  map[i][j]=[num,11,0]
  map2[i][j]=[num,11,0]
 }
}

//draw paths
tileSquare( 8, 6,68, 6,2,5,0)
tileSquare( 8, 6, 8,66,2,5,0)
tileSquare(68, 6,68,66,2,5,0)
tileSquare( 8,66,68,66,2,5,0)
tileSquare( 8,36,68,36,2,5,0)
tileSquare(38, 6,38,66,2,5,0)
tileSquare(33,31,43,41,2,5,0)

// draw lake
//todo: create function that does this
map2[35][36]=[15,14,0]
map2[35][37]=[16,14,0]
map2[35][38]=[16,14,0]
map2[35][39]=[16,14,0]
map2[35][40]=[17,14,0]

map2[36][36]=[15,15,0]
map2[36][37]=[16,15,0]
map2[36][38]=[16,15,0]
map2[36][39]=[16,15,0]
map2[36][40]=[17,15,0]

map2[37][36]=[15,16,0]
map2[37][37]=[16,16,0]
map2[37][38]=[16,16,0]
map2[37][39]=[16,16,0]
map2[37][40]=[17,16,0]

//collision map:
for (l=35;l<=37;l++)
 for (c=36;c<=40;c++)
  collisionMap[l][c]=0;

drawPine(31,33)
drawPine(44,33)
drawPine(36,42)
drawPine(39,42)

drawChristmasBridge(37,29)
}

//draw square of given tile
function tileSquare(x1,y1,x2,y2,tileX,tileY,tileZ)
{
 for (i=x1;i<=x2;i++)
  for (j=y1;j<=y2;j++)
  {
   map[j][i]=[tileX,tileY,tileZ]
   map2[j][i]=[tileX,tileY,tileZ]
  }
}

function drawPine(x,y)
{
	map2[y][x]=[6,11,1]
	map2[y][x+1]=[7,11,1]
	map2[y+1][x]=[6,12,1]
	map2[y+1][x+1]=[7,12,1]
	map2[y+2][x]=[6,13,1]
	map2[y+2][x+1]=[7,13,1]
}

function drawChristmasBridge(x,y)
{
	map2[y][x]=[8,7,1]
	map2[y][x+1]=[9,7,1]
	map2[y][x+2]=[10,7,1]
	map2[y+1][x]=[8,8,1]
	map2[y+1][x+1]=[9,8,1]
	map2[y+1][x+2]=[10,8,1]
}