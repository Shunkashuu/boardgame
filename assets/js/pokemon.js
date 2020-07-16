//Création de l'objet pokémon
class Pokémon {
    constructor(nom, sante, type) {
      this.nom = nom;
      this.sante = sante;
      this.type = type;
    }
    // Renvoie la description du pokémon
    decrire() {
        return `${this.nom} a été choisi`;
      }
    }

//Récupère l'élément html img
let Salamèche = document.getElementById("salameche");
let Bulbizarre = document.getElementById("bulbizarre");
let Carapuce = document.getElementById("carapuce");
let Pikachu = document.getElementById("pikachu");
let Evoli = document.getElementById("evoli");

//Déclare un dresseur pour la classe pokémon
const salameche = new Pokémon("Salamèche", 100, "feu");
const bulbizarre = new Pokémon("Bulbizarre", 100, "plante");
const carapuce = new Pokémon("Carapuce", 100, "eau");
const pikachu = new Pokémon("Pikachu", 100, "électrique");
const evoli = new Pokémon("Evoli", 100, "normal");

//Ajoute un évènement de sélèction, et l'affiche dans la console (vérification séléction)
Salamèche.addEventListener('click',function(){console.log(salameche.decrire())})
Bulbizarre.addEventListener('click',function(){console.log(bulbizarre.decrire())})
Carapuce.addEventListener('click',function(){console.log(carapuce.decrire())})
Pikachu.addEventListener('click',function(){console.log(pikachu.decrire())})
Evoli.addEventListener('click',function(){console.log(evoli.decrire())})