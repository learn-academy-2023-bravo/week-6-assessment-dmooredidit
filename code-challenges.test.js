// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// psuedocode
// input: array and prop
// output: array
// create function named capNames
// use for loop to iterate over array of objects 
// .split(" ") the array from the prop
// iterate again
// use .charAt(0) to select the character at index 0
// .toUpperCase() +words[0] to add words together at index 0 almost like a concate
// .splice(1) to cu slice the word at index 1 so everything after index 1
// .join(". ") 

// a) Create a test with an expect statement using the variable provided.

describe ("capNames", () => {
  it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(capNames(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const capNames = (array, prop) => {
  for(let w = 0; w<array.length; w++) ={
    let wordSplit = array[w][prop].split(" ");
    for(let i = 0; i<wordSplit.length; i++) => {
      let upword[0] = upWord[0].charAt(0).toUpperCase()+words[0].slice(1);
      wordSplit[i] = wordSplit.join(" ")
    } 
    array[w][prop] = wordSplit.join(" ")
  }
  return wordSplit
}
console.log(capNames(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// psuedocode
// input: array
// output: array
// create function named divThree
// iterate over array using .filter() the values to find anything that is exactly an integer by returning the typeof value
// create empty array to push new integers into
// iterate again using for loop to divide each by 3 (%3)
// push numbers into empty array 
// return array
// a) Create a test with an expect statement using the variables provided.

describe ("divThree", () => {
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(divThree(hodgepodge1)).toEqual("[ 2, 0, -1, 0 ]")
    expect(divThree(hodgepodge2)).toEqual("[ 2, 1, -1 ]")
  })
})

// b) Create the function that makes the test pass.
const divThree = (array) => {
  array.filter((value) => {
    return typeof value === "number"
  })
  let numOnlyArray = []
  const onlyNums = (array) => {
    for(let i=0; i<array.length; i++);
    array[i] % 3
  }
  return numOnlyArray.push(onlyNums)
}
console.log(divThree(hodgepodge1))
console.log(divThree(hodgepodge2))

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// psuedocode
// input: array
// output: integer
// create function named cubeNum
// set cube to equal 0
// use for loop to iterate over array and cube each value living at the index
// iterate again to add values together
// not too sure if i should .map inside my iteration but it seems redundant to do so but i cannot figure out how to remove my second for loop and just see it working in theory
// I did .map the array to add them together though. I'm having a blocker at this point. 

// a) Create a test with an expect statement using the variables provided.

describe ("cubeNum", () => {
  it ("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubeNum(cubeAndSum1)).toEqual("99")
    expect(cubeNum(cubeAndSum2)).toEqual("1125")
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

const cubeNum = (array) => {
  let cube = 0
  for(let i=0; i<array.length; i++) =>{
  cube = array[i].foreach(value) => value **3}
  for(let c=0; c<array.length; c++) => {
    addValues = cube.map((value) => cube[c]+= cube[c])
  }
  return cube
}

console.log(cubesum(cubeAndSum1))
console.log(cubesum(cubeAndSum2))