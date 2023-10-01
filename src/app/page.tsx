"use client"

//IMPORTS--------------------------------------------------------------------
import React,{useEffect, useState} from 'react';
import * as component from './components'

//EXPORT---------------------------------------------------------------------
export default function Home() {

  //USE STATE--------------------------------------------------------------------
  const [timeCurrent, setTimeCurrent] = useState('')
  const [timeStatic, setTimeStatic] = useState(new Date().toLocaleTimeString('en-US',{hour12: false}))
  const [playerLocation, setPlayerLocation] = useState(0)
  const [playerRouteArr, setPlayerRouteArr] = useState([
    [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
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
  const [inCombat, setInCombat] = useState(false)


  //USE EFFECT--------------------------------------------------------------------
  useEffect(() => {
    let secTimer = setInterval( () => {
      setTimeCurrent(new Date().toLocaleTimeString('en-US', {
        hour12: false,
      }))
    },1000)

    return () => clearInterval(secTimer);
  }, []);


  const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

  //HANDLE INPUT-------------------------------------------------------------------------------

  const handleInput = async() =>{
    const inputHistory = document.querySelector('.history')
    const inputField = document.querySelector('#inputField')
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
          setPlayerLocation(3);
          component.Combat({time:timeStatic,history:inputHistory})
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
    const playerRoute = {
      index: 0,
      //path 0 = Combat
      //path 1 = Shop
      //path 2 = Boon
      //path 3 = Risk
      //path 4 = Elite Combat
      //path 5 = Any
      paths:[
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
        [9,9,9]
      ]
    }

    if(input == '/reset'){
      setPlayerLocation(0)
      clearHistory()
    }

    //case 0 = menu
    //case 1 = intro
    //case 2 = paths
    switch(playerLocation){
      case 0:
        if(input === "1"){
          setPlayerLocation(1)
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
    
      case 1:
        component.Intro({time:timeStatic,history:inputHistory})
        setPlayerLocation(2)
        await sleep(2000)
        console.log('after sleep')
        console.log("inCase 1 with route",playerRouteArr[playerRouteIndex])
        component.Paths({time:timeStatic,history:inputHistory,route:playerRouteArr[playerRouteIndex]})
        console.log(playerRouteArr)
        break;
        
      case 2:
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
        
      case 3:
        if(!inCombat && input == 2) {
          setPlayerLocation(2)
          component.Paths({time:timeStatic,history:inputHistory,route:playerRouteArr[playerRouteIndex]})
          break;
        }
        else if(!inCombat && input == 1){
          setInCombat(true)
        }
        else if(!inCombat){
          invalidInput()
          break;
        }
        if(input == "1"){
          console.log("attack")
          //attacking = true
        }
        else if(input == "2"){
          console.log("use item")
        }
        else if(input == "3"){
          console.log("flee")
        }
        else{
          invalidInput()
        }
        //if attacking ==true
        //enemy.attack()
      //   let didYouWin = {
      //     'X':'C',
      //     'Y':'A',
      //     'Z':'B'
      // }
    //   if(didYouTie[yourHand] == oppHand){
    //     totalScore += 3
    // }
    // else if(didYouWin[yourHand] == oppHand){
    //     totalScore += 6
    // }

        //COMBAT STARTS HERE--------------------------------------------
        //get player data and enemy data
        //give options of attack, use item* or flee
        //if attack give option of planned, powerful or defensive attack
        //opponient will then pick
        //will then determin advantage, draw or disadvantage
        //damage calculations
        //alive check
        //loop back to "attack, use item or flee" option or calculate reward
        //go back to paths
        //if flee also go back to paths
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