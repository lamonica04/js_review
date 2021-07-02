console.log("classes.js");
class LivingThing {
    // does the setup of our object and allows us to set the initial properties
    constructor(name,health) {
        this.name = name;
        this.health = health;
    }

    isAlive(){
        return  this.health > 0
    }
}

class Monster extends LivingThing{

    constructor(name, health, classification){
        super(name, health);
        this.classification = classification;
    }
}


const ogre = new Monster("bob", 80, "ogre");
const goblin = new Monster("stew", 30, "goblin")
const rat = new Monster("splinter", 30, "rat")

const monstersArray = [ogre, goblin, rat]
console.log(monstersArray);
console.log(rat.isAlive());

monstersArray.forEach(function (monster) {
    console.log(`${monster.name} : ${monster.health} : ${monster.isAlive() ? "alive" : "dead"}`)
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
class Hero extends LivingThing{
    constructor(name, health, secretIdentity){
        super(name, health);
        this.secretIdentity = secretIdentity;
    }

    attack(monster){
        let monsterDamage = getRandomIntInclusive(0,10)
        let heroDamage = getRandomIntInclusive(0,10)
        monster.health -= monsterDamage;
        this.health -= heroDamage;
        console.log(`${monster.name} the ${monster.classification}'s health was reduced by: ${monsterDamage}`)
        console.log(`${this.name} the heroe's health was reduced by: ${heroDamage}`)

    }

  
    fight(arrayOfMonster){
        arrayOfMonster.forEach((monster) => {
            while(monster.isAlive() && this.isAlive()){
              this.attack(monster)
            }
          })
    }

    
}


const myHero = new Hero("superman", 110, "Clark Kent");

myHero.attack(rat);

console.log(myHero.isAlive());

myHero.fight(monstersArray);

