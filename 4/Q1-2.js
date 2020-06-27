
  document.addEventListener('DOMContentLoaded', function() {
    
    mockChat.init({
      id: "mockChat",
      data: ["안녕 오랜만이야! 잘지냈지?", "너무 오랜만이다!!! 나야 잘 지냈지ㅎ 너는 잘지내? 보고싶다ㅠ", "나두 잘 지내지ㅎ 오늘 시간되면 밥이라도 같이 먹을래? ", "오늘은 쉬는날이라 시간 여유로워!", "그럼 이따가 우리 항상 보던데서 보자🙂"], //message
      loop: true,//loop
      delay: 1500, // Delay between messages
      startDelay: 1200, // Delay before starting the animation
      restartDelay: 3000, // Delay before restarting the animation if loop is set to true
      loop: true, // Loop the animation
    });
    
  })

  let mockChat = {
	instances: Object,
	init(args){

		/*
		 * DEFAULT PARAMETERS
		 */
		//초기값
		let params = {
			id: args.id ? args.id : 'mockChat',
			data: args.data ? args.data : ['Hmm... It looks like there is no data to display'],
			delay: args.delay ? args.delay : 1300,
			startDelay: args.startDelay ? args.startDelay : 1050,
			restartDelay: args.restartDelay ? args.restartDelay : 2000,
			loop : args.loop ? args.loop : true,
		}

		/*
		 * CREATE MARKUP
		 */
		//대화 보여지는 형식
		let mockChatContainer = document.querySelector('#'+ params.id)
			mockChatContainer.innerHTML = `
				<div class="device">
					<div class="screen">
						<div class="app">
						</div>
					</div>
				</div>
			`
		mockChatContainer.classList.add('mockchat')
		/*
		 * TEMPLATES
		 */
		//형식
		let reply = function (content) {
			let el = document.createElement('div')
			let text = document.createTextNode(content)
			el.classList.add('reply')
			el.appendChild(text)
			return el
		}
		//해당 span에 삽입하기
		let replyDots = function () {
			const dot1 = document.createElement('span')
			const dot2 = document.createElement('span')
			const dot3 = document.createElement('span')
			let el = document.createElement('div')
			el.appendChild(dot1)
			el.appendChild(dot2)
			el.appendChild(dot3)
			el.classList.add('dots', 'reply')
			return el
		}

		/*
		 *	MOCKUP
		 */
		//입력하기
		const chatScreen = mockChatContainer.querySelector('.app');
		function draw(data) {
			chatScreen.innerHTML = ''
			chatScreen.appendChild(replyDots());
			setTimeout( function() {
				chatScreen.innerHTML = ''
			}, params.startDelay)
			for( i=0 ; i < data.length ; i++) {
				let key = i;
				setTimeout(function() {
					chatScreen.appendChild(reply(data[key]));
				}, params.startDelay + i * params.delay)
			}
		}
		
		if(params.loop) {//한 바퀴 돌았음
			draw(params.data);

			this.instances[params.id] = setInterval( function() {
				draw(params.data)
			}, params.restartDelay + params.delay * params.data.length + 200)
			

		} else { 
			draw(params.data);
		}

	},
  
	stop(id) {
		clearInterval(this.instances[id])
	},

}