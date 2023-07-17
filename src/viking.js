// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(aVikingObject) {
    this.vikingArmy.push(aVikingObject);
  }
  addSaxon(aSaxonObject) {
    this.saxonArmy.push(aSaxonObject);
  }
  vikingAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomizedViking = this.vikingArmy[vikingIndex];
    const randomizedSaxon = this.saxonArmy[saxonIndex];
    const damage = randomizedViking.attack();
    const result = randomizedSaxon.receiveDamage(damage);

    if (randomizedSaxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return result;
  }

  saxonAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomizedViking = this.vikingArmy[vikingIndex];
    const randomizedSaxon = this.saxonArmy[saxonIndex];
    const damage = randomizedSaxon.attack();
    const result = randomizedViking.receiveDamage(damage);

    if (randomizedViking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return result;
  }

  showStatus() {
    if (this.vikingArmy <= 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy <= 0) {
      return `Vikings have won the war of the century!`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
