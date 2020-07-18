//variables du canvas
var width =600;
var height = 600;
var p = 10;
var hline = width + (p*2) + 1;
var vline = height + (p*2) + 1;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Canevas
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

//appel des pokémon, des ct et des obstacles
var pikachu = new Image();
    pikachu.src = 'assets/img/pikachu.png';
    pikachu.addEventListener('load', function() {
        context.drawImage(pikachu,pikachu_h, pikachu_v, 60, 60);
})

pikachu_h = getRandomInt(10)*60+p;
pikachu_v = getRandomInt(10)*60+p;

var evoli = new Image();
    evoli.src = 'assets/img/evoli.png';
    evoli.addEventListener('load', function() {
        context.drawImage(evoli, evoli_h, evoli_v, 60, 60);
})

evoli_h = getRandomInt(10)*60+p;
evoli_v = getRandomInt(10)*60+p;

var roche = new Image();
    roche.src = 'assets/img/roche.png';
    roche.addEventListener('load', function() {
        context.drawImage(roche, roche_h, roche_v, 60, 60);
})

roche_h = getRandomInt(10)*60+p;
roche_v = getRandomInt(10)*60+p;

var ct_normal = new Image();
    ct_normal.src = 'assets/img/ct_normal.png';
    ct_normal.addEventListener('load', function() {
    context.drawImage(ct_normal,ct_h, ct_v, 60, 60);
})

ct_h = getRandomInt(10)*60+p;
ct_v = getRandomInt(10)*60+p;

//fonction pour la position aléatoire des objets
function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
          


