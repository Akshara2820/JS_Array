var list1 = [1,2,3,4,5,9]
var list2 = [2,3,1,0,6,7]

// for loop
var element=[]
for (var i of list1){
    if (!list2.includes(i)){
        element.push(i)
    }
}console.log(element)

// while loop

var i=0
var element=[]
while (i<list1.length){
    if (!list2.includes(i)){
        element.push(i)
    }
    i++
}console.log(element)

// do loop

var i=0
var element=[]
do{
    if (!list2.includes(i)){
        element.push(i)
    }
    i++
}while (i<list1.length)
console.log(element)

