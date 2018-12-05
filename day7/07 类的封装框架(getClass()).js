// 类的封装框架 2018/09/18
function getClass(className){
	// 如果浏览器支持doument.getElementByClassName
	if(document.getElementsByClassName){
		return document.getElementsByClassName(className);//返回数组
	}
	// 如果浏览器不支持
	else{
		var targetArr = [];
		var objs = document.getElementsByTagName('*');
		
		// 将每个objs的className进行join()分割放入数组，然后遍历查找。
		for(var i = 0;i<objs.length;i++){
			var classArr = objs[i].className.split(" ");
			for(var k= 0;k<classArr.length;k++){
				if(classArr[k] == className){
					targetArr.push(objs[i]);
				}
			}
		}
		return targetArr;
	}
}	
