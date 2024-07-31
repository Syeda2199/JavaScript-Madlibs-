let food = "shawarma"
let drink = "fruit punch"
let wallet = 100
let designer = "Khaadi"
let car = "ferrari"
let adjective = "extraordinary"
let noun = "Rabbit"
let verb = "help"
let number = 14
let calculatedNumber = (4*8)
let isExtraordinary = true
let username = prompt("What is your name?")
let story = `Once upon a time, there was a ${adjective} ${noun} that loved to ${verb}. 
It had ${number} magical powers, which it used to help the world.
One day, ${username} discovered that the ${noun} could actually ${verb} with ${calculatedNumber} times the speed of light.
Wasn't that extraordinary? $(isExtraordinary)`;

 // Insert the story into the document 
 document.getElementById("story").innerText = story;
