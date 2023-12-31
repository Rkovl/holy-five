"use client"

//IMPORTS--------------------------------------------------------------------
import React,{useEffect, useState} from 'react';
import * as component from './components'
import { enemy, player, enemyArr, Character } from './classes';

//EXPORT---------------------------------------------------------------------
export default function Home() {

  //USE STATE--------------------------------------------------------------------
  const [timeCurrent, setTimeCurrent] = useState('')
  const [timeStatic, setTimeStatic] = useState(new Date().toLocaleTimeString('en-US',{hour12: false}))
  const [playerLocation, setPlayerLocation] = useState("")
  const [playerRouteArr, setPlayerRouteArr] = useState([
    [Math.floor(Math.random() * 1),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
    [9,9,9]
  ])
  const [playerRouteIndex, setplayerRouteIndex] = useState(0)
  const [hero, setHero] = useState(player)
  const [enemy, setEnemy] = useState()
  const [inCombat, setInCombat] = useState(false)
  const [attacking, setAttacking] = useState(false)


  //USE EFFECT--------------------------------------------------------------------
  useEffect(() => {
    let secTimer = setInterval( () => {
      setTimeCurrent(new Date().toLocaleTimeString('en-US', {
        hour12: false,
      }))
    },1000)

    return () => clearInterval(secTimer);
  }, []);


  const sleep = (ms:number)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

  //HANDLE INPUT-------------------------------------------------------------------------------

  const handleInput = async() =>{
    const inputHistory = document.querySelector('.history')!
    const inputField = document.querySelector('#inputField')!
    
    const input = inputField.value
    inputField.value = ""

    console.log("Input",input," Player Location", playerLocation)

    //In use dev door and catchall
    const notMade = (feature) =>{
      inputHistory.innerHTML += `
      <div class="pastLine flex">
        <div class="time w-24 ">[${timeStatic}]</div>
        <div class="name w-24 text-right">&nbsp;&nbsp;Client&nbsp;</div>
        <div class="w-full text whitespace-nowrap">  
            ${feature} feature is not implemented
        </div>
      </div>`
    }
    const invalidInput = () =>{
      inputHistory.innerHTML += `
      <div class="pastLine flex">
        <div class="time w-24 ">[${timeStatic}]</div>
        <div class="name w-24 text-right">&nbsp;&nbsp;Client&nbsp;</div>
        <div class="w-full text whitespace-nowrap">  
          Unrecognised command '${input}'
        </div>
      </div>`
    }

    const playerRouteAction = (selection)=>{
      console.log("Player route Action Selection",selection)
      if(selection == 6){
        selection = Math.floor(Math.random() * 5)
      }
      switch (selection) {
        case 0:
          setPlayerLocation("Combat");
          // let enemyIndex = Math.floor(Math.random() * enemyArr.length)
          // let hold = enemyArr[enemyIndex]
          setEnemy(enemyArr[Math.floor(Math.random() * enemyArr.length)])
          component.CombatIntro({time:timeStatic,history:inputHistory})
          break;

        case 1:
          notMade('Shop')
          break;
        
        case 2:
          notMade('Boon')
          break;
      
        case 3:
          notMade('Risk')
          break;

        case 4:
          notMade('Elite Combat')
          break;
      
        default:
          invalidInput()
          break;
      }
    }

    if(input == '/reset'){
      setPlayerLocation("Menu")
      clearHistory()
    }


    switch(playerLocation){
      case "Menu":
        if(input === "1"){
          setPlayerLocation("Intro")
          clearHistory()
          
        }
        else if(input === "2"){
          notMade('Load')
          break;
        }
        else if(input === "3"){
          notMade('Help')
          break;
        }
        else if(input === "4"){
          notMade('Exit')
         
          break;
        }
        else{
          invalidInput()
          break;
        }
    
      case "Intro":
        component.Intro({time:timeStatic,history:inputHistory})
        setPlayerLocation("Route")
        await sleep(2000)
        console.log('after sleep')
        console.log("inCase 1 with route",playerRouteArr[playerRouteIndex])
        component.Paths({time:timeStatic,history:inputHistory,route:playerRouteArr[playerRouteIndex]})
        console.log(playerRouteArr)
        break;
        
      case "Route":
        console.log("inside player location case 2", "input is", input)
        console.log(playerRouteArr)
        console.log(playerRouteArr[playerRouteIndex],playerRouteIndex, input-1)
          if(input>0 && input<4){
            playerRouteAction(playerRouteArr[playerRouteIndex][input-1])
          }
          else{
            console.log("is being called?")
            invalidInput()
            break;
          }
          setplayerRouteIndex(playerRouteIndex+1)
          break;
        
      case "Combat":
        const didYouWin = {
          "1":3,
          "2":1,
          "3":2
        }
        const didYouLose = {
          "3":1,
          "1":2,
          "2":3
        }
        const combatLoop = () =>{
          if(hero.alive() == false || enemy.alive() == false){
            if(hero.alive() == false){
              clearHistory()
              setPlayerLocation("Intro")
              setplayerRouteIndex(0)
              setPlayerRouteArr([
                [Math.floor(Math.random() * 1),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
                [9,9,9]
              ])
              setHero(player)
              notMade("press anything to contine")
            }
            else{
              notMade("enemy died")
              hero.gold = hero.gold + enemy.gold
              setHero(hero)
              setPlayerLocation("Route")
              component.Paths({time:timeStatic,history:inputHistory,route:playerRouteArr[playerRouteIndex]})
            }
          }
          else{
            component.Status({time:timeStatic,history:inputHistory,character:player})
            component.Status({time:timeStatic,history:inputHistory,character:enemy})
            component.CombatInitial({time:timeStatic,history:inputHistory})
          }
          setAttacking(false)
        }

        //Pre Combat screen------------------------------------
        if(!inCombat && input == 2) {
          console.log("flee selected")
          setPlayerLocation("Route")
          component.Paths({time:timeStatic,history:inputHistory,route:playerRouteArr[playerRouteIndex]})
          break;
        }
        else if(!inCombat && input == 1){
          console.log("attack selected")
          component.CombatInitial({time:timeStatic,history:inputHistory})
          setInCombat(true)
          component.Status({time:timeStatic,history:inputHistory,character:player})
          component.Status({time:timeStatic,history:inputHistory,character:enemy})
          break;
        }
        else if(!inCombat){
          invalidInput()
          break;
        }

        //Attack, Use Item or Flee---------------------------
        if(attacking == false){
          if(input == "1"){
            component.CombatAttack({time:timeStatic,history:inputHistory})
            setAttacking(true)
            break
          }
          else if(input == "2"){
            notMade("use item")
          }
          else if(input == "3"){
            notMade("flee")
          }
          else{
            console.log("invald input in attacking == false")
            invalidInput()
          }
        }

        
        if(attacking == true){
          if(enemy.attack() == input){
            clearHistory()
            component.CombatTie({time:timeStatic,history:inputHistory})
            combatLoop()
            break;
          }
          else if(enemy.attack() == didYouWin[input]){
            enemy.health = enemy.health - hero.power
            setEnemy(enemy)
            clearHistory()
            component.CombatAdv({time:timeStatic,history:inputHistory})
            combatLoop()
            break;
          }
          else if(enemy.attack() == didYouLose[input]){
            hero.health = hero.health - enemy.power
            setHero(hero)
            clearHistory()
            component.CombatDAdv({time:timeStatic,history:inputHistory})
            combatLoop()
            break;
          }
          // else{
          //   console.log("invlaid input in attacking == true", input, enemy.attack())
          //   invalidInput()
          //   break;
          // }
        }
      default:
        console.error('player location is in unexpected area')
    }
  }

  const clearHistory = ()=>{
    document.querySelector('.history').innerHTML = ''
  }


  return (
    <main className="">
      <div className='history'>
        <div className="pastLine flex  ">
          <div suppressHydrationWarning className="time w-24 ">[{timeStatic}]</div>
          <div className="name w-24 text-right">Client &nbsp;</div>
          <div className="w-full text whitespace-pre">  
              <code>{` __   __  _______  ___      __   __    _______  ___   __   __  _______ 
|  | |  ||       ||   |    |  | |  |  |       ||   | |  | |  ||       |
|  |_|  ||   _   ||   |    |  |_|  |  |    ___||   | |  |_|  ||    ___|
|       ||  | |  ||   |    |       |  |   |___ |   | |       ||   |___ 
|       ||  |_|  ||   |___ |_     _|  |    ___||   | |       ||    ___|
|   _   ||       ||       |  |   |    |   |    |   |  |     | |   |___ 
|__| |__||_______||_______|  |___|    |___|    |___|   |___|  |_______|

  1.) Start
  2.) Load
  3.) Help
  4.) Exit`}</code>
          </div>
        </div>
      </div>


      <div className="editline bg-zinc-800 flex">
        <div suppressHydrationWarning className="time w-24 ">[{timeCurrent}]</div>
        <div className="nameCurrent w-24 text-right">User &gt; &nbsp;</div>
        <input type='text' id='inputField' onKeyUp={e=>{if(e.key==="Enter"){handleInput();setTimeStatic(timeCurrent);}}} className="w-full appearance-none text bg-zinc-800 outline-none "></input>
      </div>
    </main>
  )
}