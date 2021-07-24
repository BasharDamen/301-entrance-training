'use strict';
let arrayNumb = [1,2,3,4,5,6,7,8,9,10,11,12];
function greaterThan(a, b){
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] > b){
            counter++
        }
    }
    console.log(counter);

}

greaterThan(arrayNumb,5);
greaterThan([10,11,12,13,14,15,16,17,18,19], 14);