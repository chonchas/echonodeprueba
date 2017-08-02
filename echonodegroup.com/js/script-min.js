$(document).ready(function(){console.log('bien');$("#menuButton").click(function(){$("#navMobile").show('slow')})
$("#closeButton").click(function(){$("#navMobile").hide('slow')})
$('.carousel.carousel-slider').carousel({fullWidth:!0});$("#right").click(function(){$('.carousel.carousel-slider').carousel('next')})
$("#left").click(function(){$('.carousel.carousel-slider').carousel('prev')})
$(document).keydown(function(tecla){if(tecla.keycode===39){$('.carousel.carousel-slider').carousel('next')}
if(tecla.keycode===37){$('.carousel.carousel-slider').carousel('prev')}});var clickeado=!1;var rela=$("[href='#contact']").click(function(){clickeado=!0});var links=$("[href]");links.click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var $target=$(this.hash);$target=$target.length&&$target||$('[name='+this.hash.slice(1)+']');if($target.length){var targetOffset=$target.offset().top;if(clickeado){$('html,body').animate({scrollTop:targetOffset+800},1000);clickeado=!1}
else{$('html,body').animate({scrollTop:targetOffset},2000)}
$("#navMobile").hide('slow');return!1}}});function viewportToPixels(value){var parts=value.match(/([0-9\.]+)(vh|vw)/)
var q=Number(parts[1])
var side=window[['innerHeight','innerWidth'][['vh','vw'].indexOf(parts[2])]]
return side*(q/100)}
$(window).scroll(function(){var scrollWindow=$(window).scrollTop();var scrollHeight=viewportToPixels("100vh")+36;if(scrollWindow>=scrollHeight){$("#desktop-nav").addClass("nav-fixed")}
else{$("#desktop-nav").removeClass("nav-fixed");$("#desktop-nav").addClass("nav-normal")}});var firefox=navigator.userAgent.toLowerCase().indexOf('firefox')>-1;var es_chrome=navigator.userAgent.toLowerCase().indexOf('safari')>-1;if(firefox){$(".logo-up").html('<img src="img/en-isotipo-azul.png"></img>');$("#slider").css("background-position","1500px 50%");$(":root").css("font-size","14px");$("header").css({"height":"100vh","background-position":"75% 180px","background-size":"600px"})}
else{if(screen.width>990){$("body").niceScroll({cursorcolor:"#2ECC71",cursorwidth:"8px",background:"#444444",cursorborder:"1px solid #2ECC71",cursorborderradius:5})}}
if(screen.width<990){$("#nosotros .card").removeClass("hoverable");$("")}
else{var options=[{selector:'#productos',offset:0,callback:function(el){$('#productos *').addClass('animated slideInUp')}},{selector:'#revision',offset:0,callback:function(el){$('#revision *').addClass('animated fadeInLeft')}},{selector:'#nosotros',offset:0,callback:function(el){$('#nosotros *').addClass('animated zoomIn')}}];Materialize.scrollFire(options)}
console.log(screen.height)})