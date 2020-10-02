// Put cool code for interactive stuff on the site here.

console.log('Hello world!')

window.onclick = function () {
    const newColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${newColor}`;
}

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
    }
}

let choices1 = Object.keys(pokemon);
let p = '';
let choices2 = Object.keys(pokemon[p]);
let table1 =  document.getElementById('dropdown1');
/*
for(var i = 0; i < choices1.length; i++) {
    var opt = choices1[i];

    var el = document.createElement("option");
    el.text = opt;
    el.value = opt;

    table1.add(el);
}​ */

function getOptions1 () {
    for(var i = 0; i < choices1.length; i++) {
    var x = document.getElementById("dropdown1");
  var option = document.createElement("option");
  option.text = choices1[i];
  option.value = choices1[i];

  x.add(option);
    }
} 

//onchange triggers when a value is changed, apply values to dropdowns that = object keys, then feed that into the function


function getOptions2 () {
}

function changePFP (poke, emote) {
    document.getElementById("portrait").src=pokemon[poke][emote];
}

function onChangePFP1 () {
let cv = document.getElementById("dropdown1").value
let vc = 'neutral'
changePFP (cv, vc)

}