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

    let playerRoute = {
      index: 0,
      action:[
        {location:3,text:component.Combat({time:timeStatic,history:inputHistory,enemy:enemy})},
        (function(){notMade('Shop')})(),
        (function(){notMade('Boon')})(),
        (function(){notMade('Risk')})(),
        (function(){notMade('Elite Combat')})(),
        (function(){this.action[Math.floor(Math.random() * 5)]})()
      ],
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
        component.Paths({time:timeStatic,history:inputHistory,route:playerRoute.paths[playerRoute.index]})
        playerRoute.index + 1
        
      case 2:
          if(input === "1"){
            playerRoute.paths[0][0]
          }
          else if(input === "2"){

          }
          else if(input === "3"){

          }
          else{
            invalidInput()
            break;
          }
          break;
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