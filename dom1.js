// console.log('nayeem')
// const mainHeading = document.querySelector('#main-heading');
// const introParagraph = document.querySelector('.intro');
// const changeHeadingBtn = document.querySelector('#change-heading-btn');

// changeHeadingBtn.addEventListener('click', () => {
// 	mainHeading.textContent = 'Hello, World!';
// 	introParagraph.style.color = 'red';
// });
// const heading = document.getElementById("headingId")
// heading.style.backgroundColor="blue"
// const heading = document.getElementById("headingId")
// heading.style.backgroundColor="blue"
const heading = document.getElementById("headingId");
heading.style.color = "blue";
// const everyone = document.getElementById('minna')
// everyone.style.textAlign = "center";
// const bodyy = document.getElementsByTagName('body')[0];
// bodyy.style.textAlign= "center";
const bodyy = document.getElementsByTagName('body')[0];
bodyy.style.textAlign = "center";
const ul = document.querySelector('ul');
ul.style.textAlign = "center";

const table = document.querySelector('table');
table.style.margin = "0 auto";

// object methods
//  const anime ={
//     name: "ichigo",
//     power: 'tensa zangetsu',
//     phrase: function () {
//         console.log(`my name is ${this.name} and my power is ${this.power}`)
//     }
//  }
//  console.log(anime.phrase())

phrase = document.getElementById('phraseId')
phrase.style.color = "red";

 unli = document.getElementsByTagName('ul')[0]
 unli.style.color = 'green';
// const ul = document.getElementsByTagName('ul')[0];
// const firstChild = ul.firstElementChild;
// firstChild.style.color = 'green';
const sbaccha = document.getElementById('baccha')
sbaccha.style.color = "yellow";

// creating a new element and txt in it using dom
newDiv = document.createElement('div');
newText = document.createTextNode('Ohayo, konichiwa')
newDiv.appendChild(newText);
document.body.appendChild(newDiv);

// second
newtag = document.createElement('h1')
newtext = document.createTextNode('sharingan!! byakugan!! rinnegan!!')
newtag.appendChild(newtext)
document.body.appendChild(newtag);