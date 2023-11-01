
$(document).ready(function() {
	$("#menuclick .menu_button").click(function(){
		setTimeout(function(){
			$('#menu').show()}, 500);
		$("#menuclick").css("right","-100%");
	})

	$("#menu .menu_button").click(function() {
		$("#menuclick").css("right","0");
		$("#menu").hide();
	});






	$(".button_back").mouseleave(function() {
		$(".button_circle").animate({left:'7px'})
	});


	$(".graph li").mouseenter(function() {
		$(this).css("background","").siblings().css('background','#b9b9b9');
	})

	$(".graph01").mouseenter(function() {
		$(".graph_txt01").stop().fadeIn(500)
	});
	$(".graph02").mouseenter(function() {
		$(".graph_txt02").stop().fadeIn(500)
	});
	$(".graph03").mouseenter(function() {
		$(".graph_txt03").stop().fadeIn(500)
	});
	$(".graph04").mouseenter(function() {
		$(".graph_txt04").stop().fadeIn(500)
	});
	$(".graph05").mouseenter(function() {
		$(".graph_txt05").stop().fadeIn(500)
	});

	$(".graph li").mouseleave(function() {
		$(".graph_txt li").stop().fadeOut();
		$(this).siblings().css('background','')
	});



})

// $(document).ready(function(){
// 	$('.gotop').click(function(){
// 		$('html').animate({scrollTop:'0'})
// 		return false
// 	})
// })

$(document).ready(function(){

	var cirC = $(".button_circle").position().left;
	
	$(".button_circle").click(function() {
		$(this).css('left',cirC+50);
		cirC = 50;

		var km = $(this).attr('data-link')

		if (cirC > 7) {
			setTimeout(function() {
				location.href=km;
			}, 400);
		}

	});
})


$(window).scroll(function(){
	var winT = $(this).scrollTop();
	var sec03T = $('.sec_about03 .about_wrap').offset().top;
	// console.log(sec03T);
	$('h1').text(winT);

	if (winT >= sec03T) {
		$('.graph').addClass('active')
	} else {
		$('.graph').removeClass('active')
	}
})


/*$(window).scroll(function(){
	var scrT = $(window).scrollTop();
	var mainH = $('#main').height();
	if (scrT == mainH) {
		$('#menuclick').css("right","0")
	}
});*/

// function doImgPop(img){ 
// 	img1= new Image(); 
// 	img1.src=(img); 
// 	imgControll(img); 
// } 

// function imgControll(img){ 
// 	if((img1.width!=0)&&(img1.height!=0)){ 
// 		viewImage(img); 
// 	} 
// 	else{ 
// 		controller="imgControll('"+img+"')"; 
// 		intervalID=setTimeout(controller,20); 
// 	} 
// }

// function viewImage(img){ 
// 	W=img1.width; 
// 	H=img1.height; 
// 	O="width="+W+",height="+H+",scrollbars=yes"; 
// 	imgWin=window.open("","",O); 
// 	imgWin.document.write("<html><head><title>:*:*:*: 이미지상세보기 :*:*:*:*:*:*:</title></head>");
// 	imgWin.document.write("<body topmargin=0 leftmargin=0>");
// 	imgWin.document.write("<img src="+img+" onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
// 	imgWin.document.close();
// }
