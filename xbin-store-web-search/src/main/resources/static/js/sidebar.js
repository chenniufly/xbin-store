/* product-search/1.0.2 sidebar.js Date:2016-12-06 18:22:05 */
define("js/sidebar.js",["js/template.js","js/utils.js","js/tools.js","js/pageInfo.js"],function(require,a){var c=require("js/template.js");var d=require("js/utils.js");var e=require("js/tools.js");var f=require("js/pageInfo.js");var g=$("#J_promGoodsWrap_291");var h=$("#J_recommendGoods");var i=$(".promo-pic-adbox");var j=$("#miaozhen8148");h.hide(),n();function k(){var a=s();g=$("#J_promGoodsWrap_291"),h=$("#J_recommendGoods"),i=$(".promo-pic-adbox"),j=$("#miaozhen8148"),a.enableBottomAD?m():n(),f.tuiguangLoaded?a.tuiguangspNum>f.tuiguangNumLoaded&&p(a.tuiguangspNum-f.tuiguangNumLoaded):o(a.tuiguangspNum)}a.init=k;var l=!1;function m(){q(),l||(l=!0,r()),j.show()}function n(){i.hide(),j.hide()}function o(a){var b={ad_ids:"291:"+a,xtest:"new_search"};b=$.extend(d.getADCommonParams(),b),$.ajax({url:"//x.jd.com/Search",data:b,dataType:"jsonp",success:function(b){var i;var j;b&&b[291]&&b[291].length>0?(i=b[291],g.show().find(".mc").html(c.tuiguangshangpin.process({data:i,id:"291"})).lazyload(),d.exposeAD(i),j=i.map(function(a){return a.sku_id}),e.priceNum(j,f.areaId,g,"J-prom-p-","{NUM}"),i.length<a?p(a-i.length):h.hide()):p(a,!0)}})}function p(a,b){var i;var j;var k;i=f.isShopResultPage?$("#J_shopList .J-goods-list").find("li"):$("#J_goodsList").find("li"),j=i.slice(0,4).map(function(){return $(this).data("sku")}).get(),k={p:902022,pin:f.pin,uuid:f.uuid,lid:f.areaId,lim:a,skus:j.join(","),ck:"ipLocation",ec:"utf-8"},$.ajax({url:"//diviner.jd.com/diviner",data:k,dataType:"jsonp"}).then(function(a){var i;a.success&&a.data.length>0&&(i=a.data.map(function(a){return a.sku}),h.show().find(".mc").html(c.jingpintuijian.process(a)).lazyload(),e.priceNum(i,f.areaId,h,"J-rec-p-","{NUM}"),d.exposeRecommend(a.impr),h.find(".mc li").bind("click",function(a){var b=$(a.target);(b.is("a")||b.is("img"))&&d.exposeRecommend($(this).data("clk"))})),b&&g.hide()})}function q(){var a={ad_ids:"576:1",ad_type:4};a=$.extend(d.getADCommonParams(),a),$.ajax({url:"//x.jd.com/Search",data:a,dataType:"jsonp",success:function(a){var b;a&&a[576]&&a[576].length>0?(b=a[576],i.html('<span class="u-ad"></span> <h5 class="hd">\u5546\u5bb6\u7cbe\u9009</h5> <div class="bd"> <div id="J_promWrap_576"> <div class="mc"> </div> </div> </div>'),i.show().find(".mc").html(c.shangjiajingxuan.process({data:b,id:"576"})),d.exposeAD(b)):i.empty()}})}function r(){$.ajax({url:"//nfa.jd.com/loadFa_toJson.js?aid=2_164_5691",dataType:"script"})}function s(){var a;var b;var c;var d;return 0===window.SEARCH.item_count?a=$("#J_main .ml-wrap").height():f.isShopResultPage?a=680+130*(window.SEARCH.item_count-1):(b=$(window).width(),c=b>=1390?5:b>=1210?4:3,a=Math.ceil(window.SEARCH.item_count/c)*$("#J_goodsList .gl-item").outerHeight(!0)+150),720>a?(d=Math.floor((a-330)/280),{tuiguangspNum:1+d,enableBottomAD:!1}):(d=Math.floor((a-690)/280),{tuiguangspNum:1+d,enableBottomAD:!0})}});