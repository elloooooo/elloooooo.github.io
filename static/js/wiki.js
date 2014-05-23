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
		//增加目录列表的样式
		$('.toc').addClass("well page-nav");
		//外部链接在新tab中打开	
		$("a[href^='http://']").each(function(){
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
