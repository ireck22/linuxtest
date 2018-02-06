

function ani (){
      //  $("#response_menu").click(function(){
        //    $(this).toggleClass("hamburger-x");
        //});
        $(document).ready(function() {
          $('#response_menu').on('click', function(e){
            e.preventDefault();
            $('body').toggleClass('hamburger-x');
          });
        });

    }
