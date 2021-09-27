var n = [10, 11, 12, 13, 14, 17, 18, 19]
var n1=30
var empty1=[]
var i=0
var c=0
var l=n.length
while (i<l){
    var j=0
    while(j<l){
        if (n[j]+n[i]==n1 && n[i]<n[j]){
            empty1.push([n[i],n[j]])
        }
        j++
    }
    i++
}console.log(empty1)