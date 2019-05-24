var dbutil = require("./DBUtil")

function queryAdmin(success) {
    var querySql = 'select user_name from user_admin'
    // 注意这里的user_name为手机号
    var params = []

    var connection = dbutil.createConnection()
    connection.connect()
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end()
}

function queryAdminPassword (tel, success) {
    var querySql = `select id, password from user_admin where user_name = ${ tel }`
    var params = []

    var connection = dbutil.createConnection()
    connection.connect()
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end()
}

module.exports.queryAdmin = queryAdmin
module.exports.queryAdminPassword = queryAdminPassword