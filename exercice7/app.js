const input = document.querySelector('input');
const body = document.querySelector('body');

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let nb = randomIntFromInterval(0, 1000);
let nb_enter = 0;

document.addEventListener('keydown', function(event){
    
    const key = event.key;
    let p_aff = document.querySelector('p');

    
    if(key == 'Enter'){
        nb_enter ++;
        let prop = input.value;
        
        if(prop > nb){
            
            if(p_aff){
                p_aff.remove();
            }

            let p = document.createElement('p');
            let txt_p = document.createTextNode(`MOINS`);
            p.appendChild(txt_p);
            body.appendChild(p);
            
        } else if (prop < nb) {

            if(p_aff){
                p_aff.remove();
            }

            let p = document.createElement('p');
            let txt_p = document.createTextNode(`PLUS`);
            p.appendChild(txt_p);
            body.appendChild(p);
            
        } else if (prop == nb){
            console.log('juste');
            let popup = document.createElement('div');
            let txt = document.createTextNode(`Bravo, tu l'as trouvé en ${nb_enter} coups`);
            popup.appendChild(txt);
            popup.className = "pop";
            body.appendChild(popup);
            document.querySelector('svg').style.display = "block";
        }
    } 

})

