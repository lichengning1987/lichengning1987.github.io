require.config({
	baseUrl: 'js',
	paths: {
		jquery: 			'libs/jquery-1.9.1.min',			//基于jQuery开发毫无疑问
		/*router: 			'router',*/
		/*skip: 				'plug/jquery.skippr',*/				//头部焦点图
		imgFix: 			'plug/jquery.stellar',				//视差滚动插件
		nav: 				'plug/jquery.smint',				//视差滚动插件
		navf: 				'plug/jquery.smintf',				//视差滚动插件
		mousewheel: 		'plug/jquery.mousewheel',			//视差滚动插件
		respond: 			'plug/respond.min',			//视差滚动插件
        sliderbar:         'plug/jquery.sliderbar',   //自定义滚动条图片切换
        easing: 'plug/jquery.easing.min'
		/*,
		text: 'libs/text',
		tpl: '../tpl',
		popup: '../popup'*/
	},
	shim: {
		skip: {
			exports: 'skip'
		},
		imgFix: {
			exports: 'imgFix'
		},
		nav: {
			exports: 'nav'
		},
		mousewheel: {
			exports: 'mousewheel'
		},
		respond: {
			exports: 'respond'
		},
        sliderbar:{
            exports: 'sliderbar'
        },
        easing:{
            exports: 'easing'
        }
	},
	urlArgs: "v=" +  (new Date()).getTime()
});

require(['jquery'], function (jquery) {
	
	
	/**
	 * Load (or reload) controller from js code (another controller) - call it's init function
	 * @param  controllerName
	 * @param  query
	 */
	var hash = {
		index       : 'index',
		product		: 'product',
		productD		: 'productD',
        other           : 'other',
        harmon          : 'harmon'
	};


	function init(){
		if ($("#router").val() in hash) {
			require(['models/' + hash[$("#router").val()]], function (controller) {
				// console.log(controller);
				controller.begin.init();
			});
		}
	}

	init();

	return {
		init: init
	}
});
