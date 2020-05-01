// =================================== MY COOKIES =================================== //

/////////////////// INDEX PAGE COOKIES - START ///////////////////
// Stores the cookie
// $("header nav .navigation__link--top-level--apprentice, #apprentice-journey").on("click", function (e) {
//      $.cookie("apprentice-journey", true, {path:'/'});
//      $.cookie("employer-journey", false, {path:'/'});
// });
//
//
// $("header nav .navigation__link--top-level--employer, #employer-journey").on("click", function (e) {
//      $.cookie("employer-journey", true, {path:'/'});
//      $.cookie("apprentice-journey", false, {path:'/'});
// });

// Populates the fields
// if ($.cookie("apprentice-journey") == 'true') {
//      $("#apprentice-journey, #employer-journey, #employer-journey-2").hide();
//      $("#apprentice-journey-2, #apprentice-journey-3").show();
// } else if ($.cookie("employer-journey") == 'true') {
//      $("#employer-journey, #employer-journey-2").show();
//      $("#apprentice-journey, #apprentice-journey-2, #apprentice-journey-3").hide();
// } else {
//      $("#apprentice-journey, #employer-journey").show();
//      $("#apprentice-journey-2, #apprentice-journey-3, #employer-journey-2").hide();
// }
/////////////////// INDEX PAGE COOKIES - END ///////////////////

/////////////////// FAA COOKIES - START ///////////////////
// Stores the cookie
$(".page-app-2.apprentice .interests-container a.item, .hero.interests-page a.item").on("click", function (e) {
     $.cookie("faa-search-interest", $(this).data().faaInterest, {path:'/'});
     $.cookie("faa-search-secondary", $('#faa-search-interest').val(), {path:'/'});
});

// $(".page-app-2.apprentice .interests-container a.item").on("click", function (e) {
//      $.cookie("faa-search-interest", $('#faa-search-interest').val(), {path:'/'});
// });

$("#link-FAA-search, #link-FAA-Cta").on("click", function (e) {
     // Keyword
     // $.cookie("faa-search-keyword", true, {path:'/'});
     // $.cookie("faa-search-keyword", $("#faa-search-keyword").val(), {path:'/'});
     $.cookie("faa-search-interest", $("#faa-search-interest").val(), {path:'/'});

     // Location
     // $.cookie("faa-search-location", true, {path:'/'});
     $.cookie("faa-search-location", $("#faa-search-location").val(), {path:'/'});
});

// Populates the fields
if ($.cookie("faa-search-keyword")) {
     $("#faa-search-keyword").val($.cookie("faa-search-keyword"));
     $(".faa-search-keyword").text($.cookie("faa-search-keyword"));
}

if ($.cookie("faa-search-interest")) {
     if ($.cookie("faa-search-interest") == 'agriculture') { $("#faa-search-keyword").val('agriculture'); $(".faa-search-interest").text('Agriculture, environment and animal care'); }
     if ($.cookie("faa-search-interest") == 'business') { $("#faa-search-keyword").val('business'); $(".faa-search-interest").text('Business and administration'); }
     if ($.cookie("faa-search-interest") == 'care-services') { $("#faa-search-keyword").val('care-services'); $(".faa-search-interest").text('Care services'); }
     if ($.cookie("faa-search-interest") == 'catering-hospitality') { $("#faa-search-keyword").val('catering-hospitality'); $(".faa-search-interest").text('Catering and hospitality'); }
     if ($.cookie("faa-search-interest") == 'construction') { $("#faa-search-keyword").val('construction'); $(".faa-search-interest").text('Construction'); }
     if ($.cookie("faa-search-interest") == 'creative') { $("#faa-search-keyword").val('creative'); $(".faa-search-interest").text('Creative and design'); }
     if ($.cookie("faa-search-interest") == 'digital') { $("#faa-search-keyword").val('digital'); $(".faa-search-interest").text('Digital'); }
     if ($.cookie("faa-search-interest") == 'education') { $("#faa-search-keyword").val('education'); $(".faa-search-interest").text('Education and childcare'); }
     if ($.cookie("faa-search-interest") == 'engineering') { $("#faa-search-keyword").val('engineering'); $(".faa-search-interest").text('Engineering and manufacturing'); }
     if ($.cookie("faa-search-interest") == 'hair') { $("#faa-search-keyword").val('hair'); $(".faa-search-interest").text('Hair and beauty'); }
     if ($.cookie("faa-search-interest") == 'health') { $("#faa-search-keyword").val('health'); $(".faa-search-interest").text('Health and science'); }
     if ($.cookie("faa-search-interest") == 'legal') { $("#faa-search-keyword").val('legal'); $(".faa-search-interest").text('Legal, finance and accounting'); }
     if ($.cookie("faa-search-interest") == 'protective-services') { $("#faa-search-keyword").val('protective-services'); $(".faa-search-interest").text('Protective services'); }
     if ($.cookie("faa-search-interest") == 'sales') { $("#faa-search-keyword").val('sales'); $(".faa-search-interest").text('Sales, marketing and procurement'); }
     if ($.cookie("faa-search-interest") == 'transport') { $("#faa-search-keyword").val('transport'); $(".faa-search-interest").text('Transport and logistics'); }
}
if ($.cookie("faa-search-location")) {
     $("#Postcode").val($.cookie("faa-search-location"));
     $("#faa-search-location").val($.cookie("faa-search-location"));
     $(".faa-search-location").text($.cookie("faa-search-location"));
}
// if ($.cookie("faa-search-secondary")) { $("#Postcode").val($.cookie("faa-search-secondary")); }
/////////////////// FAA COOKIES - END ///////////////////

/////////////////// FAT COOKIES - START ///////////////////
// SEARCH ROUTE
// Stores the cookie
// $("#fat-search-results li .apprenticeship-title").on("click", function (e) {
//      $.cookie("fat-apprenticeship-title", $(this).text(), {path:'/'});
// });

$("#link-FAT-search").on("click", function (e) {
     $.cookie("fat-job-title", $('#fat-search-keyword').val(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-job-title")) {
     $(".hero.fat-hero").find('.fat-job-title').text($.cookie("fat-job-title"));
     $('#fat-search-keyword').val($.cookie("fat-job-title"));
     $('.fat-search-keyword').text($.cookie("fat-job-title"));
}

// SECTORS ROUTE
// Stores the cookie
$(".employer .interests-container a.item").on("click", function (e) {
     $.cookie("fat-industry-title", $(this).find('h3').text(), {path:'/'});
     $.cookie("fat-industry-number", $(this).find('.fat-number').text(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-industry-title")) { $(".hero.fat-heading").find('h1.hero-heading__heading, a.fat-industry').text($.cookie("fat-industry-title")); }
if ($.cookie("fat-industry-number")) { $(".hero.fat-heading").find('p.leading .fat-value').text($.cookie("fat-industry-number")); }

// APPRENTICESHIP TITLE
// Stores the cookie
$("#fat-search-results .search-result a.apprenticeship-title").on("click", function (e) {
     $.cookie("fat-apprenticeship-title", $(this).text(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-apprenticeship-title")) {
     $('.fat-apprenticeship-title').text($.cookie("fat-apprenticeship-title"));
}

// POSTCODE SEARCH RESULT
// Stores the cookie
$(".link-FAT-search").on("click", function (e) {
     $.cookie("fat-search-location", $('#fat-search-postcode').val(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-search-location")) {
     $('.fat-search-location').text($.cookie("fat-search-location"));
     $('.fat-search-location, #fat-search-postcode').val($.cookie("fat-search-location"));
}


// TRAINING PROVIDER TITLE
// Stores the cookie
$("a.training-provider-title").on("click", function (e) {
     $.cookie("fat-training-provider-title", $(this).text(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-training-provider-title")) {
     $('.fat-training-provider-title').text($.cookie("fat-training-provider-title"));
}

/////////////////// FAT COOKIES - END ///////////////////

/////////////////// FAT SAVE EMAIL COOKIES - START ///////////////////
$("#btn-favourites").on("click", function (e) {
     $.cookie("fat-save-email-true", true, {path:'/'});
     $.cookie("fat-save-FirstName", $('#FirstName-employer').val(), {path:'/'});
     $.cookie("fat-save-LastName", $('#LastName-employer').val(), {path:'/'});
     $.cookie("fat-save-Email", $('#Email-employer').val(), {path:'/'});

     $.cookie("save-Downloads", $('#downloads').val(), {path:'/'});
     $.cookie("save-Industries", $('#industries').val(), {path:'/'});

     $.cookie("save-Industries-values", $('input[name=\'name="industries"\']').val(), {path:'/'});

     $.cookie("industries-Agriculture", $('input#industries-Agriculture:checked').val(), {path:'/'});
     $.cookie("industries-Business", $('input#industries-Business:checked').val(), {path:'/'});
     $.cookie("industries-Care", $('input#industries-Care:checked').val(), {path:'/'});
     $.cookie("industries-Catering", $('input#industries-Catering:checked').val(), {path:'/'});
     $.cookie("industries-Construction", $('input#industries-Construction:checked').val(), {path:'/'});
     $.cookie("industries-Creative", $('input#industries-Creative:checked').val(), {path:'/'});
     $.cookie("industries-Digital", $('input#industries-Digital:checked').val(), {path:'/'});
     $.cookie("industries-Education", $('input#industries-Education:checked').val(), {path:'/'});
     $.cookie("industries-Engineering", $('input#industries-Engineering:checked').val(), {path:'/'});
     $.cookie("industries-Hair", $('input#industries-Hair:checked').val(), {path:'/'});
     $.cookie("industries-Health", $('input#industries-Health:checked').val(), {path:'/'});
     $.cookie("industries-Legal", $('input#industries-Legal:checked').val(), {path:'/'});
     $.cookie("industries-Protective", $('input#industries-Protective:checked').val(), {path:'/'});
     $.cookie("industries-Sales", $('input#industries-Sales:checked').val(), {path:'/'});
     $.cookie("industries-Transport", $('input#industries-Transport:checked').val(), {path:'/'});
     $.cookie("industries-Other", $('#industries-Other').val(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-save-email-true") == 'true') {
     $('#email-message-panel').css('display', 'inline-block');
     $('.wrap.fat').removeClass('FAT-basket-empty');

     setTimeout(function() {
          $('#email-message-panel').slideUp();
     }, 5000);
} else {
     $('#email-message-panel').hide();
     $('.wrap.fat').addClass('FAT-basket-empty');
}

if ($.cookie("fat-save-FirstName")) { $('.fat-save-FirstName').text($.cookie("fat-save-FirstName")); }
if ($.cookie("fat-save-LastName")) { $('.fat-save-LastName').text($.cookie("fat-save-LastName")); }
if ($.cookie("fat-save-Email")) { $('.fat-save-Email').text($.cookie("fat-save-Email")); }

if ($.cookie("save-Industries") == 'true') {
     $('#interested-industries').show();
} else {
     $('#interested-industries').hide();
}

if ($.cookie("save-Industries") == 'true') {
     $('#interested-industries').show();
} else {
     $('#interested-industries').hide();
}

$('#interested-industries li').hide();

if ($.cookie("industries-Agriculture") == 'true') { $('.industries-Agriculture').show(); } else { $('.industries-Agriculture').hide(); }
if ($.cookie("industries-Business") == 'true') { $('.industries-Business').show(); } else { $('.industries-Business').hide(); }
if ($.cookie("industries-Care") == 'true') { $('.industries-Care').show(); } else { $('.industries-Care').hide(); }
if ($.cookie("industries-Catering") == 'true') { $('.industries-Catering').show(); } else { $('.industries-Catering').hide(); }
if ($.cookie("industries-Construction") == 'true') { $('.industries-Construction').show(); } else { $('.industries-Construction').hide(); }
if ($.cookie("industries-Creative") == 'true') { $('.industries-Creative').show(); } else { $('.industries-Creative').hide(); }
if ($.cookie("industries-Digital") == 'true') { $('.industries-Digital').show(); } else { $('.industries-Digital').hide(); }
if ($.cookie("industries-Education") == 'true') { $('.industries-Education').show(); } else { $('.industries-Education').hide(); }
if ($.cookie("industries-Engineering") == 'true') { $('.industries-Engineering').show(); } else { $('.industries-Engineering').hide(); }
if ($.cookie("industries-Hair") == 'true') { $('.industries-Hair').show(); } else { $('.industries-Hair').hide(); }
if ($.cookie("industries-Health") == 'true') { $('.industries-Health').show(); } else { $('.industries-Health').hide(); }
if ($.cookie("industries-Legal") == 'true') { $('.industries-Legal').show(); } else { $('.industries-Legal').hide(); }
if ($.cookie("industries-Protective") == 'true') { $('.industries-Protective').show(); } else { $('.industries-Protective').hide(); }
if ($.cookie("industries-Sales") == 'true') { $('.industries-Sales').show(); } else { $('.industries-Sales').hide(); }
if ($.cookie("industries-Transport") == 'true') { $('.industries-Transport').show(); } else { $('.industries-Transport').hide(); }
if ($.cookie("industries-Other")) { $('.industries-Other').show(); $('.industries-Other strong').text($.cookie("industries-Other")); } else { $('.industries-Other').hide(); }
/////////////////// FAT SAVE EMAIL COOKIES - END ///////////////////

/////////////////// FAT SECTOR COOKIES - START ///////////////////
$(".fat .interests-container .item").on("click", function (e) {
     $.cookie("fat-sector-true", true, {path:'/'});
     $.cookie("fat-sector-title", $(this).find('h3').text(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-sector-true") == 'true') {
     $('.sector-info').show();
     $('.sector-info .sector-name').text($.cookie("fat-sector-title")).val('');
     $('.fat-hero #fat-search-keyword').val($.cookie("fat-sector-title"));
     $('.fat-hero .fat-sector-title').text($.cookie("fat-sector-title"));
}
/////////////////// FAT SECTOR COOKIES - END ///////////////////

/////////////////// EMAIL ME COOKIES - START ///////////////////
$("#btn-email").on("click", function (e) {
     $.cookie("FirstName-Email", $('#FirstName-Email').val(), {path:'/'});
     $.cookie("LastName-Email", $('#LastName-Email').val(), {path:'/'});
     $.cookie("Email-Email", $('#Email-Email').val(), {path:'/'});
});

// Populates the fields
if ($.cookie("FirstName-Email")) { $('.FirstName-Email').text($.cookie("FirstName-Email")); }
if ($.cookie("LastName-Email")) { $('.LastName-Email').text($.cookie("LastName-Email")); }
if ($.cookie("Email-Email")) { $('.Email-Email').text($.cookie("Email-Email")); }

$(".emal-sign-up").on("click", function (e) {
     $.cookie("employer-journey-topic", $('.employer-journey-topic').text(), {path:'/'});
});

if ($.cookie("employer-journey-topic")) { $('.employer-journey-name').text($.cookie("employer-journey-topic")); }
/////////////////// EMAIL ME COOKIES - END ///////////////////

////////////////////////////// LEVY CONTENT - START //////////////////////////////
$('.levy-content').hide();

$("#continue-user-type").on("click", function (e) {
     var selValue = $('input[name=EmployerLevyPayer]:checked').val();
     $.cookie("user-type", selValue, {path:'/'});
     // alert(selValue);
});

$(document).ready(function () {

     $('#without-levy-question').hide();

     if ($.cookie("user-type")) {
          $('#non-levy-levy-journey').hide();
          $('#how-they-work-levy-question').hide();
          $('#without-levy-question').show();
     }
     if ($.cookie("user-type") == 'LevyPayerYes') {
          $('.levy-content').show();
          $('.non-levy-content').hide();
          $('#LevyPayerYes').attr('checked', 'checked');
          $('#LevyPayerNo').removeAttr('checked');
     } else if ($.cookie("user-type") == 'LevyPayerNo') {
          $('.levy-content').hide();
          $('.non-levy-content').show();
          $('#LevyPayerNo').attr('checked', 'checked');
          $('#LevyPayerYes').removeAttr('checked');
          $('#how-they-work-levy-question').hide();
     }
});

$(document).ready(function () {
     $("#continue-user-type, .i-dont-know").click(function () {
          $.cookie("non-levy-levy-question", true, {path:'/'});
     });

     $("#inspire-user-type").click(function () {
          if ($('input[name="people"]').val() == "sole-trader" || $('input[name="people"]').val() == "less-than-fifty") {
               $.cookie("non-levy-user-type", true, {path:'/'});
          } else {
               $.cookie("non-levy-user-type", false, {path:'/'});
          }
     });

     if ($.cookie("non-levy-levy-question") == 'true' || $.cookie("non-levy-user-type") == 'true') {
          $('#non-levy-levy-journey').hide();
          $('#how-they-work-levy-question').hide();
     } else {
          $('#non-levy-levy-journey').show();
          $('#how-they-work-levy-question').show();
     }
});
////////////////////////////// LEVY CONTENT - END //////////////////////////////

$(".close.employer-hire-journey, .close.employer-retrain-journey").on("click", function (e) {
     e.preventDefault();
     $(this).closest('#change-recruit-journey').hide();
});

$(".close.employer-hire-journey").on("click", function (e) {
     $.cookie("employer-hire-journey", false, {path:'/'});
});

$(".close.employer-retrain-journey").on("click", function (e) {
     $.cookie("employer-retrain-journey", false, {path:'/'});
});

$(document).ready(function () {
     if ($.cookie("employer-hire-journey") == 'false') {
          $('#change-recruit-journey').hide();
     }
     if ($.cookie("employer-retrain-journey") == 'false') {
          $('#change-recruit-journey').hide();
     }
});

////////////////////////////// TAILORED CONTENT - START //////////////////////////////
$(document).ready(function () {
     $("#btn-bespoke-postcode").click(function () {
          $.cookie("tailored-content-completed", true, {path:'/'});
          $.cookie("postCode-employer", $('#postCode-employer').val(), {path:'/'});
     });

     if ($.cookie("tailored-content-completed") == 'true') {
          $('.tailored-content').hide();
     } else {
          $('.tailored-content').show();
     }

     if ($.cookie("postCode-employer")) {
          $("#fat-search-postcode, #postCode-employer").val($.cookie("postCode-employer"));
     }
});
////////////////////////////// TAILORED CONTENT - END //////////////////////////////

////////////////////////////// HEADER SURVEY - START //////////////////////////////
$(document).ready(function () {
     $(".close-nav-survey").click(function () {
          $.cookie("close-nav-survey", true, {path:'/'});
     });

     if ($.cookie("close-nav-survey") == 'true') {
          $('.feedback-survey').hide();
          $('.hero, .hero-banner').removeClass('padding-top');
     } else {
          $('.feedback-survey').show();
          $('.hero, .hero-banner').addClass('padding-top');
     }

});
////////////////////////////// HEADER SURVEY - END //////////////////////////////
