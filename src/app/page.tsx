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

  
  let playerRoute = {
    index:0,
    paths:[
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [Math.floor(Math.random() * 3),Math.floor(Math.random() * 3),Math.floor(Math.random() * 3)],
      [9,9,9]
    ]
  }

  const sleep = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

  //HANDLE INPUT-------------------------------------------------------------------------------

  const handleInput = async() =>{
    const inputHistory = document.querySelector('.history')
    const inputField = document.querySelector('#inputField')
    const input = inputField.value
    inputField.value = ""
    console.log(input)
    console.log(inputHistory)
    console.log(playerLocation)

    //case 0 = menu
    //case 1 = intro
    //case 2 = paths
    switch(playerLocation){
      case 0:
        if(input == 1){
          setPlayerLocation(1)
          clearHistory()
          
        }
        else if(input == 2){
          inputHistory.innerHTML += `<div> input 2 feature not implemented </div>`
          break;
        }
        else if(input == 3){
          inputHistory.innerHTML += `<div> input 3 feature not implemented </div>`
          break;
        }
        else if(input == 4){
          inputHistory.innerHTML +=`<div> input 4 feature not implemented </div>`
          break;
        }
        else{
          console.log("did it read?")
          inputHistory.innerHTML += `<div> case 0 else </div>`
        }
      
        case 1:
          component.Intro([timeStatic,inputHistory])
          setPlayerLocation(2)
          console.log('before sleep')
          await sleep(50000)
          console.log('dont run instant pls')
        case 2:
          break;
      default:
        inputHistory.innerHTML += `
        <div class="pastLine flex">
          <div class="time w-24 ">[${timeStatic}]</div>
          <div class="name w-24 text-right">&nbsp;&nbsp;Client&nbsp;</div>
          <div class="w-full text whitespace-nowrap">  
              ${input} ERROR IS NOT A VALID INPUT
          </div>
        </div>`
    }
  }

  const clearHistory = ()=>{
    document.querySelector('.history').innerHTML = ''
  }


  return (
    <main className="">
      <div className='history'>
        <div className="pastLine flex  ">
          <div className="time w-24 ">[{timeStatic}]</div>
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
        <div className="time w-24 ">[{timeCurrent}]</div>
        <div className="nameCurrent w-24 text-right">&gt; &nbsp;</div>
        <input type='text' id='inputField' onKeyUp={e=>{if(e.key==="Enter"){handleInput();setTimeStatic(timeCurrent);}}} className="w-full appearance-none text bg-zinc-800 outline-none "></input>
      </div>
    </main>
  )
}