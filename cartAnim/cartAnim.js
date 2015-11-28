/**
 * Created with JetBrains WebStorm.
 * User: cn
 * Date: 15-3-3
 * Time: 下午2:28
 * To change this template use File | Settings | File Templates.
 */
/*详情页购物车动画*/
(function($){
    $.extend($.fn,{
        shoping:function(options){
            var self = this,
                $shop = $('.icon-cart').eq(0),
                $num = $('.cart-nums').eq(0),
                $img = $('.swipe-wrap').eq(0),
                $fix= $('.fix_menu'),
                $src = $img.find(".image").attr("src");
            var S = {
                init:function(){
                    this.addShoping()
                },
                addShoping:function(){
                    var x = $img.offset().left+$img.width()/2-25,
                        y = $img.height()/2-25,
                        X = $fix.offset().left+$fix.width()/8+10,
                        Y= $(window).height()+$(document).scrollTop()-80,
                        dis=true;
                    if(dis){
                        if ($('#floatOrder').length <= 0) {
                            $('body').append('<div id="floatOrder" style="display:block;"><img src=""  width="50" height="50" class="floatIMG" /></div>')
                        };
                        var $obj=$('#floatOrder');
                        $(".floatIMG").attr("src",$src);
                        $('body').css('position',"relative");
                        $obj.css('position',"absolute");
                        $obj.css('z-index',"99");
                        $shop.removeClass("stoped");
                        if(!$obj.is(':animated')){
                            $obj.css({'left': x,'top': y}).animate({'left': x,'top': Y},300,'swing',function() {
                                for(var i=1;i<3;i++){
                                    if($shop.hasClass("trans"+i)){
                                        $shop.removeClass("trans"+i)
                                    }
                                }
                                $shop.addClass("trans1");

                            }).animate({'left':X,'top':Y},600,'swing',function(){
                                $shop.addClass('trans2');
                                $obj.fadeOut(300,function(){
                                    $obj.remove();
                                    var num = Number($num.text());
                                    $num.removeClass("hide");
                                    $num.text(num+1);
                                    $shop.addClass("stoped");
                                });
                            })
                            $(".floatIMG").animate({width:'20px',height:'20px'},500)
                        };

                    };
                }
            };
            S.init();
        }
    });
})($);