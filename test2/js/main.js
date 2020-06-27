jQuery(document).ready(function($){
	// 필요한 CSS 클래스들을 가져와 변수에 저장
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, // 모달창 열릴때 나타는 효과 이미지(png)의 프레임 비율
		frames = transitionLayer.data('frame'), // png 프레임의 개수
		resize = false;		// 사이즈 조정 여부 나타내는 bool변수


	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) { 	// resize가 false값일 때
			resize = true;  // true로 변경
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	// 모달창 열기
	modalTrigger.on('click', function(event){	// click 모션이 들어오면
		event.preventDefault();
		var modalId = $(event.target).attr('href');
		transitionLayer.addClass('visible opening'); // 클래스 추가
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 800; 
		setTimeout(function(){
			modalWindow.filter(modalId).addClass('visible'); // 클래스 추가
			transitionLayer.removeClass('opening');			// 클래스 삭제
		}, delay);
	});

	// 모달창 닫기
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing'); // 클래스 추가
		modalWindow.removeClass('visible');  // 클래스 삭제
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');  // 클래스 삭제
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});
	// 모달창 팝업 애니메이션효과 조절 함수
	function setLayerDimensions() {
		var windowWidth = $(window).width(), // 각 변수에 윈도우의 너비와 높이 저장
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		// 너비와 높이 비율에 따른 작업 수행
		if( windowWidth/windowHeight > frameProportion ) {  // 너비/높이가 위에서 설정한 비율보다 클때
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {											// 너비/높이가 위에서 설정한 비율 이하일때
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;			
	}
});

// 텍스트 타이핑 효과
$(window).ready(function() {
	var typingBool = false;
	var typingIdx = 0;
	var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다
	typingTxt = typingTxt.split(""); // 한글자씩 자른다.
	if (typingBool == false) {
	  // 타이핑이 진행되지 않았다면
	  typingBool = true;
  
	  var tyInt = setInterval(typing, 100); // 반복동작
	}
  
	function typing() {
	  if (typingIdx < typingTxt.length) {
		// 타이핑될 텍스트 길이만큼 반복
		$(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
		typingIdx++;
	  } else {
		clearInterval(tyInt); //끝나면 반복종료
	  }
	}
  });