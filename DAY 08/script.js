
// //   if (i%20==0){
// // const breakME=document.createElement("br")
// // document.append(breakME)
// // document.body.insertBefore('body',breakME)
//   }
// }

// function giveMeABreak(){
//     const breakMe = document.createElement('br')
//     document.body.insert
// }


for (let i = 0; i < 400; i++) {
    addElement();
  }

function addElement() {
  const newButton = document.createElement("button");

  newButton.className = "white";
  newButton.id="white";

  const currentDiv = document.getElementById("container");
   newButton.onclick=function clicked(e){
       if (e.classList=="white"){
           newButton.classList.remove("white");
           newButton.className="red";
           console.log("whittt")
        }
        else{
            e.className="white";
        }
        console.log(newButton.classList)
    };
  currentDiv.appendChild(newButton);
  }

//   function clicked(e){
//     console.log('Button was clicked')
    
//   }
