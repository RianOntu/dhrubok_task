$(document).ready(function(){
    $(".toggle").click(function(){
      $("aside").toggleClass("close")
    });
   });
  
  // click outside
  $(document).mouseup(function(e){ 
    var container = $("aside");
      if (!container.is(e.target) && container.has(e.target).length === 0) 
      {
           $("aside").removeClass("close")
      }
  });
  