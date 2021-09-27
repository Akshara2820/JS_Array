var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even=0
var odd=0
var average_even=0
var average_odd=0
var i=0
while (i<elements.length){
    if (elements[i]%2==0){
        even+=elements[i]
        average_even++
    }
    else{
        odd+=elements[i]
        average_odd++
    }
    i++
}console.log(even/average_even)
console.log(odd/average_odd)