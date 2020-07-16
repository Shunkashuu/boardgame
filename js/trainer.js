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
          return `Choissis un dresseur`;
      }
      //return `${this.nom} a été choisi(e)`;
    }
  }

  //Récupere l'element html img
var Lucas = document.getElementById("lucas");
var Victor = document.getElementById("victor");
var Aurore = document.getElementById("aurore");
var Gloria = document.getElementById("gloria");


//Declare un dresseur pour la class trainer
const lucas = new Trainer("Lucas","h");
const victor = new Trainer("Victor","h");
const aurore = new Trainer("Aurore","f");
const gloria = new Trainer("Gloria","f");

//ajout un evenement de selection, et l'affiche dans la console (verification selection)
Lucas.addEventListener('click',function(){console.log(lucas.decrire())})
Victor.addEventListener('click',function(){console.log(victor.decrire())})
Aurore.addEventListener('click',function(){console.log(aurore.decrire())})
Gloria.addEventListener('click',function(){console.log(gloria.decrire())})
  





