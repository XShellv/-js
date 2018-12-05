// 2018/10/06
function client(){
		if(window.innnerwidth !=null){
			return{
				width:window.innnerwidth,
				height:window.innerHeight
			}
		}
		else if(document.compatMode ==="CSS1Compat"){
			return{
				width:document.documentElement.clientWidth,
				height:document.documentElement.clientHeight
			}
		}
		return{
			width:document.body.clientWidth,
			height:document.body.clientHeight
		}
	}