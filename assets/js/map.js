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

//fonction pour la position aléatoire des objets
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//appel de la fonction pour le placement aléatoire en tenant compte du nombre de cases + bordure
pikachu_h = getRandomInt(10)*60+p;
pikachu_v = getRandomInt(10)*60+p;
//appel des pokémon, des ct et des obstacles
var pikachu = new Image();
    pikachu.src = 'assets/img/pikachu.png';
    pikachu.addEventListener('load', function() {
        context.drawImage(pikachu,pikachu_h, pikachu_v, 60, 60);
})

evoli_h = getRandomInt(10)*60+p;
evoli_v = getRandomInt(10)*60+p;

var evoli = new Image();
    evoli.src = 'assets/img/evoli.png';
    evoli.addEventListener('load', function() {
        context.drawImage(evoli, evoli_h, evoli_v, 60, 60);
})

roche_h = getRandomInt(10)*60+p;
roche_v = getRandomInt(10)*60+p;

var roche = new Image();
    roche.src = 'assets/img/roche.png';
    roche.addEventListener('load', function() {
        context.drawImage(roche, roche_h, roche_v, 60, 60);
})

var roche2 = new Image();
    roche2.src = 'assets/img/roche.png';
    roche2.addEventListener('load', function() {
        context.drawImage(roche2, roche_v, roche_h, 60, 60);
})

ct_h = getRandomInt(10)*60+p;
ct_v = getRandomInt(10)*60+p;

var ct_normal = new Image();
    ct_normal.src = 'assets/img/ct_normal.png';
    ct_normal.addEventListener('load', function() {
    context.drawImage(ct_normal,ct_h, ct_v, 60, 60);
})

class Map {
    constructor() {
        this.cells = [];
        this.unavailableCells = [];
        this.players = [new Player("lucas", new Weapon("ct-charge", 10, "assets/img/ct_normal.png")),
                        new Player("gloria", new Weapon("ct-charge", 10, "assets/img/ct_normal.png"))];
        this.weapons =
            [new Weapon('ct-coup-dboule', 12, "assets/img/ct_normal.png"),
            new Weapon('ct-belier', 15, "assets/img/ct_normal.png"),
            new Weapon('ct-damocles', 20, "assets/img/ct_normal.png"),
            new Weapon('ct-destruction', 20, "assets/img/ct_normal.png")];
        this.pokemon =
            [new Pokemon('salameche', 60, "assets/img/salameche.png"),
            new Pokemon('bulbizarre', 60, "assets/img/bulbi.png"),
            new Pokemon('carapuce', 60, "assets/img/carapuce.png"),
            new Pokemon('pikachu', 60, "assets/img/pikachu.png"),
            new Pokemon('evoli', 60, "assets/img/evoli.png")];
        this.obstacles =
            [new Obstacle('roche', 60, "assets/img/roche.png"),
            new Obstacle('roche2', 60, "assets/img/roche.png"),
            new Obstacle('roche3', 60, "assets/img/roche.png"),
            new Obstacle('roche4', 60, "assets/img/roche.png"),
            new Obstacle('roche5', 60, "assets/img/roche.png")]

    }
}








          


