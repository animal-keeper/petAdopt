var express = require("express");//引入express
var globalConfig = require("./config");
var loader = require("./loder");
var app = new express();//new express对象
app.use(express.static("./page/", {index: 'login.html'}));
app.post('/register', loader.get('/register'))
app.post('/login', loader.get('/login'))
app.post('/admin', loader.get('/admin'))
app.post("/editEveryDay", loader.get("/editEveryDay"));//get到editEveryDay方法 每日一句
app.get("/queryEveryDay", loader.get("/queryEveryDay"));

app.post("/editBlog", loader.get("/editBlog"));
app.get("/queryBlogByPage",loader.get("/queryBlogByPage"));

app.get("/queryBlogCount", loader.get("/queryBlogCount"));
app.get("/queryBlogById", loader.get("/queryBlogById"));

app.get("/addComment", loader.get("/addComment"));

app.get("/queryRandomCode", loader.get("/queryRandomCode"));
app.get("/queryCommentsByBlogId", loader.get("/queryCommentsByBlogId"));

app.get("/queryRandomTags", loader.get("/queryRandomTags"));
app.get("/queryHotBlog", loader.get("/queryHotBlog"));

app.get("/queryByTag", loader.get("/queryByTag"));
app.get("/queryByTagCount", loader.get("/queryByTagCount"));

app.get("/queryAllBlog", loader.get("/queryAllBlog"));
app.listen(globalConfig.port,function(){
    console.log("服务器已启动");
});
