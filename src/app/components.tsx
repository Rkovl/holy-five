//prop[0] is time
//prop[1] is inputHistory

export function Intro(prop) {
    prop[1].innerHTML =`
         <div class="pastLine flex">
            <div class="time w-24 ">[${prop[0]}]</div>
            <div class="name w-24 text-right">Client &nbsp;</div>
            <div class="w-full text whitespace-pre"><code>"Welcome Mighty Hero! \nA Necromance has been ravaging the lands turning fallen warriors into his minions.\nI wish you better than the ones before you"</code>
            </div>
        </div>`
}

export function Paths(props){
    let paths = ["I Feel ominous presence over there",
    "There Seems to be a building set up over there",
    "I feel a good about this path",
    "The path looks shaky over there",
    "The road is quite plan"]
    return(
        <div className="pastLine flex">
        <div className="time w-24 ">[{props.time}]</div>
        <div className="name w-24 text-right">Client &nbsp;</div>
        <div className="w-full text whitespace-pre">  
            <code>{`1.) ${paths[props.path1]}
            2.) ${paths[props.path2]}
            3.) ${paths[props.path3]}`}</code>
        </div>
      </div> 
    )
}