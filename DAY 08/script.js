
function loop(){
for (let i = 0; i < 400; i++) {
    addElement();
  }
}

function addElement() {
  const newButton = document.createElement("button");

  newButton.className = "red";
  newButton.id="buttons";
  newButton.addEventListener("click",clicked)

  const currentDiv = document.getElementById("container");
  currentDiv.appendChild(newButton);
  }

  function clicked(e){
    if(
    (e.target.className)=="red") {
      e.target.className="white";
    }
    else{
      e.target.className="red";
    }
   
  }

function reset(){
  let whites=document.getElementsByClassName("white");
  console.log(whites);
  // whites.forEach((x)=>{
  //   console.log(x)
  // // xyz.className="red";
  // }
 // )

  for (let i=0;i<whites.length;i++){
    console.log(whites[i])
    whites[i].className="red";
  }
}
loop();
