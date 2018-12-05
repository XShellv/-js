// 2018/10/09
function animate(obj,target){
		clearInterval(obj.timer);
		var speed = obj.offsetLeft < target ? 5 : -5;
		obj.timer = setInterval(function(){
			var offsetLeft = obj.offsetLeft;
			var result = obj.offsetLeft - target;
			if(Math.abs(result) <= 5){
				clearInterval(obj.timer);
				obj.style.left = target + "px";
			}
			obj.style.left =offsetLeft + speed + "px";
		},5)
	}