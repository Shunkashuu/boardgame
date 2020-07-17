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
  hideAndRemove();
})
Victor.addEventListener('click',function(){
  console.log(victor.decrire());
  p1=victor;
  hideAndRemove();
})
Aurore.addEventListener('click',function(){
  console.log(aurore.decrire());
  p1=aurore;
  hideAndRemove();
})
Gloria.addEventListener('click',function(){
  console.log(gloria.decrire());
  p1=gloria;
  hideAndRemove();
})




//don't show pokémon choice
//when trainer is chosen, pokémon appears and trainers disapears
//player 1 can select a pokémon
//the game begin and the boardgame appears with the trainer and the pokémon chosen
function hideAndRemove() {
  if(p1 !== p1test) {
    trainer.style.display='none';
    pokemon.style.display='block';
  }
}