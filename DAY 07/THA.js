//Solution to Question 01

function listProperties(objectHere) {
  let x = "";
  for (i in objectHere) {
    x += i + ",";
  }
  return x;
  /*Alternative method
  return Object.keys(objectHere).join(',');
  */
}

console.log(listProperties({ name: "David Rayy", sclass: "VI", rollno: 12 }));

//Solution to Question 02

const deleteProperty = (objectHere, deleteThis) => {
  delete objectHere.deleteThis;
  delete objectHere.rollno;
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
