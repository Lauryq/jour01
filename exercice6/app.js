const body = document.querySelector('body');

window.addEventListener('load', function(){
    body.style.backgroundColor = "black";
})

document.addEventListener('keydown', function(event){
    const key = event.key;

    if(key == 'r' || key == 'R'){
        body.style.backgroundColor = "red";
    } else if (key == 'g' || key == 'G'){
        body.style.backgroundColor = "green";
    } else if (key == 'b' || key == 'B'){
        body.style.backgroundColor = "blue";
    } else if (key == 'p' || key == 'P'){
        body.style.backgroundColor = "pink";
    } else if (key == 'y' || key == 'Y'){
        body.style.backgroundColor = "yellow";
    } else if (key == 'ArrowUp'){
        let btn = document.createElement('button');
        let txt = document.createTextNode('TOTO');
        btn.appendChild(txt);
        btn.setAttribute("id", "bouton");
        body.appendChild(btn);
    } else{
        body.style.backgroundColor = "white";
    }

})

let btn_toto = document.querySelector('#bouton');


document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'bouton'){

        let person = prompt("Entrez votre date de naissance (dd/mm/yyyy)");
        let birth = person.split("/").reverse().join("-");
        let date = new Date(birth);
        let yBirth = date.getFullYear();
        let mBirth = date.getMonth() + 1;
        let dBirth = date.getDay();

        // get l'age en année
        let auj = new Date();
        let yAuj = auj.getFullYear();
        let mAuj = auj.getMonth();
        let dAuj = auj.getDay();

        let Diff = auj - date;
        let age = Math.floor(Diff / (1000 * 86400));
        
        console.log(age);

        if (age >= 9125) {
            person = alert("Bienvenue");
        } else {
            let jDiff = 9131 - age;
            person = alert(`Il faut attendre encore ${jDiff} jours`);
        }
        
     }
});
