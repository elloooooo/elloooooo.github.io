;
(function($) {
	//URI:http://caibaojian.com/scrollfix
	//author:caibaojian
	//website:http://caibaojian.com
	//descirption:scroll and fixed some div
	$.fn.scrollFix = function(options) {
		return this.each(function() {
			var defaults = {
				startTop: null, //滑到这个位置顶部时开始浮动，默认为空
				startBottom: null, //滑到这个位置末端开始浮动，默认为空
				distanceTop: 0, //固定在顶部的高度
				endPos: 0 //停靠在底部的位置，可以为jquery对象
			};
			var opts = $.extend({}, defaults, options),
				obj = $(this),
				offset = obj.offset(),
				offsetTop = offset.top, //对象距离顶部高度
				offsetLeft = offset.left, //对象距离左边宽度
				placeholder = jQuery('<div>'), //创建一个jquery对象
				documentHeight = $(document).height(), //文档高度
				optsTop = opts.distanceTop, //定义到顶部的高度
				outerHeight = obj.outerHeight(), //对象高度
				marginBottom = (obj.css("marginBottom")).slice(0,-2),
				outerHeight = parseInt(outerHeight) + parseInt(marginBottom),
				outerWidth = obj.outerWidth(), //对象外宽度
				//objWidth = obj.width(),
				objWidth = obj.outerWidth(),
				startTop = $(opts.startTop), //开始浮动固定对象
				startBottom = $(opts.startBottom),
				toBottom, //停止滚动位置距离底部的高度
				ScrollHeight, //对象滚动的高度
				endfix; //开始停止固定的位置	
			//如果没有找到节点，不进行处理
			if(obj.length<=0){
				return;
			}
			// 计算父节点的上边到顶部距离
			// 如果 body 有 top 属性, 消除这些位移
            var bodyToTop = parseInt(jQuery('body').css('top'), 10);
            if(!isNaN(bodyToTop)) {
                    optsTop += bodyToTop;
            }
			if ($.isNumeric(opts.endPos)) {
				toBottom = opts.endPos
			} else {
				toBottom = parseInt(documentHeight - $(opts.endPos).offset().top);
			}
			ScrollHeight = parseInt(documentHeight - toBottom), endfix = parseInt(ScrollHeight - outerHeight);
			//console.log(offsetTop);
			$(window).scroll(function() {
				var ScrollTop = $(window).scrollTop();
				// console.log(start);
				if (startTop[0]) {
					var startTopOffset = startTop.offset(),
						startTopPos = startTopOffset.top;
					offsetTop = startTopPos;
					//console.log(offsetTop);
				}
				if (startBottom[0]) {
					var startBottomOffset = startBottom.offset(),
						startBottomPos = startBottomOffset.top,
						startBottomHeight = startBottom.outerHeight();
					offsetTop = parseInt(startBottomPos + startBottomHeight);
				}
				//if ('undefined' != typeof(document.body.style.maxHeight)) {
				toTop = parseInt(offsetTop - optsTop);
				toTop = (toTop > 0) ? toTop : 0;
				var selfBottom = documentHeight - offsetTop - outerHeight;
				//if(opts.startPos)
				if ((ScrollTop > toTop) && (ScrollTop < endfix)) {
					obj.fadeIn().css({
						"position": "fixed",
						"_position": "absolute",
						"top": opts.distanceTop,
						"_top": opts.distanceTop,
						"width": objWidth
					});
					placeholder.css({
						'height': outerHeight,
						'_height': "0"
					}).insertBefore(obj)
				} else if ((ScrollTop >= endfix)&& (selfBottom<=endfix) ){
					obj.css({
						"position": "absolute",
						"top": endfix,
						"width": objWidth
					});
					placeholder.css({
						'height': outerHeight,
						'_height': "0"
					}).insertBefore(obj)
				} else {
					obj.css({
						"position": "static",
						"top": ""
					});
					placeholder.remove()
				}
				//}
			}).scroll()
		})
	}
})(jQuery);
