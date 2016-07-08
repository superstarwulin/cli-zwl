/**
 * Created by superstarwulin on 16/5/30.
 */

var spawn =require('child_process').spawn;
require('shelljs/global');
var fs = require('fs');

module.exports = {
    exec:function(pathdir){


        if(pathdir.length!==0){

            //__dirname
            var demoPath = String(__dirname).match('.+/project')[0]+'/demo/' +pathdir[0];


            fs.mkdir(demoPath,0777,function(err){
                if (err) {
                    console.log('重复创建');
                };
            });


            fs.exists(demoPath,function(exists){
                if(exists){

                    fs.readFile(String(__dirname).match('.+/zwl')[0]+'/assets/mobile.html',function(err,data){
                        if(err) throw err;

                        fs.writeFileSync(demoPath+'/index.html',data,'utf-8');
                        console.log('demo创建成功:'+ demoPath+'/index.html');

                    });

                }else{


                }
            })

        }else{
            console.log('\n请输入demo root文件名称 ');

        }
    }
}
