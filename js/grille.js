//variables du canvas
var bw = 600;
var bh = 600;
var p = 10;
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//appel des pokémon, des "armes" et des obstacles
var pikachu = new Image();
    pikachu.src = 'img/pikachu.png';
    pikachu.addEventListener('load', function() {
        context.drawImage(pikachu, 20, 20, 50, 50);
    })

var evoli = new Image();
    evoli.src = 'img/evoli.png';
    evoli.addEventListener('load', function() {
        context.drawImage(evoli, 20, 20, 50, 50);
    })
    
var salameche = new Image();
    salameche.src = 'img/salameche.png';
    salameche.addEventListener('load', function() {
        context.drawImage(salameche, 20, 20, 50, 50);
    })

var bulbi = new Image();
    bulbi.src = 'img/bulbi.png';
    bulbi.addEventListener('load', function() {
        context.drawImage(bulbi, 20, 20, 50, 50);
    })

var carapuce = new Image();
    carapuce.src = 'img/carapuce.png';
    carapuce.addEventListener('load', function() {
        context.drawImage(carapuce, 20, 20, 50, 50);
    })

var roche = new Image();
    roche.src = 'img/roche.png';
    roche.addEventListener('load', function() {
        context.drawImage(roche, 20, 20, 60, 60);
    })

var ct_normal = new Image();
    ct_normal.src = 'img/ct_normal.png';
    ct_normal.addEventListener('load', function() {
        context.drawImage(ct_normal, 20, 20, 60, 60);
    })


// Canevas
function drawBoard(){
        for (var x = 0; x <= bw; x += 50) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x <= bh; x += 50) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
    }

drawBoard();