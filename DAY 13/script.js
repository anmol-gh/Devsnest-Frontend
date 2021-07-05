console.log('hi');

var info;
var divi=document.getElementsByClassName('information');
//https://meme-api.herokuapp.com/gimme

divi.innerText="hi";
info =await fetch('https://meme-api.herokuapp.com/gimme');

console.log(await info.json);
