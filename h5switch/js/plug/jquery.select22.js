(function(jQuery){

	/**
	 * 引入jquery库
	 */
	var $ = jQuery;

	/**
	 * 
	 * 
	 */
	var Select = function(obj, options){
		// console.log(obj)
		this.init(obj, options);
		
	};

	/**
	 * 初始化
	 */
	Select.prototype.init = function(obj, options){

		var self = this;
<<<<<<< .mine


=======

>>>>>>> .r375
		obj.on('click', function(){
<<<<<<< .mine
            var s = '<div class="dialog-mask"></div>';
				s += 	'<div class="dialog">'+
							'<div class="box">';
				s += options.content;
				s += 	'<div class="btn-wrap">'+
							'<a href="javascript:void(0);" class="white h1 confirm">确定</a>'+
						'</div>'+
					'</div>';
			self.showSelect(obj, options,s);
=======
			if($(this).hasClass("dialog-select")){
				self.showSelect(obj, options, s, 'clicked');
			} else {
				var time = new Date().getTime();
				var s = 	'<div class="dialog dialog-new" id="dialog-select-'+time+'">'+
								'<div class="box">';
					s += options.content;
					s += 	'<div class="btn-wrap">'+
								'<a href="javascript:void(0);" class="white h1 confirm">确定</a>'+
							'</div>'+
						'</div>';

				//先判断遮罩层有没有
				if($("#dialog-mask").length == 0){
					$("body").append('<div class="dialog-mask" id="dialog-mask"></div>');
				}
				
				var mark = 'dialog-select-' + time;
				$(this).addClass("dialog-select").attr("mark",mark);
				self.showSelect(obj, options, s);
			}
>>>>>>> .r375
		});

	}

	/*
	*弹窗显示
	*/
<<<<<<< .mine
	Select.prototype.showSelect = function(obj, options,s){
=======
	Select.prototype.showSelect = function(obj, options, s, clicked){
>>>>>>> .r375

		var self = this;
<<<<<<< .mine
        $("body").append(s);
		var $dialog = $(".dialog");
=======
		
		var $dialog;
		if(clicked){
			var id = "#" + obj.attr("mark");
			$dialog = $(id);
		} else {
			$("body").append(s);
			$dialog = $(".dialog-new");
		}
		
		
>>>>>>> .r375
		var windowW = $(window).width();
		var windowH = $(window).height();
		$("#dialog-mask").css({'width': windowW, 'height': windowH, 'display': 'block'});
		var h = $dialog.height();
		$dialog.css('bottom', -h);
		$dialog.show().stop().animate({'bottom': 0}, 300, function(){}).removeClass("dialog-new");
		self.closeSelect(obj, options);

	}

	/*
	*弹窗关闭
	*/

	Select.prototype.closeSelect = function(obj, options){

		var self = this;
		var $dialog = $(".dialog");
		var $dialogMask = $(".dialog-mask");
		$dialog.find(".confirm").on('click', function(){
			
			$dialog.stop().animate({'bottom': -$dialog.height()}, 300, function(){
				$dialog.hide();
				$dialogMask.hide();
			});
		});

		self.callback(obj, options);

		if(options.maskClose){
			$dialogMask.on('click', function(){
				$dialog.stop().animate({'bottom': -$dialog.height()}, 300, function(){
					$dialog.hide();
					$dialogMask.hide();
				});
			});
		}

	}

	$.SelectClose = function(){
		$(".dialog").hide();
		$(".dialog-mask").hide();
	}

	/*
	*点击确定按钮执行的回调
	*/
	Select.prototype.callback = function(obj, options){
		if(options.callback){
			$(".confirm").on('click', function(){
				options.callback();
			});
		}
	}
	
	$.fn.Select = function(options){

		options = $.extend({},$.fn.Select.options, options);

		return this.each(function(){

			new Select($(this), options);

			// console.log(option);

		});
	};


	/*
	*默认参数
	*content:底部滑框的内容
	*callback：回调函数  用户点击确定按钮执行的方法
	*/
	$.fn.Select.options = {
		content: '<div class="box">111</div>',
		maskClose: true,
		callback: function(){

		}
	};

})($||jQuery);