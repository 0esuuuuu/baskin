$(function () {
  // 검색 모달
  $('#header .util_wrap button').on('click', function () {
    $(this).toggleClass('on');
    $('#header .search_modal_wrap').slideToggle('on');
    $('body').toggleClass('on');

    if ($(this).hasClass('on')) {
      $(this).html('검색닫기');
      $('.dimmed').fadeIn();
    } else {
      $(this).html('검색열기');
      $('.dimmed').fadeOut();
    }
  });
  $('.dimmed').on('click', function () {
    $('#header .util_wrap button').toggleClass('on');
    $('#header .search_modal_wrap').slideToggle('on');
    $('.dimmed').fadeOut();
    $('body').removeClass('on');
  });

  // 메인 슬라이더 객체속성
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    // simulateTouch: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 메인메뉴 슬라이더

  var menuSlider = new Swiper('.main_menu_wrap .menu_slider', {
    slidesPerView: 3,
    slidePerGroup: 1,
    spaceBetween: -150,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인메뉴 탭
  $('.main_menu_wrap .tab_menu li').on('click', function (e) {
    e.preventDefault();
    var idx = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');

    $('.main_menu_wrap .menu_slider_wrap').eq(idx).addClass('on').siblings().removeClass('on');
  });

  // 푸터 사이트맵
  $('#footer .brand_wrap .familysite_wrap').on('click', function () {
    $(this).toggleClass('on');
    $(this).find('.familysite').toggleClass('on');
  });

  // 서브페이지 메뉴슬라이더
  var submenuSlider = new Swiper('.menu_page .sub_menu_slider', {
    slidesPerView: 5,
    spaceBetween: -60,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.menu_page .all_menu .hashtag_wrap .btn_more').on('click', function () {
    $(this).closest('.icecream_product').find('.modal_more_wrap').show();
  });

  $('.menu_page .all_menu .modal_more_wrap .btn_close').on('click', function () {
    $(this).closest('.modal_more_wrap').hide();
  });
});
