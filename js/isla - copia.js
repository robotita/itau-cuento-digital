//PRELOADER
window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});





 $(document).ready(function(){

    // AUDIO
        $("#my_audio").get(0).play();
        $("#my_audio").prop("volume", 0).animate({volume: 0.4}, 6000);
      
        $("#audioon").hover(function() {
          $("#beep__hover").get(0).play();
          $("#beep__hover").animate({volume: 1}, 150);
          $("#my_audio").animate({volume:1}, 150);
          $(this).animate({opacity: .3}, 150);
        }, function() {
            $("#beep__hover").animate({volume: 0}, 250);
            $("#my_audio").animate({volume: 1}, 150);
            $(this).animate({opacity: 1}, 150);
        });
      
        $("#audioon").click(function() {
          $("#beep__active").delay(50).get(0).play();
        });
    });
    // FIN AUDIO




    //
    $(window).scroll(function(){
        $(".scroll1").css("opacity", 1 - $(window).scrollTop() / $('.scroll1').height());
        $(".scroll2").css("opacity", 1 - $(window).scrollTop() / $('.scroll2').height());

    });

    //

    $("#cuento section").each(function(e) {
        if (e != 0)
            $(this).hide();
    });


    // NEXT - PREV
    $("#next, #audioon").click(function(){
        if ($("#cuento section:visible").next().length != 0) {
            $("#cuento section:visible").next().show().prev().hide();
        } else {
            $("#cuento section:visible").hide();
            $("#cuento section:first").show();
        }
       
       AOS.refreshHard();
       $("body").scrollTop(0);
       return false;
    });

    $("#prev").click(function(){
        if ($("#cuento section:visible").prev().length != 0)
            $("#cuento section:visible").prev().show().next().hide();
        else {
            $("#cuento section:visible").hide();
            $("#cuento section:last").show();
        }
        AOS.refresh();
        $("body").scrollTop(0);
        return false;
    });




  /* ########################################### hero parallax ############################################## */
  window.onload = function () {
    var parallaxBox = document.getElementById('parallax');
    var
      c2left = document.getElementById('pajarin').offsetLeft,
      c2top = document.getElementById('pajarin').offsetTop,
      c5left = document.getElementById('estrellas2').offsetLeft,
      c5top = document.getElementById('estrellas2').offsetTop,
      laislaleft = document.getElementById('laisla').offsetLeft,
      laislatop = document.getElementById('laisla').offsetTop,
      plantitasleft = document.getElementById('plantitas').offsetLeft,
      plantitastop = document.getElementById('plantitas').offsetTop;

    parallaxBox.onmousemove = function (event) {
      event = event || window.event;
      var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;

      mouseParallax('pajarin', c2left, c2top, x, y, 25);
      mouseParallax('estrellas2', c5left, c5top, x, y, 44);
      mouseParallax('laisla', laislaleft, laislatop, x, y, 10);
      mouseParallax('plantitas', plantitasleft, plantitastop, x, y, 10);
    };

  };

  function mouseParallax(id, left, top, mouseX, mouseY, speed) {
    var obj = document.getElementById(id);
    var parentObj = obj.parentNode,
      containerWidth = parseInt(parentObj.offsetWidth),
      containerHeight = parseInt(parentObj.offsetHeight);
    obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
    obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
  }
  /* ########################################### /hero parallax ############################################## */