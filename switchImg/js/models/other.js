define(['navf','mousewheel','sliderbar'], function () {

	/**
	 * init
	 */
	var begin = {};

	begin.init = function () {
        this.selfnavleft=parseInt($(".navline").css("left"));
        this.requireData();
	};


    //ajax请求后端数据
    begin.requireData = function () {
        var self=this;
        $.ajax({
            type:"post",
            url:"api/others.json",
            cache:false,
            success:function(data){
                self.renderDom(data);
                //跳转到首页
                $(".nav .logo").click(function(){
                    window.open(data.nav.indexUrl);
                })
                self.navinit();
                self.carinit();

            }

        })

    }

    begin.renderDom = function (data) {


        var olength=data.nav.list.length,str="",pstr="";
        for(var i = 0 ; i < olength ; i++){
            str += '<li><a href="#p'+parseInt(i+1)+'" id="p'+parseInt(i+1)+'">'+ data.nav.list[i].title+'</a></li>';
            pstr+='<div class="product-box p'+ parseInt(i+1)+'">\
                         <div class="tpshadow"></div>\
                         <div class="product-title">\
                            <span class="title">'+ data.nav.list[i].listTitle+'</span>\
                         </div> \
                         <div class="product-info">\
                            <div class="product-infobox w980 margin-auto"> \
                             '+ data.nav.list[i].info +'\
                            </div>\
                         </div>\
                         <div class="product-slide-box w980 margin-auto">  \
                            <div class="product-carsous  carsous " > \
                                <div  class="left"></div> \
                                <div  class="center">\
                                    <ul class="olist">  \
                                    </ul>\
                                    <div  class="scroll"> <span></span> </div>\
                                </div>\
                                <div  class="right"></div>\
                            </div> \
                        </div>\
                         <div class="product-shadow">\
                        </div>\
                    </div>'
        }
        $(".navbar").append(str);
        $(".ln-product-box").html("");
        $(".ln-product-box").append(pstr);

        for(var i = 0 ; i < olength ; i++){
            for(var j=0;j<data.nav.list[i].data.length;j++){
                var ostr =' <li>\
                         <a href="'+data.nav.list[i].data[j].url +'" target="_blank" class="linkimg"><img src="'+ data.nav.list[i].data[j].imgurl+'" /></a> \
                         <p>\
                              <a href="'+ data.nav.list[i].data[j].url+ '">'+ data.nav.list[i].data[j].name +'</a>\
                        </p> \
                      </li>';
                $(".olist").eq(i).append(ostr);
            }

        }

        $(".product-shadow").eq(olength-1).hide();



    }

    //初始化图片切换
    begin.carinit = function () {
        $(".carsous").each(function(index,item){
            $(item).slbar({
                nums:4
            });
        })
    };
    begin.navinit = function () {
        //点击导航菜单的logo返回顶部
        $(".slogan").on('click', function(){
            $('body,html').animate({scrollTop:0},600);
        });
        var self=this;
        var ofistleft=parseInt($(".navline").css("left"));
        var owidth=$(".navbar li").eq(0).width()+parseInt($(".navbar li").eq(0).css("marginLeft"));
        var ohInfoTop=$(".ln-product-box").offset().top;
        $('.nav').smint({
            'scrollSpeed' : 1000,
            'special' : true
        });
        //$(".product-box").eq(0).addClass("tpshadow");
        $(".product-box").eq(0).append($('<div class="tpshadow"></div>'));
        $(".navbar li").eq(0).addClass("cur");
        $(window).scroll(function(){
            var oscrolltop= $(window).scrollTop();
            if( oscrolltop> 0){
                $(".harmony-info").removeClass("margintp50");
            }else{
                $(".harmony-info").addClass("margintp50");
            }
            if(oscrolltop >ohInfoTop-60 ){
                $(".nav").addClass("nav-change");
            }else{
                $(".nav").removeClass("nav-change");
            }

            self.scrollUpdate();

        })

        $(window).resize(function(){
            $(".navline").removeAttr("style");
            ofistleft=parseInt($(".navline").css("left"));
            owidth=$(".navbar li").eq(0).width()+parseInt($(".navbar li").eq(0).css("marginLeft"));
            var oindex=$(".navbar li").index($(".navbar").find(".cur"));
            $(".navline").css({
                "left":ofistleft + (oindex*owidth)+"px"
            });
            $(".navline").show();
        })
        $(document).on("click",function(e){
            e.preventDefault();
        })
        $(".navbar li").on("click",function(e){
            e.preventDefault();
            $(".navbar li").removeClass("cur");
            $(this).addClass("cur");

        })

    };

    //获取滚动条高度
    begin.scrollUpdate = function () {
        this.oscrollTop=$(window).scrollTop();
        this.scrollUpdatepars();
    }

    //滚动条方法
    begin.scrollUpdatepars = function () {

        this.slidePositions=[];
        this.currentPosition=0;
        var found=false;
        for(var j=0;j<$(".product-box").length;j++){
            this.slidePositions.push($(".product-box").eq(j).offset().top-50)
        }
        this.slidePositions.push($(".ln-foot").offset().top-50);

        for(var i=0;i<this.slidePositions.length;i++){
            if(this.oscrollTop >= this.slidePositions[i] && this.oscrollTop < this.slidePositions[i+1]){
                this.currentPosition = i;
                found = true;
                break;
            }
        }
        if(this.oscrollTop >= 0 && this.oscrollTop < this.slidePositions[0]-0){
            $(".navline").hide();
        }


        if(this.oscrollTop >= $('body').height()-$(window).height()){
            this.currentPosition = this.slidePositions.length-2;
            found = true;
        }

        if(found){
            sowidth=$(".navbar li").eq(0).width()+parseInt($(".navbar li").eq(0).css("marginLeft"));
            $(".navline").show();
            $(".navline").stop().animate({
                "left":  this.selfnavleft+(this.currentPosition*sowidth)+"px"
            },500);
        }

    }


	return {
		begin: begin
	};



});
