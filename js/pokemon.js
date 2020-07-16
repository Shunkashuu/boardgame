class Pokémon {
    constructor(nom, sante, type) {
      this.nom = nom;
      this.sante = sante;
      this.type = type;
    }
    // Renvoie la description du pokémon
    decrire() {
      return `${this.nom} a ${this.sante} points de vie et est de type ${this.type}`;
    }
  }

const salameche = new Pokémon("Salamèche", 100, "feu");
const bulbizarre = new Pokémon("Bulbizarre", 100, "plante");
const carapuce = new Pokémon("Carapuce", 100, "eau");
const pikachu = new Pokémon("Pikachu", 100, "électrique");
const evoli = new Pokémon("Evoli", 100, "normal");
  
  // "Salamèche a 100 points de vie et est de type feu"
console.log(salameche.decrire());
  // "Carapuce a 100 points de vie et est de type eau"
console.log(carapuce.decrire());
console.log(bulbizarre.decrire());
console.log(pikachu.decrire());
console.log(evoli.decrire());
  
  