var loginDao = require('../dao/LoginDao')
var respUtil = require("../util/ResUtil");
var url = require('url');
var path = new Map();

function login (request, response) {
    console.log('url:', request.url)
    request.on('data', function (data) {
        data = JSON.parse(data)
        var userName = data.user_name
        // 注意userName为手机号
        var password = data.password
        loginDao.queryTel(function (result) {
            var flag = false
            var len = result.length
            for (var i = 0; i < len; i++) {
                if (userName === result[i].tel_num) {
                    flag = true
                    // 说明手机号存在
                }
            }
            if (flag) {
                loginDao.queryPassword(userName, function (result) {
                    // 判断密码是否正确
                    // console.log(result)
                    var userId = result[0].id
                    var user_name = result[0].user_name
                    var sqlPassword = result[0].password
                    // console.log(result[0].password)
                    if (password === sqlPassword) {
                        response.writeHead(200);
                        response.write(respUtil.writeResult("success", "登录成功", {"user_id":userId, "user_name": user_name}));
                        response.end();
                    } else {
                        response.writeHead(200);
                        response.write(respUtil.writeResult("error", "密码错误", null));
                        response.end();
                    }
                })
            } else {
                // 进到这里说明手机号不存在
                response.writeHead(200);
                response.write(respUtil.writeResult("error", "手机号未注册", null));
                response.end();
            }
        })
    })
}
path.set('/login', login)

module.exports.path = path