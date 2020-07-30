class Pokemon {
    constructor(nom, pv, degats, image) {
        this.nom = nom;
        this.pv = pv;
        this.degats = degats;
        this.img = image;
    }
}

var pikaimg = new Image();
    pikaimg.src = 'assets/img/pikachu.png';
var pikachu = new Pokemon('Pikachu', 100, 10, pikaimg);
    pikachu.img.addEventListener('load', function() {
        context.drawImage(pikachu.img, pikachu_h, pikachu_v, 60, 60);
    })


var evolimg = new Image();
    evolimg.src = 'assets/img/evoli.png';
var evoli = new Pokemon('Evoli', 100, 10, evolimg);
    evoli.img.addEventListener('load',function() {
        context.drawImage(evoli.img, evoli_h, evoli_v, 60, 60);
    })

class Obstacle {
    constructor(nom, image) {
        this.nom = nom; 
        //tableau vide pour position ?
        this.img = image;
    }
}

var rocheimg = new Image();
    rocheimg.src = 'assets/img/roche.png';
var roche = new Obstacle('Roche', rocheimg);
    roche.img.addEventListener('load', function() {
        context.drawImage(roche.img, roche_h, roche_v, 60, 60);
    })

class Arme {
    constructor(nom, image) {
        this.nom = nom; 
        //tableau vide pour position ?
        this.img = image;
    }
}

var ctimg = new Image();
    ctimg.src = 'assets/img/ct_normal.png';
var ct = new Arme('Ct', ctimg);
    ct.img.addEventListener('load', function() {
    context.drawImage(ct.img,ct_h, ct_v, 60, 60);
})