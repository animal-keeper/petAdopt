var search = new Vue({
    el:"#search",
    data: {
        blogList:[],
        blogList2:[],
        state:{
            text:'',
            search:'all'
        }
        // ,
        // filterFn:{
        //     text:filterText,
        //     search:filerSearch
        // }
    },
    computed: {

    },
    created: function () {
        axios({
            method: "get",
            url: "/queryAlljyBlog"
        }).then(function (resp) {
            for (var i = 0 ; i < resp.data.data.length ; i ++) {
                resp.data.data[i].link = "/jyblog_detail.html?bid=" + resp.data.data[i].id;
            }
            search.blogList = resp.data.data
            search.blogList2 = resp.data.data
        });
    },
    methods:{
        ad:function(value){
            var timer;
            var self = this;
            clearTimeout(timer);
            timer = setTimeout(function() {
                console.log(value.data)
                if(value.data == null){
                    self.blogList = self.blogList2
                }else{
                    self.filterText(value.data,self.blogList2)
                }
            },300)
        },
        filterText(val,arr){
            var fArr = arr.filter(function(ele,index){
                console.log(2,ele.ad.indexOf(val))
                if(ele.ad.indexOf(val) !== -1){
                    return true;
                }
            })
            this.blogList = fArr
            // return fArr;
        }
    },


});
var oUl = document.getElementById('list');
var oInp = document.getElementById('inp');
var oSex = document.getElementById('sex');
oSex.addEventListener('click',function(e){
    if(e.target.targetName = 'LI'){
        // state.sex = e.target.getAttribute('sex');
        document.getElementsByClassName('active')[0].className='';
        e.target.className = 'active';
        // render(addFn(filterFn,person));
    }
})