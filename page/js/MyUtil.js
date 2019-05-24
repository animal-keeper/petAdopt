
    document.documentElement.style.fontSize = window.screen.width / 1920 * 10 + 'px';
//获取浏览器宽高
var getViewportOffset = (function (){
    if(window.innerWidth){
        return{
            w : window.innerWidth,
            h : window.innerHeight
        }
        }else{
            if(
                document.compatMode === "BackCompat"){
                    return{
                        w : document.body.clientWidth,
                        h : document.body.clientHeight
        }
    }else{
        return{
            w : document.documentElement.clienWidth,
            h : document.documentElement.clientHeight
        }

    }
}
})