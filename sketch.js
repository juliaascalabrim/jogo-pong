// variaveis da bolinha
let xbolinha = 200
let ybolinha = 200
let diametro = 30
let raio = diametro/2

 //Variáveis da velocidade
let xvelocidade = 6
let yvelocidade = 6

 //Variáveis de raquete
let xraquete = 5
let yraquete = 200
let lraquete = 15
let hraquete = 100
let xraqueteop = 380
let yraqueteop = 200
let velocidadeyop;
let colidiu = false

 //Variaveis do placar
let meuspontos = 0 
let pontosop = 0 

 function setup() {
  createCanvas(400,400)
}




function draw() {
  background(0);
  criabolinha ();
  minharaquete ();
  movimentobolinha();
  colisaoborda();
  movimentoraquete();
  colisaoraquete();
  criaraqueteop();
  movimentoraqueteop();
  colisaobolinharaquete();
  criaplacar();
  marcaponto();
  
  
}
  
  function criabolinha ()
  {circle (xbolinha, ybolinha, diametro)}
   function movimentobolinha(){ xbolinha += xvelocidade
                               ybolinha += yvelocidade}
   function colisaoborda() {if (xbolinha+ raio > width|| xbolinha - raio < 0 )
 xvelocidade *= -1
 if(ybolinha > height || ybolinha  
   < 0 )
   
   yvelocidade *= -1}
  function minharaquete()
  {rect (xraquete,yraquete,lraquete,hraquete)}
     
  function movimentoraquete (){             
  if (keyIsDown (UP_ARROW))
  yraquete -=10
  if (keyIsDown( DOWN_ARROW))
  yraquete += 10}   
  function colisaoraquete () { 
  if(xbolinha - raio < xraquete + lraquete
    && ybolinha- raio < yraquete + hraquete
    && ybolinha + raio > yraquete)
  xvelocidade *= -1}
  function criaraqueteop (){
    rect (xraqueteop,yraqueteop,lraquete,hraquete)
  }
  function movimentoraqueteop () {
    velocidadeyop = ybolinha -yraqueteop - lraquete/2 - 200
    yraqueteop += velocidadeyop
  }                  
function colisaobolinharaquete(){
  colidiu = collideRectCircle (xraqueteop,yraqueteop,lraquete,hraquete,xbolinha,ybolinha,diametro)
  if(colidiu)
   xvelocidade *= -1
}
function criaplacar () {
  stroke(255)
  fill(color(39,240,12))
  rect(81,3,40,30)
  rect(275,3,50,30)
  textAlign (CENTER)
  textSize (30)
  fill (255)
  text (meuspontos, 100, 27)
  text (pontosop, 300, 27)
  
}

function marcaponto(){
  if (xbolinha < 15)
    pontosop += 1
  if (xbolinha > 380)
    meuspontos += 1
      
}
