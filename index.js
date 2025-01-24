//ToDo  Part 1: Thinking Functionally

console.log("===========Part 1================")

//1.    Take an array of numbers and return the sum

function sumArray(numbers){
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
}

const inputNum = [1,2,3,4,5,6];
console.log(`Numbers: ${inputNum}`);
console.log("Sum: ",sumArray(inputNum));

//------------------------------------------------------------------------

//2.    Take an array of numbers and return the average.
function averageArray(numbers)
{
    const sum = sumArray(inputNum);
    const avg = sum/numbers.length; 
    return avg;
}
console.log("Average: ",averageArray(inputNum));

//---------------------------------------------------------------------------

//3.    Take an array of strings and return the longest string.
const arrWords = ['say', 'hello world', 'in the meadow', 'the best universe', 'Good morning'];
let longest = "";

function longestString(words){
    if(words.length > 0)
        {
                words.forEach((item) => {
                if(item.length > longest.length)
                {
                    longest = item;
                }        
            });
            return longest;                        
        }
        else
        {
            console.log("Please provide the array of words!")
        }
    }
console.log(`Words - "${arrWords.join(", ")}"`);
console.log(`Longest String is "${longestString(arrWords)}"`);

//-----------------------------------------------------------------------------

//4.    Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

const inputLength = 12;
function stringsLongerThan(words, length){
    const result = words.filter((item) => item.length > length);
    return result;
}

console.log(`Words that are longer than ${inputLength} - "${stringsLongerThan(arrWords, inputLength).join(", ")}"`);

//--------------------------------------------------------------------------

//5.    Take a number, n, and print every number between 1 and n without using loops. Use recursion.
const inputNumber = 5;

function printNumbers(n) {
    if (n < 1) {
      return; // Base case: stop recursion when n is less than 0
    }  
    printNumbers(n - 1); // Recursive call to print the previous number
    console.log(n);
  }
  console.log(`Numbers between 1 and ${inputNumber}:`)
  printNumbers(inputNumber);

  //-----------------------------------
//ToDo   Part 2: Thinking Methodically
//   For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:


// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

const arrPersonDetails = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

 console.log("==================Part2===========================");

//1.     Sort the array by age
const sortArray = arrPersonDetails.sort((a, b) => (a.age - b.age));
console.log("Person details sorted by age: ", sortArray);

//---------------------------------------------------------------------
//2.    Filter the array to remove entries with an age greater than 50.
const copyArray = [...arrPersonDetails];

const ageLT50 = copyArray.filter((person) => person.age <= 50);
console.log("Age <= than 50: ", ageLT50)

//-----------------------------------------------------------------------

//3.    Map the array to change the “occupation” key to “job” and increment every age by 1
console.log("Change the 'occupation key' to 'job' and increment age by 1")
let updatedPersonDetails = arrPersonDetails.map((person) => 
         ({...person, job : person.occupation, age : parseInt(person.age) + 1}));

updatedPersonDetails.forEach((person) => delete person.occupation);
console.log(updatedPersonDetails);

//-------------------------------------------------------------------------
//4.    Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
const totalAge = arrPersonDetails.reduce((sum, person) => sum + Number(person.age), 0);
const averageAge = totalAge / arrPersonDetails.length;

console.log("Total Age: ", totalAge);
console.log("Average Age: ", averageAge);

//ToDO Part3 -- Thinking Critically
//------------------------------------------------------------------------
// Take an object and increment its age field.
// Take an object, make a copy, and increment the age field of the copy. Return the copy.
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time

console.log("======================Part 3===========================");
console.log("Incrementing age field if exist and same manipulation using copy of an object")

function incrementAge(objPerson)
{
    if(!objPerson.age)
    {
        objPerson.age = 0;
    }
    else
    {
        objPerson.age++;
    }    
    objPerson.update_at = new Date();
}

let Person = {firstName: 'Hari', lastName: 'Charan', agefavGame: 'Roblox'};
incrementAge(Person);
console.log(Person);

//Manipulating on copy of object

function UpdateCopyObj(objPerson)
{
    let copyObjPerson = {...objPerson};
    if(!copyObjPerson.age)
    {
        copyObjPerson.age = 0;        
    }
    else
    {
        copyObjPerson.age++;
    }
    copyObjPerson.update_at = new Date();
    return copyObjPerson;
}
let secondPerson = {name:'Divya', age: 9, favColor: 'Pink', hobby: 'making crafts'};
console.log(UpdateCopyObj(secondPerson));

//------------------------------------------------------------------------------