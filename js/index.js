;(function($){
	//滚动
	var srcoll=new IScroll("#one");
	/*var srcoll=new IScroll("#two");
	var srcoll=new IScroll("#three");*/
	var srcoll=new IScroll("#four");
	var srcoll=new IScroll("#yi");
	var iscr=new IScroll("#er");
	var iscr=new IScroll("#san");
	//返回按钮
	$("#btn").on("click",function(){
		$(".box").css("left",0).siblings().css("left","100%");
	})
	//老人页面
	$(".shimian").on("click","li",function(e){
		e.preventDefault();
	 	var this_h=$(this).children().attr("href");
	 	var index=$(this).index();
	 	$(this_h).css("left",0).siblings().css("left","100%");
	 	$(".shimian p").css("left",index*33+"%");
	 })
	//首页导航
	$('.footer').on("click","li",function(e){
		e.preventDefault();
		var this_h=$(this).children().attr("href");
		var this_t=$(this).children().attr("tit");
		$(this_h).css("left",0).siblings().css("left","100%");
		$(this).addClass("fot").siblings().removeClass("fot");
		$(".header h1").html(this_t);
		if(this_h=="#one"){
			$(".header").hide();
		}else{
			$(".header").show();
		}
	})
	$(".bigbox").on("click","a",function(e){
		e.preventDefault();
		$("#config").hide();
		var pageH=$(this).attr("href");
		var pageT=$(this).attr("tit");
		$(pageH).css("left",0).siblings().css("left","100%");
		//孕妇
		if(pageH=="#yunfu"){
			$(".header").show();
			$(".header h1").html(pageT);
			$(".ps").show().siblings().hide();
			$(".ps").attr("href","#one");
		}
		//白领
		if(pageH=="#bailing"){
			$(".header").show();
			$(".header h1").html(pageT);
			$(".ps").show().siblings().hide();
			$(".ps").attr("href","#one");
		}
		//老人页面
		if(pageH=="#older"){
			$(".header").show();
			$(".header h1").html(pageT);
			$(".ps").show().siblings().hide();
			$(".ps").attr("href","#one");
		}
		//孕妇页面
		if(pageH=="#yun_zhou"){
			$(".header").show();
			$(".header h1").html(pageT);
			$(".ps").show().siblings().hide();
			$(".ps").attr("href","#yunfu");
		}
		//白领减肥
		if(pageH=="#bai_jian"){
			$(".header").show();
			$(".header h1").html(pageT);
			$(".ps").show().siblings().hide();
			$(".ps").attr("href","#bailing");
		}
		//失眠页面
		if(pageH=="#old"){
			$(".header").show();
			$(".header h1").html(pageT);
			$(".ps").show().siblings().hide();
			$(".ps").attr("href","#older");
		}
		if(pageH=="#one"){
			$(".header").hide();
			$(".uls").show().siblings().hide();
		}
		if(pageH=="#four"){
			$("#config").show();
		}
	})
})(Zepto)