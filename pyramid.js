var n1=function(n){
  
var x=0;
var y=0;
var z=0;
var p;
for(x=0;x<=n;x++){
  p=' ';

  for(y=0;y<n-x;y++){
    p+=' ';
  }
  for(z=0;z<x;z++){
    p+=' *';

  }
console.log(p);
}

}
console.log(n1(3));
