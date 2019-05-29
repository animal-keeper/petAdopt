var alldayDao = require("../dao/AllDayDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/ResUtil");
var url = require("url");
var path = new Map();
function queryAllday(request, response) {
    var params = url.parse(request.url, true).query;
    alldayDao.queryAllday( function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
        // blogDao.addViews(parseInt(params.bid), function (result) {});
    });
}
path.set("/queryAllday", queryAllday);
module.exports.path = path;