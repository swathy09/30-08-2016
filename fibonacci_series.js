
function fibo(n) {
  var a=-1,b=1,c;
  for(var i=0;i<n;i++)
  {
    c=a+b;
    console.log(c);
    a=b;
    b=c;
  }

}
console.log(fibo(5));
