//모바일 메뉴 
$('.mb-bt').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('mb-bt-open')
})

//서브메뉴 
// $('.side-menu').click(function (e) {
//   e.preventDefault();
//   $(this).toggleClass('side-menu-open')
// })




// jQuery
// $(document).ready(function () {
//   const mobileMenu = $('.mobile-menu'),
//       mobileBt = $('.mb-bt'),
//       mMenu = $('.m-menu'),
//       mMenu2 = $('.m-menu02'),
//       mMenuLi = $('.m-menu > li'),
//       mMenuLi = $('.m-menu02 .side-menu'),
//       mMainMenu = $('.m-mainmenu'),
//       mMainMenu = $('.s-mainmenu'),
//       mMainMenu = $('.side-menu'),
//       mSideMenu = $('.side-menu'),
//       mSubMenu = $('.m-submenu')

//   mobileBt.click(function (e) {
//       e.preventDefault();
//       let windowWidth = window.innerWidth;
//       if (windowWidth > 500) {
//           return;
//       }
//       mMainMenu.removeClass('side-menu-active')
//       mSubMenu.hide();
//       mobileMenu.toggleClass('mobile-menu-active')
//       let temp = mobileMenu.hasClass('mobile-menu-active')
//   })

// })

//     댑스1 - li메뉴 클릭
//     $.each(mMenuLi, function (index, item) {
//       console.log(index)
//       let depth1 = $(this).find('.s-mainmenu')
//       depth1.click(function (event) {
//           console.log('click')
//           event.preventDefault();
//           현재 포커스가 있는지 없는지 확인
//           let temp = $(this).hasClass('side-menu-active')
//           if (temp) {

//               /댑스2가 열린상태 여서 리무브 
//               $(this).removeClass('side-menu-active')
//               $(this).next().stop().slideUp();
//           } else {
//               mMainMenu.removeClass('side-menu-active')
//               $(this).addClass('side-menu-active')
//               mSubMenu.stop().slideUp();
//               $(this).next().stop().slideDown();
//           }
//       })
//   });

// jQuery
$(document).ready(function () {
  //모바일메뉴
  const mobileMenu = $('.mobile-menu'),
      mobileBt = $('.mb-bt'),
      mMenu = $('.m-menu02'),
      mMenuLi = $('.m-menu02 > li'),
      mMainMenu = $('.m-mainmenu'),
      mSubMenu = $('.m-submenu')

  mobileBt.click(function (e) {
      e.preventDefault();
      let windowWidth = window.innerWidth;
      if (windowWidth > 1100) {
          return;
      }
      mMainMenu.removeClass('m-mainmenu02-active')
      mSubMenu.hide();
      mobileMenu.toggleClass('mobile-menu-active')
      let temp = mobileMenu.hasClass('mobile-menu-active')
      if (temp) {
          // $('html').css('overflow', 'hidden')
          // $(this).find('img').attr('src', 'images/search_close.png')

      } else {
          // $('html').css('overflow-y', 'auto')
          // $(this).find('img').attr('src', 'images/main_allmenu.png')
      }
  })

  //댑스1 - li메뉴 클릭
  $.each(mMenuLi, function (index, item) {
      console.log(index)
      let depth1 = $(this).find('.m-mainmenu')
      depth1.click(function (event) {
          console.log('click')
          event.preventDefault();
          //현재 포커스가 있는지 없는지 확인
          let temp = $(this).hasClass('m-mainmenu02-active')
          if (temp) {

              // /댑스2가 열린상태 여서 리무브 
              $(this).removeClass('m-mainmenu02-active')
              $(this).next().stop().slideUp();
          } else {
              mMainMenu.removeClass('m-mainmenu02-active')
              $(this).addClass('m-mainmenu02-active')
              mSubMenu.stop().slideUp();
              $(this).next().stop().slideDown();
          }
      })
  })

})





  
$(document).ready(function () {
  $(window).scroll(function (event) {
      let st = $(this).scrollTop();
      console.log(st)
      if (st > 550) {
          $('.header').addClass('hide')
          $('.mb-bt').addClass('hide')
          // $('.header .inner .logo img').addClass('hide')


      } else {
          $('.header').removeClass('hide')
          $('.mb-bt').removeClass('hide')
          // $('.logo').addClass('hide')

      }

  })



})



  //sw-visual슬라이드 
  // 향수컬렉션

  var swiper = new Swiper(".sw-basic", {
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // 베스트컬렉션

  var swiper = new Swiper('.sw-item', {
    // Optional parameters
    autoplay: true,
    spaceBetween: 20,
    slidesPerView: 1,
    // direction: 'horizontal',
    delay: 6000,
    loop: true,
    disableOnInteraction: false,
    centeredSlides: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar01',

    },
  });
