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
		$('.toc').addClass("well");
		$toc = $('.toc').remove();
		$('.content').children().wrapAll("<div class='content-detail'></div>");
		$("<div class='side-bar'>").prependTo('.content');
		$toc.prependTo('.side-bar'); 
		//利用scrollFix插件实现菜单栏固定在页面左侧
		$('.toc').scrollFix({distanceTop:20});
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

});
