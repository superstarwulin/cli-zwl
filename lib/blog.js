/**
 * Created by superstarwulin on 16/5/16.
 */

var spawn = require('child_process').spawn;
var execFile = require('child_process').execFile;
require('shelljs/global');


module.exports = {
    exec: function () {
        console.log('blog exec');
        var a = __dirname.replace('lib','');

        //process.cwd()
        exec('sh '+a +'shell/blogpublish.sh');
    }
}