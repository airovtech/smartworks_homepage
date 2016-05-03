/**
 * 
 */




$(document).ready(
		function() {
			
			$('#subwrap #sub_main').css({'width':'100%', 'height':'228px'})
			
			
			
			

			$('#sub_nav0').hover(function(e) {
				$('#sub_nav0').show();
			}, function(e) {
				$('#sub_nav0').hide();
			});

			$('#nav ul li.m1').hover(
					function(e) {
						// $('#sub_nav0').show().find('#sub_nav1').css('visibility',
						// 'visible').siblings().css('visibility', 'hidden');
						$('#sub_nav0').show().find('#sub_nav1').css(
								'visibility', 'visible').siblings().css(
								'visibility', 'visible');
					}, function(e) {
						setTimeout(function() {
							$('#sub_nav0 #sub_nav1').hover(function() {
							}, function() {
								$(this).parent().hide();
							});
						}, 2000);
					});

			$('#sub_nav0').hover(function(e) {
				$('#sub_nav0').show();
			}, function(e) {
				$('#sub_nav0').hide();
			});

			$('#nav ul li.m2').hover(
					function(e) {
						$('#sub_nav0').show().find('#sub_nav2').css(
								'visibility', 'visible').siblings().css(
								'visibility', 'visible');
					}, function(e) {
						setTimeout(function() {
							$('#sub_nav0 #sub_nav2').hover(function() {
							}, function() {
								$(this).parent().hide();
							});
						}, 2000);
					});

			$('#sub_nav0').hover(function(e) {
				$('#sub_nav0').show();
			}, function(e) {

			});

			$('#nav ul li.m3').hover(
					function(e) {
						$('#sub_nav0').show().find('#sub_nav3').css(
								'visibility', 'visible').siblings().css(
								'visibility', 'visible');
					}, function(e) {
						setTimeout(function() {
							$('#sub_nav0 #sub_nav3').hover(function() {
							}, function() {
								$(this).parent().hide();
							});
						}, 2000);
					});

			$('#sub_nav0').hover(function(e) {
				$('#sub_nav0').show();
			}, function(e) {
				$('#sub_nav0').hide();
			});

			$('#nav ul li.m4').hover(
					function(e) {
						$('#sub_nav0').show().find('#sub_nav4').css(
								'visibility', 'visible').siblings().css(
								'visibility', 'visible');
					}, function(e) {
						setTimeout(function() {
							$('#sub_nav0 #sub_nav4').hover(function() {
							}, function() {
								$(this).parent().hide();
							});
						}, 2000);
					});

			$('#sub_nav09').hover(function(e) {
				$('#sub_nav09').show();
			}, function(e) {
				$('#sub_nav09').hide();
			});

			$('#subwrap ul li.m5').hover(
					function(e) {
						$('#sub_nav09').show().find('#sub_nav55').css(
								'visibility', 'visible').siblings().css(
								'visibility', 'visible');
					}, function(e) {
						setTimeout(function() {
							$('#sub_nav09 #sub_nav55').hover(function() {
							}, function() {
								$(this).parent().hide();
							});
						}, 2000);
					});

			$('.m5').hover(function(e) {

				$('.m5 ul').css('visibility', 'visible')
			},

			function(e) {

				setTimeout(function() {

					$('.m5 ul').hover(function(e) {
					}, function(e) {
						
						$(this).css('visibility', 'hidden')
						
						
					});

				}, 500)

			}

			);

		});
