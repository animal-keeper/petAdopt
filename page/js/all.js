var ly = new Vue({
    el:"#ly",
    data:{
        ly_list:[]
    },
    computed: {

    },
    created:function(){
        axios({
            method:"get",
            url: "/queryAllBlog"
        }).then(function(resp){
            console.log(resp)
            // for(var i = 0;i < resp.data.data.length;i++){
                // resp.data.data[i].link = "/jyblog_detail.html?bid=" + resp.data.data[i].id;
            // }
            ly.ly_list = resp.data.data;
            console.log('列表',ly.ly_list)
        })
    },
    methods:{
        del:function(id,index){
            var tath = this
            // console.log(id)
            axios({
                method:"get",
                url: "/deleteBlogById?bid=" + id
            }).then(function(resp){
                if(resp.statusText === "OK"){
                    tath.ly_list.splice(index,1);
                    tath.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                }else{
                    tath.$message({
                        message: '删除失败',
                        type: 'error'
                    })
                }
                // tath.sx();
            })
        },
        sx:function(){
            window.location.reload()
        }
    }
})
var jy = new Vue({
    el:"#jy",
    data:{
        jy_list:[]
    },
    computed: {

    },
    created:function(){
        axios({
            method:"get",
            url: "/queryAlljyBlog"
        }).then(function(resp){
            console.log(resp)
            // for(var i = 0;i < resp.data.data.length;i++){
            // resp.data.data[i].link = "/jyblog_detail.html?bid=" + resp.data.data[i].id;
            // }
            jy.jy_list = resp.data.data;
            console.log('列表',ly.ly_list)
        })
    },
    methods:{
        del:function(id,index){
            var tath = this
            // console.log(id)
            axios({
                method:"get",
                url: "/deletejyBlogById?bid=" + id
            }).then(function(resp){
                if(resp.statusText === "OK"){
                    tath.jy_list.splice(index,1);
                    tath.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                }else{
                    tath.$message({
                        message: '删除失败',
                        type: 'error'
                    })
                }
                // tath.sx();
            })
        },
        sx:function(){
            window.location.reload()
        }
    }
})
var xz = new Vue({
    el:"#xz",
    data:{
        xz_list:[]
    },
    computed: {

    },
    created:function(){
        axios({
            method:"get",
            url: "/queryAllxzBlog"
        }).then(function(resp){
            console.log(resp)
            // for(var i = 0;i < resp.data.data.length;i++){
            // resp.data.data[i].link = "/jyblog_detail.html?bid=" + resp.data.data[i].id;
            // }
            xz.xz_list = resp.data.data;
        })
    },
    methods:{
        del:function(id,index){
            var tath = this
            // console.log(id)
            axios({
                method:"get",
                url: "/deletexzBlogById?bid=" + id
            }).then(function(resp){
                if(resp.statusText === "OK"){
                    tath.xz_list.splice(index,1);
                    tath.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                }else{
                    tath.$message({
                        message: '删除失败',
                        type: 'error'
                    })
                }
                // tath.sx();
            })
        },
        sx:function(){
            window.location.reload()
        }
    }
})
var xc = new Vue({
    el:"#xc",
    data:{
        xc_list:[]
    },
    computed: {

    },
    created:function(){
        axios({
            method:"get",
            url: "/queryAllxcBlog"
        }).then(function(resp){
            console.log(2,resp)
            // for(var i = 0;i < resp.data.data.length;i++){
            // resp.data.data[i].link = "/jyblog_detail.html?bid=" + resp.data.data[i].id;
            // }
            xc.xc_list = resp.data.data;
        })
    },
    methods:{
        del:function(id,index){
            var tath = this
            // console.log(id)
            axios({
                method:"get",
                url: "/deletexcBlogById?bid=" + id
            }).then(function(resp){
                if(resp.statusText === "OK"){
                    tath.xc_list.splice(index,1);
                    tath.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                }else{
                    tath.$message({
                        message: '删除失败',
                        type: 'error'
                    })
                }
                // tath.sx();
            })
        },
        sx:function(){
            window.location.reload()
        }
    }
})
var title = $('.title');
var list = $('.list');
title.each(function(i,e){
    $(this).click(function(){
        list.each(function(j,e){
            $(list[j]).removeClass("active")
        })
        title.each(function(g,e){
            $(title[g]).removeClass("active_title")
        })
        $(list[i]).addClass("active")
        $(title[i]).addClass("active_title")
    })
})
// var sx = setInterval(function(){
//     window.location.reload()
// },800)
console.log(1,$(".topa"))
$("topa").click(function () {
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 20 + "px" }, 500);
    return false;

});