var theFortune = require('./library/fortune').display;
 console.log(process.argv);
//console.log(theFortune);
var num = process.argv[process.argv.length-1];
console.log(num);

for (var i=0;i<num;i++){
    var theFortune = require('./library/fortune').display;
    console.log(theFortune());
}
