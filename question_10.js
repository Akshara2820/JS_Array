var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var reversedArray=[]

// //for loop
var reversed_array=[]
var i=0
for (i=numbers.length-1; i>=0; i--){
    reversed_array.push(numbers[i])
}console.log(reversed_array)


// while loop

var r=[]
var i=numbers.length-1
while (i>=0){
    r.push(numbers[i])
    i--
}console.log(r)

// do loop

var r=[];
var i=numbers.length-1
do{
    r.push(numbers[i]);
    i--
}while(i>=0);
console.log(r)

// for in loop

var r=[];
var j=0;
var i=numbers.length-1;
for (j in numbers){
    r.push(numbers[i])
    i--
}console.log(r)