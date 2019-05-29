var DeleteDao = require("../dao/DeleteDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/ResUtil");
var url = require("url");
var path = new Map();
function deleteBlogById(request, response) {
    var params = url.parse(request.url, true).query;
    DeleteDao.deleteBlogById(parseInt(params.bid), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "删除成功", result));
        response.end();
        // DeleteDao.addViews(parseInt(params.bid), function (result) {});
    });
}
path.set("/deleteBlogById", deleteBlogById);
function deletejyBlogById(request, response) {
    var params = url.parse(request.url, true).query;
    DeleteDao.deletejyBlogById(parseInt(params.bid), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "删除成功", result));
        response.end();
        // DeleteDao.addViews(parseInt(params.bid), function (result) {});
    });
}
path.set("/deletejyBlogById", deletejyBlogById);
function deletexzBlogById(request, response) {
    var params = url.parse(request.url, true).query;
    DeleteDao.deletexzBlogById(parseInt(params.bid), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "删除成功", result));
        response.end();
        // DeleteDao.addViews(parseInt(params.bid), function (result) {});
    });
}
path.set("/deletexzBlogById", deletexzBlogById);
function deletexcBlogById(request, response) {
    var params = url.parse(request.url, true).query;
    DeleteDao.deletexcBlogById(parseInt(params.bid), function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "删除成功", result));
        response.end();
        // DeleteDao.addViews(parseInt(params.bid), function (result) {});
    });
}
path.set("/deletexcBlogById", deletexcBlogById);
module.exports.path = path;