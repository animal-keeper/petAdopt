var dbutil = require("./DBUtil");
function insertxcBlog(title,tags,ctime,utime,content,emil,qq,ad,success){
    var insertSql = "insert into xc_blog (`title`,`tags`,`ctime`,`utime`,`content`,`emil`,`qq`,`ad`)values(?,?,?,?,?,?,?,?)"
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
function queryAllxcBlog(success) {
    var querySql = "select * from xc_blog order by id desc;";
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
function queryxcBlogById(id, success) {
    var querySql = "select * from xc_blog where id = ?;";
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
module.exports.queryAllxcBlog = queryAllxcBlog;
module.exports.insertxcBlog = insertxcBlog;
module.exports.queryxcBlogById = queryxcBlogById;