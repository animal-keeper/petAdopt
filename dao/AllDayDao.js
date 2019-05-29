var dbutil = require("./DBUtil");
function queryAllday(success) {
    var querySql = "select * from every_day order by id desc;";
    var params = [];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}
module.exports.queryAllday = queryAllday;