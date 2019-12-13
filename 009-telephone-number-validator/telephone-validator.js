const telephoneCheck = (string) => {
  const regexp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;
  const res = regexp.test(string);

  if (res) {
    console.log('PASS', res, string)
    return true
  } else {
    console.log('NOT PASS', res, string)
    return false
  }
}


// testings -----------------
let arr = [
  '555-555-5555',
  '(555)555-5555',
  '(555) 555-5555',
  '555 555 5555',
  '5555555555',
  '1 555 555 5555'
]

let errors = [
  '123**&!!asdf#',
  '55555555',
  '(6054756961)',
  '2 (757) 622-7382',
  '-1 (757) 622-7382'
]

let arrStillErrors = [
  '(555-555-5555',
  '2(757)622-7382',
  '2(757)6227382',
  '(275)76227382',
  '27576227382',
  '2 757 622-7382',
  '1 (555) 555-5555'
]

console.log('MUST BE TRULL')
arr.forEach(item => {
  telephoneCheck(item);
})

console.log('MUST BE FALSE')
errors.forEach(item => {
  telephoneCheck(item);
})

console.log('OTHERS')
arrStillErrors.forEach(item => {
  telephoneCheck(item);
})