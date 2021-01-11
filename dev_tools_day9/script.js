const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');
// Interpolated
console.log('Hello I am a', 'cool guy');
// Styled
console.log("%c I am some great text.", "font-size: 10px; background: red;");
// warning!
console.warn("Oh No");
// Error :|
console.error("Crap");
// Info
console.info("Cake is my favorite dessert");
// Testing
console.assert(1 === 2, "It is wrong");
// clearing
console.clear();
// Viewing DOM Elements
p = document.querySelector('p');
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd(`${dog.name}`);
})
// counting
console.count('bill');
console.count('connor');
console.count('bill');
console.count('connor');
console.count('connor');
// timing
console.time("fetching data");
// fetch the data.
console.timeEnd("fetching data");
// table
console.table(dogs);