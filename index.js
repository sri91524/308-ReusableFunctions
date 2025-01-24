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