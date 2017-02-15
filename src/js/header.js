$(function(){
   $(".j-u-list").click(function(){
        if ($(".z-toggle-list").hasClass("show")) {
            $(".z-toggle-list").slideUp(600).removeClass("show");
        }
        else {
            $(".z-toggle-list").slideDown(600).addClass("show");
        }

   })

})