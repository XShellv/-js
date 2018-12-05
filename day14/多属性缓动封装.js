// 2018/10/10
function animate(obj,json,fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
		//每次计时器执行完程序便会判断每个属性对应的current是否等于target，只要有一个不符合就不该停止计时器
		var flag = true;
			for(var attr in json){
				var current = 0;
				if(attr == "opacity"){
					current = parseInt(getStyle(obj,attr)*100); //当前最大100
				}
				else{
					current = parseInt(getStyle(obj,attr));
				}
				var step = (json[attr] - current)/10; 
				step = step>0 ? Math.ceil(step) : Math.floor(step);

				if(attr == "opacity"){ //这个判断是大前提，用户是否输入了opacity
					if(attr in obj.style){ //如果浏览器支持
						obj.style[attr] =  (current + step)/100;
					}//判断浏览器是否支持opacity
					else{
						obj.style.filter = "alpha(opacity = "+(current + step)+")";
					}
				}
				else if(attr == "zIndex"){ //如果用户输入z-index,则让它直接变为输入值，不能进行步长运算
					obj.style[attr] = json[attr];
				}
				else{
					obj.style[attr] =  current + step + "px";
				}
				// 我们这样考虑，每次带着flag = true进去，但是里面里面只要有一个不达标就给它false。到最后
				// 等所有的都遍历完后我们看是否都达标。然后再掐断计时器。
				if(current !=json[attr]){
					flag = false;
				}
			}
			if(flag){
				clearInterval(obj.timer);
				// 回调函数发生在计时器事件停止后。如果存在回调函数则执行回调
				if(fn){
					fn();
				}
			}
		},10)
}
// 获得属性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return window.getComputedStyle(obj,null)[attr];
	}
}