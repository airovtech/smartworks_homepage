/**
 * 
 */

$(document).ready(function(e) {
	
	$('.m5 ul li:first-child').css({'margin-top':'-12px'});
	
	$('.m5 ul li a').hover(

	function(e) {
		$(this).css({'color':'#4c77b8', 'font-size':'14px'});
//		$('#sub_nav55 ul li a').css('font-size', '14px');
	},

	function(e) {

		$(this).css({'color':'#2b2b2b'});
		$('#sub_nav00 ul').hover(
				function(){
					$(this).show();
				},
				function(){
					$(this).parent().hide();
				}
		
		)
	});

})
