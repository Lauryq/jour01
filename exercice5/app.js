const section_1 = document.querySelector('.section1');
const section_3 = document.querySelector('.section3')
const carre = document.querySelector('.carre');
const nom = 'Quarto';
const prenom = 'Laury';

/*1ere section*/
window.addEventListener('load', function(){
    let p1 = document.createElement('p');
    let txt1 = document.createTextNode(`Votre nom est ${nom} et votre prénom est ${prenom}`);
    p1.appendChild(txt1);
    section_1.appendChild(p1);
})

/*2ème section*/
carre.addEventListener('click', function(){
    carre.style.borderRadius = "50%";
    carre.style.backgroundColor = "rgb(222, 49, 99)";
})

/*3ème section*/
let array = ["Dune", "Forrest Gump", "La ligne Verte", "Le Parrain", "Les Évadés"];
let film = Math.floor(Math.random() * array.length);

let p3 = document.createElement('p');
let txt3 = document.createTextNode(`${film}`);
p1.appendChild(txt1);
section_1.appendChild(p1);
