var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];


// For loop

var max_num=0
for (i=0; i<numbers.length; i++){
if (numbers[i]>max_num){
    max_num=numbers[i]
}
}console.log(max_num)

// while loop

var i=0
var max_num=0
while (i<numbers.length){
    if (numbers[i]>max_num){
        max_num=numbers[i]
    }
    i++
}console.log(max_num)

//Do loop

var i=0
var max_num=0
do {
    if (numbers[i]>max_num){
        max_num=numbers[i]
    }
    i++
}while(i<numbers.length)
console.log(max_num)


// for in loop


var i=0;
var max_num=0
for ( i in numbers){
    if (numbers[i]>max_num){
      max_num=numbers[i]
    }
    
}console.log(max_num)


