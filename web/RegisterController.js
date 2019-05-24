var registerDao = require('../dao/RegisterDao')
var url = require('url');
var respUtil = require("../util/ResUtil");
var path = new Map();
function register(request, response) {
    request.on('data', function (data) {
        data = JSON.parse(data)
        var userName = data.username
        var password = data.password
        var telNumber = data.tel_number
        console.log('url:', request.url)
        registerDao.queryUserTel(function (result) {
            var len = result.length
            for (var i = 0; i < len; i++) {
                if (telNumber === result[i].tel_num) {
                    response.writeHead(200);
                    response.write(respUtil.writeResult("error", "手机号已存在", null));
                    response.end();
                    return
                }
            }
            registerDao.insertUser(userName, password, telNumber, function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "注册成功", result));
            response.end();
        })
        })
    })
}
path.set('/register', register)

module.exports.path = path