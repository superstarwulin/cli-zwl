/**
 * Created by superstarwulin on 16/8/25.
 */
var spawn = require('child_process').spawn;
var execFile = require('child_process').execFile;
require('shelljs/global');


module.exports = {
    c: function (arg) {
        var a = __dirname.replace('lib','');

        console.log('superstarwulin commit: ' +arg);

        //process.cwd()
        exec('sh '+a +'shell/gitcommit.sh ' + arg);
    }
}