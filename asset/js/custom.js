$(function(){

  // 사이드 메뉴 열고 닫기
  $(".header .btn-menu").click(function (e) {
    e.preventDefault();
    $('.side-deimmed').addClass('show')
    $('body').addClass('overflowHidden')
    $('.side-menu').addClass('on')
  })
  $(".side-menu .close-btn").click(function (e) {
    e.preventDefault();
    $('.side-deimmed').removeClass('show')
    $('body').removeClass('overflowHidden')
    $('.side-menu').removeClass('on')
  })


  // 모달 창 클릭 시 영역 닫기

  $('.side-deimmed').click(function(){
    $('.side-menu').removeClass('on');
    $('.side-deimmed').removeClass('show');
    $('body').removeClass('overflowHidden')
  });


  // 사이드 메뉴안의 아코디언 메뉴

   $('.header .menu-item .depth').on("click", function(e){
    e.preventDefault()
    $(this).siblings('.sub-list').slideToggle();
    $(this).children('.btn-down').toggleClass('btn-on');
  });


  // 띠배너

  var swiper = new Swiper(".ad-top", {
    effect:'fade',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });




  // 스크롤 하면 메뉴 보였다가 안보였다가 하기

  $(window).scroll(function(){
    curr = $(this).scrollTop();

    if(curr > 0){
      $('.header').addClass('fixed');
    }else{
      $('.header').removeClass('fixed');
    }

  })



  $('.btn-more').click(function(e){
    e.preventDefault()
    /* $('.all-nav').stop().slideDown(); */
    $('.all-nav').stop().slideToggle();
    $('.nav-area').toggleClass('active');
    $(this).toggleClass('on');
  })



  //메인 비주얼 롤링

  var swiper = new Swiper(".sc-visual .swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
    },
  });



  // 가로 스크롤 상품

  var swiper = new Swiper(".sc-category .swiper", {
    slidesPerView:2.2,
    spaceBetween:10,

  });


}) //end