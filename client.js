$(onReady);

const randomPerson = people[randomNumber()];

// two inputs on the dom
// on submit, take the data in the input and compare it to
// randomPerson.name
//

console.log(randomPerson);

console.log("Here are all the available people:", people);

function onReady() {
  console.log(" in onReady");
  addDiv();
  $("#game").on("click", newFunction);
} // end forLoop//end onReady
function addDiv() {
  for (i = 0; i < people.length; i++) {
    $("#game").append(
      `<div data-name=${people[i].name} id="images"><img src="${people[i].image}}"</div>`
    );
  }
  $("#name").append(people[randomNumber()].name);
  // console.log('random num', randomNumber());
  // console.log('random name', people[randomNumber()].name);
}

function randomNumber() {
  return Math.floor(Math.random() * (1 + 1 - 0) + 0);
}

function newFunction(event) {
  let thing = $(event.target).closest("div");

  console.log(thing.data().name);

  if (thing.data().name === randomPerson.name) {
    alert("Correct");
  } else {
    alert("Incorrect, please try again");
  }
}
