require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery-1.9.1.min',
		jqueryUI: 'libs/jquery-ui.min',
		mCustomScrollbar:'libs/mCustomScrollbar/jquery.mCustomScrollbar',
      	masks:'models/humanResourse/mask',
      	cascade:'models/humanResourse/cascade',
      	scrollBar:'models/humanResourse/scrollbar'
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

require(['jquery'], function ($) {
	var ratio,	//大图片相对窗口比率
		tw,	//人才战略div宽度
		rw,	//发展路线div宽度
		ew,	//员工风采div宽度
		th,	//人才战略离顶端距离
		dh,	//员工发展离顶端距离
		eh,	//员工风采离顶端距离
		rh,	//人才招聘离顶端距离
		barW,	//导航条宽度
		leftBar,	//导航条底部活动条偏移
		index,	//当前dt索引
		menuBar,	//人才招聘菜单栏底部活动条
		wd;	//中心内容宽度 初始980px
	$(document).ready(function(){
		/* 各div高宽初始化 */
			tw=$(".talent-strategy").width();
			rw=$(".roadmap").width();
			ew=$(".employee-elegant").width();
			ratio=0.49;
		$(".trainning-ul").width(ratio*tw);
		$(".talent-strategy").height(tw*0.406);
		$(".employee-elegant").height(ew)	
		$(".roadmap").height(rw*0.5);
		$(".employee-elegant").height(ew*0.406);
		if($(".employee-elegant").height() < 500){
			$(".employee-elegant").height(500);
		}
		$(".elegant").height($(".employee-elegant").height()-120);	
		$(".trainning-ul").width(ratio*tw);
		$(".trainning").height($(".trainning").width()*0.5);
		$(".trainning .bg").height($(".trainning").height()-90);
		$(".content-title").css({left:tw*0.5-60});
		/* 鼠标滚动时顶部菜单栏横线移动 */
			th=$(".talent-strategy").height()-100;
			dh=$(".employee-development").height()+th-100;
			eh=$(".employee-elegant").height()+dh-100;
			rh=$(".employee-recruitment").height()+eh-100;
			barW=$(".employee-menu dt").width()+120;
			lftBar=barW;
		$(window).bind("scroll",function(){			
			if($(window).scrollTop()>=0 && $(window).scrollTop()<th){
				lftBar=barW;				
				$(".menu-bottom").animate({
					left:lftBar-8
				},200);
				$(".employee-menu").css({"background":'rgba(0,0,0,0.1)'});
				if(window.attachEvent){
					$(".employee-menu").css({"background-color":'#000'});
					$(".employee-menu").removeClass("ie-opacity");
				}
			}else{
				if($(window).scrollTop()>=th && $(window).scrollTop()<dh){	
					lftBar=barW*2-10;					
				}else if($(window).scrollTop()>=dh && $(window).scrollTop()<eh){
					lftBar=barW*3-10;
					/* 此处添加飞球 */
					require(["masks"]);
				}else{
					lftBar=barW*4-10;
					/* 此处添加级联 */
					require(["cascade"]);
				}				
				$(".menu-bottom").animate({
					left:lftBar
				},200);
				$(".employee-menu").css({"background":'rgba(0,0,0,0.6)'});
				if(window.attachEvent){
					$(".employee-menu").css({"background-color":'#000'});
					$(".employee-menu").addClass("ie-opacity");
				}
			} 
		    if ($(window).scrollTop()>100){
		        $(".scroll-top").fadeIn(1500);
		    }
		    else{
		        $(".scroll-top").fadeOut(1500);
		    }
		});
		/* 返回顶部 */
		$(".scroll-top").click(function(){
			$('body,html').animate({
				scrollTop:0
			},500);
            return false;
        });
        /* 菜单下面横线动画 */
		$(".employee-menu dt").on("click",function(){
			index=$(this).index();
			menuBar=($(this).width()+50)*index;
			//$(".menu-bottom").animate({left:menuBar});
			$('body,html').animate({
				scrollTop:$(".scroll-index").eq(index-1).offset().top
			},0);
		});
		/* 简历发送 */
		$(".email-to").click(function(){
			$(".email-doc").show();
		});
		/* 关闭简历发送窗口 */
		$(".closeEmail").click(function(){
			$(this).closest(".email-doc").fadeOut(500);
		});
	});
	/* 窗口改变大小时，div相应改变高度和宽度 */
	$(window).resize(function(){
		tw=$(".talent-strategy").width();
		rw=$(".roadmap").width();
		ew=$(".employee-elegant").width();
		$(".talent-strategy").height(tw*0.406);	
		$(".roadmap").height(rw*0.5);
		$(".employee-elegant").height(ew*0.406);
		if($(".employee-elegant").height() < 500){
			$(".employee-elegant").height(500);
		}
		$(".elegant").height($(".employee-elegant").height()-120);	
		wd=$(".content ul").width();	
		$(".trainning-ul").width(ratio*tw);
		$(".trainning").height($(".trainning").width()*0.5);
		$(".trainning .bg").height($(".trainning").height()-90);		
		$(".content-title").css({left:tw*0.5-60});
		$(".elegant").width(ew*0.8);
	});
	
});
