//lab 308a.2.1

const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion","artifact"],

companion: {
name:"Leo",
type:"Cat",
companion: {
name: "Frank",
type: "Flea",
inventory: ["small hat", "sunglasses"]
}
},

roll(mod = 0) {
const result = Math.floor(Math.random() *20) + 1+mod;
console.log(`${this.name} rolled a ${result}.`);
}
};

adventurer.inventory.forEach(item => {
  console.log(item);
});

//part 2

class Character {
constructor(name) {
this.name = name;
this.health = Character.MAX_HEALTH;
this.inventory = []
}
roll(mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`);
return result;
}
}

Character.MAX_HEALTH = 100;


//part 3
class Adventurer extends Character {
constructor(name,role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
}

scout() {
console.log (`${this.name} is scouting ahead...`);
this.roll();
}
duel(opponent) {
console.log(`${this.name} vs ${opponent.name}`);

while (this.health > 50 && opponent.health >50) {
    const roll = this.roll();
    const roll2 = opponent.roll();

    if (roll > roll2) {
        opponent.health -= 1;
    }else if (roll2 > roll) {
        this.health -= 1; 
    }

    console.log(`${this.name}: ${this.health}HP | ${opponent.name}: ${opponent.health} HP`);
    }

    const winner = this.health > opponent.health ? this.name : opponent.name;
    console.log(`Winner: ${winner}`);
}
}

// part 4 


   // part 4

Adventurer.ROLES = ["Fighter", "Healer", "Wizard"];

class Adventurer extends Character {
  constructor(name, role) {
    super(name);

    if (!Adventurer.ROLES.includes(role)) {
      throw new Error("Invalid role");
    }

    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }

  duel(opponent) {
    console.log(`${this.name} vs ${opponent.name}`);

    while (this.health > 50 && opponent.health > 50) {
      const roll1 = this.roll();
      const roll2 = opponent.roll();

      if (roll1 > roll2) {
        opponent.health -= 1;
      } else if (roll2 > roll1) {
        this.health -= 1;
      }

      console.log(`${this.name}: ${this.health}HP | ${opponent.name}: ${opponent.health}HP`);
    }

    const winner =
      this.health > opponent.health ? this.name : opponent.name;

    console.log(`Winner: ${winner}`);
  }
}

//part 5 

class AdventurerFactory {
constructor(role) {
this.role = role;
this.adventurers = [];
}

generate(name){
const adv = new Adventurer(name, this.role);
this.adventurers.push(adv);
return adv;
}

findByName(name) {
return this.adventurers.find(a => a.name === name);
}
}

//part 6 
const robin = new Adventurer("Robin", "Fighter");
robin.inventory.push("sword","potion", "artifact");

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}
robin.companion = new Companion("Leo", "Cat");

robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
robin.scout();
