let name = "Carly Carnovale";
let age = 27;
let birthday = "October 28th";
let detroitGC = true;

let lifeEvents = ["I am from Manasquan, New Jersey.", 
"I am Vegan and have a dog named Kaya.", 
"I played competitive tennis and coached for many years.", 
"I hope to graduate the front-end bootcamp."];

if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let randomNumber = Math.floor(Math.random() * 10 + 1);  // returns a random integer from 1 to 10

let counter = 0;

while(true) {
    if(randomNumber !== 5){
        console.log(`${randomNumber} !== 5`);
        randomNumber = Math.floor(Math.random() * 10 + 1);  // returns a random integer from 1 to 10
        counter++;
    }
    else {
        counter++
        console.log(`5 === 5.  It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}
