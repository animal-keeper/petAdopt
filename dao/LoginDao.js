var dbutil = require("./DBUtil")

function queryTel (success) {
    var querySql = 'select tel_num from user'
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

function queryPassword (tel, success) {
    var querySql = `select id, user_name, password from user where tel_num = ${ tel }`
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

module.exports.queryTel = queryTel
module.exports.queryPassword = queryPassword