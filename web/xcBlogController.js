var xcblogDao = require("../dao/xcBlogDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/ResUtil");
var url = require("url");
var path = new Map();
function editxcBlog(request, response) {
    var params = url.parse(request.url, true).query;
    console.log(6,params)
    var tags = params.tags.replace(/ /g, "").replace("，", ",");//中文逗号英文逗号统一
    request.on("data", function (data) {
        xcblogDao.insertxcBlog(params.title, tags,timeUtil.getNow(), timeUtil.getNow(),  data.toString(),params.emil,params.qq,params.ad,function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        });
    });
}
path.set("/editxcBlog", editxcBlog);
function queryAllxcBlog(request, response) {
    xcblogDao.queryAllxcBlog(function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}
path.set("/queryAllxcBlog", queryAllxcBlog);
function queryBlogxcById(request, response) {
    var params = url.parse(request.url, true).query;
    console.log(5,params)
    xcblogDao.queryxcBlogById(parseInt(params.bid), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
        // blogDao.addViews(parseInt(params.bid), function (result) {});
    });
}
path.set("/queryBlogxcById", queryBlogxcById);
module.exports.path = path;