/**
 * Created with JetBrains WebStorm.
 * User: cn
 * Date: 15-1-26
 * Time: 上午10:04
 * To change this template use File | Settings | File Templates.
 */
;(function($){
    var slbarPlugin=function(options,self){
        this.oscroll=$(self).find(".scroll");
        this.ospan=$(self).find(".scroll span");
        this.ocenter=$(self).find(".center");
        this.oUl=$(self).find(".olist");
        this.oUlist=$(self).find(".olist li");
        this.iWidth=(($(self).find(".scroll").width()-$(self).find(".scroll span").width())/(this.oUlist.length-options.nums));
        console.log(this.iWidth,this.oUlist.length,options.nums);
        this.olistlen=$(self).find(".olist li").length;
        this.olistwidth=$(self).find(".olist li").eq(0).width();
        this.oUlWidth=(this.olistwidth + 2*parseInt($(self).find(".olist li").eq(0).css("paddingRight")) )*this.olistlen;
        this.init(options,self);
    }
    slbarPlugin.prototype={
        init:function(options,self){
            var $this=this;
            $this.createFirstMenu(options,self);
        },
        createFirstMenu:function(options,self){
            var _this=this;

            /*this.ocenter.on('mousewheel',function(e,delta){
                _this.fuScroll(e,delta);
            });
*/
            $(self).find(".olist").width(this.oUlWidth);
            $(self).find(".left").on("click",function(){
                var butscroll = _this.ospan.position().left - _this.iWidth;
                _this.fscroll(butscroll);
            })
            $(self).find(".right").on("click",function(){
                var butscroll = _this.ospan.position().left + _this.iWidth;
                _this.fscroll(butscroll);
            })

            this.oscroll.on("click",function(e){
                e.preventDefault();
                var butscroll = e.clientX - $(self).offset().left - 103 - _this.ospan.width()/2;
                _this.fscroll(butscroll)
            })

            this.iX = 0;
            this.ospan.on("mousedown",function(e){
                e.preventDefault();
                _this.iX = e.clientX - _this.ospan.position().left;

                $(document).on("mousemove",function(e){
                    e.preventDefault();
                    var l = e.clientX - _this.iX;
                    _this.tdscroll(l);
                })

                $(document).on("mouseup",function(e){
                    e.preventDefault();
                    $(document).off("mousemove");
                    $(document).off("mouseup");
                })
            })
        },
        fscroll:function(l){
            if(l < 0){
                l = 0
            }else if( l > this.oscroll.width() - this.ospan.width()){
                l = this.oscroll.width() - this.ospan.width();
            }
            this.osc = l / (this.oscroll.width() - this.ospan.width());

            this.sMove(this.ospan,"left",Math.ceil(l));
            this.sMove(this.oUl,'left',-Math.ceil((this.oUlWidth-(this.ocenter.width()))*this.osc));

        },
        sMove:function(obj,attr,iT,onEnd){
            var _this=this;
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                _this.dMove(obj, attr, iT, onEnd);
            },30);
        },
        dMove:function(obj, attr, iT, onEnd){
            var iCur = 0;
            attr == 'opacity' ? iCur = parseInt(parseFloat(obj.css(attr))*100) : iCur = parseInt(parseFloat(obj.css(attr)));
            var iS = (iT - iCur) / 5;
            iS = iS > 0 ? Math.ceil(iS) : Math.floor(iS);
            if(iCur == iT){
                clearInterval(obj.timer);
                if(onEnd){
                    onEnd();
                }
            }else{
                if(attr == 'opacity'){
                    obj.css({
                        filter: 'alpha(opacity:'+(iCur + iS)+')',
                        opacity: (iCur + iS) / 100
                    })
                }else{
                    obj.css(attr,iCur + iS +'px')
                }
            }

        },
        tdscroll:function(l){
            if( l < 0){
                l = 0;
            }else if( l > this.oscroll.width() - this.ospan.width()){
                l =  this.oscroll.width() - this.ospan.width();
            }

            this.osc = l / (this.oscroll.width() - this.ospan.width());
            this.ospan.css("left",l+"px");
            this.oUl.css("left",-Math.ceil((this.oUlWidth-(this.ocenter.width()))*this.osc))

        },
        fuScroll:function(e,delta){
            e.preventDefault();
            var l = this.ospan.position().left;
            delta ? ( delta > 0 ? l -= this.iWidth : l+=this.iWidth) : (e.wheelDelta ? l+=this.iWidth : l-=this.iWidth);
            this.fscroll(l);
        }
    }
    $.fn.extend({
        slbar:function(options){
            return this.each(function(){
                var self=this,ui=$(self).data("slbar");
                if(!ui){
                    var opts= $.extend({}, $.fn.slbar.defaults,options);
                    ui= new slbarPlugin(opts,self);
                    $(self).data("slbar",ui) ;
                }
                if(typeof options == "string" && typeof data[options] == 'function'){
                    data[options].call(self); //执行插件的方法
                }
            })
        }
    })
    /*插件的默认参数*/
    $.fn.slbar.defaults={
        /* tabnav:".tabnav li",
         pannel:".tabcontent"*/
    }
})(jQuery);