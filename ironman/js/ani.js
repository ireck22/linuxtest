
  function ani(){
  　$(window).load(function(){
  　　$(window).bind('scroll resize', function(){
  　　var $this = $(this);
  　　var $this_Top=$this.scrollTop();

  　　//當高度小於100時，關閉區塊
  　　if($this_Top < 100){
  　　　$('#tc1').stop().animate({top:"0px"});
  　　　}
  　　　　if($this_Top > 100){

  　　　　$('#tc1').animate({top:"0px"});
          //$('#tc1').fadeIn();
        }
  　　}).scroll();
  　});
  }
