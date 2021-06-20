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
    available=available-1;
    booked = booked + 1;
  } else {
    e.target.className = "green";
    available = available - 1;
  }
  document.getElementById("booked").textContent =
    "Tickets booked " + booked + " ";
  document.getElementById("open").textContent = "Available Tickets " + available;
}

function reset() {
  let reds = document.getElementsByClassName("red");
  console.log(reds);
  for (let i of reds) {
    i.className = "green";
    reset();
  }
  available=400;
  booked=0;
  document.getElementById("booked").textContent =
  "Tickets booked " + booked + " ";
document.getElementById("open").textContent = "Available Tickets " + available;
}

loop();
