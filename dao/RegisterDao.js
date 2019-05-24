var dbutil = require("./DBUtil");

function insertUser (user_name, password, tel_num, success) {
    var insertSql = 'insert into user(`user_name`, `password`, `tel_num`)value(?, ?, ?)'
    var params = [user_name, password, tel_num]
    var connection = dbutil.createConnection()
    connection.connect()
    connection.query(insertSql,params,function(error,result){
        if(error == null){
            success(result);
        }else{
            console.log(error)
        }
    })
    connection.end()
}

function queryUserTel (success) {
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

module.exports.insertUser = insertUser
module.exports.queryUserTel = queryUserTel