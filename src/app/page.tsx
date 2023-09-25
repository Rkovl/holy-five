"use client"

//IMPORTS--------------------------------------------------------------------
import React,{useEffect, useState} from 'react';

//EXPORT---------------------------------------------------------------------
export default function Home() {

  //USE STATE--------------------------------------------------------------------
  const [timeCurrent, setTimeCurrent] = useState(new Date().toLocaleTimeString())
  const [timeStatic, setTimeStatic] = useState(new Date().toLocaleTimeString('en-US',{hour12: false}))

  //USE EFFECT--------------------------------------------------------------------
  useEffect(() => {
    let secTimer = setInterval( () => {
      setTimeCurrent(new Date().toLocaleTimeString('en-US', {
        hour12: false,
      }))
    },1000)

    return () => clearInterval(secTimer);
  }, []);


  return (
    <main className="">
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

To Start press 1`}</code>
        </div>
      </div>

      
      <div className="editline bg-zinc-800 flex">
        <div className="time w-24 ">[{timeCurrent}]</div>
        <div className="nameCurrent w-24 text-right">&gt; &nbsp;</div>
        <input className="w-full appearance-none text bg-zinc-800 outline-none "></input>
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