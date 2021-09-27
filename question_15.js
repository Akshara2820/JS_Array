var elements = [22, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var even=0
var odd=0
while (i<elements.length){
    if (elements[i]%2==0){
        even++
    }
    else if (elements%2!=0){
        odd++
    }
    i++

}console.log("even-",even)
console.log("odd-",odd)