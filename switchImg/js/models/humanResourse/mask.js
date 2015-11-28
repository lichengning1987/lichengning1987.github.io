define([], function () {
	var containerW=$(".elegant").width(),  //容器宽度
		containerH=$(".elegant").height(),	//容器高度
		lis='',	//单个头像html代码
		rand1=1,	//0-1随机数1
		rand2=1,	//0-1随机数2
		simbol1=1,	//头像初始位置标记1
    	simbol2=1,	//头像初始位置标记2
		move = false, //移动标记
		rawx, //头像原始x坐标
		rawy,	//头像原始y坐标
		topy,	//y坐标偏移
		leftx,	//x坐标偏移
		x,	//最终x坐标
		y,	//最终y坐标
		isMove=false, //鼠标离控件左上角的相对位置
		that,	//$(this)标记
		person;	//后台取得头像数据
	function maskload(){		    
		//data 加载
		$.ajax({
	        type:"post",  
	        url: "js/models/humanResourse/data.json",     
	        success: function(data){   
	        		person=data.model.accountList;	
	        	$(".elegant").html(''); 	        	
	        	for(var i=0;i<person.length;i++){
	        			rand1=10*Math.random();
	        			rand2=10*Math.random();		        		
		        	if(parseInt(rand1%2)==0)
		        		simbol1=(-1);
		        	if(parseInt(rand2%2)==0)
		        		simbol2=(-1);
	        			lis='<li class="mask" style="top:'+simbol1*9999+'px;left:'+simbol2*9999+'px" onmousedown="$(this,event)" id="mask'+i+'" mark="'+person[i].url+'"><span>'+person[i].name+'</span></li>';
					$(".elegant").append(lis);
	        	}
	    		$(".elegant li").each(function(){
	    			$(this).animate({
	    				left:Math.random()*containerW-30,
	    				top:Math.random()*containerH-30
	    			},1000);
	    		});

	        	//拖动				
			    $(".mask").mousedown(function(e) {
			    	topy=Number($(this).css("top").substr(0,$(this).css("top").length-2));
			        leftx=Number($(this).css("left").substr(0,$(this).css("left").length-2));
					isMove=true;
			        move = true;
			        rawx = e.pageX - parseInt($(this).css("left"));
			        rawy = e.pageY - parseInt($(this).css("top"));
			        $(this).fadeTo(20, 0.5); //点击后开始拖动并透明显示
			    }).mousemove(function(e) {
			        if (move) {
			            	x = e.pageX - rawx; //移动时根据鼠标位置计算控件左上角的绝对位置
			            	y = e.pageY - rawy;		           
			            if(x<=containerW-50 && y<=containerH-50){
			            	$(this).css({top: y,left: x}); //控件新位置	 
			            }
			            if(Math.abs(topy-y)>2 || Math.abs(leftx-x)>2){
			            	isMove=false;
			            }	            	           
			        }		        
			     }).mouseup(function() {
			     	that=$(this);
			     	$(this).css({"cursor":"pointer"});
			     	 //点击放大查看
			        if(isMove){
						if(that.hasClass("mask")){
							$(this).css({"background":"url("+that.attr("mark")+") no-repeat 0 0","background-size":"100%"});
							that.animate({
								left:0.5*containerW-50,
								top:0.5*containerH-50,
								width:200,
								height:200,
								borderRadius:100
							},600);
							that.addClass("mask-clicked").removeClass("mask");	
							$(".mask-clicked").css({"background":"url("+that.attr("mark")+") no-repeat 0 0"});
							that.siblings().each(function(){
								if($(this).hasClass("mask-clicked")){
									$(this).css({"background":"none","background-color":"#65455a"});
									$(this).animate({
										left:Math.random()*containerW,
										top:Math.random()*containerH,
										width:70,
										height:70,
										borderRadius:35
									},600);
									$(this).addClass("mask").removeClass("mask-clicked");
								}				
							});						
						}else if(that.hasClass("mask-clicked")){
							$(this).css({"background":"none","background-color":"#65455a"});
							that.animate({
								left:Math.random()*containerW,
								top:Math.random()*containerH,
								width:70,
								height:70,
								borderRadius:35
							},600);
							that.addClass("mask").removeClass("mask-clicked");
						}
			        }
			        move=false;
			        isMove=false;
			        $(this).fadeTo("fast", 1); 	       
			    }); 
	        }
	    });
	}
	maskload();//默认加载
	$(window).resize(function(){
		$(".elegant").html('');
		maskload();//改变窗口重新加载
	});
});