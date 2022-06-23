// Question 1
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toLocaleLowerCase());
});

// Question 2 

const numbers = [1, 5, 8];

const square = numbers.map(num =>num ** 2);
   console.log(square)


// Question 3

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

array = instructors.map( (i) => i + " is awesome")
console.log(array)


// Question 4 

const nums = [25, 6, 8, 3]
let evenNumbers = 0;
nums.reduce((acc, num) => {
  if (acc % 2 == 0 || num % 2 == 0) {
    evenNumbers++;
  }
});
console.log(evenNumbers)

// Question 5 

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter((x) => x.includes("jerks"));
console.log(jerks);

// Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
const avg = [8, 2, 2, 4];
let average = (avg) => avg.reduce((a, b) => a + b) / avg.length;
console.log(average(avg));

//Create a function to reverse the letters in a word reverse("caterpillar") // should return "rallipretac"
const reverse = (rev) => {
    return rev.split("").reverse().join("");
  };
  console.log(reverse("caterpillar"));

  // 


  const movie = {
    name: "Forrest Gump",
    duration : 142,
    stars : ["Tom Hanks", "Robin Wright ", "Gary Sinise"],

    informationmovie : function() {
        return (`${this.name}   lasts for  ${this.duration} minutes stars ${this.stars}`)
      }
  };

  console.log(movie.informationmovie())