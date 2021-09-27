var Name=["p","a","p","a"];
// for loop

var array1=[];
for (var i=Name.length-1;i>=0; i--){
    array1.push(Name[i]);
}
var count=0
for (var j=0; j<Name.length-1; j++){
    if (array1[j]===Name[j]){
        count++;
    }
}
if (count===Name.length-1){
    console.log("This Is Palindrome")
}else{
    console.log("this is not a palindrome")
}

//while loop

var array1=[]
var i=Name.length-1
while (i>=0){
    array1.push(Name[i])
    i--
}
var j=0
var count=0
while(j<Name.length-1){
    if (array1[j]===Name[j]){
        count++
        j++
    }
}
if  (count===Name.length-1){
    console.log("this is palindrome")
}
else{
    console.log("this is not a palindrome")
}


// do loop


