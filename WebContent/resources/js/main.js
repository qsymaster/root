$(function(){
	 $("#side-menu").metisMenu({ doubleTapToGo: true});
	 $("#menu").metisMenu();
	 $("#nav-menu").slimScroll({height:"auto",color:"#656565",railOpacity:0.9,wheelStep:10,alwaysVisible: true});
	 $(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.4,wheelStep:10});
	 $(".navbar-minimalize").click(function(){$("body").toggleClass("mini-navbar"),SmoothlyMenu()});
});
function SmoothlyMenu(){
	$("body").hasClass("mini-navbar")?$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(500)},300)):$("#side-menu").removeAttr("style"):($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(500)},100));
}

function displaynavbar(obj){
	if($(obj).hasClass("open")){
		$(obj).removeClass("open");
		$("body").removeClass("big-page");
	}else{
		$(obj).addClass("open");
		$("body").addClass("big-page");
					
	}
}
