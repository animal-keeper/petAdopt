var dbutil = require("./DBUtil");
function insertxzBlog(title,tags,ctime,utime,content,emil,qq,ad,user_name,success){
    var insertSql = "insert into xz_blog (`title`,`tags`,`ctime`,`utime`,`content`,`emil`,`qq`,`ad`,`user_name`)values(?,?,?,?,?,?,?,?,?)"
    var params =[title,tags,ctime,utime,content,emil,qq,ad,user_name];
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
function queryAllxzBlog(success) {
    var querySql = "select * from xz_blog order by id desc;";
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
function queryxzBlogById(id, success) {
    var querySql = "select * from xz_blog where id = ?;";
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
module.exports.queryAllxzBlog = queryAllxzBlog;
module.exports.insertxzBlog = insertxzBlog;
module.exports.queryxzBlogById = queryxzBlogById;