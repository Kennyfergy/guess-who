$(onReady);

console.log("Here are all the available people:", people);

function onReady() {
  console.log(" in onReady");

  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    //     $('#inBody').append(`<div id="images"><img src="${person.image}"
    // </div>, <div id="joe></div>`)
    console.log("in people for loop", person);
    $("#inBody").append(person);
  } // end forLoop
} //end onReady
