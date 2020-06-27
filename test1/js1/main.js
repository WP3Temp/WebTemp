

jQuery(document).ready(function($){
	//DOM elements
	var projectsContainer = $('.cd-projects-container'),
			projectsPreviewWrapper = projectsContainer.find('.cd-projects-previews'),
			projectPreviews = projectsPreviewWrapper.children('li'),
			projects = projectsContainer.find('.cd-projects'),
			navigationTrigger = $('.cd-nav-trigger'),
			navigation = $('.cd-primary-nav'),
			//만약 브라우저가 css transition을 지원하지 않는다면
			transitionsNotSupported = ( $('.no-csstransitions').length > 0);

	var animating = false,
		//결과 div들의 slide up/slide down 랜덤으로 하기 위한 변수
		numRandoms = projects.find('li').length,
		uniqueRandoms = [];
	//클릭하면 div 열기
	projectsPreviewWrapper.on('click', 'a', function(event){
		event.preventDefault();
		if( animating == false ) {
			animating = true;
			navigationTrigger.add(projectsContainer).addClass('project-open');
			openProject($(this).parent('li'));
		}
	});
	// 메뉴, X, 화살표와 같은 아이콘 클릭하면
	navigationTrigger.on('click', function(event){
		event.preventDefault();

		if( animating == false ) {
			animating = true;
			if( navigationTrigger.hasClass('project-open') ) {
				//열린 div 닫기
				navigationTrigger.add(projectsContainer).removeClass('project-open');
				closeProject();
			} else if( navigationTrigger.hasClass('nav-visible') ) {
				//열린 메뉴 닫기
				navigationTrigger.removeClass('nav-visible');
				navigation.removeClass('nav-clickable nav-visible');
				if(transitionsNotSupported) projectPreviews.removeClass('slide-out');
				else slideToggleProjects(projectsPreviewWrapper.children('li'), -1, 0, false);
			} else {
				//메뉴 열기
				navigationTrigger.addClass('nav-visible');
				navigation.addClass('nav-visible');
				if(transitionsNotSupported) projectPreviews.addClass('slide-out');
				else slideToggleProjects(projectsPreviewWrapper.children('li'), -1, 0, true);
			}
		}

		if(transitionsNotSupported) animating = false;
	});
	//scroll 버튼 눌러서 이미지 div에서 결과 div로 이동
	projectsContainer.on('click', '.scroll', function(){
		projectsContainer.animate({'scrollTop':$(window).height()}, 500);
	});
	//로드 되었는지 확인하고 미리보기 div 출력
	projectPreviews.children('a').bgLoaded({
	  	afterLoaded : function(){
	   		showPreview(projectPreviews.eq(0));
	  	}
	});
	// div 출력
	function showPreview(projectPreview) {
		if(projectPreview.length > 0 ) {
			setTimeout(function(){
				projectPreview.addClass('bg-loaded');
				showPreview(projectPreview.next());
			}, 150);
		}
	}
	// div 열기
	function openProject(projectPreview) {
		var projectIndex = projectPreview.index();
		projects.children('li').eq(projectIndex).add(projectPreview).addClass('selected');

		if( transitionsNotSupported ) {
			projectPreviews.addClass('slide-out').removeClass('selected');
			projects.children('li').eq(projectIndex).addClass('content-visible');
			animating = false;
		} else {
			slideToggleProjects(projectPreviews, projectIndex, 0, true);
		}
	}
	// div 닫기
	function closeProject() {
		projects.find('.selected').removeClass('selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$(this).removeClass('content-visible').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			slideToggleProjects(projectsPreviewWrapper.children('li'), -1, 0, false);
		});

		if( transitionsNotSupported ) {
			projectPreviews.removeClass('slide-out');
			projects.find('.content-visible').removeClass('content-visible');
			animating = false;
		}
	}
	// 슬라이딩 효과
	function slideToggleProjects(projectsPreviewWrapper, projectIndex, index, bool) {
		if(index == 0 ) createArrayRandom();
		if( projectIndex != -1 && index == 0 ) index = 1;

		var randomProjectIndex = makeUniqueRandom();
		if( randomProjectIndex == projectIndex ) randomProjectIndex = makeUniqueRandom();

		if( index < numRandoms - 1 ) {
			projectsPreviewWrapper.eq(randomProjectIndex).toggleClass('slide-out', bool);
			setTimeout( function(){
				//미리보기 div slide 슬라이드 효과
				slideToggleProjects(projectsPreviewWrapper, projectIndex, index + 1, bool);
			}, 150);
		} else if ( index == numRandoms - 1 ) {
			//마지막 미리보기 div 슬라이드 효과
			projectsPreviewWrapper.eq(randomProjectIndex).toggleClass('slide-out', bool).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				if( projectIndex != -1) {
					projects.children('li.selected').addClass('content-visible');
					projectsPreviewWrapper.eq(projectIndex).addClass('slide-out').removeClass('selected');
				} else if( navigation.hasClass('nav-visible') && bool ) {
					navigation.addClass('nav-clickable');
				}
				projectsPreviewWrapper.eq(randomProjectIndex).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				animating = false;
			});
		}
	}

	//http://stackoverflow.com/questions/19351759/javascript-random-number-out-of-5-no-repeat-until-all-have-been-used
	function makeUniqueRandom() {
	    var index = Math.floor(Math.random() * uniqueRandoms.length);
	    var val = uniqueRandoms[index];
	    // 랜덤 변수의 값 삭제
	    uniqueRandoms.splice(index, 1);
	    return val;
	}

	function createArrayRandom() {
		// 랜덤 변수 초기화
		uniqueRandoms.length = 0;
		for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
	}
});

(function($){
 	$.fn.bgLoaded = function(custom) {
	 	var self = this;

		// 기본 플러그인 설정
		var defaults = {
			afterLoaded : function(){
				this.addClass('bg-loaded');
			}
		};

		// 기본 설정 및 사용자 설정
		var settings = $.extend({}, defaults, custom);

		// element 반복
		self.each(function(){
			var $this = $(this),
				bgImgs = $this.css('background-image').split(', ');
			$this.data('loaded-count',0);
			$.each( bgImgs, function(key, value){
				var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
				$('<img/>').attr('src', img).load(function() {
					$(this).remove(); // prevent memory leaks
					$this.data('loaded-count',$this.data('loaded-count')+1);
					if ($this.data('loaded-count') >= bgImgs.length) {
						settings.afterLoaded.call($this);
					}
				});
			});

		});
	};
})(jQuery);
