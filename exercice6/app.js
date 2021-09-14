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
        let txt = document.createTextNode('toto');
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

        let text;
        let person = prompt("Entrez votre date de naissance (dd/mm/yyyy)");
        
        let birth = person.split("/").reverse().join("-");
        
        let date = new Date(birth);

        console.log(date);

        // if (person == null || person == "") {
        //     text = "Bienvenue";
        // } else {
        //     text = "Il faut attendre encore x jours";
        // }
        
        document.getElementById("demo").innerHTML = text;
     }
});
