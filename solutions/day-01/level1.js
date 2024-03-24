// Exercise 01 Level 01
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

//1. Declare an empty array;
//a. Array Constructor
const arr = Array() //creates an empty array
console.log(arr);

//b. Using the brackets notation
const emptyArray = []
console.log(emptyArray);

//2. Declare an array with more than 5 number of elements
//a. Array Constructor
const arrayWithSixElements = Array(6).fill(1) //Creating a non empty array
console.log(arrayWithSixElements);

//b. Using the brackets notation
const nums = [1,2,3,4,5,6]
console.log(nums);

//3. Find the length of your array
const lenghOfArray = nums.length
console.log(`Length of nums: ${lenghOfArray}`);

//4. Get the first item, the middle item and the last item of the array
// First item
const firstelement = nums[0]
// Middle item
const midItem = nums[3]
//last item
const lastItem = nums[nums.length-1]

//5. Declare an array called mixedDataTypes, 
// put different data types in the array 
const mixedDataTypes = ['Alpha', 25, true, {skills: ['Swimming', 'Python Programming']}, ['banana', 'apple', 'orange'], false] 

// and find the length of the array. The array size should be greater than 5
console.log(`Array has: ${mixedDataTypes.length} elements of different data types`)

//6. Declare an array variable name itCompanies and assign initial values 
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(`Number of companies in the array: ${itCompanies.length}`);

//9. Print the first company, middle and last company
const firstCompany = itCompanies[0]
console.log(`First Company: ${firstCompany}`);

const middleCompany = itCompanies[3]
console.log(`Second Company: ${middleCompany}`);

const lastCompany = itCompanies[itCompanies.length-1]
console.log(`Last Company: ${lastCompany}`);

// 10. Print out each company
console.log('=========IT COMPAINES=========');
for(let i=0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
}
console.log('=========IT COMPAINES=========');

//11. Change each company name to uppercase one by one and print them out
// for(let i=0; i < itCompanies.length; i++){
//     itCompanies[i] = itCompanies[i].toUpperCase()
// }
console.log(itCompanies);

// 12. Print the array like as a sentence: 
// Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//1. Solution 01
const itCompaniesString = itCompanies.toString()
console.log(itCompaniesString);
const desiredSentence = itCompaniesString.concat(' are big IT companies.')
console.log(desiredSentence);

// 2. Solution 02
itCompanies.pop()
const exactSentence = itCompanies.toString().concat(' and Amazon are big IT companies.')
console.log(`✔ : ${exactSentence}`);

//13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found
const searching = 'Facebook'
itCompanies.includes(searching) ? console.log(`${searching} Found`) : console.log(`${searching} not found`);

//14. Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies);
const companiesWithMoreOs = itCompanies.filter((company) => company.toLowerCase().)

console.log(companiesWithMoreOs);

