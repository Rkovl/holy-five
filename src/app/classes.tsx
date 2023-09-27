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
    name!: string
    health!: number
    maxHealth!: number
    power!: number
    dodge!: number
    gold!: number
    constructor(name:string,health:number,power:number,armor:number,dodge:number,gold:number){
        self.name = name
        self.health = health
        self.maxHealth = health
        self.power = power
        self.armor = armor
        self.dodge = dodge
        self.gold = gold
    }
    alive() {
        if(self.health > 0)return true
        else return false
    }
    status(){
        return `${self.name}   -   ${self.health} health
        ${self.power} power  -   ${self.armor} armor  -   ${self.dodge} dodge`
    }
    choice(){
        return Math.floor(Math.random() * 3)
    }
}

class Item {
    constructor(name:string,value:number,type:number,increment:number,incrementType:string,description:string){
        self.name = name;
        self.value = value;
        self.type = type;
        self.increment = increment
        self.incrementType = incrementType
        self.description = description
    }
    equip(){

    }
    buy(){

    }
}