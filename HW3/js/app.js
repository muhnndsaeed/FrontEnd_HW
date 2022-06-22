/*
Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.
1) Write down pseudocode for the following program.
2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)
You can update th
3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.
*/

function Rolldice(){
    
    random1 = Math.ceil(Math.random()*6) //random number from one up to 6
    random2 = Math.ceil(Math.random()*6)
    
    firstDice = document.getElementById('first-die');
    firstDice.classList.remove("dice-2");
    firstDice.classList.add(`dice-${random1}`);

    secondDice = document.getElementById('second-die');
    secondDice.classList.remove("dice-3");
    secondDice.classList.add(`dice-${random2}`);
    
    
}