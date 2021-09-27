var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var i=0
var even=0
var odd=0


// while (i<elements.length){
//     if (elements[i]%2==0){
//         even+=elements[i]
//     }
//     else{
//         odd+=elements[i]
//     }
    
//     i++
// }console.log("Total sum of even-",even)
// console.log("Total sum of odd-",odd)


// do loop



do{
    if (elements[i]%2==0){
        even+=elements[i]
    }
    else{
        odd+=elements[i]
    }
    i++
}while (i<elements.length)
console.log("total sum of even-",even)
console.log("total sum of odd-",odd)