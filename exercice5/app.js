const section_1 = document.querySelector('.section1');
const section_3 = document.querySelector('.section3')
const carre = document.querySelector('.carre');
const input = document.querySelector('input');
const btn4 = document.querySelector('.btn_section4');
const p4 = document.querySelector('.p_section4');
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
let myArray = ["Dune", "Forrest Gump", "La ligne Verte", "Le Parrain", "Les Évadés"];

function random(array){
    let film = Math.floor(Math.random() * array.length);
    return film;
}

section_3.addEventListener('click', function(){

    let res = document.querySelector('.resultat');
    if(res){
        res.remove();
    }

    let result = random(myArray);
    let p3 = document.createElement('p');
    let txt3 = document.createTextNode(`${myArray[result]}`);
    p3.appendChild(txt3);
    p3.className = "resultat";
    section_3.appendChild(p3);

})

/*4ème section*/

function maj(texte){

    let temp = '';

    for (let i = 0; i < texte.length; i++) {
        
        const element = texte[i];
        let code = element.charCodeAt();
        
        /* to lower*/
        if(code >= 65 && code <= 90){
            let response = String.fromCharCode(code);
            let min = response.toLowerCase();
            temp = temp + min;
        } 
        /*to upper*/
        else if (code >= 97 && code <= 122){
            let response = String.fromCharCode(code);
            let maj = response.toUpperCase();
            temp = temp + maj;
        }

    }
    
    return temp;

}

btn4.addEventListener('click', function(){

    p4.innerHTML = '';
    let value = input.value;
    let funct = maj(value);
    let txt4 = document.createTextNode(`${funct}`);
    p4.appendChild(txt4);

})
