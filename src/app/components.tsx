//prop[0] is time
//prop[1] is inputHistory

import { Character } from "./classes"


export function Intro(props:{time:string,history:{innerHTML:string}}) {
    props.history.innerHTML =`
         <div class="pastLine flex">
            <div class="time w-24 ">[${props.time}]</div>
            <div class="name w-24 text-right">Client &nbsp;</div>
            <div class="w-full text whitespace-pre-wrap"><code>"Welcome Mighty Hero! \nA Necromance has been ravaging the lands turning fallen warriors into his minions.\nI wish you better than the ones before you"</code>
            </div>
        </div>`
}

export function Paths(props:{time:string,history:{innerHTML:string},route:number[]}){
    let paths = ["I feel ominous presence over there",
    "There seems to be a building set up over there",
    "I feel a good about this path",
    "The path looks shaky over there",
    "The Stench of evil is down that path",
    "The road is quite plan"]
    props.history.innerHTML +=`
        <div class="pastLine flex">
        <div class="time w-24 ">[${props.time}]</div>
        <div class="name w-24 text-right">Client &nbsp;</div>
        <div class="w-full text whitespace-pre">  
<code>There lies before you are three branching paths
1.) ${paths[props.route[0]]}
2.) ${paths[props.route[1]]}
3.) ${paths[props.route[2]]}</code>
        </div>
      </div> `
}

export function CombatIntro(props:{time:string,history:{innerHTML:string}}) {
    props.history.innerHTML =`
         <div class="pastLine flex">
            <div class="time w-24 ">[${props.time}]</div>
            <div class="name w-24 text-right">Client &nbsp;</div>
            <div class="w-full text whitespace-pre-wrap"><code>You manage to find yourself amongst the enemy!!
1.) Attack!
2.) Flee!!</code>
            </div>
        </div>`
}

export function CombatInitial(props:{time:string,history:{innerHTML:string}}){
    props.history.innerHTML +=`
        <div class="pastLine flex">
        <div class="time w-24 ">[${props.time}]</div>
        <div class="name w-24 text-right">Client &nbsp;</div>
        <div class="w-full text whitespace-pre"><code> Shall you smite your foe? Do you have something to help you? Is this not the time for this?
1.) Attack
2.) Use Item
3.) Flee</code>
        </div>
      </div> `
}

export function CombatAttack(props:{time:string,history:{innerHTML:string}}){
    props.history.innerHTML +=`
        <div class="pastLine flex">
        <div class="time w-24 ">[${props.time}]</div>
        <div class="name w-24 text-right">Client &nbsp;</div>
        <div class="w-full text whitespace-pre"><code>What approach should one take to this bout?
1.) Aggressive Attack
2.) Defensive Attack
3.) Calculated Attack</code>
        </div>
      </div> `
}

export function CombatTie(props:{time:string,history:{innerHTML:string}}) {
    props.history.innerHTML =`
         <div class="pastLine flex">
            <div class="time w-24 ">[${props.time}]</div>
            <div class="name w-24 text-right">Client &nbsp;</div>
            <div class="w-full text whitespace-pre-wrap"><code>"Both of you were well matched!"</code>
            </div>
        </div>`
}

export function CombatAdv(props:{time:string,history:{innerHTML:string}}) {
    props.history.innerHTML =`
         <div class="pastLine flex">
            <div class="time w-24 ">[${props.time}]</div>
            <div class="name w-24 text-right">Client &nbsp;</div>
            <div class="w-full text whitespace-pre-wrap"><code>"You get the upper hand on your opponent"</code>
            </div>
        </div>`
}

export function CombatDAdv(props:{time:string,history:{innerHTML:string}}) {
    props.history.innerHTML =`
         <div class="pastLine flex">
            <div class="time w-24 ">[${props.time}]</div>
            <div class="name w-24 text-right">Client &nbsp;</div>
            <div class="w-full text whitespace-pre-wrap"><code>"It's not looking good for you"</code>
            </div>
        </div>`
}

export function Status(props:{time:string,history:{innerHTML:string},character:Character}){
    props.history.innerHTML +=`
        <div class="pastLine flex">
        <div class="time w-24 ">[${props.time}]</div>
        <div class="name w-24 text-right">Client &nbsp;</div>
        <div class="w-full text whitespace-pre"><code>${props.character.name}   -   ${props.character.health} health
${props.character.power} power  -   ${props.character.armor} armor  -   ${props.character.dodge} dodge</code>
        </div>
      </div> `
}

