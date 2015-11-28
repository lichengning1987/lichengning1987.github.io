define([/*'respond', 'skip',*/ 'imgFix', 'nav', 'mousewheel'], function (skip) {



	/**
	 * init
	 */
	var begin = {};

	//初始化方法
	begin.init = function () {
		this.requestData();
	}

	//请求后端数据
	begin.requestData = function(){
		var self = this;
		$.ajax({
			type: "POST",
			url: "api/index.json",
			cache: "false",
			success: function(data){
				self.data = data;
				self.banner();
				self.concatNav();
				self.imgAttach();
				self.nav();
				self.mark = 1;
				self.len = $('.nav .nav-li').length;
				self.wheel();
			}
		});
	}

	//首页幻灯片方法
	begin.banner = function(){

		//首页banner字符串拼接
		var str = '';
		var i;
		var data = this.data.banner.list;
		var bannerLen = data.length;
		for(i = 0; i < bannerLen; i++){
			str += '<div style="background-image: url('+ data[i] +');"></div>';
		}
		$("#random").append(str);

		var $divs = $("#random div");
		var $lis = $('.handle li');
		var len = $divs.length;
		var curDiv, 			//当前属于激活状态的div
			curLi,				//当前属于激活状态的li
			active,				//有on的li
			num;				//有on的li当前的index值

		//js计算幻灯片绝对居中
		var l = $(".handle").width()/2;
		$(".handle").css('margin-left', -l);
		//进入页面初始化幻灯片
		$divs.first().addClass("on");
		$lis.first().addClass("active");

		//手动点击绑定事件
		$lis.off('click').on('click', function(){
			$lis.removeClass("active");
			$(this).addClass("active");
			curNum = $(this).index();		//查询当前index值
			curDiv = $($divs[curNum]);		//根据当前index值查询到当前应该属于哪个div
			//先渐隐所有的div
			$divs.removeClass("on").animate(
			{
				'opacity':0,
				'z-index':0
			},600);
			//渐现当前div
			curDiv.addClass("on").stop().animate(
			{
				'opacity':1,
				'z-index':50
			},600);
		});

		


		//自动运行方法
		var time;
		time = setInterval(autoPlay,5000);

		function autoPlay(){
			active =  $("#random .on");
			num = active.index();
			
			if(num == len - 1){

				$lis.first().click();

			} else {

				$($lis[num + 1]).click();
			}
		}

		//鼠标移入移除的时候绑定的事件
		$("#random div, .handle").on('mouseenter', function(){
			clearInterval(time);
		});
		$("#random div, .handle").on('mouseleave', function(){
			time = setInterval(autoPlay,5000);
		});
	}

	//二级菜单的拼接生成
	begin.concatNav = function(){
		var j;
		var $des = $(".des");
		var list = this.data.nav.list;
		var data;
		var str = '';
		var len;
		$des.each(function(i){
			str = '';
			data = list[i].data;
			len = data.length;
			for( j = 0 ; j < len; j++){
				str += '<li><a href="'+ data[j].url +'">'+ data[j].name +'</a></li>';
			}
			$(this).find("ul").append(str);
			str = '';
		});
	}

	//首页视差滚动插件
	begin.imgAttach = function(){

			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 10,
				responsive: true
			});
		
	}

	//导航相关功能
	begin.nav = function(){

		//点击导航的滑动定位功能
		$('.nav').smint({
			'scrollSpeed' : 1000,
			'special' : true
		});

		//初始化默认第一个导航激活
		$('.nav .nav-li a').first().addClass("active");



		//点击导航菜单的logo返回顶部
		$(".slogan").on('click', function(){
			$('body,html').animate({scrollTop:0},600);
		});
		

		//滚动鼠标滚轮的时候的动作
		var arr = [];
		var $pp = $('.pp');
		$pp.each(function(i){
			arr.push($(this).offset().top);
		});
		var wt;											//body滚动条距离顶部的距离
		var liW;										//导航li的宽度
		var $arrow = $("#nav-arrow");					//指向条元素
		var arrowL = parseInt($arrow.css('left'));		//指向条初始left值
		var num;										//当前点击的导航列表在兄弟节点的序号
		var w = $($('.nav .nav-li')[0]).outerWidth();	//每个导航列表的宽
		var $nav = $(".nav");							//导航条
		var $handle = $(".handle");						//幻灯片手动切换元素
		var tNav = $nav.offset().top;					//导航条距离顶部高度
		var tBanner = $(".handle").offset().top;		//幻灯片的ul距离顶部高度
		
		//Window绑定滚动事件  用来调整一级导航菜单下面的横线位置
		$(window).on("scroll", function(){

			// 幻灯片控制元素在高度大于导航条的时候隐藏
			wt = $(this).scrollTop();
			tBanner = $handle.offset().top;
			if(tBanner > tNav){
				$handle.css("opacity", 0);
				$arrow.show();
			} else {
				$handle.stop().animate({'opacity': 1}, 800);
				$arrow.hide();
			}

			//导航条横线距离判断逻辑
			if(wt <= arr[0]){

				$arrow.stop().animate({'left': w * 0 + arrowL}, 600);

			} else if(arr[0] < wt && wt <= arr[1]){

				$arrow.stop().animate({'left': w * 1 + arrowL}, 600);

			} else if(arr[1] < wt && wt <= arr[2]){

				$arrow.stop().animate({'left': w * 2 + arrowL}, 600);

			} else if(arr[2] < wt && wt <= arr[3]){

				$arrow.stop().animate({'left': w * 3 + arrowL}, 600);

			} else {

				$arrow.stop().animate({'left': w * 4 + arrowL}, 600);

			}
		});
	}

	//鼠标滚轮相关
	begin.wheel = function(){

		$(document).on('mousewheel', function(event, delta, deltaX, deltaY) {
			// console.log(begin.mark);
			event.preventDefault();
			//获取当前菜单是兄弟节点的index值
			var time;
			
			var curElement = $(".nav .active");
			var num = curElement.parent().index();
			var t = $(window).scrollTop();
			
			if(curElement.length == 0 && t > 1500){
				$('.nav .nav-li a').last().addClass("active");
			}
			if(curElement.length == 0 && t < 100){
				$('.nav .nav-li a').first().addClass("active");
			}
			if( num == -1){//当当前选项在最后一项的时候
				curElement = $(".nav .active");
				num = 4;
			}
			// console.log('滚动：' + delta);
			// console.log('所在项：' + num);
			if(begin.mark == 1){

				//如果用户鼠标滚轮往下滚 且全局标记为1
				if(delta == -1){		//往下滚

					begin.mark = 2;

					if(t < 100){	//说明现在界面处于首页banner

						$($('.nav .nav-li a ')[0]).click();
					} else {

						curElement.parent().next().find("a").click();
					}
					
					//如果滚动到最后一个导航菜单的话  
					/*if(t >= $('.pp').last().offset().top - 200){
						$(window).scrollTop( $(document).height());
					}*/

					clearTimeout(time);
					time = setTimeout(function(){
						begin.mark = 1;
						$(document).on('mousewheel',function(){});
					}, 1000);
				} 

				//如果用户鼠标滚轮往上滚 且全局标记为1
				if(delta == 1) {		//往上滚

					begin.mark = 2;

					if(num == 0 && t < 1000){	//说明现在处于关于昊美

						$('body,html').animate({scrollTop:0},500);

					} else {

						curElement.parent().prev().find("a").click();
					}
					clearTimeout(time);
					time = setTimeout(function(){
						begin.mark = 1;
						$(document).on('mousewheel',function(){});
					}, 1000);
				}
			}
			
		});
	}

	return {
		begin: begin
	};
});
