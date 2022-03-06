let cont = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
function increment() {
    
    if (cont <= 9) {
        cont++;
        CURRENT_NUMBER.innerHTML = cont;
    }
   /* do {
        cont++;
        CURRENT_NUMBER.innerHTML = cont;
        
    } while (cont >= 11);*/

    
    
    
}

function decrement() {

    if (cont > 0) {
        cont--;
        CURRENT_NUMBER.innerHTML = cont;
    } 
    
}