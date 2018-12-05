// 2018/10/10
function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true
		for(var attr in json){
			// 当attr为opacity时
			var current = 0;
			var target = 0;
			if(attr == "opacity"){
				if(attr in obj.style){
					current = parseInt(getStyle(obj,attr)*100);
				}
				else{
					strFilter = getStyle(obj,"filter");
					var chareq = strFilter.lastIndexOf("=")+1
					current = parseInt(strFilter.substr(chareq));
				}
				target = json[attr]*100;	
			}
			else{
				current = parseInt(getStyle(obj,attr));
				target = json[attr];
			}
			var step = ( target - current)/10;
			step = step>0 ? Math.ceil(step) : Math.floor(step);
			if(attr == "opacity"){
				if(attr in obj.style){
					obj.style[attr] = (current + step)/100; //current == 100  step == -7
				}
				else{
					obj.style["filter"] = "alpha(opacity = "+ (current + step)+")";
				}
			}
			else if(attr == "zIndex"){
				obj.style[attr] = target;
			}
			else{
				obj.style[attr] = current + step + "px";
			}
			if(current != target){
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
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