(function($){
	$.fn.extend({
		resize_height: function(objname){
			return $(this).each(function(index, element){
				if($(this).hasClass('pconly'))
					if($.browser.mobile)
						return true;
				var obj = $(this),
					max_height = 0;
				if(obj.attr('resize'))
					objname = obj.attr('resize');
				else
					objname = element;
				if(obj.hasClass('resize-padding')){
					$(objname, obj).each(function(){
						$(this).css('height', 'auto');
						var height = $(this).height() + parseInt($(this).css('padding-top').replace('px', '')) + parseInt($(this).css('padding-bottom').replace('px', ''));
						if(height > max_height){
							max_height = height;
						}
					});
				}else{
					$(objname, obj).each(function(){
						$(this).css('height', 'auto');
						if($(this).height() > max_height){
							max_height = $(this).height();
						}
					});
				}
				$(objname, obj).css('height', max_height);
			});
		},
	});
})(jQuery);
function Redirect (url) {
    var ua        = navigator.userAgent.toLowerCase(),
        isIE      = ua.indexOf('msie') !== -1,
        version   = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
        var link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }

    // All other browsers
    else { window.location.href = url; }
}
resizenav = function(windowwidth){
	
};
		$(document).ready(function(e) {
			var windowWidth = $(window).width();
			var animate = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
			keys = Object.keys(animate);
			$('form.register-email').submit(function(e){
				var obj = $(this);
				$.ajax({
					url:base_url + "register_email.html",
					type:"POST",
					data:{
						action: 'register'	,
						email: $('input[name="email"]', obj).val()
					},
					success: function(result){
						alert(result);
					}
				});
				e.preventDefault();
				return false;
			});
			$('.row > div').each(function(index, element) {
				//key = parseInt(Math.random()*animate.length)
                //$(this).addClass('animated').attr('data-animation', animate[key]);
            });
			if (windowWidth < 1200) {
				$("body").removeClass("noIE");
			}
			$('.noIE .animated:not(.animation-done)').waypoint(function() {
				var animation = $(this).data('animation');
				$(this).addClass('animation-done').addClass(animation);
			}, {
				triggerOnce: true,
				offset: '70%'
			});
			var totalnav = 1;
			$('.navbar-nav>li>a').each(function(index, element) {
                totalnav++;
            });
			resizenav = function(windowwidth){
				var totalwidth = 0;
				$('.navbar-brand, .navbar-nav>li>a').css('padding', '0px 0px');
				$('.navbar-brand, .navbar-nav>li>a').each(function(index, element) {
					totalwidth+=$(this).width();
				});
				totalwidth+=3;
				$('.navbar-brand, .navbar-nav>li>a').css('padding', '0px ' + ((windowwidth-totalwidth)/totalnav/2) + 'px');
			};
			if($(window).width()>767)
				resizenav($('.navbar.navbar-default').width());
			$(window).resize(function(){
				if($(window).width()>767){
					resizenav($('.navbar.navbar-default').width());
				}else{
					$('.navbar-brand, .navbar-nav>li>a').css('padding', '15px 22px');
				}
			});
         	$('.resize-height-container').each(function(index, element) {
                if($(this).hasClass('ready'))
					$(this).resize_height();
            });
		});
		$(window).load(function(){
			resizenav($('.navbar.navbar-default').width());
         	$('.resize-height-container').each(function(index, element) {
                if(!$(this).hasClass('ready'))
					$(this).resize_height();
            });
		});