
window.onload=function() // window 준비됬을 때
{
	var blendAmount = 70;
var delay = -10;
var windowWidth = window.innerWidth; 
var bg = document.getElementById("bg"); //id bg 불러오기

document.onmousemove = function(e){
	mouseX = Math.round(e.pageX / windowWidth * 100 - delay); //마우스의 위치 계산 
	
	col1 = mouseX - blendAmount; // 색상 percentage 계산
	col2 = mouseX + blendAmount;//색상 percentage 계산
	
	bg.style.background = "linear-gradient(to right, #ffc3a0 "+ col1 +"%, #ffafbd "+ col2 +"%)";//배경색상에 반영
	
}
}


