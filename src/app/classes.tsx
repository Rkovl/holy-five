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
class Character{
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

class Item {
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

export const enemy = new Character("Goblin", 10,2,1,1,10)
export const player = new Character("Hero",10,2,1,1,10)