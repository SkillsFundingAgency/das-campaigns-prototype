
if (localStorage.getItem("savedFrameworks") === null) {
  localStorage.setItem("savedFrameworks", JSON.stringify([]));
}
if (localStorage.getItem("compareFrameworks") === null) {
  localStorage.setItem("compareFrameworks", JSON.stringify([]));
}


$(function() {

  var pageId = $('body').prop('id');

  if (pageId === 'page-fat-search-results') {
    fat.search.init();
  }

});


var fat = fat || {};

fat.search = {
  init: function () {
    $('#fat-search-results').hide();
    this.doSearch();
  },
  doSearch: function () {
    var that = this;

    $.ajax({
      url: "frameworks.json",
      dataType: "json"
    }).done(function(data) {
      that.processSearch(data)
    });
  },
  printResults: function (data) {
    var html = '';
    var template = "<li class=\"search-result\" data-id=\"{{ id }}\">\n" +
                    "<h2 class=\"heading-m\">\n" +
                    "     <a href=\"#\" class=\"apprenticeship-title\">{{ title }}</a>\n" +
                    "</h2>\n" +
                    "<div class=\"content-row\">\n" +
                    "     <p><strong>Level:</strong> {{ level }}</p>\n" +
                    "     <p><strong>Typical length:</strong> {{ length }}</p>\n" +
                    "</div>\n" +
                    "<div class=\"cta-row\">\n" +
                    "     <div class=\"form-group radios\">\n" +
                    "          <div class=\"checkboxes__item save-label\">\n" +
                    "               <input class=\"checkboxes__input\" type=\"checkbox\" value=\"true\" id=\"save-{{ id }}\" name=\"save-{{ id }}\">\n" +
                    "               <label class=\"label checkboxes__label\" for=\"save-{{ id }}\">Save</label>\n" +
                    "          </div>\n" +
                    "          <div class=\"checkboxes__item compare-label\">\n" +
                    "               <input class=\"checkboxes__input compare-item\" type=\"checkbox\" value=\"true\" id=\"compare-{{ id }}\" name=\"compare-feature\">\n" +
                    "               <label class=\"label checkboxes__label\" for=\"compare-{{ id }}\">Compare</label>\n" +
                    "          </div>\n" +
                    "     </div>\n" +
                    "</div>\n" +
                    "</li>";

    $.each(data, function(index, framework) {
      html = html + template.replace(/{{ id }}/g, framework.framework.Id)
          .replace('{{ title }}', framework.framework.Title)
          .replace('{{ level }}', framework.framework.Level)
          .replace('{{ length }}', framework.framework.Duration);
    });

    $('.fat-value').html(data.length);
    $('#fat-search-results').html(html).fadeIn();

  },
  processSearch: function (data) {

    let searchTerm;
    let cookieSearchTerm = $.cookie("fat-job-title");

    if (cookieSearchTerm != null) {
      searchTerm = cookieSearchTerm;
    } else {
      searchTerm = "Business Administrator";
    }

    let filteredData = [];

    const search = function(searchIn, searchFor) {
      var searchFor = searchFor.replace(/[^a-z0-9\s\,]/im, '').split(/\s+|\,\s*/m);
      var i, regxp, count = 0;
      for (i in searchFor) {
        regxp = new RegExp("(^|\\W)" + searchFor[i] + "($|\\W)", "im").test(searchIn);
        if (regxp) {
          count++;
        }
      }
      return count;
    }

    $.each(data, function(index, framework) {
      var title = framework.Title;
      var test = search(title, searchTerm.toLowerCase());
      if (test > 0) {
        newRecord = { title: framework.Title, count: test, framework: framework }
        filteredData.push(newRecord);
      }
    });

    const sortBy = fn => (a, b) => -(fn(a) < fn(b)) || +(fn(a) > fn(b))
    const getOrder = o => o.count
    const sortByOrder = sortBy(getOrder)

    filteredData.sort(sortByOrder)
    filteredData.reverse();

    this.printResults(filteredData);

  }
}

