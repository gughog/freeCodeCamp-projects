/*
> Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note, You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

const palindrome = (str) => {
  const strToLower = str.toLowerCase()
                        .trim()
                        .replace(/\s/g, '')
                        .replace(/[\W_]+/g, '');
  const strToArr = [...strToLower];
  const strArrInverted = [...strToArr].reverse();
  const strs = [strToArr.join(''), strArrInverted.join('')]

  console.log(strs)
  return strs[0] === strs[1]
}

palindrome("YEY");
palindrome("race car");
palindrome("_eye");