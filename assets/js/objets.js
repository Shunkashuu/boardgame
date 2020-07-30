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
    constructor(posa, posb) {
        this.posa=posa;
        this.posb=posb;
    }
}

var clonedRoche = [9];
/*var nomroche= ['roche0','roche1','roche2','roche3','roche4',
                'roche5','roche6','roche7','roche8','roche9',];*/
var rocheimg= new Image();
    rocheimg.src='assets/img/roche.png';

//j = position tableau
for(let j = 0; j < 10; j++) {
    var roche_pos = [];
        roche_pos = cell[getRandomInt()].position(); 
        clonedRoche[j] = new Obstacle(roche_pos[0],roche_pos[1]);
        rocheimg.addEventListener('load', function() {
            context.drawImage(rocheimg, clonedRoche[j].posa, clonedRoche[j].posb, 60, 60);
    });
}

class Arme {
    constructor(posa, posb) {
        this.posa=posa;
        this.posb=posb;
    }
}

var clonedCt = [3];
/*var nomct= ['ct0','ct1','ct2','ct3','ct4',
                'ct5','ct6','ct7','ct8','ct9',];*/
var ctimg= new Image();
    ctimg.src='assets/img/ct.png';

//j = position tableau
for(let j = 0; j < 4; j++) {
    var ct_pos = [];
        ct_pos = cell[getRandomInt()].position(); 
        clonedCt[j] = new Arme(ct_pos[0],ct_pos[1]);
        ctimg.addEventListener('load', function() {
            context.drawImage(ctimg, clonedCt[j].posa, clonedCt[j].posb, 60, 60);
    });
}

//verification console pour les roches
for(x = 0; x < 10 ; x++){
    console.log(clonedRoche[x]);
}

//verification console pour les ct
for(x = 0; x < 10 ; x++){
    console.log(clonedCt[x]);
}