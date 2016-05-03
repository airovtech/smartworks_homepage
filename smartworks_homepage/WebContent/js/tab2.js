// JavaScript Document

$(document).ready(function(){
  var cnt=3; //****탭메뉴 갯수 
  $('.tabs .contlist:eq(0)').show(); //첫번째 내용만 보여라 
  $('.tabs .tab1').css('background','url(../../images/tabs1on.jpg)'); //첫번째 불켜
  
  $('.tabs .tab').each(function (index) {
    $(this).click(function(){    //각각의 메뉴탭을 클릭하면	
	  $(".tabs .contlist").hide();  //모든내용을 숨긴다
	  $(".tabs .contlist:eq("+index+")").show(); //클릭한 내용만 보이게해라 
	  for(var i=1;i<=cnt;i++){     //모든버튼불꺼 
           $('.tabs .tab'+i).css('background','url(../../images/tabs'+i+'.jpg)');
      }
      $(this).css('background','url(../../images/tabs'+(index+1)+'on.jpg)'); 
   			//자신만 메뉴버튼 불켜 
   
   });
  });
});

