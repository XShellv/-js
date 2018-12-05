// 2018/10/06
function scroll(){
	if(window.pageYOffset != null){ //  ie9+ 和其他浏览器
		return{
			"top":window.pageYOffset,
			"left":window.pageXOffset
		}
	}
	else if(window.compatMode == "CSS1Compat"){
		// 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
		return{
			"top":document.documentElement.scrollTop,
			"left":document.documentElement.scrollLeft
		}
	}
	return{//  剩下的肯定是怪异模式的
		"top":document.body.scrollTop,
		"left":document.body.scrollLeft
	}
}