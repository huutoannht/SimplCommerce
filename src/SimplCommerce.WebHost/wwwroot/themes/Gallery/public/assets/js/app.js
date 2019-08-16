jQuery( document ).ready( function( $ ) {
    
    
	function resizeMap() {
		if ( $( window ).width() < 1220 ) {
			setTimeout( function() {
				var bannerHeight = $( '#banner-block' ).outerHeight( true );
				$( '#first-block' ).css( 'min-height', bannerHeight );
				
			}, 1 );
		} else {
			$( '#first-block' ).css( 'min-height', 530 );
		}
	} 
	resizeMap();
	$( window ).resize( function() {
		resizeMap();
	} );
	//$('#first-block').css('min-height', bannerHeight + 690);
	//mob apend
	imgAppend();
	$( window ).resize( function() {
		imgAppend();
	} );

	function imgAppend() {
		if ( $( window ).width() < 990 && $( window ).width() > 740 ) {
			var element = $( '.break__js' ).detach();
			$( '.last' ).append( element );
		} else {
			var element = $( '.break__js' ).detach();
			$( '.first' ).append( element );
		}
	}
	//calendar
	$( '#calendar' ).calendar( {
		width: 260,
		height: 260,
		// day of the week
		weekArray: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
		// date or month
		view: 'date',
		// current date  
		date: new Date(),
		// next / prev signs
		prev: '<span class="icon icon-btn-left"></span>',
		next: '<span class="icon icon-btn-right"></span>',
		data: [ {
			date: '2016/12/24',
			value: 'Christmas Eve'
		}, {
			date: '2016/12/25',
			value: 'Merry Christmas'
		}, {
			date: '2017/01/01',
			value: 'Happy New Year'
		} ]
	} );
	//mob-wrap
	wrapElements();
	$( window ).resize( function() {
		wrapElements();
		$( '.news-block' ).css( 'flex', '1 50%' );
	} );

	function wrapElements() {
		if ( $( window ).width() > 1203 ) {
			if ( !$( '.wrap-help' ).parent().hasClass( 'news-block' ) ) {
				$( '.wrap-help' ).wrapAll( '<div class="news-block"></div>' );
			}
		} else {
			if ( $( '.wrap-help' ).parent().hasClass( 'news-block' ) ) {
				$( '.wrap-help' ).unwrap( '<div class="news-block"></div>' );
			}
		}
	}

	/*pricingWrapElements();
	$( window ).resize( function() {
		pricingWrapElements();
		
	} );

	function pricingWrapElements() {
		if ( $( window ).width() < 991 ) {
			if ( !$( '.mob-wrap-block' ).parent().hasClass( 'pricing-block' ) ) {
				$( '.mob-wrap-block' ).wrapAll( '<div class="pricing-block"></div>' );
			}

		} else {
			if ( $( '.mob-wrap-block' ).parent().hasClass( 'pricing-block' ) ) {
				$( '.mob-wrap-block' ).unwrap( '<div class="pricing-block"></div>' );
			}
		}
	}*/

	
	//als slider 
	$( "#events" ).als( {
		visible_items: 3,
		scrolling_items: 2,
		orientation: "vertical",
		circular: "yes",
		autoscroll: "no",
		interval: 20,
		speed: 600,
		easing: "ease",
		direction: "top",
		start_from: 1
	} );
	$( "#alist-list" ).als( {
		visible_items: 3,
		scrolling_items: 1,
		orientation: "vertical",
		circular: "yes",
		autoscroll: "no",
		interval: 20,
		speed: 600,
		easing: "ease",
		direction: "top",
		start_from: 0
	} );
    
	//slider-testa
	var slideCount = $( '#slider .testimonials-slider-cont .slides' ).length;
	var slideWidth = $( '#slider .testimonials-slider-cont .slides' ).width();
	var slideHeight = $( '#slider .testimonials-slider-cont .slides' ).height();
	//var sliderCont = $('#slider').css(slideWidth);
	var sliderUlWidth = slideCount * slideWidth;
	$( '#slider' ).css( {
		width: slideWidth,
		height: slideHeight
	} );
	$( '.testimonials .testimonials-content .testimonials-text' ).css( 'width', slideWidth );
	$( '#slider .testimonials-slider-cont' ).css( {
		width: sliderUlWidth,
		marginLeft: -slideWidth
	} );
	$( window ).resize( function() {
		//slider-testa
		var slideCount = $( '#slider .testimonials-slider-cont .slides' ).length;
		var slideWidth = $( '#slider .testimonials-slider-cont .slides' ).width();
		var slideHeight = $( '#slider .testimonials-slider-cont .slides' ).height();
		//var sliderCont = $('#slider').css(slideWidth);
		var sliderUlWidth = slideCount * slideWidth;
		$( '#slider' ).css( {
			width: slideWidth,
			height: slideHeight
		} );
		$( '.testimonials .testimonials-content .testimonials-text' ).css( 'width', slideWidth );
		$( '#slider .testimonials-slider-cont' ).css( {
			width: sliderUlWidth,
			marginLeft: -slideWidth
		} );
	
	} );

	function moveLeft() {
		$( '#slider .testimonials-slider-cont' ).animate( {
			left: +slideWidth
		}, 300, function() {
			$( '#slider .testimonials-slider-cont .slides:last-child' ).prependTo( '#slider .testimonials-slider-cont' );
			$( '#slider .testimonials-slider-cont' ).css( 'left', '' );
		} );
	};

	function moveRight() {
		$( '#slider .testimonials-slider-cont' ).animate( {
			left: -slideWidth
		}, 300, function() {
			$( '#slider .testimonials-slider-cont .slides:first-child' ).appendTo( '#slider .testimonials-slider-cont' );
			$( '#slider .testimonials-slider-cont' ).css( 'left', '' );
		} );
	};
	$( '.testimonials-navigation span:first-child' ).click( function() {
		moveLeft();
	} );
	$( '.testimonials-navigation span:last-child' ).click( function() {
		moveRight();
	} );
	//fade slides
	var fadeHeight = $( '#fade-slideshow .slide img' ).height();
	$( '#banner-slides' ).css( 'height', fadeHeight );
	$( window ).resize( function() {
		fadeHeight = $( '#fade-slideshow .slide img' ).height();
		$( '#banner-slides' ).css( 'height', fadeHeight );
	} );
	$( '#fade-slideshow' ).css( 'height', fadeHeight );
	$( "#fade-slideshow > .slide:gt(0)" ).hide();
	var timer = 3000;

	function fadeSlide() {
		$( '#fade-slideshow > .slide:first-child' ).fadeOut( 1000 ).next().fadeIn( 1000 ).end().appendTo( '#fade-slideshow' );
	}
	setInterval( function() {
		fadeSlide();
	}, 3000 );
	$( '.btn-fade .icon-btn-right' ).on( 'click', function() {
		fadeSlide();
	} );
	$( '.btn-fade .icon-btn-left' ).on( 'click', function() {
		fadeSlide();
	} );
	//fixed-nav
	$( "nav" ).wrap( '<div class="nav-placeholder"></div>' );

	function stickyUtility() {
		if ( !$( "nav" ).hasClass( "sticky" ) ) {
			navOffset = $( "nav" ).offset().top;
		}
//		$( ".nav-placeholder" ).height( $( "nav" ).outerHeight() );
	}
	stickyUtility();
	$( window ).resize( function() {
		stickyUtility();
	} );
	$( window ).scroll( function() {
		if ( $( this ).scrollTop() > 1 ) {
			$( 'nav' ).addClass( "sticky" );
		} else {
			$( 'nav' ).removeClass( "sticky" );
		}
	} );
    
    //slide-down
    var vidHeight = $('.vedio-item-wrap').height();
    
    
//    if ($(window).outerWidth() < 954) {
//       var vedioHeightWrap = 400;
//  
//    }else{
//        var vedioHeightWrap = 180;
//    }
     var vedioHeightWrap = 180;
    
        
    
    function checkWidth() {
        
        vidHeight = $('.vedio-item-wrap').height();
        
        var windowSize = $(window).width();
        
        if (windowSize <= 479) {
                //console.log("screen width is less than 480");
        }
        else if (windowSize <= 654) {
             vedioHeightWrap = 730;
            $('.vedio-item-wrap').css('height', vedioHeightWrap);
        }
        else if (windowSize <= 954) {
             vedioHeightWrap = 370;
            $('.vedio-item-wrap').css('height', vedioHeightWrap);
        }
        else if (windowSize >= 954) {
             vedioHeightWrap = 180;
            $('.vedio-item-wrap').css('height', vedioHeightWrap);
        }
    }
    
     // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    


    /*$('.show-more-btn').on('click', function(){

    if($('.vedio-item-wrap').hasClass('open')){

        $('.vedio-item-wrap').css('height', vedioHeightWrap);

        $('.show-more-btn .icon').css('transform', 'rotate(0deg)');

        $('.vedio-item-wrap').removeClass('open');

    }else{
        $('.vedio-item-wrap').addClass('open');

        $('.vedio-item-wrap').css('height', vidHeight);

        $('.show-more-btn .icon').css('transform', 'rotate(180deg)');
    }

    });*/
    
    //line
    var $el, leftPos, newWidth,
        $mainNav = $(".course-info-navigation");
    
    $mainNav.append("<div id='magic-line'></div>");
    var $magicLine = $("#magic-line");
    if($magicLine.length){
        /*$magicLine
            .outerWidth($(".current_course_item").outerWidth())
            .css("left", $(".current_course_item").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());*/
     }   
    $(".course-info-navigation .course-navigation-item").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.outerWidth();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
    $('.course-navigation-item').on('click', function(){
        $(".course-navigation-item").removeClass('current_course_item');
        $(this).addClass('current_course_item');
        
        var curentPosition = $('.current_course_item').position().left;
        var curentWidth = $('.current_course_item').outerWidth();
    
        $magicLine
            .css("left", curentPosition)
            .data("origLeft", curentPosition)
            .data("origWidth", curentWidth );

         });  
//dropdown
  $( "#myaccordion" ).accordion({
      header: ".course-lesson-header",
      collapsible: true,
      heightStyle: "content",
     
      icons: { "header": "course-lesson-arrow-down", "activeHeader": "course-lesson-arrow-up" }
  });

    $('#myaccordion').bind('accordionactivate', function(event, ui) {
		/* In here, ui.newHeader = the newly active header as a jQ object
		 ui.newContent = the newly active content area */
        $( ui.newHeader ).ScrollTo(); // or ui.newContent, if you prefer
    });
    
    $('.course-lesson-arrow-down').append('<div class="icon icon-down-open-mini"></div>');
    $('.course-lesson-arrow-up').append('<div class="icon icon-down-open-mini"></div>');
    
    //navigation
    $('.course-navigation-item').each(function(){
         
       $(this).on('click', function(){
          var accIndex = $(this).index();
          
          $( "#myaccordion" ).accordion( "option", "active", accIndex);
       }); 
        
    });

$('.level-1-inner').hide();



    
    $('.course-lesson-level-1').on('click', function(event){
        event.preventDefault(); 

		if(!$(this).hasClass('disabled')){

			$(this).parent().find('.level-1-inner').slideToggle();
			$(this).parent().find('.level-1-inner').toggleClass('level-open');
			
			
			if($(this).find('.teoggle-icon').html() == '-' ){
				$(this).find('.teoggle-icon').html('+');
			}else if($(this).find('.teoggle-icon').html() == '+'){
				$(this).find('.teoggle-icon').html('-'); 
			}
		}
    });

//event slider

var evetListItems =  $('.event-wraper .event-single-item');
var eventCounter = evetListItems.length;

$('.slide-btn').hide();

if(eventCounter > 4){
	$('.slide-btn').show();
	
$('.event-wraper').slick({
    infinite: false,
	slidesToShow: 4,
	variableWidth: true,
	slidesToScroll: 4,
	nextArrow: '.slider-next',
 	prevArrow: '.slider-prev',
	 responsive: [
		 {
		  breakpoint: 1220,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		}
	 ]
  });

}

function show_bar_slide(){

    var evetListItems =  $('.international-trainings .event-single-item');
    var eventCounter = evetListItems.length;

    if( eventCounter > 4 ){

        $('.slide-btn').show();

    }

}

setTimeout(function(){
    show_bar_slide();
}, 1500);



$('.show-more-btn').bind('click', function(){

    $(this).parents('.slide-btn').slideUp(400);


    $(this).parents('.container')
                                 .children('.international-trainings')
                                 .children('.owl-wrapper-outer')
                                 .children('.owl-wrapper')
                                 .addClass('open');

});



$('.show-more-btn-register').bind('click', function(){

    $(this).slideUp(400);

    $(this).parents('.box_carousel')
                                 .children('.owl-carousel')
                                 .children('.owl-controls')
                                 .children('.owl-buttons')
                                 .slideUp(400);


    $(this).parents('.box_carousel')
                                 .children('.owl-carousel')
                                 .children('.owl-wrapper-outer')
                                 .children('.owl-wrapper')
                                 .addClass('open');

});



$(".international-trainings").owlCarousel({
    navigation: false,
    items : 4, //10 items above 1000px browser width
    itemsDesktopSmall : [1024,3], // betweem 900px and 601px
    itemsTablet: [960,3], //2 items between 600 and 0
    itemsTabletSmall: [750, 2], //2 items between 600 and 0
    itemsMobile : [480, 1], // itemsMobile disabled - inherit from itemsTablet option
});






$('.cancelation-policy .title-row .close-btn').on('click', function(){
	$('.cancelation-policy').fadeOut();
});

 $( ".reg-steps-wrap" ).accordion({    
	header: ".step-title",
    collapsible: true,
	heightStyle: "content",
});


$('.log-form-container').hide();

$('.radio-block .form-radio-group input').on('change', function(){

	if($(this).val() == 'reg' ){
		console.log($(this).val());
		$('.reg-form-container')
		.css('opacity', 0)
		.slideDown('slow')
		.animate(
			{ opacity: 1 },
			{ queue: false, duration: 'slow' }
		);

		$('.log-form-container')
		.css('opacity', 1)
		.slideUp('slow')
		.animate(
			{ opacity: 0 },
			{ queue: false, duration: 'slow' }
		);

	}else{
		console.log($(this).val());
		$('.reg-form-container')
		.css('opacity', 1)
		.slideUp('slow')
		.animate(
			{ opacity: 0 },
			{ queue: false, duration: 'slow' }
		);


		$('.log-form-container ')
		.css('opacity', 0)
		.slideDown('slow')
		.animate(
			{ opacity: 1 },
			{ queue: false, duration: 'slow' }
		);
	}
	 
});

$('.review-inner').masonry({
  // options
  itemSelector: '.review-item',
  percentPosition: true
//   columnWidth: 580
});




setTimeout(function(){

	var $gallery;

	/*$gallery.masonry({
	  // options
	  itemSelector: '.gallery-inner-item',
	  percentPosition: true
	//   columnWidth: 580
	});*/



    var $items = $('.gallery-inner-item img');                    

    function imageLoaded() {
       counter--; 
       if( counter === 0 ) {

            $gallery = $('.gallery-inner-wrap');

            $gallery.masonry({
            // options
            itemSelector: '.gallery-inner-item',
            percentPosition: true
            //   columnWidth: 580
            });

       }
    }

    var images = $('.gallery-inner-item img');
    var counter = images.length;  // initialize the counter

    images.each(function() {

        if( this.complete ) {
            imageLoaded.call( this );
        } else {
            $(this).one('load', imageLoaded);
        }
        
    }); 




}, 500);
/*
var $gallery = $('.gallery-inner-wrap');


$gallery.imagesLoaded().progress( function() {
    $gallery.masonry('layout');
});*/

	var checkJSON = function(m) {

		if (typeof m == 'object') {
			try{ m = JSON.stringify(m); }
			catch(err) { return false; } }

		if (typeof m == 'string') {
			try{ m = JSON.parse(m); }
			catch (err) { return false; } }

		if (typeof m != 'object') { return false; }
		return true;

	};






//PDFObject.embed("assets/images/Pamoka_1_Popup_Desktop.pdf", "#pdf-container", options);


      
} );


function next_slide(){

    $(".international-trainings").trigger('owl.next');
}


function prev_slide(){

    $(".international-trainings").trigger('owl.prev');
}

 function test(){

    

    return false;

}

var EPPZScrollTo =
    {
        /**
         * Helpers.
         */
        documentVerticalScrollPosition: function()
        {
            if (self.pageYOffset) return self.pageYOffset; // Firefox, Chrome, Opera, Safari.
            if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6 (standards mode).
            if (document.body.scrollTop) return document.body.scrollTop; // Internet Explorer 6, 7 and 8.
            return 0; // None of the above.
        },

        viewportHeight: function()
        { return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight; },

        documentHeight: function()
        { return (document.height !== undefined) ? document.height : document.body.offsetHeight; },

        documentMaximumScrollPosition: function()
        { return this.documentHeight() - this.viewportHeight(); },

        elementVerticalClientPositionById: function(id)
        {
            var element = document.getElementById(id);
            var rectangle = element.getBoundingClientRect();
            return rectangle.top;
        },

        /**
         * Animation tick.
         */
        scrollVerticalTickToPosition: function(currentPosition, targetPosition)
        {
            var filter = 0.2;
            var fps = 60;
            var difference = parseFloat(targetPosition) - parseFloat(currentPosition);

            // Snap, then stop if arrived.
            var arrived = (Math.abs(difference) <= 0.5);
            if (arrived)
            {
                // Apply target.
                scrollTo(0.0, targetPosition);
                return;
            }

            // Filtered position.
            currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);

            // Apply target.
            scrollTo(0.0, Math.round(currentPosition));

            // Schedule next tick.
            setTimeout("EPPZScrollTo.scrollVerticalTickToPosition("+currentPosition+", "+targetPosition+")", (1000 / fps));
        },

        /**
         * For public use.
         *
         * @param id The id of the element to scroll to.
         * @param padding Top padding to apply above element.
         */
        scrollVerticalToElementById: function(id, padding)
        {
            var element = document.getElementById(id);
            if (element == null)
            {
                console.warn('Cannot find element with id \''+id+'\'.');
                return;
            }

            var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;
            var currentPosition = this.documentVerticalScrollPosition();

            // Clamp.
            var maximumScrollPosition = this.documentMaximumScrollPosition();
            if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;

            // Start animation.
            this.scrollVerticalTickToPosition(currentPosition, targetPosition);
        }
    };