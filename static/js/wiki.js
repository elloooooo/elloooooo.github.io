$(function(){
	//代码高亮
	SyntaxHighlighter.highlight();
	//表格样式
	$("table").addClass("table table-bordered table-striped table-hover");
	//导航栏选中样式
	//$('ul.nav>li').each(function(){
	//$(this).click(function(){
	//$(this).siblings().removeClass("active");
	//$(this).addClass("active");
	//});
	//});
	
	//将所有表格用div包裹起来
	//$("table").wrap("<div class='table-wrap'></div>");


	//增加目录列表的样式
	if($('.toc').size()!=0){
		//$('.toc').addClass("well");
		$toc = $('.toc').remove();
		$('.content').children().wrapAll("<div class='content-detail'></div>");
		$("<div class='side-bar'>").prependTo('.content');
		console.log($('.container').height());
		$('.side-bar').height($('.content').height()-10);
		$toc.prependTo('.side-bar'); 
		//利用scrollFix插件实现菜单栏固定在页面左侧
		$('.toc').pin({containerSelector:".side-bar",padding:{top:10,bottom:10},minWidth:940});
		
	}
	//外部链接在新tab中打开	
	$("a[href^='http://']").each(function(){
		this.target = "_blank";
	});
	$("a[href^='https://']").each(function(){
		this.target = "_blank";
	});
	//改变待办图标
	$('.done0').each(function(){
		$(this).removeClass('done0');
		$(this).prepend("<i class='icon-check-empty'></i>");
	});
	//改变已办图标
	$('.done4').each(function(){
		$(this).removeClass('done4');
		$(this).prepend("<i class='icon-check'></i>");
	});
	
	//将首页自我介绍的图片居中，且留出足够的margin-bottom
	//$("img[alt=ME]").wrap("<a class='intro' data-title='Ollie' data-description='This is a test!'></a>");
	$("img[alt=ME]").wrap("<a></a>");
	$("img[alt=ME]").closest("a").addClass("intro")
		.attr("data-title","Ollie Liu")
		.attr("data-description","这里有我的点点滴滴!");
	$('img[alt=ME]').closest("p").attr("align","center").css("marginBottom",90);
	//令图片居中显示
	$('img').closest("p").attr("align","center");
	//自动检body大小，如果body小于屏幕高度，则将body高度设置为屏幕高度
	//减去20是因为body在上下，分别有10px的margin，这样不至于出现滚动条
	if($('body').height()<$(window).height()){
		$('body').height($(window).height()-20);
	}
});
