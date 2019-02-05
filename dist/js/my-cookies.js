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
     $("#apprentice-journey, #apprentice-journey-2, #apprentice-journey-3").show();
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
$("#link-FAA-search").on("click", function (e) {
     $.cookie("faa-search-location", true, {path:'/'});

     $.cookie("faa-search-location", $("#faa-search-location").val(), {path:'/'});
});

// Populates the fields
if ($.cookie("faa-search-location")) { $("#Postcode").val($.cookie("faa-search-location")); }
/////////////////// FAA COOKIES - END ///////////////////
