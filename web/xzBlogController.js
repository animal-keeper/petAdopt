var xzblogDao = require("../dao/xzBlogDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/ResUtil");
var url = require("url");
var path = new Map();
function editxzBlog(request, response) {
    var params = url.parse(request.url, true).query;
    console.log(6,params)
    var tags = params.tags.replace(/ /g, "").replace("，", ",");//中文逗号英文逗号统一
    request.on("data", function (data) {
        xzblogDao.insertxzBlog(params.title, tags,timeUtil.getNow(), timeUtil.getNow(),  data.toString(),params.emil,params.qq,params.ad,function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        });
    });
}
path.set("/editxzBlog", editxzBlog);
function queryAllxzBlog(request, response) {
    xzblogDao.queryAllxzBlog(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryAllxzBlog", queryAllxzBlog);
function queryBlogxzById(request, response) {
    var params = url.parse(request.url, true).query;
    console.log(5,params)
    xzblogDao.queryxzBlogById(parseInt(params.bid), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
        // blogDao.addViews(parseInt(params.bid), function (result) {});
    });
}
path.set("/queryBlogxzById", queryBlogxzById);
module.exports.path = path;