
// Banner Code Start

document.addEventListener("DOMContentLoaded", function () {
    const slideBox = document.querySelector('.brands-slidebox');
    const slides = document.querySelectorAll('.brands-slide');

    // Calculate total width of all slides
    let totalSlideWidth = 0;
    slides.forEach(slide => {
        totalSlideWidth += slide.offsetWidth;
    });

    // Duplicate slides dynamically to fill the container width for seamless looping
    const slideBoxWidth = slideBox.offsetWidth;
    const clonesNeeded = Math.ceil(slideBoxWidth / totalSlideWidth) + 1;

    for (let i = 0; i < clonesNeeded; i++) {
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            slideBox.appendChild(clone);
        });
    }

    // GSAP animation for seamless sliding
    gsap.to(".brands-slide", {
        x: `-${totalSlideWidth}px`, // Move the entire width of the original slides
        duration: 10, // Duration for one full loop
        repeat: -1, // Infinite loop
        ease: "linear", // Smooth, constant speed
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalSlideWidth), // Loop the position seamlessly
        },
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const slideBox = document.querySelector('.experience-slidebox');
    const slides = Array.from(document.querySelectorAll('.experience-slidebox > .experience-slide'));

    // Calculate total width of all slides combined
    let totalSlideWidth = slides.reduce((acc, slide) => acc + slide.offsetWidth, 0);

    // Duplicate slides dynamically until they fill the container width
    const containerWidth = slideBox.offsetWidth;
    const clonesNeeded = Math.ceil(containerWidth / totalSlideWidth) + 2;

    for (let i = 0; i < clonesNeeded; i++) {
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            slideBox.appendChild(clone);
        });
    }

    // GSAP animation for seamless horizontal sliding
    gsap.to(".experience-slidebox > .experience-slide", {
        x: `-=${totalSlideWidth}px`, // Move left by total slide width
        duration: 10, // Animation duration for one full cycle
        repeat: -1, // Infinite loop
        ease: "linear", // Smooth linear motion
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalSlideWidth), // Seamless looping
        },
    });
});

// Banner Code End



// About Section Start

console.clear();

const svg = document.querySelector("#svg");
const bCircle1 = document.querySelector("#b-circle-1");
const wCircle = document.querySelector("#w-circle");
const bCircle2 = document.querySelector("#b-circle-2");
const whiteLayer = document.querySelector("#whiteLayer");
const pad = 4;

let radius1 = +bCircle1.getAttribute("r");
let radius2 = +bCircle2.getAttribute("r");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "section.about-area",
    start: "top 20%", // This triggers when the top of the section reaches 70% of the viewport height
    end: "bottom center",
    scrub: 0.2,
    markers: false,  // Enable markers for debugging the scroll trigger position
  },
  defaults: {
    duration: 1,
  },
});


tl.to(
  bCircle1,
  {
    attr: {
      r: () => radius1 * 1.5,
    },
  },
  0 
)
  .to(
    wCircle,
    {
      attr: {
        r: () => radius1 * 1.2,
      },
      opacity: 0.8,
    },
    0.5 
  )
  .to(
    bCircle2,
    {
      attr: {
        r: () => radius2 * 2,
      },
    },
    1 
  )
  
  .to(
    whiteLayer,
    {
      opacity: 0.5, 
      ease: "power1.inOut",
      duration: 1, 
    },
    0.25 
  )
  .to(
    whiteLayer,
    {
      opacity: 0, 
      ease: "power1.out",
      duration: 1.5, 
    },
    1.5 
  );

window.addEventListener("load", resize);
window.addEventListener("resize", resize);

function resize() {
  tl.progress(0);

  const r = svg.getBoundingClientRect();
  const rectWidth = r.width + pad;
  const rectHeight = r.height + pad;

  const dx = rectWidth / 2;
  const dy = rectHeight / 2;

  radius1 = Math.sqrt(dx * dx + dy * dy);
  radius2 = radius1 * 1.2;

  tl.invalidate();
  ScrollTrigger.refresh();
}


// About Section End





// Function to change the tab
function changeTab(target) {
    // Get all tab content elements
    var allTabs = document.querySelectorAll(".services-bottom-item");
    // Get all tab navigation items
    var allTabLinks = document.querySelectorAll(".services-tab li");

    // Use an if-else loop to show and hide tabs based on the clicked target
    if (target === "#web-Development") {
        // Hide all tabs
        allTabs.forEach(tab => tab.classList.remove("active"));
        // Show the "Web Development" tab
        document.querySelector("#web-Development").classList.add("active");

        // Remove active class from all tab navigation items
        allTabLinks.forEach(tab => tab.classList.remove("active"));
        // Add active class to the "Web Development" tab navigation item
        document.querySelector("a[href='#web-Development']").parentElement.classList.add("active");

    } else if (target === "#mobile-app") {
        // Hide all tabs
        allTabs.forEach(tab => tab.classList.remove("active"));
        // Show the "Mobile App" tab
        document.querySelector("#mobile-app").classList.add("active");

        // Remove active class from all tab navigation items
        allTabLinks.forEach(tab => tab.classList.remove("active"));
        // Add active class to the "Mobile App" tab navigation item
        document.querySelector("a[href='#mobile-app']").parentElement.classList.add("active");

    } else if (target === "#e-commerce") {
        // Hide all tabs
        allTabs.forEach(tab => tab.classList.remove("active"));
        // Show the "E-commerce" tab
        document.querySelector("#e-commerce").classList.add("active");

        // Remove active class from all tab navigation items
        allTabLinks.forEach(tab => tab.classList.remove("active"));
        // Add active class to the "E-commerce" tab navigation item
        document.querySelector("a[href='#e-commerce']").parentElement.classList.add("active");

    } else if (target === "#chatbot") {
        // Hide all tabs
        allTabs.forEach(tab => tab.classList.remove("active"));
        // Show the "Chatbot" tab
        document.querySelector("#chatbot").classList.add("active");

        // Remove active class from all tab navigation items
        allTabLinks.forEach(tab => tab.classList.remove("active"));
        // Add active class to the "Chatbot" tab navigation item
        document.querySelector("a[href='#chatbot']").parentElement.classList.add("active");

    } else {
        // If none of the above, show the first tab by default
        allTabs.forEach(tab => tab.classList.remove("active"));
        document.querySelector("#web-Development").classList.add("active");

        allTabLinks.forEach(tab => tab.classList.remove("active"));
        document.querySelector("a[href='#web-Development']").parentElement.classList.add("active");
    }
}

// Attach event listeners to each tab
document.querySelectorAll(".services-tab a").forEach(tab => {
    tab.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        changeTab(targetId); // Call function to change the active tab
    });
});

// On page load, default to the first tab (Web Development)
document.addEventListener("DOMContentLoaded", function() {
    changeTab("#web-Development");
});





// Select all links and images
const links = document.querySelectorAll('.dark-link-lg li a');
const images = document.querySelectorAll('.awards-area-block-middle-images');

// Attach click event to each link
links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove 'active' class from all links
        links.forEach(l => l.parentElement.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.parentElement.classList.add('active');

        // Remove 'active' class from all images
        images.forEach(img => img.classList.remove('active'));

        // Add 'active' class to the corresponding image
        images[index].classList.add('active');

        // Optional GSAP animation for image transition
        gsap.fromTo(images[index], 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
        );
    });
});






// gsap.registerPlugin(ScrollTrigger);

// const items = document.querySelectorAll(".projects-area-block-right-cards .item");

// const timeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".projects-area",   
//         start: "top top",            
//         end: "+=2000",                
//         scrub: true,                 
//         pin: true,                   
//         markers: false,              
//     },
// });


// items.forEach((item, index) => {
//     timeline.fromTo(
//         item,
//         {
//             x: window.innerWidth,  
//             opacity: 0,            
//         },
//         {
//             x: 0,                  
//             opacity: 1,            
//             duration: 0.5,         
//             ease: "power2.out",    
//             stagger: 0.3,          
//         },
//         index * 0.5 
//     );
// });





// gsap.registerPlugin(ScrollTrigger);

// const cards = document.querySelectorAll(".item");
// const timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".projects-area",
//     start: "top top",
//     end: "+=500",
//     scrub: true,
//     pin: true, 
//     pinSpacing: true, 
//     markers: false, 
//   },
// });
// timeline
//   .to(cards[1], { x: -354, duration: 1, ease: "power1.inOut" })
//   .to(cards[2], { x: -354, duration: 1, ease: "power1.inOut" }, "-=0.7")
//   .to(cards[3], { x: -354, duration: 1, ease: "power1.inOut" }, "-=0.7");


gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".item");
const row = document.querySelector(".projects-area-block-right-cards .row");

// Timeline for animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-area",
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true,
    pinSpacing: true,
    onUpdate: () => {
      cards.forEach((card, index) => {
        // Get the position of the card relative to the row
        const cardRect = card.getBoundingClientRect();
        const rowRect = row.getBoundingClientRect();

        // Check if the card is above or overlapping the row
        if (cardRect.left <= rowRect.left && cardRect.right > rowRect.left) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    },
  },
});

// Animate cards moving left
timeline
  .to(cards[1], { x: -354, duration: 1, ease: "power1.inOut" })
  .to(cards[2], { x: -354, duration: 1, ease: "power1.inOut" }, "-=0.7")
  .to(cards[3], { x: -354, duration: 1, ease: "power1.inOut" }, "-=0.7");






const animation = gsap.to(".client-speak-block-right-quote-icon img.quote-icon-star", {
  rotation: 360,
  duration: 3,
  repeat: -1,
  ease: "linear",
  paused: false // Start playing by default
});

document.querySelector(".client-speak-block-right-quote-icon img.quote-icon-star")
  .addEventListener("mouseenter", () => animation.pause());

document.querySelector(".client-speak-block-right-quote-icon img.quote-icon-star")
  .addEventListener("mouseleave", () => animation.resume());








document.querySelectorAll('.we-serve-tabs-content').forEach(item => {
  item.addEventListener('click', () => {
    // Remove the 'active' class from all items
    document.querySelectorAll('.we-serve-tabs-content').forEach(i => i.classList.remove('active'));
    
    // Add the 'active' class to the clicked item
    item.classList.add('active');
  });
});
