//review slider
 var swiper = new Swiper(".client-speak", {
    slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
	   autoplay: {
    delay: 6000,
     pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
     navigation: {
        nextEl: ".client-speak-next",
        prevEl: ".client-speak-prev",
      },
	  loop: true,
      
	 breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
	   1200: {
        slidesPerView: 1,
      },
    },
    });

	//team slider
  var swiper = new Swiper(".our-team-slider", {
   // slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
	   autoplay: {
    delay: 6000,
     pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
     navigation: {
        nextEl: ".our-team-slider-next",
        prevEl: ".our-team-slider-prev",
      },
	  loop: true,
      
	 breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
	   1200: {
        slidesPerView: 3,
      },
    },
    });
	


//sidebar readmore popup product details
jQuery(document).ready(function($){
    // Click on #read-more-pop to open the sidebar
    $('#read-more-pop').on('click', function() {
        $('.sidebar-menu').addClass('open');
    });

    // Click on elements with id #sb-close to close the sidebar
    $('#sb-close, .sidebar-footer #sb-close').on('click', function() {
        $('.sidebar-menu').removeClass('open');
    });
});


// Initialize all tooltips
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});
