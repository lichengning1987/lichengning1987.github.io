require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery-1.9.1.min'
		/*,
		text: 'libs/text',
		tpl: '../tpl',
		popup: '../popup'*/
	},
	shim: {
		/*Framework7: {
			exports: 'Framework7'
		}*/
	},
	urlArgs: "v=" +  (new Date()).getTime()
});

require(['jquery'], function (jquery) {
	$(document).ready(function(){
		var pw=$(".picture-news").width();
		$(".picture-news").height(pw*0.406);
		/* 鼠标滚动时顶部菜单栏横线移动 */
		$(window).bind("scroll",function(){
			var th=$(".topic-news").height()-100,
				dh=$(".conmpany-news").height()+th-100,
				eh=$(".bussy-news").height()+dh-100,
				barW=$(".news-menu dt").width()+120,
				lftBar=barW;
			if($(window).scrollTop()>=0 && $(window).scrollTop()<th){
				lftBar=barW-8;				
				$(".menu-bottom").animate({
					left:lftBar
				},200);
				$(".news-menu").css({"background":'rgba(0,0,0,0.1)'});
			}else if($(window).scrollTop()>=th && $(window).scrollTop()<dh){	
				lftBar=barW*2-10;
				$(".menu-bottom").animate({
					left:lftBar
				},200);
				$(".news-menu").css({"background":'rgba(0,0,0,0.6)'});
			}else if($(window).scrollTop()>=dh && $(window).scrollTop()<eh){
				lftBar=barW*3-10;					
				$(".menu-bottom").animate({
					left:lftBar
				},200);
				$(".employee-menu").css({"background":'rgba(0,0,0,0.6)'});
			}
		    if ($(window).scrollTop()>100){
		        $(".scroll-top").fadeIn(1500);
		    }
		    else{
		        $(".scroll-top").fadeOut(1500);
		    }
		});
		$(".scroll-top").click(function(){
			$('body,html').animate({scrollTop:0},500);
            return false;
        });
        $(".news-menu dt").on("click",function(){
			var index=$(this).index();
			var menuBar=($(this).width()+50)*index;
			//$(".menu-bottom").animate({left:menuBar});
			$('body,html').animate({
				scrollTop:$(".scroll-index").eq(index-1).offset().top
			},0);
		});
		$(".banner-bt li").click(function(){
			var index=$(this).index();
			$(".banner-img").find("li").removeClass("active-news").fadeOut(1);
			$(".banner-img").find("li").eq(index).addClass("active-news").fadeIn(1);			
			$(".banner-bt").find("li").removeClass("active");
			$(".banner-bt").find("li").eq(index).addClass("active");
		});
		var autoSwitch=function(){
			var j=0;
			$(".banner-img li").each(function(i){
				j=i;
			});
			$(".banner-img li").each(function(){
				var that=$(this);
				if(that.hasClass("active-news")){
					var index=that.index();
					if(index==j){
						that.removeClass("active-news").slideUp();
						$(".banner-img").find("li").eq(0).addClass("active-news").slideDown();
						$(".banner-bt").find("li").removeClass("active");
						$(".banner-bt").find("li").eq(0).addClass("active");
					}else{
						that.removeClass("active-news").fadeOut(1);
						that.next().addClass("active-news").fadeIn(1);
						$(".banner-bt").find("li").removeClass("active");
						$(".banner-bt").find("li").eq(index+1).addClass("active");
					}
					return false;
				}
				
			});
		};
		window.setInterval(autoSwitch,10000);
		$(".banner").width($(window).width());
		var h=$(".banner").width();
		$(".banner").height(0.4*h);
	});
	$(window).resize(function(){
		var pw=$(".picture-news").width();
		$(".picture-news").height(pw*0.406);
		$(".banner").width($(window).width());
		var h=$(".banner").width();
		$(".banner").height(0.4*h);
	});
});