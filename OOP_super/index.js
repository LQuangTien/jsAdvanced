class hero{
  constructor(name, hp, damage){
    this.name = name
    this.hp = hp
    this.damage = damage
  }
  applyDamage(damage){
    this.hp -= damage
  }
  attack(enemy){
    enemy.applyDamage(this.damage)
  }
}
class rangedHero extends hero{
  constructor(name, hp, damage, range){
    super(name, hp, damage)
    this.range = range
  }
  attack(enemy){
    super.attack(enemy)
    this.hp += this.damage
  }
}
const heroA = new rangedHero("A", 100, 10)
const heroB = new hero("B", 100, 12)
heroA.attack(heroB)
console.log(heroA.hp)
console.log(heroB.hp)
