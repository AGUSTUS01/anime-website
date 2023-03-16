// console.log('URURU JINTA')
// let phrase = "omaiwa yoru senni, watashi namaewa nayeem shunsui, aur mein kuch v bakwas karta rehta hun hehe!"
// console.log(phrase)
// console.log(phrase.toUpperCase())
// console.log(phrase.toLowerCase())
// console.log(phrase.charAt(20))
// console.log(phrase.concat(' lol what is this lol'))
// console.log(phrase.replace('nayeem shunsui', 'agustus zin'))
// console.log(phrase.split())
// console.log(phrase.substring(17, 34 ))
// console.log(phrase.slice(-7))
// console.log(phrase.substring(-5))
// console.log(phrase.trim())
// console.log(phrase.includes('agustus'))
// console.log(phrase.includes('shunsui'))
// console.log(phrase.search('nayeem'))
// console.log(phrase.length)

// names = ['ichigo', 'rukia', 'renji', 'inoue', 'sado', 'ishida', 'kenpachi', 'shunsui', 'hitsugaya']
// console.log(names)
// for (name of names){
//     console.log(name)
// }
// names.push('urahara')
// console.log(names)
// console.log(names.pop())
// console.log(names)
// console.log(names.shift())
// console.log(names)
// console.log(names.unshift('ichigo'))
// console.log(names)
// console.log(names.concat('aizen'))
// console.log(names)
// console.log(names.join('--'))
// console.log(names.slice(2, 4))
// console.log(names.reverse())
// console.log(names.map(names=> names.toUpperCase()))
// numbers = [1, 2, 3, 4, 5]
// console.log(numbers.map(numbers=> numbers*2))
// console.log(numbers.map(numbers=> numbers+1))
// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });
// newNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
// evenNumbers = newNumbers.filter(function(x){
//     return x % 2 === 0;
// })
// console.log(evenNumbers)

// var numbers = [10, 5, 20, 15, 30];

// var max = numbers.reduce(function(accumulator, currentValue) {
//   if (currentValue > accumulator) {
//     return currentValue;
//   } else {
//     return accumulator;
//   }
// });

// console.log(max); // Output: 30
// var max = (numbers) => {
//     let result = numbers[0]
//     for(const number of numbers){
//         if (number > result){
//             result = number
//         }
//     }
//     return{result}
// }
// console.log(max(numbers))





// function poojitha(num){
//   const lastDigit = num % 10
//   if (lastDigit === 4) {
//   console.log('yes! there is 4 in the last')
// }
//   else {
//     console.log('there is no 4 in the last')

//   }
// }
// console.log(poojitha(9292984))

console.log('konichiwa')

// let reddiv = document.getElementById('red')
// let yellowdiv= document.getElementById('yellow')
// let bluediv = document.getElementById('blue')
// let greendiv = document.getElementById('green');

// reddiv.onclick=()=>console.log('dattebayo')
// yellowdiv.onclick=()=>console.log('dattebasa')
// bluediv.onclick=()=>console.log('dattebane')
let reddiv = document.getElementById('red');
let yellowdiv = document.getElementById('yellow');
let bluediv = document.getElementById('blue');
let greendiv = document.getElementById('green');

reddiv.addEventListener('click', () => {
  let audio = new Audio('Rasengan.mp3');
  audio.play();
});

yellowdiv.addEventListener('click', () => {
  let audio = new Audio('luffy.mp3');
  audio.play();
});

bluediv.addEventListener('click', () => {
  let audio = new Audio('chidori.mp3');
  audio.play();
});

greendiv.addEventListener('click', () => {
  let audio = new Audio('shunsui_bankai.mp3');
  audio.play();
});
