var search = new Vue({
    el:"#search",
    data: {
        blogList:[]
    },
    computed: {

    },
    created: function () {
        axios({
            method: "get",
            url: "/queryAllBlog"
        }).then(function (resp) {
            for (var i = 0 ; i < resp.data.data.length ; i ++) {
                resp.data.data[i].link = "/blog_detail.html?bid=" + resp.data.data[i].id;
            }
            search.blogList = resp.data.data
        });
    },
    methods:{
        ad:function(value){
            console.log(value.data)
        }
    }

});
