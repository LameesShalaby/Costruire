// search
$(document).ready(function() {
     
  $(".active").click(function() {
     $(".search-box").toggle();
     $("input[type='text']").focus();
   });

});  
// filter
$(document).ready(function(){
  $('.filter-button').click(function(){
    const value= $(this).attr('data-filter');
    if(value == "all"){
    $('.filter').show('1000');
    }  
    else{
    $(".filter").not('.'+value).hide('3000');
    $(".filter").filter('.'+value).show('3000');
    };
    })
    // if($(".filter-button").removeclass("active")){
    // $(this).removeclass("active");
    // }
  })

  // swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 0,
    spaceBetween: 0,
    loop: true,
    autoplay: {
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides:true,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides:true,
        autoplay: {
          disableOnInteraction: false,
        },
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });