var search = new Vue({
    el:"#search",
    data: {
        blogList:[],
        blogList2:[],
        blogList3:[],
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
            url: "/queryAllBlog"
        }).then(function (resp) {
            for (var i = 0 ; i < resp.data.data.length ; i ++) {
                resp.data.data[i].link = "/blog_detail.html?bid=" + resp.data.data[i].id;
            }
            search.blogList = resp.data.data
            search.blogList2 = resp.data.data
            search.blogList3 = resp.data.data
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
                        self.blogList = self.blogList3
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
            // this.blogList2 = this.blogList
            // return fArr;
        },
        filter(val){
            if(val == 'all'){
                this.blogList2 = this.blogList3
                this.blogList = this.blogList2
            }else if(val == 'm'){
                var aArr = this.blogList3.filter(function(ele,index){
                    if(ele.tags.indexOf('猫') !== -1){
                        return true;
                    }

                })
                this.blogList2 = aArr
                this.blogList = this.blogList2
            }else{
                var aArr = this.blogList3.filter(function(ele,index){
                    if(ele.tags.indexOf('狗') !== -1){
                        return true;
                    }

                })
                this.blogList2 = aArr
                this.blogList = this.blogList2
            }

        }
    }


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