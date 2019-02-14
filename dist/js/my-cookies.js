// =================================== MY COOKIES =================================== //

/////////////////// INDEX PAGE COOKIES - START ///////////////////
// Stores the cookie
$("header nav .navigation__link--top-level--apprentice, #apprentice-journey").on("click", function (e) {
     $.cookie("apprentice-journey", true, {path:'/'});
     $.cookie("employer-journey", false, {path:'/'});
});


$("header nav .navigation__link--top-level--employer, #employer-journey").on("click", function (e) {
     $.cookie("employer-journey", true, {path:'/'});
     $.cookie("apprentice-journey", false, {path:'/'});
});

// Populates the fields
if ($.cookie("apprentice-journey") == 'true') {
     $("#apprentice-journey, #employer-journey, #employer-journey-2").hide();
     $("#apprentice-journey-2, #apprentice-journey-3").show();
} else if ($.cookie("employer-journey") == 'true') {
     $("#employer-journey, #employer-journey-2").show();
     $("#apprentice-journey, #apprentice-journey-2, #apprentice-journey-3").hide();
} else {
     $("#apprentice-journey, #employer-journey").show();
     $("#apprentice-journey-2, #apprentice-journey-3, #employer-journey-2").hide();
}
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
     $.cookie("faa-search-keyword", $("#faa-search-keyword").val(), {path:'/'});

     // Location
     // $.cookie("faa-search-location", true, {path:'/'});
     $.cookie("faa-search-location", $("#faa-search-location").val(), {path:'/'});
});

// Populates the fields
if ($.cookie("faa-search-keyword")) {
     $("#faa-search-keyword").val($.cookie("faa-search-keyword"));
     $(".faa-search-keyword").text($.cookie("faa-search-keyword"));
}
if ($.cookie("faa-search-location")) {
     $("#Postcode").val($.cookie("faa-search-location"));
     $("#faa-search-location").val($.cookie("faa-search-location"));
     $(".faa-search-location").text($.cookie("faa-search-location"));
}
// if ($.cookie("faa-search-secondary")) { $("#Postcode").val($.cookie("faa-search-secondary")); }
/////////////////// FAA COOKIES - END ///////////////////

/////////////////// FAT COOKIES - START ///////////////////
// Stores the cookie
$(".employer .interests-container a.item").on("click", function (e) {
     $.cookie("fat-industry-title", $(this).find('h3').text(), {path:'/'});
     $.cookie("fat-industry-number", $(this).find('.fat-number').text(), {path:'/'});
});

// Populates the fields
if ($.cookie("fat-industry-title")) { $(".hero.fat-heading").find('h1.hero-heading__heading, a.fat-industry').text($.cookie("fat-industry-title")); }
if ($.cookie("fat-industry-number")) { $(".hero.fat-heading").find('p.leading .fat-value').text($.cookie("fat-industry-number")); }
/////////////////// FAT COOKIES - START ///////////////////
