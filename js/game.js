class Pokémon {
    constructor(nom, sante, type) {
      this.nom = nom;
      this.sante = sante;
      this.type = type;
    }
    // Renvoie la description du personnage
    decrire() {
      return `${this.nom} a ${this.sante} points de vie et est de type ${this.type}`;
    }
  }

const salameche = new Pokémon("Salamèche", 100, "feu");
const bulbizarre = new Pokémon("Bulbizarre", 100, "plante");
const carapuce = new Pokémon("Carapuce", 100, "eau");
const pikachu = new Pokémon("Pikachu", 100, "électrique");
const evoli = new Pokémon("Evoli", 100, "normal");
  
  // "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
console.log(salameche.decrire());
  // "Glacius a 130 points de vie, 30 en force et 0 points d'expérience"
console.log(carapuce.decrire());
console.log(bulbizarre.decrire());
console.log(pikachu.decrire());
console.log(evoli.decrire());

  // Attaque une cible
  attaquer(cible) ;{
    if (this.sante > 0) {
      const degats = this.force;
      console.log(
        `${this.nom} attaque ${
          cible.nom
        } et lui inflige ${degats} points de dégâts`
      );
      cible.sante -= degats;
      if (cible.sante > 0) {
        console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
      } else {
        cible.sante = 0;
        const bonusXP = 10;
        console.log(
          `${this.nom} a tué ${
            cible.nom
          } et gagne ${bonusXP} points d'expérience`
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(
        `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
      );
    }
    decrire() ;{
        return `${this.nom} a ${this.sante} points de vie et est de type ${this.type}`;
      }
  }
  // Renvoie la description du personnage
  
  