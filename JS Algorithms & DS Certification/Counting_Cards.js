var count = 0;

function cc(card) {
  // Only change code below this line

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 10:
    case 'A':
    case 'J':
    case 'K':
    case 'Q':
      count -= 1;
  }
  
  return count + ' ' + (count > 0 ? "Bet" : "Hold");
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
