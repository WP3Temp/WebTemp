let questiontable = ["나는 눈물이 많은 편이다", "마음에 안 드는 일이 있으면 화가 난다","힘든 일을 일부러 생각하지 않는다","나는 참을성이 강하다","‘애 늙은이’같다는 소리를 자주 듣는다","아침에 눈을 떴을 때 옆에 누군가 있으면 좋겠다","내 스타일에 많이 신경쓰는 편이다","여행이나 큰 행사와 같은 일의 전날 밤에는 잠을 이루지 못한다"]

let pagecount = 8;

var qnum = 0;
var userdata = 0;

$('#resultArea').hide();

$('#next').click(function(){
  var typed = new Typed('#titletext',{
    strings: ['',questiontable[qnum]],
    loop: false,
    typeSpeed: 25,
    backSpeed: 10,
  });
  $('#next').hide();
  $('#inq').show();
  $('.typed').hide();
  qnum++;
});

$('#ans1').click(function(){
  if (qnum==8)
  {
    var typed = new Typed('#titletext',{
      strings: ['',userdata+'세'],
      loop: false,
      typeSpeed: 25,
      backSpeed: 10,
    });
    $('#subtitle').hide();
    $('#titletext').hide();
    $('#inq').hide();
    $('#resultArea').show();
    $('#resulttext').text(userdata + '세');
  }
  else 
  {
    var typed = new Typed('#titletext',{
      strings: ['',questiontable[qnum]],
      loop: false,
      typeSpeed: 25,
      backSpeed: 10,
    });
    qnum++;
    userdata = userdata + qnum + userdata%10;

    if (userdata>50)
    {
      userdata = userdata/2;
    }
  }
});

$('#ans2').click(function(){
  if (qnum==8)
  {
    var typed = new Typed('#titletext',{
      strings: ['',userdata+'세'],
      loop: false,
      typeSpeed: 25,
      backSpeed: 10,
    });
    $('#subtitle').hide();
    $('#titletext').hide();
    $('#inq').hide();
    $('#resultArea').show();
    $('#resulttext').text(userdata + '세');
  }
  else 
  {
    var typed = new Typed('#titletext',{
      strings: ['',questiontable[qnum]],
      loop: false,
      typeSpeed: 25,
      backSpeed: 10,
    });
    qnum++;
    userdata = userdata + qnum;
  }
});