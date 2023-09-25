"use client"

//IMPORTS--------------------------------------------------------------------
import React,{useEffect, useState} from 'react';
import * as component from './components'

//EXPORT---------------------------------------------------------------------
export default function Home() {

  //USE STATE--------------------------------------------------------------------
  const [timeCurrent, setTimeCurrent] = useState(new Date().toLocaleTimeString())
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

  //HANDLE INPUT-------------------------------------------------------------------------------

  const handleInput = (input) =>{
    console.log(input.data)
    console.log('called')
    switch(playerLocation){
      case 0:
        if(input = 1){

        }
        else if(input = 2){

        }
        else if(input = 3){

        }
        else if(input = 4){

        }
        else{
          document.getElementsByClassName('history').innerHTML += `<div> error, you suck </div>`
        }
        break;
      default:
        console.log('error, you suck at coding')
    }
  }

  // document.querySelector("#inputField")?.addEventListener("keyup", e=>{if(e.key=='Enter'){console.log(e)}}, false)

  return (
    <main className="">
      <div className='history'>
        <div className="pastLine flex">
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
        <input type='text' id='inputField' onKeyUp={e=>{if(e.key==="Enter"){console.log(e)}}} className="w-full appearance-none text bg-zinc-800 outline-none "></input>
      </div>
    </main>
  )
}
/*
              O
              |______________________________________
@XXXXXXXXXXXXXX_____________HOLY FIVE_______________/
              |
              O
*/