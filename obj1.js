var myObj = [5, [22], [[14]], [[4]],[5,6]];
var arr1=[].concat.apply([],myObj);
var arr2=[].concat.apply([],arr1);
console.log(arr2);
