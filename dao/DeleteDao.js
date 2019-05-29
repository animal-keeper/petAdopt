var dbutil = require("./DBUtil");
function deleteBlogById(id, success) {
    var querySql = "delete from blog where id = ?;";
    var params = [id];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error)
        }
    });
    connection.end();
}

function deletejyBlogById(id, success) {
    var querySql = "delete from jy_blog where id = ?;";
    var params = [id];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error)
        }
    });
    connection.end();
}
function deletexzBlogById(id, success) {
    var querySql = "delete from xz_blog where id = ?;";
    var params = [id];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error)
        }
    });
    connection.end();
}
function deletexcBlogById(id, success) {
    var querySql = "delete from xc_blog where id = ?;";
    var params = [id];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error)
        }
    });
    connection.end();
}
module.exports.deletexcBlogById = deletexcBlogById;
module.exports.deletexzBlogById = deletexzBlogById;
module.exports.deletejyBlogById = deletejyBlogById;
module.exports.deleteBlogById = deleteBlogById;