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

// Calling Solution to Question 01

console.log(
  addListProperties({ name: "David Rayy", sclass: "VI", rollno: 12 })
);

//Solution to Question 02

const deleteProperty = (objectHere, deleteThis) => {
  delete objectHere[deleteThis];
  return objectHere;
};

//Calling Solution to Question 02
console.log(
  deleteProperty({ name: "David Rayy", sclass: "VI", rollno: 12 }, "rollno")
);

//Solution to Question 03

function lengthOfObject(objectHere) {
  return Object.keys(objectHere).length;
}

//Calling Solution to Quesion 03

console.log(lengthOfObject({ name: "David Rayy", sclass: "VI", rollno: 12 }));

//Solution to Question 04

function display(list) {
  for (i of list) {
    console.log(i.title);
    console.log("Author name is" + i.author);
    if (i.readingStatus == true) {
      console.log("Reading Status: True");
    }
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

//Solution to Question 04
display(library);

//Solution to Question 05

function volume(height, radius) {
  let volumeOfCylinder = 3.14 * radius * radius * height;
  //alternatively
  //return volumeOfCylinder.toFixed(4)
  try {
    let decimal = volumeOfCylinder.toString().split(".")[1].slice(0, 4);
    return volumeOfCylinder.toString().split(".")[0] + "." + decimal;
  } catch {
    return volumeOfCylinder;
  }
}

//Calling Solution to Question 05

console.log(volume(10.45, 5.48));
console.log(volume(10, 10));

//Solution to Question 06

let sortArray = (a, b) => {
  //Compares by title name
  return a.title.localeCompare(b.title);
  /* To compare by LibraryID 
  return a-b */
  /* To compare by Author
  return a.author(localeCompare(b.author));
  */
};

//Calling Solution to Question 06

var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library.sort(sortArray);
