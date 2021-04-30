var http = require("http");
var fs = require("fs");

var server = http.createServer().listen(3000, function () {
    console.log("请访问http://localhost:3000");
});

server.on("request", function (req, res) {
    let url;
    if (req.url == "/") {
        url = "./index.html";
    } else {
        url = "." + req.url;
    }
    // res.setHeader("Cache-Control", "max-age=-1");
    // res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Cache-Control", "no-store");
    fs.readFile(url, function (err, data) {
        if (err) {
            throw err;
        }
        res.end(data);
    });
});
