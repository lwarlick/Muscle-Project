$(document).ready(function() {
	    	$("#calcDrop").click(function() {
          $(".calcList").slideToggle(300);
        });

        $("p").click(function() {
          var pclass = "." + $(this).attr('class');
          $(pclass).each(function() {
            if($(this).text().indexOf("✔")!=-1) {
              $(this).html($(this).text().substr(0,$(this).text().indexOf("✔")-1));
            }
          })

          if ($(this).text().indexOf("✔")==-1) {
            $(this).html($(this).text() + " ✔");
          }

        });

        $("p").dblclick(function() {
          if ($(this).text().indexOf("✔")!=-1) {
            $(this).html($(this).text().substr(0,$(this).text().indexOf("✔")-1));
          }
        });
})
		function openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
     	document.body.style.marginLeft = "250px";
     	document.body.style.opacity = "50%";
    }

  	function closeNav() {
    	document.getElementById("mySidenav").style.width = "0px";
    	document.body.style.marginLeft = "0px";
    	document.body.style.opacity = "100%";
    }