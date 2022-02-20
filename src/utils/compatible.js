export default function rePosition() {

	rePositionRem()
	// rePositionPx()
	// console.log(testMobile())
	// if (testMobile() === 'pc') {
	// 	setRem(750,1920)
	// } else {
	// 	setRem(750,2000)
	// }
	window.onresize = function () {
	rePositionRem();
}
};

function setRem(designWidth, maxWidth) {
	console.log(designWidth, maxWidth)
	var htmlElm = document.documentElement;
	var pageWidth = htmlElm.getBoundingClientRect().width;
	pageWidth = Math.min(pageWidth ,maxWidth || designWidth);
	var rempx = 100*pageWidth/designWidth;
	htmlElm.style.fontSize = rempx+'px';
	document.body.style.fontSize = '0.16rem'; //16px
}


// setRem(750,1920) //pc
// setRem(750,680) //mobile

function IsPC(){
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = true;  
	for (var v = 0; v < Agents.length; v++) {  
			if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	}  
	return flag;
}

function testMobile() {
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		//alert(navigator.userAgent);  
		return 'iphone'
	 } else if (/(Android)/i.test(navigator.userAgent)) {
		//alert(navigator.userAgent); 
	 //  window.location.href ="Android.html";
		 return 'android'
	 } else {
	 //  window.location.href ="pc.html";
		 return 'pc'
	 };
}


export const rePositionRem = () => {
	var width = document.documentElement.clientWidth || document.body.clientWidth;
	var ratio = width / 800 * 1.2;
	if (width <= 1000) {
		document.getElementsByTagName('html')[0].style.fontSize = 100 * ratio + "px";
	} else {
		document.getElementsByTagName('html')[0].style.fontSize = "100px";
	}
}

// rePositionRem();
// window.onresize = function () {
// 	rePositionRem();
// }

export const rePositionPx = () => {
	var jsVer = 15;
	var phoneWidth = parseInt(window.screen.width);
	var phoneScale = phoneWidth / 640 * 1.1;
	var ua = navigator.userAgent;
	if (/Android (\d+\.\d+)/.test(ua)) {
		var version = parseFloat(RegExp.$1);
		// andriod 2.3
		if (version > 2.3) {
			document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
			// andriod 2.3以上
		} else {
			document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
		}
		// 其他系统
	} else {
		document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
	}
}