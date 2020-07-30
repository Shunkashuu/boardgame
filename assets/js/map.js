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
    position() {
        var pos = [];
            pos[0] = this.posa;
            pos[1] = this.posb;
        return pos;
      }
  }

// y = pour avancer dans le tableau
let y = 0;
var cell = [99];
  
for(i = 0; i < 10 ; i++) {
    for(j = 0; j < 10; j++) {
        cell[y] = new Cases(60*i+p, 60*j+p);
        y++;
    }
}  
  //Choix de cellule + valeur position
      //console.log(cell[getRandomInt()]);
      //console.log(cell[35].position());

//fonction pour la position aléatoire des objets
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100));
}

var pikachu_pos= [];
    pikachu_pos= cell[getRandomInt()].position(); 
var pikachu_v = pikachu_pos[0];
var pikachu_h = pikachu_pos[1];

var evoli_pos= [];
    evoli_pos= cell[getRandomInt()].position(); 
var evoli_v = evoli_pos[0];
var evoli_h = evoli_pos[1];

var roche_pos= [];
    roche_pos= cell[getRandomInt()].position(); 
var roche_v = roche_pos[0];
var roche_h = roche_pos[1];

var ct_pos= [];
    ct_pos= cell[getRandomInt()].position(); 
var ct_v = ct_pos[0];
var ct_h = ct_pos[1];