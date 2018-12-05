// 2018/09/16

window.onload = function(){
	function $(id){return document.getElementById(id);}

	// 点击关闭按钮，关闭
	$("close").onclick = function(){
		$("ban").style.display = "none";
	}

	// 点击登录按钮，弹出登录框和背景框
	$("login").onclick = function(){
		$("bg").style.display = "block";
	}
	// 点击关闭，关闭登录框
	$("close_all").onclick = function(){
		$("bg").style.display = "none";
	}
}
