$(function(){
	 $("#menu").metisMenu();
	 $("#nav-menu").slimScroll({height:"auto",color:"#656565",railOpacity:0.9,wheelStep:10,alwaysVisible: true});
	 $("#myTab .fa").bind("click",function(event){
		 
		 event.stopPropagation(); //  阻止事件冒泡
	 });
	 $("#myTab .fa").bind("mouseover",function(event){
		 this.style.color="red";
	 });
	 $("#myTab .fa").bind("mouseout",function(event){
		 this.style.color="";
	 });
});

function displaynavbar(obj){
	if($(obj).hasClass("open")){
		$(obj).removeClass("open");
		$("body").removeClass("big-page");
	}else{
		$(obj).addClass("open");
		$("body").addClass("big-page");
	}
}
