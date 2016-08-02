/**
 * Created by superstarwulin on 16/8/2.
 */
/**
 * Created by superstarwulin on 16/4/28.
 */


    var http = require('http');

    var fs = require('fs');
    var open = require('open');

    var childProcess = require('child_process');


    http.createServer(function (req, res) {


        res.writeHead(200, {"Content-Type": "text/html" });

        fs.readFile(__dirname.replace('lib','') + 'assets/health.html', function(err, data) {
            if (err) throw err;
            res.end(data);

        });


    }).listen(8124,"127.0.0.1");

    //console.log('Server running at http://127.0.0.1:8124/');

    open('http://127.0.0.1:8124/');


