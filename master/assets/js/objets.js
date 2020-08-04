class Pokemon {
    constructor(nom, image, posa, posb) {
        this.nom = nom;
        this.img = image;
        this.posa = posa;
        this.posb = posb;
    }
}

class Obstacle {
    constructor(posa, posb) {
        this.posa = posa;
        this.posb = posb;
    }
}

class Arme {
    constructor(posa, posb) {
        this.posa = posa;
        this.posb = posb;
    }
}

// Placement roches
var clonedRoche = [9];
/*var nomroche= ['roche0','roche1','roche2','roche3','roche4',
                'roche5','roche6','roche7','roche8','roche9',];*/
var rocheimg = new Image();
    rocheimg.src ='assets/img/roche.png';

//j = position tableau
for(let j = 0; j < 10; j++) {
    var roche_pos = [];
        roche_pos = cell[getRandomInt()].position(); 
        clonedRoche[j] = new Obstacle(roche_pos[0],roche_pos[1]);
        rocheimg.addEventListener('load', function() {
            context.drawImage(rocheimg, clonedRoche[j].posa, clonedRoche[j].posb, 60, 60);
    });
}

// Placement CT
var clonedCt = [3];
/*var nomct= ['ct0','ct1','ct2','ct3','ct4',
                'ct5','ct6','ct7','ct8','ct9',];*/
var ctimg= new Image();
    ctimg.src='assets/img/ct.png';

//j = position tableau
for(let j=0 ; j < 4; j++) {
    placement_ct(j);
} 

function placement_ct(nb_objet){
    var ct_pos = [];
        ct_pos = cell[getRandomInt()].position(); 
        clonedCt[nb_objet] = new Arme(ct_pos[0],ct_pos[1]);
        ctimg.addEventListener('load', function() {
        context.drawImage(ctimg, clonedCt[nb_objet].posa, clonedCt[nb_objet].posb, 60, 60);
        });
        compare(nb_objet);
    }

// fonction pour comparer les ct aux roches afin qu'elles ne se placent pas au même endroit
function compare(valeur) {
        for (test = 0; test < clonedRoche.length; test++){
            if(clonedCt[valeur].posa == clonedRoche[test].posa && 
                clonedCt[valeur].posb == clonedRoche[test].posb) {
                return placement_ct(valeur)
            } else {
            }
        }    
        for(test = 0; test < clonedCt.length; test++){    
            if (test != valeur){
                if(clonedCt[valeur].posa == clonedCt[test].posa && 
                    clonedCt[valeur].posb == clonedCt[test].posb){
                    return placement_ct(valeur)    
                } else{
                }
            }else{
            }    
        }
    }


   

/*function compare_poke()
creer pika et evoli
 si pika = posa posb posa+60 posa-60 posb+60 posb-60
        relance compare
        sinon fini*/
        
var pikaimg = new Image();
    pikaimg.src = 'assets/img/pikachu.png';

var evolimg = new Image();
    evolimg.src = 'assets/img/evoli.png';

    var pikachu_pos = [0];
    pikachu_pos = cell[getRandomInt()].position(); 
var pikachu = new Pokemon('Pikachu', pikaimg, pikachu_pos[0], pikachu_pos[1]);
    pikachu.img.addEventListener('load', function() {
        context.drawImage(pikachu.img, pikachu.posa, pikachu.posb, 60, 60);
});



var evoli=[0];

function plc_evo(){
    var evoli_pos = [];
    evoli_pos = cell[getRandomInt()].position(); 
    evoli = new Pokemon('Evoli', evolimg, evoli_pos[0], evoli_pos[1]);
    evoli.img.addEventListener('load', function() {
        context.drawImage(evoli.img, evoli.posa, evoli.posb, 60, 60);
});
compare_poke(evoli);
}


plc_evo();

function compare_poke(evoli) {
    
    if(pikachu.posa == evoli.posa && pikachu.posb == evoli.posb ||
        pikachu.posa == evoli.posa+60 && pikachu.posb == evoli.posb ||
        pikachu.posa == evoli.posa-60 && pikachu.posb == evoli.posb ||
        pikachu.posa == evoli.posa && pikachu.posb == evoli.posb+60 ||
        pikachu.posa == evoli.posa && pikachu.posb == evoli.posb-60 ) {
            console.log("repossitionnement evoli");
        return plc_evo();
    }
    else {
    }
}

