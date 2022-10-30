const notes = [20, 15, 17.5, 10, 13, 19];
notes.sort();
console.log(notes);
notes.reverse()
console.log(notes); 


function numAverage(list) {
    var i = 0, summ = 0, listLenght = list.length;
    while (i < listLenght) {
        summ = summ + list[i++];
    }
    return summ / listLenght;
}
var list = [20, 15, 17.5, 10, 13, 19];
var a = numAverage(list);
var b = Math.round(a)


