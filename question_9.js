var numbers=[50, 40, 23, 70, 56, 12,87, 5]

//for loop


// var max=0
// var second_max=0
// var i=0
// for (i=0; i<numbers.length; i++){
//     if (numbers[i]>max){
//         if (second_max<max){
//             second_max=max;
//         }max=numbers[i]
//     }
//     else{
//         if (second_max<numbers[i]){
//             second_max=numbers[i]
//         }
//     }
// }console.log(second_max)


// while loop 

// var i=0
// var max=0
// var second_max=0

// while (i<numbers.length){
//     if (numbers[i]>max){
//         if (second_max<max){
//             second_max=max
//         }max=numbers[i]
//     }
//     else if (second_max<numbers[i]){
//         second_max=numbers[i]
//     }
//     i++
// }console.log(second_max)

// do loop 

var i=0;
var max=0;
var second_max=0;
do {
    if (numbers[i]>max){
        if (second_max<max){
            second_max=max;
        }max=numbers[i];
    }
    else if (second_max<numbers[i]){
        second_max=numbers[i];
    }
    i++
}while (i<numbers.length);
console.log(second_max)


// for in loop

var max=0;
var i=0;
var second_max=0;

for (i in numbers){
    if (numbers[i]>max){
        if (second_max<max){
            second_max=max 
        }max=numbers[i]
    }
    else if (numbers[i]>second_max){
        second_max=numbers[i]
    }

}console.log(second_max)
