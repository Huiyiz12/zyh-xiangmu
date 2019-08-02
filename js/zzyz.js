$(function(){
				$('.navbar-default .topbar .zyh_nav li').click(function(){
					$(this).addClass('xiah');
					$(this).siblings().removeClass('xiah');
				});
				
				$('.oursevice .itemsevice .fu .fu1').mouseenter(function(){
					// var a=$(this).index();
					console.log($(this).siblings().children());
					$(this).css({
						'background-color':'#0ba1e4',
						'transform':'scale(1.2)',
						'color':'white',
						'z-index':'1',
						'border':'1px solid rgba(0,0,0,0)'
					});
					$(this).children().eq(0).children().eq(0).css('color','white');
					$(this).children().eq(1).children().eq(5).css({
						'color':'white',
						'border':'1px solid white'
					});
					$(this).siblings().css({
						'background-color':'white',
						'transform':'scale(1)',
						'color':'black',
						'z-index':'0',
						'border': '1px solid gainsboro'
					});
					$(this).siblings().children().eq(0).children().eq(0).css('color','#0ba1e4');
					$(this).siblings().children().eq(2).children().eq(0).css('color','#0ba1e4');
					$(this).siblings().children().eq(4).children().eq(0).css('color','#0ba1e4');
					$(this).siblings().children().eq(1).children().eq(5).css({'color':'#0ba1e4','border':'1px solid #0ba1e4'});
					$(this).siblings().children().eq(3).children().eq(5).css({'color':'#0ba1e4','border':'1px solid #0ba1e4'});
					$(this).siblings().children().eq(5).children().eq(5).css({'color':'#0ba1e4','border':'1px solid #0ba1e4'});
				});
				$('.kehu .kh .kh2').mouseenter(function(){
					$(this).removeClass('gray');
					$(this).children().css('box-shadow','0px 0px 5px 1px #0ba1e4');
				});
				$('.kehu .kh .kh2').mouseleave(function(){
					$(this).addClass('gray');
					$(this).siblings('kh2').children().css('box-shadow','none');
				});
				var c=$('.boxmiddle2').offset().top;
				$(window).scroll(function(e){
					if($(this).scrollTop()>c){
						$('.cbl .cbl_uls li.li5').css('display','block');
					}else{
						$('.cbl .cbl_uls li.li5').css('display','none');
					}
				});
				$('.cbl .cbl_uls li.li5').click(function(){
					$('body,html').animate({
						'scrollTop':'0px'
					},500);
				});
			})