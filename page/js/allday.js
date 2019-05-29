var allday = new Vue({
    el:"#allday",
    data:{
        articleList:[{

        }]
    },
    created: function () {
        console.log(1)
    axios({
        method: "get",
        url: "/queryAllday"
    }).then(function (resp) {
        var result = resp.data.data;
        var list = [];
        for(var i = 0 ;i < result.length ;i ++){
            var temp = {};
            temp.content = result[i].content;
            list.push(temp)
        }
        console.log(list);
        allday.articleList = list;
    });
},
})