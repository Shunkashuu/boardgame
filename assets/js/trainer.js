//Création de l'objet Trainer
class Trainer {
    constructor(nom,genre) {
      this.nom = nom;
      this.genre = genre;
    }
    // Renvoie la description du trainer
    decrire() {
      switch(this.genre){
        case this.genre="h":
          return `${this.nom} a été choisi`;
        case this.genre="f":
          return `${this.nom} a été choisie`;
        default:
          return `Choisis un dresseur`;
      }
    }
  }

//Récupère l'élément html img
let trainer = document.getElementById("trainer");
let pokemon = document.getElementById("pokemon");
let Lucas = document.getElementById("lucas");
let Victor = document.getElementById("victor");
let Aurore = document.getElementById("aurore");
let Gloria = document.getElementById("gloria");

//Déclare un dresseur pour la classe trainer
let p1 = new Trainer("","");
let p1test = p1;
const lucas = new Trainer("Lucas","h");
const victor = new Trainer("Victor","h");
const aurore = new Trainer("Aurore","f");
const gloria = new Trainer("Gloria","f");

//Ajoute un évènement de sélèction, et l'affiche dans la console (vérification séléction)
Lucas.addEventListener('click',function(){
  console.log(lucas.decrire());
  p1=lucas;
  fadeout(trainer);
  unfade(pokemon);
})
Victor.addEventListener('click',function(){
  console.log(victor.decrire());
  p1=victor;
  fadeout(trainer);
  unfade(pokemon);
})
Aurore.addEventListener('click',function(){
  console.log(aurore.decrire());
  p1=aurore;
  fadeout(trainer);
  unfade(pokemon);
})
Gloria.addEventListener('click',function(){
  console.log(gloria.decrire());
  p1=gloria;
  fadeout(trainer);
  unfade(pokemon);
})

//Test pour la disparition - apparation on clic
/*function hideAndRemove(){setTimeout( function() {
    if(p1 !== p1test) {
      trainer.style.display='none';
      fadeTarget.style.display='block';
    }
  },500)
}*/

//Fade out trainer to fade in pokémon
function fadeout(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}

function unfade(element) {setTimeout(function(){
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
  },1150);
}

