$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');



	var types = $('.types'),
			typesItem = $('.types__item'),
			steps = $('.steps__wrap');

	types.tabs();
	steps.tabs();

	var typesLinkActive = $('.types__nav li.ui-tabs-active a'),
			typesLinkActiveHref = typesLinkActive.attr('href'),
			typesImg = $(typesLinkActiveHref).find('.types__img-wrap'),
			typesImgs = $(typesLinkActiveHref).find('.types__slider');

	console.log(typesLinkActiveHref);
	typesImg.slick({
		asNavFor: typesImgs
	})
	typesImgs.slick({
		asNavFor: typesImg,
		slidesToShow: 6,
		focusOnSelect: true
	})





	$('.types__nav li a').click(function () {
		var attr = $(this).attr('href')
				item = $(attr),
				img = item.find('.types__img-wrap'),
				imgs = item.find('.types__slider');
		img.slick({
			asNavFor: imgs
		})
		imgs.slick({
			asNavFor: img,
			slidesToShow: 6,
			focusOnSelect: true
		})
	})


	var team = $('.team__list');

	team.slick({
		slidesToShow: 4,
		variableWidth: true,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				variableWidth: false
			}
		}]
	})


	$('.team__img').click(function () {
		var teamItem = $(this).parents('.team__item');
		if (!$(this).hasClass('team__item_toggle')) {
			$('.team__item').removeClass('team__item_toggle');
			setTimeout(function() {
				teamItem.addClass('team__item_toggle');
			}, 500);
		}
	})
	$('.team__close').click(function () {
		var teamItem = $(this).parents('.team__item');
		teamItem.removeClass('team__item_toggle');
	})

	$('.faq__head').click(function() {
		var body = $(this).next('.faq__body');
		body.slideToggle(300);

	})

	$('.faq__head').click(function() {
		var item = $(this).parents('.faq__item');
		item.toggleClass('faq__item_toggle');
	});


	$('ol').each(function(){
		var li = $(this).find('li');
		li.each(function(index) {
			$(this).prepend('<span class="count">'+ (index + 1) + '.<span>');
		})
	})

	var reviews = $('.reviews__list');

	reviews.slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 10000,
		fade: true
	})

	function valueElementForm(nameElement, nameBlock) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($(nameBlock)),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});

	}
	valueElementForm('checkbox', 'input');


	$('.price-tabs__nav li:first-of-type').addClass('selected');
	$('.price-tabs__item:first-of-type').addClass('selected');
	$('a[data-tab-item]').click(function (event) {
		var attr = $(this).attr('data-tab-item');
		var link = $('.price-tabs__nav a[data-tab-item = "\#' + attr.replace('#', '') + '"]'),
				linkLi = link.parents('li'),
				item = $(attr);
		if (!linkLi.hasClass('selected')) {
			$('.price-tabs__nav li').removeClass('selected');
			linkLi.addClass('selected');
		}
		if (!item.hasClass('selected')) {
			$('.price-tabs__item').removeClass('selected');
			item.addClass('selected');
		}
	})


	$('.types__arrow').click(function () {
		var next = $('.types__text-hidden');
		next.slideToggle(300);
	})


	$('.style__nav li').click(function () {
		var index = $(this).index() + 1,
				item = $('.style__item:nth-of-type('+index+')');
		if (!$(this).hasClass('selected')) {
			$('.style__nav li').removeClass('selected');
			$(this).addClass('selected');
		}
		if (!item.hasClass('selected')) {
			$('.style__item').removeClass('selected');
			item.addClass('selected');
		}
		$("html, body").animate({scrollTop: $(item).offset().top - 58 +"px"}, 500)
	})

	$('.footer__up').click(function () {
		$("html, body").animate({scrollTop: $('.main-wrap').offset().top - 58 +"px"}, 1500);
	})

	var hum = $('.hum'),
			nav = $('.panel__nav');

	hum.click(function () {
		hum.toggleClass('hum_toggle');
		nav.slideToggle(0);
	})
});
