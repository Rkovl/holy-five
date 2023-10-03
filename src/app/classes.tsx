// class Car {
//     constructor(name) {
//       this.brand = name;
//     }
  
//     present() {
//       return 'I have a ' + this.brand;
//     }
//   }
  
//   class Model extends Car {
//     constructor(name, mod) {
//       super(name);
//       this.model = mod;
//     }  
//     show() {
//         return this.present() + ', it is a ' + this.model
//     }
//   }
//   const mycar = new Model("Ford", "Mustang");
//   mycar.show();
export class Character{
    name: string
    health: number
    maxHealth: number
    power: number
    armor: number
    dodge: number
    gold: number
    inventory: []
    constructor(name:string,health:number,power:number,armor:number,dodge:number,gold:number){
        this.name = name
        this.health = health
        this.maxHealth = health
        this.power = power
        this.armor = armor
        this.dodge = dodge
        this.gold = gold
        this.inventory = []
    }
    alive() {
        if(this.health > 0)return true
        else return false
    }
    status(){
        return `${this.name}   -   ${this.health} health
        ${this.power} power  -   ${this.armor} armor  -   ${this.dodge} dodge`
    }
    attack(){
        return Math.floor(Math.random() * 3+1)
    }
}
class Rat extends Character{
    constructor(name:string,health:number,power:number,armor:number,dodge:number,gold:number) {
      super(name,health,power,armor,dodge,gold);
    }  
    attack(){
        let hold = Math.floor(Math.random() * 100+1)
        if(hold <65){hold = 1}
        else if(hold < 90){hold = 2}
        else{hold = 3}
        return hold
    }
}
export class Item {
    name : string;
    value : number;
    type : number;
    increment : number
    incrementType : string
    description : string

    constructor(name:string,value:number,type:number,increment:number,incrementType:string,description:string){
        this.name = name;
        this.value = value;
        this.type = type;
        this.increment = increment
        this.incrementType = incrementType
        this.description = description
    }
    equip(){

    }
    buy(){

    }
}

export let enemyArr = [new Character("Goblin", 10,2,1,1,10), new Rat("Rat", 2,1,0,75,10)]
export let enemy = new Character("Goblin", 10,2,1,1,10)
export let player = new Character("Hero",10,5,1,1,10)