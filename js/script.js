$(document).ready(function() {
	var doc=$('body').width();
	if(doc>1080){
	$('.nav_ul li').hover(function(){
		$(this).find('.nav_a').animate({marginTop:"-28px"},200);
	},function(){
		$(this).find('.nav_a').animate({marginTop:"0px"},200);
	});
	}else{
		$('.nav_ul li').hover(function(){
		$(this).find('.nav_a').animate({marginTop:"-22px"},200);
		},function(){
			$(this).find('.nav_a').animate({marginTop:"0px"},200);
		});
	}
	$('.ic1').click(function(){
		$(this).find('.p_yi').slideToggle(400);
		$(this).find('.p_er').slideToggle(400);
	});
	$('.ic3').click(function(){
		$(this).find('.p_yi').slideToggle(400);
		$(this).find('.p_er').slideToggle(400);
	});
	$('.ic5').click(function(){
		$(this).find('.p_yi').slideToggle(400);
		$(this).find('.p_er').slideToggle(400);
	});
	$('.ic7').click(function(){
		$(this).find('.p_yi').slideToggle(400);
		$(this).find('.p_er').slideToggle(400);
	});
	$('.navbtn').click(function(){
		var head=$('.logo').height();
		$('.menus').css("top",head);
		$('.menus').slideToggle(500);
	});
	 	
        $(window).bind("scroll",function(){
                var menu=$(".header");
                var dtop=$(document).scrollTop();
           		var h=$('.header').height();
                if(dtop>h){
                   menu.addClass("headfix");
                    
                }else{
					menu.removeClass("headfix");
                }
            });
        $('.join a').click(function(){
        	$('.pop').slideToggle(500);
        });
})