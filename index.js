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

app.post("/editjyBlog", loader.get("/editjyBlog"));
app.get("/queryAlljyBlog", loader.get("/queryAlljyBlog"));
app.get("/queryBlogjyById", loader.get("/queryBlogjyById"));

app.get("/queryAllday", loader.get("/queryAllday"));

app.post("/editxzBlog", loader.get("/editxzBlog"));
app.get("/queryAllxzBlog", loader.get("/queryAllxzBlog"));
app.get("/queryBlogxzById", loader.get("/queryBlogxzById"));

app.post("/editxcBlog", loader.get("/editxcBlog"));
app.get("/queryAllxcBlog", loader.get("/queryAllxcBlog"));
app.get("/queryBlogxcById", loader.get("/queryBlogxcById"));

app.get("/deleteBlogById", loader.get("/deleteBlogById"));
app.get("/deletejyBlogById", loader.get("/deletejyBlogById"));
app.get("/deletexzBlogById", loader.get("/deletexzBlogById"));
app.get("/deletexcBlogById", loader.get("/deletexcBlogById"));
app.listen(globalConfig.port,function(){
    console.log("服务器已启动");
});
