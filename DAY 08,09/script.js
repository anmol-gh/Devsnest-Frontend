let booked = 0;
let available = 400;

function loop() {
  for (let i = 0; i < 400; i++) {
    addElement();
  }
}

function addElement() {
  const newButton = document.createElement("button");
  newButton.className = "green";
  newButton.id = "buttons";
  newButton.addEventListener("click", clicked);
  const currentDiv = document.getElementById("container");
  currentDiv.appendChild(newButton);
}

function clicked(e) {
  if (e.target.className == "green") {
    e.target.className = "red";
    available = available - 1;
    booked = booked + 1;
  } else {
    e.target.className = "green";
    available = available - 1;
  }
  document.getElementById("booked").textContent =
    "Tickets booked " + booked + " ";
  document.getElementById("open").textContent =
    "Available Tickets " + available;
}

function reset() {
  let reds = document.querySelectorAll(".red");
  // console.log(reds);
  // console.log(reds.length);
  for (let i = 0; i < reds.length; i++) {
    reds[i].className = "green";
    // console.log([i]);
  }
  // for (let i of bleh) {
  //   console.log(i)
  //   i.className = "green";
  //  alternate let reds = document.getElementsByClassName("red");
  // reset();
  available = 400;
  booked = 0;
  document.getElementById("booked").textContent =
    "Tickets booked " + booked + " ";
  document.getElementById("open").textContent = "Available Tickets " + available;
}
loop();
