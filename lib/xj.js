 require('shelljs/global');

 exports.xj=function(){
  var a = __dirname.replace('lib','');

  exec('node '+ a +'lib/xiaoj.js');

 }