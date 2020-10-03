// Put cool code for interactive stuff on the site here.

console.log('Hello world!')

window.onclick = function () {
    const newColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${newColor}`;
}


// good god I have way to many functions just to change a picture based on two drop down menus
// BUT HEY AT LEAST THE OBJECT IMPLIMNENTATION WORKS SEE THIS IS QUICKER IN THE LONG RUN I SWEAR
//also don't judge my variables

const pokemon = {
    grovyle: {
        neutral: 'portraits/grovyle/grovyleneutral.png',
        smug: 'portraits/grovyle/grovylesmug.png',
        mute: 'portraits/grovyle/grovylemute.png'
    },
    dusknoir: {
        neutral: 'portraits/dusknoir/duskneutral.png',
        smug: 'portraits/dusknoir/dusksmug.png'
    },
    celebi: {
        neutral: 'portraits/celebi/celebineutral.png'
    },
    pat: {
        neutral: 'portraits/pat/patneutral.png'
    }
}

const baseText = {
    grovyle: 'Grovyle: im gonna slap dusknoir on bothe cheeks',
    dusknoir: 'Dusknoir: sex',
    celebi: 'Celebi:',
    pat: 'Pat: Huge Alligator'
}

// this is set up so i can enter something in here and it will automatically generate the html stuff

let choices1 = Object.keys(pokemon);
let table1 =  document.getElementById('dropdown1');


function getOptions1 () {
    for( i = 0; i < choices1.length; i++) {
    let x = document.getElementById("dropdown1");
  let option = document.createElement("option");
  option.text = choices1[i];
  option.value = choices1[i];
  x.add(option);
    }
} 

// gets stuff from the object and throws it into first dropdown, called on startup and value change

function getOptions2 (currentPokemon) {

    let choices2 = Object.keys(pokemon[currentPokemon]);
    let element = document.getElementById("dropdown2");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    for( i = 0; i < choices2.length; i++) {
    let x = document.getElementById("dropdown2");
  let option = document.createElement("option");
  option.text = choices2[i];
  option.value = choices2[i];
  x.add(option);
    }
} 

//is called when first dropdown is changed, removes previous choices and replaces them with new ones.
//I still have a problem where the old options, if not replaced, show up as undefined, but hey at least it isn't continually adding new ones now
//I could also probably make it into one function that checks which dropdown its running on and does the other stuff with if else but eh

function changePFP (poke, emote) {
 document.getElementById("portrait").src=pokemon[poke][emote];
}

//original function i used to change the pfp on button click that i kept and fed into other functions

function onChangePFP1 () {
let currentPokemon = document.getElementById("dropdown1").value
let currentFacial = 'neutral'
changePFP (currentPokemon, currentFacial)
getOptions2(currentPokemon)
document.getElementById("myTextArea").value = baseText[currentPokemon];
}

function onChangePFP2 () {
    let currentPokemon = document.getElementById("dropdown1").value
    let currentFacial = document.getElementById("dropdown2").value
    changePFP (currentPokemon, currentFacial)
}

//both these are just slightly edited on change functions for each dropdown that I should probably make into one at some point