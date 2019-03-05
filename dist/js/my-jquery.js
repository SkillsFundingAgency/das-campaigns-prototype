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
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('agriculture').attr('data-faa-interest', 'agriculture');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Business and administration') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('business').attr('data-faa-interest', 'business');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Care services') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('care-services').attr('data-faa-interest', 'care-services');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Catering and hospitality') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('catering-hospitality').attr('data-faa-interest', 'catering-hospitality');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Construction') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('construction').attr('data-faa-interest', 'construction');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Creative and design') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('creative').attr('data-faa-interest', 'creative');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Digital') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('digital').attr('data-faa-interest', 'digital');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Education and childcare') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('education').attr('data-faa-interest', 'education');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Engineering and manufacturing') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('engineering').attr('data-faa-interest', 'engineering');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Hair and beauty') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('hair').attr('data-faa-interest', 'hair');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Health and science') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('health').attr('data-faa-interest', 'health');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Legal, finance and accounting') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('legal').attr('data-faa-interest', 'legal');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Protective services') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('protective').attr('data-faa-interest', 'protective');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-no-results');
     }
     if ($(this).val() == 'Sales, marketing and procurement') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('sales').attr('data-faa-interest', 'sales');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
     if ($(this).val() == 'Transport and logistics') {
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').addClass('transport').attr('data-faa-interest', 'transport');
          $('.faa-fat-link-block.cta-faa.search #link-FAA-Cta').attr('href', '/campaign/apprentice/2B-find-an-apprenticeship-sector');
     }
});
////////////////////////////// FAA SEARCH BOX - END //////////////////////////////


////////////////////////////// COMPARE COMPONENT - START //////////////////////////////
$('#compare-component .more-info').on('click',function(e) {
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).parent().find('.content-container').toggleClass('open');
     $(this).text(function(i, v){
          return v === 'Show more info' ? 'Hide this info' : 'Show more info'
     })
});

$(document).ready(function () {
     // var counter = 0;
     // $(document).ready(function() {
     //      $("#addMe").click(function(){
     //           counter++;
     //           $("#theCount").text(counter);
     //      });
     // });

     var basketNumber = parseInt($('header .button.basket .number').text());
     // var basketNumber = 0;

     $('.checkboxes__item.save-label .checkboxes__input').on('change',function(e) {
          var itemTitle = $(this).closest('.search-result').find('.heading-m a').text();

          var checked = $(this).is(':checked');
          var lbl = $(this).next();

          if (checked) {
               basketNumber++;
               $("header .button.basket .number").text(basketNumber);
               $('#confirmation-message-panel').find('.apprenticeship-title').text(itemTitle);
               $('#confirmation-message-panel').show();
          } else {
               basketNumber--;
               $("header .button.basket .number").text(basketNumber);
               $('#confirmation-message-panel').hide();
          }

          lbl.text(function() {
               return checked ? 'Remove' : 'Save';
          });

          if (basketNumber == 0) {
               $('header .button.basket').removeClass('full');
          } else if (basketNumber >= 1) {
               $('header .button.basket').addClass('full');
          }

     });

     function countChecked() {
          return $("input[name='compare-feature']:checked").length;
     }

     $("input[name='compare-feature']").on('change', function () {
          if (countChecked() <= 1 ) {
               $('#compare-message-panel').slideUp();
          } else if (countChecked() >= 2) {
               $('#compare-message-panel').slideDown();
          }
          var itemTitle = $(this).closest('.search-result').find('.heading-m a').text();
          $('#compare-message-panel .comparison-item-title').append('<span>' + itemTitle +'</span>');
     });

     $("#compare-selected-items").on('click', function (e) {
          e.preventDefault();
          $('#compare-message-panel').hide();
          $('#compare-component').show();
     });

     $("#close-compare").on('click', function (e) {
          e.preventDefault();
          $('#compare-message-panel').hide();
          $('#compare-component').hide();
     });

});
////////////////////////////// COMPARE COMPONENT - END //////////////////////////////

////////////////////////////// POPULATED BASKET - START //////////////////////////////
$(document).ready(function () {
     $('input[name="compare-apprenticeship-feature"]').on('change',function(e) {
          var checkedApprenticeships = $(this).is(':checked');
          var itemApprenticeshipTitle = $(this).closest('h2.heading-l').find('a.apprenticeship-title').text();

          if (checkedApprenticeships) {
               $('#your-selected-items .right-content').css('opacity', '0.1');
               $('input[name="compare-training-provider-feature"]').attr("disabled", true);
               $('a.remove-training-provider').removeAttr('href');
               $('#compare-message-panel .comparison-item-title').append('<span>' + itemApprenticeshipTitle +'</span>');
          } else {
               $('#your-selected-items .right-content').css('opacity', '1');
               $('input[name="compare-training-provider-feature"]').removeAttr("disabled");
               $('a.remove-training-provider').attr('href', '#');
               $('#compare-message-panel .comparison-item-title').remove('<span>' + itemApprenticeshipTitle +'</span>');
          }

          function countCheckedApprenticeship() {
               return $("input[name='compare-apprenticeship-feature']:checked").length;
          }

          if (countCheckedApprenticeship() <= 1 ) {
               $('#compare-message-panel').slideUp();
          } else if (countCheckedApprenticeship() >= 2) {
               $('#compare-message-panel').slideDown();
          }

     });

     $('input[name="compare-training-provider-feature"]').on('change',function(e) {
          var checkedTrainingProvider = $(this).is(':checked');

          if (checkedTrainingProvider) {
               $('input[name="compare-apprenticeship-feature"]').attr("disabled", true);
               $('input[name="compare-apprenticeship-feature"]').parent().parent().css('opacity', '0.1');
          } else {
               $('input[name="compare-apprenticeship-feature"]').removeAttr("disabled");
               $('input[name="compare-apprenticeship-feature"]').parent().parent().css('opacity', '1');
          }

          function countCheckedTrainingProvider() {
               return $("input[name='compare-training-provider-feature']:checked").length;
          }

          if (countCheckedTrainingProvider() <= 1 ) {
               $('#compare-message-panel').slideUp();
          } else if (countCheckedTrainingProvider() >= 2) {
               $('#compare-message-panel').slideDown();
          }
          var itemProviderTitle = $(this).closest('li').find('a.trainging-providers-list').text();
          $('#compare-message-panel .comparison-item-title').append('<span>' + itemProviderTitle +'</span>');

     });

     $('a.remove-training-provider').on('click',function(e) {
          e.preventDefault();
          $(this).closest('li').remove();
     });

});
////////////////////////////// POPULATED BASKET - START //////////////////////////////

// $(document).ready(function () {
//      var myInput = document.getElementById("fat-search-keyword");
//      $("#link-FAT-search").click(function(){
//           if (myInput.value == "Business Administrator") {
//                window.location.href = 'job-profiles/1-credit.html';
//                return false;
//           }
//      });
// });

////////////////////////////// COMPARE COMPONENT - END //////////////////////////////
