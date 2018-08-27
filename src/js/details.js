
// document.addEventListener('DOMContentLoaded',function(){

// function menuFixed(id1, id2, id3, id4) {
// var obj1 = document.getElementById(id1);
// var obj2 = document.getElementById(id2);
// var obj3 = document.getElementById(id3);
// var obj4 = document.getElementById(id4);
// var aTags = $(id1).getElements('.tags-hd');
// var _getHeight1 = obj1.offsetTop;
// var _getHeight2 = _getHeight3 = _getHeight4 = 0;


// if (obj2) {
//     _getHeight2 = obj2.offsetTop - 65;
// }

// if (obj3) {
//     _getHeight3 = obj3.offsetTop - 65;
// }

// if (obj4) {
//     _getHeight4 = obj4.offsetTop - 65;
// }

// window.onscroll = function () {
//     changePos(aTags, obj1, _getHeight1, _getHeight2, _getHeight3, _getHeight4);
// }
// }

// function changePos(aTags, obj, height1, height2, height3, height4) {
// var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
// if(scrollTop < height1) {
//     obj.removeAttribute('style');
// }else {
//     obj.setAttribute('style', 'position:fixed;top:0;z-index:120;box-shadow:2px 4px 5px rgba(0, 0, 0, 0.2);width:811px;height:50px;');
// }

// if (height4 > 0 && scrollTop >= height4) {
//     aTags.removeClass('active');
//     $('js-tags-hd-recomment').addClass('active');
// }else if (height3 > 0 && scrollTop >= height3) {
//     aTags.removeClass('active');
//     $('js-tags-hd-pics').addClass('active');
// }else if (height2 > 0 && scrollTop >= height2) {
//     aTags.removeClass('active');
//     $('js-tags-hd-detail').addClass('active');
// }else {
//     aTags.removeClass('active');
//     $('js-tags-hd-parameters').addClass('active');
// }
// }

// function intval(v) {
// v = parseInt(v);
// return isNaN(v) ? 0 : v;
// }

// function getPos(e) {
// var l = 0;
// var t = 0;
// var w = intval(e.style.width);
// var h = intval(e.style.height);
// var wb = e.offsetWidth;
// var hb = e.offsetHeight;
// while (e.offsetParent) {
//     l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
//     t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
//     e = e.offsetParent;
// }
// l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
// t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
// return {
//     x: l,
//     y: t,
//     w: w,
//     h: h,
//     wb: wb,
//     hb: hb
// };
// }

// function getScro() {
// var t, l, w, h;
// if (document.documentElement && document.documentElement.scrollTop) {
//     t = document.documentElement.scrollTop;
//     l = document.documentElement.scrollLeft;
//     w = document.documentElement.scrollWidth;
//     h = document.documentElement.scrollHeight;
// }else if (document.body) {
//     t = document.body.scrollTop;
//     l = document.body.scrollLeft;
//     w = document.body.scrollWidth;
//     h = document.body.scrollHeight;
// }
// return {
//     t: t,
//     l: l,
//     w: w,
//     h: h
// };
// }

// function scroller(el, duration) {
// var z = this;
// if (typeof z.clear == 'function') z.clear();

// if (typeof el != 'object') {
//     el = document.getElementById(el);
// }
// if (!el)
//     return;

// z.el = el;
// z.p = getPos(el);
// z.p.y -= 60;

// z.s = getScro();
// z.clear = function(){
//     window.clearInterval(z.timer);
//     z.timer = null
// };
// z.t = (new Date).getTime();
// z.step = function(){
//     var t = (new Date).getTime();
//     var p = (t - z.t) / duration;
//     if (t >= duration + z.t) {
//         z.clear();
//         window.setTimeout(function(){
//             z.scroll(z.p.y, z.p.x);
//         }, 13);
//     }
//     else {
//         st = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.y - z.s.t) + z.s.t;
//         sl = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.x - z.s.l) + z.s.l;
//         z.scroll(st, sl);
//     }
// };
// z.scroll = function(t, l){
//     window.scrollTo(l, t);
// };
// z.timer = window.setInterval(function(){
//     z.step();
// }, 13);
// }

// })



document.addEventListener('DOMContentLoaded',function(){
    var tit = document.querySelector('xq_xdbox');
//alert(tit);
//占位符的位置
var rect = tit.getBoundingClientRect();//获得页面中导航条相对于浏览器视窗的位置
var inser = document.createElement("div");
tit.parentNode.replaceChild(inser,tit);
inser.appendChild(tit);
inser.style.height = rect.height + "px";
 
//获取距离页面顶端的距离
var titleTop = tit.offsetTop;
//滚动事件
document.onscroll = function(){
    //获取当前滚动的距离
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    //如果滚动距离大于导航条据顶部的距离
    if(btop>titleTop){
        //为导航条设置fix
        tit.className = "clearfix fix";
    }else{
        //移除fixed
        tit.className = "clearfix";
    }
}
})