const prompt = require('prompt-sync')({ sigint: true });

let x = 0;
let y = 0;

while (true) {

  const choice = prompt("Would you like to go [up], [right], [down], or [left]? You are searching for the dungeon: ");

  if (choice === 'up') {
    y = y + 1;
    console.log(x + ':' + y);
  } else if (choice === 'down') {
    y = y - 1;
    console.log(x + ':' + y);
  } else if (choice === 'right') {
    x = x + 1;
    console.log(x + ':' + y);
  } else if (choice === 'left') {
    x = x - 1;
    console.log(x + ':' + y);
  } else {
      console.log('invalid')
  }

  console.log('Your coordinates: ', x, ':', y,);

  if (x === -1 && y === 2) {
    console.log('You found the dungeon, your reward is gold.');
  } if (x < -1) {
     console.log('You are too far left, go back right 1 spot and focus on going up or down.')
  } if (x > 1) {
    console.log('The mountain is too steep, perhaps go left of the starting point.')
  } if (y < -2) {
    console.log('The swamp is too dangeous, perhaps go up from starting point.')
 } if (y > 2) {
   console.log('You are too far up, go back down 1 spot and focus on left or right. Enemies are far north and they will attack.')
 }

}