$(onReady);

console.log("Here are all the available people:", people);

function onReady() {
  console.log("hello world");

  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(person[i]);
  }
}
