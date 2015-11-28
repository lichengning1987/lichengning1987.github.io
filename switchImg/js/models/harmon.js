define(['imgFix','navf', 'mousewheel','sliderbar','easing'], function () {

	/**
	 * init
	 */
	var begin = {};

	begin.init = function () {
        this.selfnavleft=parseInt($(".navline").css("left"));
        this.requireData();
	};


    begin.requireData = function () {
        var self=this;
        $.ajax({
            type:"post",
            url:"api/harmony.json",
            cache:false,
            async:false,
            success:function(data){
                self.renderDom(data);

                //跳转到首页
                $(".nav .logo").click(function(){
                    window.open(data.nav.indexUrl);
                })

                self.Courseinit();
                setTimeout(function(){
                    self.carinit();
                    self.navinit();
                    self.tabslide();
                    self.imgAttach();
                },100);

            }

        })

    }


    begin.renderDom = function (data) {
        //企业介绍
        var str="";
        var ostr1='<li><a href="#p1" id="p1">'+ data.nav.listqs.title+'</a></li>';
        var ostr2='<li><a href="#p2" id="p2">'+ data.nav.listCourse.title+'</a></li>';
        var ostr3='<li><a href="#p3" id="p3">'+ data.nav.listqua.title+'</a></li>';
        var ostr4='<li><a href="#p4" id="p4">'+ data.nav.listculture.title+'</a></li>';

        str=ostr1+ostr2+ostr3+ostr4;
        $(".navbar").append(str);
        $(".harmonybox").append(data.nav.listqs.info);


        //发展历程
        var oyearstr='';
        for(var i = 0 ; i < data.nav.listCourse.datahistory.length; i++){

            oyearstr += '<div class="Course-yearbox">\
                        <div class="Course-year">\
                            <span>'+data.nav.listCourse.datahistory[i].dataYear+'</span>\
                            <b class="icon-year icon-arrowdown"></b>\
                        </div> \
                        <div class="Course-yearinfo"> \
                            <div class="yearline"> \
                            </div> \
                            <div class="Course-month">\
                                <ul class="Course-monthlist"> \
                                </ul> \
                            </div> \
                        </div>\
                      </div>';

        }
        $(".Course-box").html(oyearstr);

        $(".Course-monthlist").each(function(index,item){
             var odatas=data.nav.listCourse.datahistory[index].dataMonth.length;
             var strs="";
             for(var i=0;i< odatas; i++){
                 strs +='<li>\
                             <h4><em>'+data.nav.listCourse.datahistory[index].dataMonth[i].month+'</em>月 </h4> \
                             <p class="month-title">'+data.nav.listCourse.datahistory[index].dataMonth[i].info +'</p> \
                             <b class="point"></b> \
                             <b class="icon-triangle"></b>\
                             <img src="'+data.nav.listCourse.datahistory[index].dataMonth[i].img +'" alt=""/>\
                           </li>';

             }
            $(item).html(strs);
        })


       //企业资质
      var quastr="",quaboxstr="";
       for(var j=0;j<data.nav.listqua.datas.length;j++){
           quastr += '<li class=""><div class="icon-qua icon-hover'+(j+1) +'"></div> <p>'+data.nav.listqua.datas[j].datatitle+'</p></li>';
           quaboxstr +=  ' <div class="product-carsous  carsous " > \
                                   <div  class="left"></div>\
                                   <div  class="center"> \
                                       <ul class="olist"> \
                                       </ul> \
                                       <div  class="scroll"> <span></span> </div>\
                                   </div> \
                                   <div  class="right"></div>\
                               </div>'
                           ;
       }

       $(".list-qua").html(quastr);
       $(".product-slide-box").html(quaboxstr);
       $(".ln-busBox").append('<div class="page-shadow"></div>');
       $(".list-qua li").eq(0).addClass("cur");
       $(".olist").each(function(index,item){
           var onavstr="";
           for(var i=0;i<data.nav.listqua.datas[index].data.length;i++){

               onavstr += '<li> <a href="'+data.nav.listqua.datas[index].data[i].url +'" target="_blank" class="linkimg"><img src="'+ data.nav.listqua.datas[index].data[i].imgurl +'"></a> </li>';
           }
           $(item).html(onavstr) ;

       })

    }
    //图片切换
    begin.carinit = function () {
        $(".carsous").each(function(index,item){
            $(item).slbar({
                nums:3
            });
        })
    };
    //导航方法
    begin.navinit = function () {
        //点击导航菜单的logo返回顶部
        $(".slogan").on('click', function(){
            $('body,html').animate({scrollTop:0},600);
        });

        var self=this;
        var ofistleft=parseInt($(".navline").css("left"));
        var owidth=$(".navbar li").eq(0).width()+parseInt($(".navbar li").eq(0).css("marginLeft"));
        var ohInfoTop=288;
        $('.nav').smint({
            'scrollSpeed' : 600,
            'special' : true
        });

        $(".navbar li").eq(0).addClass("cur");

        $(window).scroll(function(){
            var oscrolltop= $(window).scrollTop();

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

    //历程图方法
    begin.Courseinit = function () {

        $(".Course-yearbox").each(function(index,item){

            $(item).find(".Course-monthlist li").each(function(indexs,items){
                var otops=30;
                if(indexs==0){
                    otops = 0;
                }
                $(items).css({
                    "marginTop":-otops+"px"
                })
                if(indexs % 2 == 1){
                   $(items).addClass("month-right");
                }else{
                    $(items).addClass("month-left");
                }
                if($(items).find("img").attr("src") == ""){
                    $(items).find("img").hide();
                }

            });

            $(item).find("img").load(function(){
                var oheight=$(item).find(".Course-month").height()+50;
                $(item).find(".yearline").height(oheight);
            })


            $(item).find(".Course-year").on("click",function(e){
                e.preventDefault();
                $(item).find(".Course-yearinfo").slideToggle(1000,function(){
                    var odisplay=$(this).css("display");
                    if(odisplay == "none"){
                        $(e.currentTarget).find(".icon-year").removeClass("icon-arrowdown").addClass("icon-arrowup");
                    }else{
                        $(e.currentTarget).find(".icon-year").removeClass("icon-arrowup").addClass("icon-arrowdown");
                    }
                });
            })
            $(item).after('<div class="Course-lastpoint"><b class="line"></b></div>');
        })
        $(".Course-box").append('<div class="Course-lastpoint margintp4"> <b class="point"></b> </div>');
    };

    //企业资质切换
    begin.tabslide = function () {
        $(".product-carsous").hide();
        $(".product-carsous").eq(0).show();

        var ohoverline=parseInt($(".qua-hoverline").css("left"));
        $(".list-qua li").on("click",function(e){
            e.preventDefault();
            var index=$(this).index();
            $(".list-qua li").removeClass("cur");
            $(this).addClass("cur");
            $(".qua-hoverline").animate({
                left: ohoverline+index*($(this).width()+parseInt($(this).css("marginRight")))+"px"
            })
            $(".product-carsous").hide();
            $(".product-carsous").eq(index).fadeIn(1000);

        })
    }

    //视差滚动插件
    begin.imgAttach = function(){

       /* $.stellar({
            horizontalScrolling: false,
            verticalOffset: 10,
            responsive: true
        });*/

    }

    //获取滚动条高度
    begin.scrollUpdate = function () {
        this.oscrollTop=$(window).scrollTop();
        this.scrollUpdatepars();
    }

    //滚动条方法
    begin.scrollUpdatepars = function () {

        this.slidePositions = [$(".harmony-info").offset().top-60,$(".ln-harmony-Course").offset().top-60,$(".ln-busBox").offset().top-60,$(".ln-harmony-culture").offset().top-60,$(".ln-foot").offset().top-60];
        this.currentPosition=0;
        var found=false;
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

        if(found){

            console.log(222)
            sowidth=$(".navbar li").eq(0).width()+parseInt($(".navbar li").eq(0).css("marginLeft"));
            $(".navline").show();
            $(".navline").stop().animate({
                "left":  this.selfnavleft+(this.currentPosition*sowidth)+"px"
            },{
                easing: 'easeOutCubic',
                duration: 500
            });
        }

    }

	return {
		begin: begin
	};



});
