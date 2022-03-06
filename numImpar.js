function numberImpar(array) {
    let eventNumber = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 != 0) {
             eventNumber.push(array[index]);
             console.log(array[index]);
             
        } else {
            //console.log(array[index]);
        }

    }
    console.log(eventNumber)
}
let number = [2,5,6,8,11,13];
numberImpar(number);
 