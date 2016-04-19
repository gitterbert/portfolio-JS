/*var a = 'Hello World!';
var b = 2;

console.log(b + a);
this.bozo = '2'
console.log("the stuff is " + this.bozo)*/

Array.prototype.SomethingCustom = 'Ruckro';

var arr = ['John','Jack','Judy'];

for (var prop in arr) {
    console.log(prop + '--' + arr[prop]);
}
console.log('length of array is: ' + arr.length);

for (var i=0; i < arr.length; i++) {
    console.log('array member: ' + i + ' is ' + arr[i])
}