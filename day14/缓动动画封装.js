// 2018/10/09
function animate(obj,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var step = (target - obj.offsetLeft)/10;
		step = step>0 ? Math.ceil(step) : Math.floor(step);
		obj.style.left = obj.offsetLeft + step + "px";
	},30)
}
