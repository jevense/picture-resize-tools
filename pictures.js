var fs = require("fs");
var pathM = require("path");

function copyFile(source, target) {
    // console.log('--------开始读取文件--------');
    var fs = require('fs');
    fs.readFile(source, function (err, data) {
        if (err) {
            console.log("读取失败" + source);
        } else {
            writeFile(target, data)
            return data;
        }
    });
    // console.log('--------读取结束--------');
}

function writeFile(target, data) {
    fs.writeFile(target, data, function (error) {
        if (error) {
            throw error;
        } else {
            console.log("文件已保存");
        }
    });
}

function readDirSync(path) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {

        var source = pathM.join(path, ele, "/images/fm01.jpg")
        var target = pathM.join(__dirname, 'source', ele + ".jpg")

        copyFile(source, target);
    })
}

readDirSync('/Users/lujiewen/书包教材/source')