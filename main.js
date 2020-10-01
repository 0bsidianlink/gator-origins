// Put cool code for interactive stuff on the site here.

console.log('Hello world!')

window.onclick = function () {
    const newColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${newColor}`;
}