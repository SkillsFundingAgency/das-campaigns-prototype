// =================================== MY JQUERY =================================== //

////////////////////////////// SCROLL ANIMATION - START //////////////////////////////
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
////////////////////////////// SCROLL ANIMATION - END //////////////////////////////

////////////////////////////// COOKIE BANNER - START //////////////////////////////
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
////////////////////////////// COOKIE BANNER - END //////////////////////////////

////////////////////////////// NAVIGATION - START //////////////////////////////
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
////////////////////////////// NAVIGATION - END //////////////////////////////

////////////////////////////// FAA SEARCH BOX - START //////////////////////////////
$('#search-results-filter h2').on('click',function(e) {
     $(this).find('.open').toggleClass('close');
     $('#search-results-filter .form-content').toggleClass('show');
});

$('.faa-fat-link-block.cta-faa.search #faa-search-keyword').on('change',function(e) {
     if ($(this).val() == 'Agriculture, environment and animal care') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('agriculture').attr('data-faa-interest', 'agriculture');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Business and administration') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('business').attr('data-faa-interest', 'business');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Care services') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('care-services').attr('data-faa-interest', 'care-services');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Catering and hospitality') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('catering-hospitality').attr('data-faa-interest', 'catering-hospitality');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Construction') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('construction').attr('data-faa-interest', 'construction');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Creative and design') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('creative').attr('data-faa-interest', 'creative');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Digital') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('digital').attr('data-faa-interest', 'digital');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Education and childcare') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('education').attr('data-faa-interest', 'education');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Engineering and manufacturing') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('engineering').attr('data-faa-interest', 'engineering');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Hair and beauty') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('hair').attr('data-faa-interest', 'hair');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Health and science') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('health').attr('data-faa-interest', 'health');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Legal, finance and accounting') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('legal').attr('data-faa-interest', 'legal');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Protective services') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('protective').attr('data-faa-interest', 'protective');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Sales, marketing and procurement') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('sales').attr('data-faa-interest', 'sales');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Transport and logistics') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').addClass('transport').attr('data-faa-interest', 'transport');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-search').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
});
////////////////////////////// FAA SEARCH BOX - END //////////////////////////////
