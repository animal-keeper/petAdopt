var everyDay = new Vue({
    el:"#every_day",
    data:{
        content:"省人民医院急诊科的护士介绍，每年春夏之交，被猫狗咬伤的人会有所增加。一家宠物店的负责人告诉记者，春季是犬类、猫类的发情期，而夏季天气炎热，这两个季节猫狗的情绪都不太稳定，所以咬人事件频发，最好按时给它们打疫苗。",
        title:"季节交替当心宠物“闹脾气”"
    },
    computed: {
        getContent: function () {
            return this.content;
        },
        getTitle: function(){
            return this.title
        }
    },
    created: function () {
        //请求数据，给content赋值
        axios({
           method: "get",
           url:"/queryEveryDay"
        }).then(function(resp){
            everyDay.content = resp.data.data[0].content
        }).catch(function(resp){
            console.log("请求失败")
        });
    }
});
var articleList = new Vue({
    el:"#article_list",
    data:{
        page:1,
        pageSize: 5,
        count : 100,
        pageNumList:[],
        articleList:[{
            name:"小猿",
            title:"一个月小橙猫，颜值高，求包养",
            img:"img/IMG_20190510_201204.jpg",
            content:" 长毛小帅哥，无辜的大眼睛，性格比较胆小，只喜欢猫粮，所以不用担心和你抢肉吃，哈哈。想找个有耐心责任心的铲屎官",
            data: "2019-05-11",
            views:"101",
            tags:"test1 test2",
            id:"1",
            link:""
        }
        ]
    },
    // 页面加载
    computed: {
        jumpTo: function() {
            return function (page) {
                this.getPate(page, this.pageSize);
            }
        },
        getPate: function(){
            return function(page,pageSize){
                axios({//发请求
                    method: "get",
                    url:"/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                }).then(function(resp){
                    var result = resp.data.data;//返回的数据转换成对象
                    var list = []
                    for(var i = 0;i < result.length;i++){
                        var temp = {};
                        temp.title = result[i].title;
                        temp.content = result[i].content;
                        temp.date = result[i].ctime;
                        temp.views = result[i].views;
                        temp.tags = result[i].tags;
                        temp.id = result[i].id;
                        temp.link = "/blog_detail.html?bid=" + result[i].id;
                        list.push(temp);
                    }
                    articleList.articleList = list;
                    articleList.page = page
                    console.log(resp);
                }).catch(function(resp){
                    console.log("请求错误");
                });

                axios({
                    method: "get",
                    url: "/queryBlogCount" +
                        "" +
                        ""
                }).then(function(resp) {
                    articleList.count = resp.data.data[0].count;
                    articleList.generatePageTool;
                });
            }
        },
        generatePageTool: function () {
            var nowPage = this.page;
            var pageSize = this.pageSize;
            var totalCount = this.count;
            var result = [];
            result.push({text:"<<", page: 1});
            if (nowPage > 2) {
                result.push({text: nowPage - 2, page:nowPage - 2});
            }
            if (nowPage > 1) {
                result.push({text: nowPage - 1, page:nowPage - 1});
            }
            result.push({text: nowPage, page:nowPage});
            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text:nowPage + 1, page: nowPage + 1});
            }
            if (nowPage + 2 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text:nowPage + 2, page: nowPage + 2});
            }
            result.push({text:">>", page: parseInt((totalCount + pageSize - 1) / pageSize)});
            this.pageNumList = result;
            return result;
        }
    },
    created:function(){
        this.getPate(this.page,this.pageSize);
    }
});

var oImgCarousel = $(".carousel img")
var oDivCarousel = $ (".carousel .carousel-hr")
var a = oImgCarousel[0]
var d = oImgCarousel[1]
var b = oDivCarousel[0]
var targetObj = {
	targetObj2 : {
		opacity: 0
},
	targetObj3 : {
		opacity: 1
	}
}

startWidth(b,window.innerWidth,targetObj)
function startWidth(obj,target,targetObj){
	obj.style.width = 0 + 'px';
	//清理
	clearInterval(obj.timer);
	var iSpeed,
		num = 0;
	obj.timer = setInterval(function(){
	  iSpeed = (target - obj.offsetWidth) / 3;
	  iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
	if(obj.offsetWidth >= target*0.99 && num == 0){
		num = 1
		if(getStyle(a,'opacity') == 1 && getStyle(d,'opacity') == 0){
			startMove(d,targetObj.targetObj3,function(){
					StartMove(a,targetObj.targetObj2)
				})
			}else if(getStyle(a,'opacity') == 0 && getStyle(d,'opacity') == 1){
				startMove(a,targetObj.targetObj3,function(){
						StartMove(d,targetObj.targetObj2)
				})
			}
	}
	if(obj.offsetWidth >= target){
		obj.style.width = 0 + 'px';
		console.log(num)
		num = 0
	}else{
	  obj.style.width = obj.offsetWidth + 5 + 'px';
	}
	},20)
}
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, false)[attr];
	}
}
function startMove(obj,json,callback){
	clearInterval(obj.timer);
	var iSpeed,
		iCur;
	obj.timer = setInterval(function(){
		var bStopA = true;
		for(var attr in json){
		   if(attr == 'opacity'){
			   iCur = parseFloat(getStyle(obj,attr))*100;
		   }else{
			   iCur = parseInt(getStyle(obj,attr));
		   }
		   iSpeed = (json[attr] - iCur)/7;                
			json[attr] == 1 ? iSpeed = 2:Math.floor(iSpeed)
		   if(attr == 'opacity'){
			if(getStyle(obj,attr) >= 1){
				obj.style.opacity = 1
				break;
			   }else{
				obj.style.opacity = (iCur + iSpeed)/100;
			   }
		   }else{
			   obj.style[attr] = iCur + iSpeed + 'px';
		   }
		   if(iCur != json[attr]){
			   bStopA = false;
		   }
		} 
		if(bStopA){
			clearInterval(obj.timer);
		   typeof callback == 'function'? callback():'';
		}
	},5);
}
function StartMove(obj,json,callback){
	clearInterval(obj.timer);
	var iSpeed,
		iCur;
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json){
		   if(attr == 'opacity'){
			   iCur = parseFloat(getStyle(obj,attr))*100;
		   }else{
			   iCur = parseInt(getStyle(obj,attr));
		   }
		   iSpeed = (json[attr] - iCur)/7;
		   iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		   if(attr == 'opacity'){
				obj.style.opacity = (iCur + iSpeed)/100;
		   }else{
			   obj.style[attr] = iCur + iSpeed + 'px';
		   }
		   if(iCur != json[attr]){
			   bStop = false;
		   }
		} 
		if(bStop){
			clearInterval(obj.timer);
		   typeof callback == 'function'? callback():'';
		}
	},3);
}