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
        neutral: '',
        smug: ''
    }
    
}

function changePFP (emote) {
    document.getElementById("portrait").src=pokemon.grovyle[emote];
}