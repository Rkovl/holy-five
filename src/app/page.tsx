"use client"

//IMPORTS--------------------------------------------------------------------
import React,{useEffect, useState} from 'react';

//EXPORT---------------------------------------------------------------------
export default function Home() {

  //USE STATE--------------------------------------------------------------------
  const [timeCurrent, setTimeCurrent] = useState(new Date().toLocaleTimeString())
  const [timeStatic, setTimeStatic] = useState(new Date().toLocaleTimeString())

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
        <div className="w-full text">  System Running...</div>
      </div>

      
      <div className="editline bg-slate-950 flex">
        <div className="time w-24 ">[{timeCurrent}]</div>
        <div className="nameCurrent w-24 text-right">&gt; &nbsp;</div>
        <input className="w-full appearance-none text bg-slate-950 outline-none "></input>
      </div>
    </main>
  )
}
/*
              O
              {______________________________________
@XXXXXXXXXXXXXX_____________HOLY FIVE_______________/
              {
              O
*/