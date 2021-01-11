// simple information to work with.
const info = [
    {age: 25, first: 'Bill', last: 'Andrews'},
    {age: 26, first: 'Maddy', last: 'Scott'},
    {age: 19, first: 'Karen', last: 'Deacon'},
    {age: 22, first: 'Philp', last: 'Gaster'}
];

const people = ['Connor', 'Alex', 'Cooper', 'Elizabeth'];

// filter format (inline)
const teens = info.filter(person => (person.age < 20));
console.log(teens);
// map format (returns a formated array)
const names = info.map(person => `${person.first} ${person.last}`);
console.log(names);
// sort the array by age.
const ordered = info.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(ordered);
/* reduce format. Must have the zero at the end of the reduce 
so it doesn't return undefined as the first loop through the array */
const totalYears = info.reduce((total, person) => {
    return total + (person.age);
}, 0);
console.log(totalYears);
// to convert a node list into an array use 'Array.from()'.
// chaning operations is possible.
const orderOfNameLength = info
            .map(person => `${person.first} ${person.last}`)
            .sort((a, b) => a.length > b.length ? 1 : -1);

console.log(orderOfNameLength);