define([''], function () {
	$.ajax({
        type:"post",  
        url: "js/models/humanResourse/recruitment.json?belongs=1",     
        success: function(data){console.log(data.model.accountList.length);   
        	var info=data.model.accountList;
        	for(var i=0;i<6;i++){//先来一个info.length
        		var lis='<div class="submenu-content" style="display:none">\
							<dl class="work-place"><dd>工作地：'+info[i].location+'</dd></dl>\
							<dl class="job-description"><dd>职位描述:</dd>';
							for(var j=0;j<info[i].description.work.length;j++){
								lis+='<dt>'+info[i].description.work[j]+'</dt>';								
							}
						lis+='</dl>\
							<dl class="job-needs"><dd>职位要求:</dd>';
							for(var k=0;k<info[i].description.needs.length;k++){
								lis+='<dt>'+info[i].description.needs[k]+'</dt>';								
							}								
							lis+='</dl>\
								</div>';        		
	        	$(".default-recruitment .submenu").append(lis);
	        } 
	        $(".default-recruitment").find(".submenu-content").eq(0).show();
	        /*两级联动tab切换*/
			$(".oneTab li").on('click',function(j){		
				var i=$(this).index();
				$.ajax({
			        type:"post",  
			        url: "js/models/humanResourse/recruitment.json?belongs="+i,     
			        success: function(data){  
			        	var info=data.model.accountList;
			        	for(var n=i;n<i+6;n++){//先来一个info.length
			        		var lis='<div class="submenu-content" style="display:none">\
										<dl class="work-place"><dd>工作地：'+info[n].location+'</dd></dl>\
										<dl class="job-description"><dd>职位描述:</dd>';
										for(var j=0;j<info[n].description.work.length;j++){
											lis+='<dt>'+info[n].description.work[j]+'</dt>';								
										}
									lis+='</dl>\
										<dl class="job-needs"><dd>职位要求:</dd>';
										for(var k=0;k<info[n].description.needs.length;k++){
											lis+='<dt>'+info[n].description.needs[k]+'</dt>';								
										}								
										lis+='</dl>\
											</div>';        		
				        	$(".recruitment-submenu").eq(i).find(".submenu").append(lis);
				        	$(".recruitment-submenu").eq(i).find(".submenu-content").eq(0).show();
				        }    		
			        }
			    });
				var that=$(this);
				var oldClass=that.find("label").attr("class");
				if(oldClass.indexOf("clicked-")<0){
					var newClass="clicked-"+oldClass;
					that.find("label").addClass(newClass).removeClass(oldClass);
					that.find("span").addClass("colorRed");
					var barPosition=(that.width())*i+10;
					$(".bottom-bar").animate({
						left:barPosition
					});
					that.siblings().each(function(){
						var sibOld=$(this).find("label").attr("class");
						if(sibOld){
							if(sibOld.indexOf("clicked-")>=0){
								var sibNew=sibOld.substring(8);
								$(this).find("label").addClass(sibNew).removeClass(sibOld);
								$(this).find("span").removeClass("colorRed");
							}
						}
											
					});
				$(".recruitment-submenu").eq(i).siblings().fadeOut(10);
				$(".recruitment-submenu").eq(i).fadeIn(1000);
				}
			});
			$(".submenu ul li").click(function(n){
				that=$(this);
				var index=that.index();
				that.siblings().removeClass("recruitment-focus");
				that.addClass("recruitment-focus");
				that.parent().siblings(".submenu-content").slideUp();
				that.parent().siblings(".submenu-content").eq(index).slideDown();
			});
			require(["scrollBar"]);
        }
    });	
});