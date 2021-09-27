var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var i=0
var duplicate=[]
var num=n
while (i<n.length){
    j=i++
    while (j<n.length){
        if (num[i]==num[j]){
            if (num[i] !null duplicate){
                duplicate.push(num[i])
            }
        }j++
    }i++
}console.log(duplicate)