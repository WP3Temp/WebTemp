var myArray=new Array(0,0,0,0,0); // 문제 모두 선택 유무
var myResult=new Array(0,0,0,0);//선택지
window.onload=function(){
	document.getElementById("demo-buttons").style.display="none"; //버튼 처음에 숨기기
}
function c(){//미체크된 문제 방지용
	var flag=1;
	for(var i=0;i<5;i++){
		if(myArray[i]==0){//체크안된 문제가 있음
			flag=0;
		}
	}
	if(flag){//모든 문제가 다 체크되어있음
		document.getElementById("demo-buttons").style.display='';//결과버튼 보이기
	}
}
function func1(){//첫번째 문제 
	var a=document.getElementsByName("q1");
	var len=a.length;
	for(var i=0;i<len;i++){
		if(a[i].checked){//버튼이 체크되어있음
			myArray[0]=1;//첫번째 문제란에 확인
		}
	}	
	c();//미체크 문제 확인
}
function func2(){//두번째 문제 
	var a=document.getElementsByName("q2");
	var len=a.length;
	for(var i=0;i<len;i++){
		if(a[i].checked){//버튼이 체크되어있음
			myArray[1]=1;//두번째 문제란에 확인
		}
	}
	c();//미체크 문제 확인
}
function func3(){//세번째 문제
	var a=document.getElementsByName("q3");
	var len=a.length;
	for(var i=0;i<len;i++){
		if(a[i].checked){//버튼이 체크되어있음
			myArray[2]=1;//세번째 문제란에 확인
		}
	}
	c();//미체크 문제 확인
}
function func4(){//네번째 문제 
	var a=document.getElementsByName("q4");
	var len=a.length;
	for(var i=0;i<len;i++){
		if(a[i].checked){//버튼이 체크되어있음
			myArray[3]=1;//네번째 문제란에 확인
		}
	}
	c();//미체크 문제 확인
}
function func5(){//다섯번째 문제 
	var a=document.getElementsByName("q5");
	var len=a.length;
	for(var i=0;i<len;i++){
		if(a[i].checked){//버튼이 체크되어있음
			myArray[4]=1;//다섯번째 문제란에 확인
		}
	}
	c();//미체크 문제 확인
}
function add_up(){//선지 개수 연산
for(var i=1;i<6;i++){//모든 문제
	var a=document.getElementsByName("q"+i);//문제의 class호출
	var len=a.length;
	for(var j=0;j<len;j++){
		if(a[j].checked){//j번째 체크되어있음
			myResult[j]+=1;//j번째에 1더하기
	}
	}
}
}
function Myresult(){//결과페이지 버튼클릭시 
	add_up();//선지 더하기 호출
	let index = myResult.indexOf(Math.max(...myResult));//배열의 최대값 인덱스 리턴
	if (index == 2) {//인덱스값이 2
		location.href='spring.html';//봄
	}
	else if (index == 1) {//인덱스 값이 1
		location.href='summer.html'; //여름
	}
	else if (index == 0) {//인덱스 값이 0
		location.href='autumn.html';//가을
	}
	else {//인덱스 값이 3
		location.href='winter.html';//겨울
	}
}
/*라디오 버튼 애니메이션 효과*/
if( document.createElement('svg').getAttributeNS ) {

	var radiobxsFill = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-fill input[type="radio"]' ) ),
		radiobxsCircle = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-circle input[type="radio"]' ) ),
    radiobxsSwirl = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-swirl input[type="radio"]' ) ),
		pathDefs = {//경로 지정
			fill : ['M15.833,24.334c2.179-0.443,4.766-3.995,6.545-5.359 c1.76-1.35,4.144-3.732,6.256-4.339c-3.983,3.844-6.504,9.556-10.047,13.827c-2.325,2.802-5.387,6.153-6.068,9.866 c2.081-0.474,4.484-2.502,6.425-3.488c5.708-2.897,11.316-6.804,16.608-10.418c4.812-3.287,11.13-7.53,13.935-12.905 c-0.759,3.059-3.364,6.421-4.943,9.203c-2.728,4.806-6.064,8.417-9.781,12.446c-6.895,7.477-15.107,14.109-20.779,22.608 c3.515-0.784,7.103-2.996,10.263-4.628c6.455-3.335,12.235-8.381,17.684-13.15c5.495-4.81,10.848-9.68,15.866-14.988 c1.905-2.016,4.178-4.42,5.556-6.838c0.051,1.256-0.604,2.542-1.03,3.672c-1.424,3.767-3.011,7.432-4.723,11.076 c-2.772,5.904-6.312,11.342-9.921,16.763c-3.167,4.757-7.082,8.94-10.854,13.205c-2.456,2.777-4.876,5.977-7.627,8.448 c9.341-7.52,18.965-14.629,27.924-22.656c4.995-4.474,9.557-9.075,13.586-14.446c1.443-1.924,2.427-4.939,3.74-6.56 c-0.446,3.322-2.183,6.878-3.312,10.032c-2.261,6.309-5.352,12.53-8.418,18.482c-3.46,6.719-8.134,12.698-11.954,19.203 c-0.725,1.234-1.833,2.451-2.265,3.77c2.347-0.48,4.812-3.199,7.028-4.286c4.144-2.033,7.787-4.938,11.184-8.072 c3.142-2.9,5.344-6.758,7.925-10.141c1.483-1.944,3.306-4.056,4.341-6.283c0.041,1.102-0.507,2.345-0.876,3.388 c-1.456,4.114-3.369,8.184-5.059,12.212c-1.503,3.583-3.421,7.001-5.277,10.411c-0.967,1.775-2.471,3.528-3.287,5.298 c2.49-1.163,5.229-3.906,7.212-5.828c2.094-2.028,5.027-4.716,6.33-7.335c-0.256,1.47-2.07,3.577-3.02,4.809'],
		},
		animDefs = {//애니메이션 효과 시간
			fill : { speed : .8, easing : 'ease-in-out' },
	}
	//svg 호출 
	function createSVGEl( def ) {
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if( def ) {
			svg.setAttributeNS( null, 'viewBox', def.viewBox );
			svg.setAttributeNS( null, 'preserveAspectRatio', def.preserveAspectRatio );
		}
		else {
			svg.setAttributeNS( null, 'viewBox', '0 0 100 100' );
		}
		svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
		return svg;
	}
//radio버튼 체크면 draw, 체크되어있지 않으면 reset
	function controlCheckbox( el, type, svgDef ) {
		var svg = createSVGEl( svgDef );
		el.parentNode.appendChild( svg );
		
		el.addEventListener( 'change', function() {
			if( el.checked ) {
				draw( el, type );//그리기 시작
			}
			else {
				reset( el );//지우기
			}
		} );
	}
//radio버튼 draw 및 reset
	function controlRadiobox( el, type ) {
		var svg = createSVGEl();
		el.parentNode.appendChild( svg );
		el.addEventListener( 'change', function() {
			resetRadio( el );
			draw( el, type );
		} );
	}

	radiobxsFill.forEach( function( el, i ) { controlRadiobox( el, 'fill' ); } );
//radio버튼 애니메이션 효과
	function draw( el, type ) {
		var paths = [], pathDef, 
			animDef,
			svg = el.parentNode.querySelector( 'svg' );
//fill의 경로
		switch( type ) {
			case 'fill': pathDef = pathDefs.fill; animDef = animDefs.fill; break;
		};
		
		paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );

		
		
		for( var i = 0, len = paths.length; i < len; ++i ) {
			var path = paths[i];
			svg.appendChild( path );

			path.setAttributeNS( null, 'd', pathDef[i] );

			var length = path.getTotalLength();
			// Clear any previous transition
			//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
			// Set up the starting positions
			path.style.strokeDasharray = length + ' ' + length;
			if( i === 0 ) {
				path.style.strokeDashoffset = Math.floor( length ) - 1;
			}
			else path.style.strokeDashoffset = length;
			// Trigger a layout so styles are calculated & the browser
			// picks up the starting position before animating
			path.getBoundingClientRect();
			// Define our transition
			path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
			// Go!
			path.style.strokeDashoffset = '0';
		}
	}
//reset elements
	function reset( el ) {
		Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
	}
//reset radio button
	function resetRadio( el ) {
		Array.prototype.slice.call( document.querySelectorAll( 'input[type="radio"][name="' + el.getAttribute( 'name' ) + '"]' ) ).forEach( function( el ) { 
			var path = el.parentNode.querySelector( 'svg > path' );
			if( path ) {
				path.parentNode.removeChild( path );
			}
		} );
	}

}


	