// =================================== MY COOKIES =================================== //

// Stores the cookie
$("#link-FAA-search").on("click", function (e) {
     $.cookie("faa-search-location", true, {path:'/'});

     $.cookie("faa-search-location", $("#faa-search-location").val(), {path:'/'});
});

// Populates the fields
if ($.cookie("faa-search-location")) { $("#Postcode").val($.cookie("faa-search-location")); }
