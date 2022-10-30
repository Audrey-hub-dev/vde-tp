const notes = [20, 15, 17.5, 10, 13, 19];
notes.sort();
console.log(notes);

/*
function numAverage(list) {
    var b = a.length,
        c = 0, i;
    for (i = 0; i < b; i++){
      c += Number(a[i]);
    }
    return c/b;
  }
*/


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


