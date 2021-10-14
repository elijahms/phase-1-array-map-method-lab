const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// function titleCased() {
//   const newArr = tutorials.map(nameOf => {
//     nameOf.charAt(0).toUpperCase
//     return newArr
//   })

// }
const titleCased = () => {
  return tutorials.map(tutorial =>  {
    const splitStringArray = tutorial.split(" ").map(innerTut => {
      return innerTut.charAt(0).toUpperCase() + innerTut.slice(1)
    })
    const joinedFunc = splitStringArray.join(" ")
    return joinedFunc
  })   
}
