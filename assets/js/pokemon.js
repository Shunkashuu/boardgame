class Pokemon {
    constructor(nom, degats, image) {
        this.nom = nom;
        this.degats = degats;
        this.img = image;
    }
}

var pikaimg= new Image();
    pikaimg.src= 'assets/img/pikachu.png';
var pikachu = new Pokemon('Pikachu',10,pikaimg);
    pikachu.img.addEventListener('load', function() {
        context.drawImage(pikachu.img, pikachu_h, pikachu_v, 60, 60);
    })


var evolimg=new Image();
    evolimg.src='assets/img/evoli.png';
var evoli = new Pokemon('Evoli',10,evolimg);
    evoli.img.addEventListener('load',function() {
        context.drawImage(evoli.img, evoli_h, evoli_v, 60, 60);
    })

