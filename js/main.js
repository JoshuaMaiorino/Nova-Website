(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	/*
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});
	*/

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: 'a',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

})(jQuery);

$(document).ready(function () {
	
	//Add Vimeo Thumbnails to all Video Cards
	$(".js-vimeo-card").each(function(indx, item){
	  var vimeoVideoID = $(item).find("a").data("video-id");
		  $.getJSON('https://www.vimeo.com/api/v2/video/' + vimeoVideoID + '.json?callback=?', { format: "json" }, function (data) {
			  featuredImg = data[0].thumbnail_large;
			  $(item).find("img").attr("src", featuredImg);
		  });
	});

	//Add Vimeo Thumbnails and Modals for Image Sliders
	$(".js-vimeo-slider img").each(function(indx, item){
		var vimeoVideoID = $(item).data("video-id");
			$.getJSON('https://www.vimeo.com/api/v2/video/' + vimeoVideoID + '.json?callback=?', { format: "json" }, function (data) {
				featuredImg = data[0].thumbnail_large;
				$(item).attr("src", featuredImg);
				$(item).modalVideo({channel:'vimeo'});
			});
	  });

	//Add Modal Video Popups for Each Vimeo Video
	$(".js-vimeo-card").find("a").modalVideo({channel:'vimeo'});
  });

