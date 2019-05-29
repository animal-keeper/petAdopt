var dbutil = require("./DBUtil");
function insertjyBlog(title,tags,ctime,utime,content,emil,qq,ad,success){
    var insertSql = "insert into jy_blog (`title`,`tags`,`ctime`,`utime`,`content`,`emil`,`qq`,`ad`)values(?,?,?,?,?,?,?,?)"
    var params =[title,tags,ctime,utime,content,emil,qq,ad];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql,params,function(error,result){
        if(error == null){
            // console.log(1,result);
            success(result);
        }else{
            console.log(result);
        }
    });
    connection.end();
}
function queryAlljyBlog(success) {
    var querySql = "select * from jy_blog order by id desc;";
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
function queryjyBlogById(id, success) {
    var querySql = "select * from jy_blog where id = ?;";
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
module.exports.queryAlljyBlog = queryAlljyBlog;
module.exports.insertjyBlog = insertjyBlog;
module.exports.queryjyBlogById = queryjyBlogById;