$(function() {
	
	  $("#header-spanJoin").click(function(event){  //팝업 Open 버튼 클릭 시 
		  
          $("#registerPopup-popupDiv").css({
             "top": (($(window).height()-$("#registerPopup-popupDiv").outerHeight())/2+$(window).scrollTop())+"px",
             "left": (($(window).width()-$("#registerPopup-popupDiv").outerWidth())/2+$(window).scrollLeft())+"px"
             //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정
          
          }); 
         
         $("#registerPopup-popup_mask").css("display","block"); //팝업 뒷배경 display block
         $("#registerPopup-popupDiv").css("display","block"); //팝업창 display block
          
         $("body").css("overflow","hidden");//body 스크롤바 없애기
     });
     
     $("#registerPopup-popCloseImg").click(function(event){
         $("#registerPopup-popup_mask").css("display","none"); //팝업창 뒷배경 display none
         $("#registerPopup-popupDiv").css("display","none"); //팝업창 display none
         $("body").css("overflow","auto");//body 스크롤바 생성
     });
	
});
