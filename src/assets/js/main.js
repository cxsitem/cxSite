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
	


//header menu
jQuery(document).ready(function($){
  // Click on #sb-menu to open the sidebar
  $('#sb-menu').on('click', function() {
      $('.header-mega-menu').addClass('open');
  });

  // Click on #sb-close to close the sidebar
  $('#sb-close').on('click', function() {
      $('.header-mega-menu').removeClass('open');
  });
});

//hgroup line effect
document.addEventListener("DOMContentLoaded", () => {
  const hgroups = document.querySelectorAll("hgroup");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("focused");
          } else {
              entry.target.classList.remove("focused");
          }
      });
  }, {
      threshold: 0.5, // Adjust threshold as needed
  });

  hgroups.forEach(hgroup => observer.observe(hgroup));
});
