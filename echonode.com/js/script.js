$(document).ready(function(){
     console.log('bien');
	// Navbar Mobile Open/Closing Functions
    
    $("#menuButton").click(function(){
       $("#navMobile").show('slow')
        
    })
    
    $("#closeButton").click(function(){
        $("#navMobile").hide('slow')
    })





	// Code for desktop and tablets 
/*
	if (screen.width>600){

		// Scroll scripts and effects function
		$(window).scroll(function(){

			// Variable list 

			var scrollPointer = $(window).scrollTop();
			$nav = ("#navbar-desktop");



			if(scrollPointer >= 796){
				$nav.removeClass("navbar-desktop3");
				$nav.addClass("navbar-desktop2");
	    	}
	        else{
	            $nav.removeClass("navbar-desktop2");
	            $nav.addClass("navbar-desktop3");
	        }



		});

	}*/ 

	// SLIDESHOW

	 $('.carousel.carousel-slider').carousel({fullWidth: true});
     $("#right").click(function(){
         $('.carousel.carousel-slider').carousel('next');
        
     })
     $("#left").click(function(){
         $('.carousel.carousel-slider').carousel('prev');
     })
    

	// MOVE THE SLIDESHOW WITH THE KEYBOARD ARROWS

	$(document).keydown(function(tecla){
		if(tecla.keycode === 39){
			$('.carousel.carousel-slider').carousel('next');
		}
		if(tecla.keycode === 37){
			$('.carousel.carousel-slider').carousel('prev');
		}
	});
    
    // SCROLLFIRE
    
    var options = [ {selector: '#productos', offset: 0, callback: function(el) { 
        $('#productos *').addClass('animated slideInUp');}},
                  {selector: '#revision', offset: 0, callback: function(el) { 
        $('#revision *').addClass('animated fadeInLeft') }},
                  {selector: '#nosotros', offset: 0, callback: function(el) { 
        $('#nosotros *').addClass('animated zoomIn')}}
                  ];
    
  
    
   
                   
    
    Materialize.scrollFire(options);
    
    // REDIRECTION SCRIPT
    
        var clickeado = false;
     var rela = $("[href='#contact']").click(function(){
         clickeado = true;
     });  
     var links = $("[href]");
     links.click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
 
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 
                 if (clickeado){
                     $('html,body').animate({scrollTop: targetOffset+800}, 1000); 
                     clickeado = false;
                 } 
                 else{
                     $('html,body').animate({scrollTop: targetOffset}, 2000);
                 }   
            
                   $("#navMobile").hide('slow');
                 
              
               return false;
            }
      
       }
   });
    
    // SCROLLBAR STYLE
    
    $("body").niceScroll({
        cursorcolor:"#2ECC71",
        cursorwidth:"8px",
        background: "#444444",
        cursorborder: "1px solid #2ECC71",
        cursorborderradius: 5
    });
    
    $(window).scroll(function(){
        var scrollWindow = $(window).scrollTop();
        console.log($("header").height());
        if(scrollWindow >= 1100){
            $("#desktop-nav").addClass("nav-fixed");
            
            
        }
        else{
            $("#desktop-nav").removeClass("nav-fixed");
            $("#desktop-nav").addClass("nav-normal")}});
            
      
    
});