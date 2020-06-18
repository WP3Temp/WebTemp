jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = transitionLayer.data('frame'), //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){	
		event.preventDefault();
		var modalId = $(event.target).attr('href');
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 800;
		setTimeout(function(){
			modalWindow.filter(modalId).addClass('visible');
			transitionLayer.removeClass('opening');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
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