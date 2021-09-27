var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 
    690909090, 31010101, 532010, 510, 4100]
var i=0
var Crorepati =0
var Lakhpati=0
var Dilwale=0

while (i<kitna_paisa_hai.length){
    if (kitna_paisa_hai[i]>=10000000){
        Crorepati++
    }
    else if (kitna_paisa_hai[i]>100000){
        Lakhpati++
    }
    else{
        Dilwale++
    }
    i++
}console.log(Crorepati,Lakhpati,Dilwale)