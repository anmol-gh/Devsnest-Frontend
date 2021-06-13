//Solution to Question 01

function addListProperties(objectHere) {
  let x = "";
  for (i in objectHere) {
    x += i + ",";
  }
  return x;
  /*Alternative method
  return Object.keys(objectHere).join(',');
  */
}

console.log(
  addListProperties({ name: "David Rayy", sclass: "VI", rollno: 12 })
);

//Solution to Question 02

const deleteProperty = (objectHere, deleteThis) => {
  delete objectHere[deleteThis];
  return objectHere;
};

console.log(
  deleteProperty({ name: "David Rayy", sclass: "VI", rollno: 12 }, "rollno")
);

//Solution to Question 03

function lengthOfObject(objectHere) {
  return Object.keys(objectHere).length;
}

console.log(lengthOfObject({ name: "David Rayy", sclass: "VI", rollno: 12 }));

//Solution to Question 04

function display(list) {
  for (i of list) {
    console.log(i);
  }
}

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

//Solution to Question 05

function volume(height, radius) {}
