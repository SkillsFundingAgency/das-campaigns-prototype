// =================================== MY JQUERY =================================== //

$('.scroll').on('click',function(e) {
     e.preventDefault();
     var offset = 0;
     var target = this.hash;
     if ($(this).data('offset') != undefined) offset = $(this).data('offset');
     $('html, body').stop().animate({
          'scrollTop': $(target).offset().top - offset
     }, 250, 'swing', function() {
          // window.location.hash = target;
     });
});

if ($('body').hasClass('cookieBannerV1')) {
     function cookiebanner() {
          $('.cookiebanner.version-1').slideDown();
          $('header .header').css('position', 'absolute');
     }
     window.onload = cookiebanner;

     $('#cookieBannerV1').on('click',function(e) {
          e.preventDefault();
          $('.cookiebanner.version-1').slideUp();
          $('header .header').css('position', 'fixed').addClass('active');
     });
} else if ($('body').hasClass('cookieBannerV2')) {
     $('#cookieBannerV2, .cookiebanner.version-2 .close').on('click',function(e) {
          e.preventDefault();
          $('.cookiebanner.version-2').hide();
     });
}


if ($('main').hasClass('apprentice')) {
     $('nav a.navigation__link--top-level--apprentice').append('<div class="border"></div>').addClass('active-section');
} else if ($('main').hasClass('employer')) {
     $('nav a.navigation__link--top-level--employer').append('<div class="border"></div>').addClass('active-section');
} else if ($('main').hasClass('real-stories')) {
     $('nav a.navigation__link--top-level--real-stories').append('<div class="border"></div>').addClass('active-section');
} else if ($('main').hasClass('interests-page')) {
     $('nav a.navigation__link--top-level--interests').append('<div class="border"></div>').addClass('active-section');
}

else {
     $('nav a.navigation__link--top-level--apprentice, nav a.navigation__link--top-level--employer').remove('border').removeClass('active-section');
}

////////////////////////////// FAA SEARCH BOX //////////////////////////////
$('#search-results-filter h2').on('click',function(e) {
     $(this).find('.open').toggleClass('close');
     $('#search-results-filter .cta-faa__content').toggle();
});
