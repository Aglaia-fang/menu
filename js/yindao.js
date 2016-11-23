;(function($){
	var i=0;
	$("#ols").on({
		"swipeLeft":function(){
			i++;
			if(i>$(this).find("li").length-1)i=$(this).find("li").length-1;
			change();
			liBg();
			addChange();
		},
		"swipeRight":function(){
			i--;
			if(i<0)i=0;
			change();
			liBg();
			addChange();
		}
	});

	function change(){
		$("#ols").css({
			"transform":"translateX("+-i*100+"%)",
			"transition":"all 1s"
		})

	}
	function liBg(){
		$("ul").find("li").eq(i).addClass("bg").siblings().removeClass("bg");
		
	}
	function addChange() {
		if (i == 0) {
			$(".leadOne").find("dt").addClass("animated rotateInDownLeft").siblings().addClass("animated rotateInDownRight").parent().siblings().addClass("animated rotateIn");
			$("#btn").css({
				"background": "#72B937"
			});
		} else {
			$(".leadOne").find("dt").removeClass("animated rotateInDownLeft").siblings().removeClass("animated rotateInDownRight").parent().siblings().removeClass("animated rotateIn");
		}
		if (i == 1) {
			$(".leadTwo").find("dt").addClass("animated bounceInLeft").siblings().addClass("animated bounceInRight").parent().siblings().addClass("animated bounceInUp");
			$("#btn").css({
				"background": "#FF9200"
			});
		} else {
			$(".leadTwo").find("dt").removeClass("animated bounceInLeft").siblings().removeClass("animated bounceInRight").parent().siblings().removeClass("animated bounceInUp");
		}
		if (i == 2) {
			$(".leadThree").find("dt").addClass("animated zoomInLeft").siblings().addClass("animated zoomInRight").parent().siblings().addClass("animated zoomIn");
			$("#btn").css({
				"background": "#E84144"
			});
		} else {
			$(".leadThree").find("dt").removeClass("animated zoomInLeft").siblings().removeClass("animated zoomInRight").parent().siblings().removeClass("animated zoomIn");
		}
	}
})(Zepto)