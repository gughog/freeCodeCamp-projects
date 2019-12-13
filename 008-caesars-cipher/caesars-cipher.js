// Caesar's Cipher
function rot13 (word) {
  let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let str = [...word];
  let newLetters = [];
  
  str.forEach(letter => {
    let indexFound = letters.indexOf(letter);
    let newIndex = indexFound - 13;
    
    if (/[\W_]+/g.test(letter)) {
      newLetters.push(letter)
    } else if (indexFound < 13) {
      newLetters.push(letters[letters.length + newIndex])
    } else {
      newLetters.push(letters[newIndex])
    }
  })
  console.log(newLetters.join(''));
  return newLetters.join('');
}

// TEST AREA
rot13("SERR PBQR PNZC")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
rot13("SERR YBIR?")
rot13("SERR CVMMN!")