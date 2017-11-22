Laya.init(600, 400);
var txt = new Laya.Text();
txt.text = "hello";
txt.color = "#ffffff";
Laya.stage.addChild(txt);


var pomelo = window.pomelo;
var host = "127.0.0.1";
var port = "3010";

require('boot');
show();
function show() {
    pomelo.init({
        host: host,
        port: port,
        log: true
    }, function () {
        pomelo.request("connector.entryHandler.entry", "hello pomelo", function (data) {
            txt.text=data.msg;
            console.log(data.msg);
        });
    });
}