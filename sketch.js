var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var TATU
var forest

function preload(){

forest=loadImage("forest.png")
TATU= loadImage("TATU.png")
}

function setup(){
  
  createCanvas(1200,800);

  path=createSprite(600,400)
  path.addImage(forest);
  path.velocityX = -4;
  

//crie um sprite de menino
boy=createSprite(250,540);
boy.addImage(TATU)
//adicione uma animação de corrida para ele
boy.scale=0.15;
  
//crie um limite à esquerda

//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita

//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityX = -4;
  
  // mover o menino com o mous-e usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.x <250 ){
    path.x = path.width/2;
  }
  
  drawSprites();
}
