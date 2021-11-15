function Max(array){
    let maxNumber = Number.NEGATIVE_INFINITY;

    for (var i = 0; i < array.length; i++){
        var number = array[i];
        if (number > maxNumber ){
            maxNumber = number;
        }
    }

    return maxNumber;
}


function Min(array){
    let minNumber = Number.POSITIVE_INFINITY;

    for (var i = 0; i < array.length; i++){
        var number = array[i];
        if (number < minNumber ){
            minNumber = number;
        }
    }

    return minNumber;
}

function Average(array){
    sum = 0;
    for (var i = 0; i < array.length; i++ ){
        sum = sum + array[i];
    }
    averageNumber = sum/array.length;
    return averageNumber;
}


function MaxMinAverage(array){
    maxNumber = Max(array);
    minNumber = Min(array);
    averageArray = Average(array);
    result =  "The maximum number is " + maxNumber + ", the minimum number is " + minNumber + "and the average of the array is " + averageArray + "."
    console.log( result );
    return result;
}

console.log(MaxMinAverage([1, -2, 9, 4]));