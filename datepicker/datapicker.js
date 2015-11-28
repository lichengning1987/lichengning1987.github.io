/**
 * Created with JetBrains WebStorm.
 * User: cn
 * Date: 14-10-13
 * Time: 下午4:47
 * To change this template use File | Settings | File Templates.
 */
/*日历插件*/
var datePicker=function(options,self,callback){
    this.init(options,self,callback);
}
datePicker.prototype={
    /**
     * 初始化
     */
    init:function(options,self,callback){
        var $this=this, nowdays="";
        this._target=$(self);
        this._date = new Date();
        this.inital = false;
        this._initWeek=true;
        this.phtml="<p>入住</p>";
        this._month=options.dateMonth-1;
        nowdays=options.dateYear + '/' + options.dateMonth + '/' + options.dateDay + '/';
        var arrs=[nowdays,options.day];  //传出参数
        $this.formatDate(options,arrs);
        this._target.click(function(){
            if(!$this.inital){
                $this.bind(options,callback).insert();
                $this.inital = true;
            }
           $this.show();
        })


    },
    /**
     * 初始化绑定
     */
    bind:function(options,callback){
        this._picker = this.createCalendar();//初始化创建日历结构方法
        this.generateDays(options);//初始化日历数据方法
        this.readays(options); //初始化天数
        this.switchMonth(options); //切换月份方法
        this.switchChoose(); //添加和删除住几晚方法
        this.chooseDate();//选择日期事件方法
        this.sureEvent(options,callback);//完成按钮事件方法
        this.cancelEvent();//取消按钮事件方法
        return this;
    },
    /**
     * 初始化插入
     */
    insert:function(){
       this._picker.insertAfter(this._target);
    },
    /**
     * 显示
     */
    show : function(){
        this._picker.show();
    },
    /**
     * 隐藏
     */
    hide : function(){
        this._picker.hide();
    },
    /**
     * 初始化创建日历结构
     */
     createCalendar:function(){
        var arr = [];
        arr.push('<div class="datepicker-box">');
        arr.push('  <div class="datepicker-header">');
        arr.push('      <span class="datepicker-pre datepicker-arrow"><b></b></span>');
        arr.push('      <span class="datepicker-next datepicker-arrow"><b></b></span>');
        arr.push('      <h4></h4>');
        arr.push('  </div>');
        arr.push('  <table class="datepicker-body">');
        arr.push('      <thead>');
        arr.push('          <tr>');
        arr.push('              <th class="datepicker-weekend">日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="datepicker-weekend">六</th>');
        arr.push('          </tr>');
        arr.push('      </thead>');
        arr.push('      <tbody> <tr><td>223</td></tr>');
        arr.push('      </tbody>');
        arr.push('  </table>');
        arr.push('<div class="dateline fl"> <span class="datapicker-daynight fl">住<em>1</em>晚</span><p class="choose-con clearfix" style="position:absolute;right:30px;top:10px;"><a href="javascript:;" class="choose-icon reduce js_choose fl choose-iconbluy">–</a> <span class="datanum js_num fl" >1</span><a href="javascript:;" class="choose-icon add js_choose fl">＋</a></p> </div>');
        arr.push('<div class="datepicker-barline"><button class="datepicker-sure">完成</button><button class="datepicker-cancel">取消</button></div>');
        arr.push('</div>');
        arr.push('<div class="overlay"></div>');
        return $(arr.join(''));
    },
    /**
     * 初始化日历数据
     */
    generateDays:function(options){
        var year = options.dateYear
            , month = options.dateMonth
            , day = options.dateDay
            , days = new Date(new Date(year, month, 1) - 24*60*60*1000).getDate()
            , week = (function(){
                var tDate = new Date(year, month-1, 1);
                var week = tDate.getDay();
                if(week == 0){
                    week = 7;
                }
                return week;
            })();

        if(this._picker.find('.datepicker-arrow').hasClass("cur")){
            var year = this._date.getFullYear()
                , month = this._date.getMonth()+1
                , day = this._date.getDate()
                , days = new Date(new Date(year, month, 1) - 24*60*60*1000).getDate();
                  week = (function(){
                var tDate = new Date(year, month-1, 1);
                var week = tDate.getDay();
                if(week == 0){
                    week = 7;
                }
                return week;
            })();
            this._initWeek=false;
        }

        if(this._initWeek){
            this._picker.data("curMonth",options.dateMonth);
            this._picker.data("curDay",options.dateDay);
            week = (function(){
                var tDate = new Date(year, month-1, 1);
                var week = tDate.getDay();
                if(week == 0){
                    week = 7;
                }
                return week;
            })();
        }

        this._picker.find('h4').html('<b>'+year+'</b>' + ' 年<em> ' + month + '</em> 月');
        var arr = []
            , d = 1;
        arr.push('<tr>');
        for(var j = 1; j <= week; j ++){
            arr.push('<td>&nbsp;</td>');
        }
        for(var j = week+1; j <8; j ++, d ++){
            arr.push('<td class="datepicker-td');
            if(d == day){
                arr.push(' cur');
                arr.push(' curState');
            }
            arr.push('">');
            var pdemo="<em>"+d+"</em>";
            arr.push(pdemo);
            if(d == day){

                arr.push(this.phtml);
            }
            arr.push('</td>');
        }
        arr.push('</tr>');
        for(var i = 0, l = Math.ceil((days + week) / 7) - 2; i < l; i ++){
            arr.push('<tr>');
            for(var j = 1; j < 8; j ++, d ++){
                arr.push('<td class="datepicker-td');
                if(d == day){
                    arr.push(' cur');
                    arr.push(' curState');
                }
                arr.push('">');
                var pdemo="<em>"+d+"</em>";
                arr.push(pdemo);
                if(d == day){

                    arr.push(this.phtml);
                }
                arr.push('</td>');
            }
            arr.push('</tr>');
        }
        var l = days - d + 1;
        if(l != 0){
            arr.push('<tr>');
            for(var i = 0; i < l; i ++, d ++){
                arr.push('<td class="datepicker-td');
                if(d == day){
                    arr.push(' cur');
                    arr.push(' curState');
                }
                arr.push('">');
                var pdemo="<em>"+d+"</em>";
                arr.push(pdemo);
                if(d == day){

                    arr.push(this.phtml);
                }
                arr.push('</td>');
            }
            for(var i = l + 1; i < 8; i ++){
                arr.push('<td>&nbsp;</td>');
            }
            arr.push('</tr>');
        }

        this._picker.find('tbody').html(arr.join(''));

        if(this._picker.data("clicks")!=true){
           this._picker.find(".datepicker-td").removeClass("curState");
           this._picker.find(".datepicker-td").eq(options.dateDay-1).addClass("curState");
        }

    },
    /**
     * 切换月份
     */
    switchMonth:function(options){
        var _this=this;
        this._picker.find('.datepicker-arrow').click(function(e){
                e.preventDefault();
                e.stopPropagation();
                if($(this).hasClass('datepicker-pre')){
                    _this._month--;
                    if(_this._month<=-2){
                        _this._month = _this._month + 12;
                    }
                    if(_this._month==11){
                        _this._month=-1;
                    }
                    _this._date.setMonth(_this._month);
                    if(_this._date.getDate()<_this._picker.data("curDay")){
                        _this._date.setDate(1);
                        _this._date.setMonth(_this._month);
                        if(_this._month==-1){
                            _this._date.setFullYear(_this._date.getFullYear()+1);
                        }
                    }

                } else {
                    _this._month++;
                    if(_this._month>=13){
                        _this._month= _this._month-12;
                    }
                    if(_this._month==0){
                        _this._month=12;
                    }
                    _this._date.setMonth(_this._month);
                    if(_this._date.getDate()<_this._picker.data("curDay")){
                        _this._date.setDate(1);
                        _this._date.setMonth(_this._month);
                        if(_this._month==12){
                            _this._date.setFullYear(_this._date.getFullYear()-1);
                        }
                    }

                }

                $(this).addClass("cur");
                _this.generateDays(options);
                _this._picker.find('.datepicker-td').find("p").remove();
                _this._picker.find('.datepicker-td').removeClass("cur");

                //切换月份时，根据保留字段，判断选择的日期。
                var getMonths=_this._picker.find(".datepicker-header h4 em").text();
                if(_this._picker.data("curMonth") == getMonths ){

                    _this._date.setDate(_this._picker.data("curDay"));
                    _this.generateDays(options);
                    _this._picker.find(".datepicker-td p").eq(0).remove();
                    _this._picker.find('.curState').addClass("cur").addClass("curStateTD");
                    _this._picker.find('.curState').append(_this.phtml);
                }


            });
        this._picker.data("curMonth",this._picker.find(".datepicker-header h4 em").text()); //记录选中的日期。
       /* this._picker.click(function(e){
            e.preventDefault();
            e.stopPropagation();
        });*/

    },
    /**
     * 读取天数
     */
    readays:function(options){
        this._picker.find('.datapicker-daynight em').text(options.day);
        this._picker.find('.js_num ').text(options.day);
        if(options.day>1){
            this._picker.find('.choose-iconbluy').removeClass("choose-iconbluy");
        }
    },
    /**
     * 添加和删除住几晚
     */
    switchChoose:function(){
        this._picker.find('.dateline').delegate('.js_choose', 'click', function(e){
            e.stopPropagation();
            var num = parseInt($(this).siblings('.js_num').text(), 10),
                goodid = $(this).siblings('span').data('goodid'),
                obj = $(this);
                if($(this).hasClass('reduce')){
                    if(num==2){
                        $(".reduce").addClass("choose-iconbluy");
                    }else if(num < 2){
                        return $(this).closest('li').find('.js_del').click();
                    }
                    obj.siblings('.js_num').text(num - 1);
                    obj.closest(".dateline").find(".datapicker-daynight em").text(num - 1);
                }else{
                    obj.siblings('.js_num').text(num + 1);
                    obj.closest(".dateline").find(".datapicker-daynight em").text(num + 1);
                    $(".reduce").removeClass("choose-iconbluy");
                }
        });
    },
    /**
     * 选择日期事件
     */
    chooseDate:function(){
        var _this=this;
        this._picker.on('click touchstart touchend','.datepicker-td',function(e){
               var year = _this._picker.find('.datepicker-header h4 b').text(),
                   month = _this._picker.find('.datepicker-header h4 em').text(),
                   day = "";
                if(e.type == "touchstart"){
                    $(this).addClass('hover');
                }else if(e.type == "touchend"){
                    $(this).removeClass('hover');
                }else{
                    _this._picker.find('.datepicker-td').removeClass('cur');
                    _this._picker.find('.datepicker-td').find("p").remove();
                    $(this).addClass('cur');
                    _this._picker.find('.datepicker-td').removeClass("curState");
                    _this._picker.find('.datepicker-td').removeClass("curStateTD");
                    $(this).addClass('curState');
                    $(this).addClass('curStateTD');
                    $(this).append(_this.phtml);
                    day = parseInt($(this).text(), 10);
                    _this._date.setFullYear(year);
                    _this._date.setMonth(month-1,day);
                    //_this._date = new Date(year, month - 1, day);
                    _this._picker.data("curMonth", month);
                    _this._picker.data("curDay", day);
                    _this._picker.data("clicks", true);

                }
            });
    },
    /**
     * 完成按钮事件
     */
    sureEvent:function(options,callback){
        var _this=this;
        this._picker.find('.datepicker-sure').unbind().click(function(){
             if(!_this._picker.find('.datepicker-td').hasClass("cur")){
                alert("您还没有选择日期，请选择日期！");
                return false;
             }
            _this.hide();
            var leaveday=_this._picker.find('.js_num').text();
            var newdate="";

            if(_this._picker.data("clicks")){
                newdate=_this._date.getFullYear() + '/' + (_this._date.getMonth() + 1) + '/' + _this._date.getDate() + '/';
            }else{
                newdate=options.dateYear + '/' + options.dateMonth + '/' + options.dateDay + '/';
            }

            var arrs=[newdate,leaveday];  //传出参数
            _this.formatDate(options,arrs);
            /*返回回调函数*/
            if(callback){
                callback();
            }
        })
    },
    /**
     * 取消按钮事件
     */
    cancelEvent:function(){
        var _this=this;
        this._picker.find('.datepicker-cancel').unbind().click(function(){
            _this.hide();
        })
    },

    /**
     * 输出显示结果
     */
    formatDate:function(options,arr){
        var weekDays = ['日', '一', '二', '三', '四', '五', '六'];
        //this._target.text(this._date.getFullYear() + '年' + (this._date.getMonth() + 1) + '月' + this._date.getDate() + '日（周' + weekDays[this._date.getDay()] + '）');
        var year = options.dateYear,
            day = options.dateDay , month = options.dateMonth ,
            days = new Date(new Date(year, month, 1) - 24*60*60*1000).getDate(),
            leavday= day+ parseInt(arr[1]),
            leavemonth=month;

        //选择日期时，初始化日期参数为当前日期。
        if($(document).find(".datepicker-td").hasClass("curStateTD")){
            day=this._date.getDate();
            month= this._date.getMonth() + 1;
            leavday=day+ parseInt(arr[1]);
            leavemonth=month;
         }
        //切换月份时，初始化月份的天数。
        if($(document).find(".datepicker-arrow").hasClass("cur")){
            var _year=$(document).find(".datepicker-header h4 b").text();
            var _month=$(document).find(".datepicker-header h4 em").text();
            days = new Date(new Date(_year, _month, 1) - 24*60*60*1000).getDate();
        }

        if(leavday>days){
            leavemonth=leavemonth+1;
            leavday=arr[1]-(days-day);
        }

        if(leavemonth>12){
            leavemonth=leavemonth-12;
        }

        var ohtml= '<dl class="date-datelist">\
                <dt>\
                    <span class="dateIcon"></span> \
                     日期\
                </dt>\
                <dd>\
                    <span><em>'+(month)+'月'+day+'日</em>入住</span> \
                    <span><em>'+leavemonth+'月'+leavday+'日</em>离店</span> \
                </dd>\
            </dl>\
            <dl class="date-daylist">\
                <dt>\
                    <span class="dateIcon dateIcon-day"></span>\
                     天数\
                </dt>\
                <dd class="date-day"> \
                    <span>共<em>'+arr[1]+'</em>晚</span>\
                </dd>\
            </dl>\
            <span class="arrow-icon arrwo-icon-l2"></span>';
        this._target.html(ohtml);
        this._target.attr("dataTime",arr[0]); //传出参数
        this._target.attr("dataDay",arr[1]); //传出参数

    }
}
$.fn.extend({
    datepicker:function(options,callback){
        return this.each(function(){
            var self=this,ui=$(self).data("datepicker");
            if(!ui){
                var opts= $.extend({}, $.fn.datepicker.defaults,options);
                ui= new datePicker(opts,self,callback);
                $(self).data("datepicker",ui) ;
            }
            if(typeof options == "string" && typeof data[options] == 'function'){
                data[options].call(self); //执行插件的方法
            }
        })
    }
})
/*插件的默认参数*/
$.fn.datepicker.defaults={
    dateYear:new Date().getFullYear(),
    dateMonth:new Date().getMonth()+1,
    dateDay:new Date().getDate(),
    day:1
}
