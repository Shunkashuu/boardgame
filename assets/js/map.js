//variables du canvas
var width =600;
var height = 600;
var p = 10; //ecart entre le cadre canvas et la grille
var hline = width + (p*2) + 1;
var vline = height + (p*2) + 1;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Canvas
function drawBoard(){
        for (var x = 0; x <= width; x += 60) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, height + p);
        }

        for (var x = 0; x <= height; x += 60) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(width + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }

drawBoard();

//Creation des positions dans les cellules
class Cases {
    constructor(posa, posb) {
      this.posa = posa;
      this.posb = posb;
    } 
    position(){
        var pos = [];
          pos[0] = this.posa;
          pos[1] = this.posb;
          return pos;
      }
  }
  
//fonction pour la position aléatoire des objets
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100));
}

let y = 0;
var cell = [99];
  
for(i = 0; i < 10 ; i++){
    for(j = 0; j < 10; j++){
        cell[y] = new Cases(60*i+p, 60*j+p);
        y++;
    }    
}

var pikachu_pos= [];
    pikachu_pos= cell[getRandomInt()].position(); 
var pikachu_v = pikachu_pos[0];
var pikachu_h = pikachu_pos[1];

var evoli_pos= [];
    evoli_pos= cell[getRandomInt()].position(); 
var evoli_v = evoli_pos[0];
var evoli_h = evoli_pos[1];

    //verification console de toute les cases
      /*for(x = 0; x < 100 ; x++){
          console.log(cell[x]);
      }*/
  
  //Choix de cellule + valeur position
      //console.log(cell[getRandomInt()]);
      //console.log(cell[35].position());

//A faire :
//Boucle pour générer la roche entre 2 et 5 par exemple
roche_h = getRandomInt(10)*60+p;
roche_v = getRandomInt(10)*60+p;

var roche = new Image();
    roche.src = 'assets/img/roche.png';
    roche.addEventListener('load', function() {
        context.drawImage(roche, roche_h, roche_v, 60, 60);
})

//boucle pour générer la ct fois 4
ct_h = getRandomInt(10)*60+p;
ct_v = getRandomInt(10)*60+p;

var ct_normal = new Image();
    ct_normal.src = 'assets/img/ct_normal.png';
    ct_normal.addEventListener('load', function() {
    context.drawImage(ct_normal,ct_h, ct_v, 60, 60);
})
//les objets hériteront de la class cells pour récupérer la position, la class cells doit être avec pokemon
//evoli.posa et evoli.posb different de pikachu.posa et pikachu.posb sinon relancer la fonction qui s'occupe des positions