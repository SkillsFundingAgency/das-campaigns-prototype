
if (localStorage.getItem("savedFrameworks") === null) {
  localStorage.setItem("savedFrameworks", JSON.stringify([]));
}
if (localStorage.getItem("compareFrameworks") === null) {
  localStorage.setItem("compareFrameworks", JSON.stringify([]));
}

$(function() {

  fat.basket.init();
  var pageId = $('body').prop('id');

  if (pageId === 'page-fat-search-results') {
    fat.search.init();
  }

});

var fat = fat || {};


fat.basket = {
  init: function () {
    var saved = JSON.parse(localStorage.getItem("savedFrameworks"));
    this.updateBasketCount(saved.length);
    console.log(saved.length)
  },
  updateBasketCount: function (basketCount) {
      var basket = $('.basket');
      if (basketCount > 0) {
        basket.addClass('full');
      } else {
        basket.removeClass('full');
      }
      $('.basket .number').html(basketCount);
  }
}


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
    var basketData = JSON.parse(localStorage.getItem("savedFrameworks"));
    var template = "<li class=\"search-result\" data-id=\"{{ id }}\">\n" +
                    "<h2 class=\"heading-m\">\n" +
                    "     <a href=\"#\" class=\"apprenticeship-title\">{{ title }}</a>{{ new }}\n" +
                    "</h2>\n" +
                    "<div class=\"content-row\">\n" +
                    "     <p><strong>Level:</strong> {{ level }}</p>\n" +
                    "     <p><strong>Typical length:</strong> {{ length }}</p>\n" +
                    "</div>\n" +
                    "<div class=\"cta-row\">\n" +
                    "     <div class=\"form-group radios\">\n" +
                    "          <div class=\"checkboxes__item save-label\">\n" +
                    "               <input class=\"checkboxes__input checkbox-save\" type=\"checkbox\" value=\"true\" id=\"save-{{ id }}\" name=\"save-{{ id }}\" {{ isSaved }} >\n" +
                    "               <label class=\"label checkboxes__label\" for=\"save-{{ id }}\">{{ savedLabel }}</label>\n" +
                    "          </div>\n" +
                    "          <div class=\"checkboxes__item compare-label\">\n" +
                    "               <input class=\"checkboxes__input compare-item checkbox-compare\" type=\"checkbox\" value=\"true\" id=\"compare-{{ id }}\" name=\"compare-feature\">\n" +
                    "               <label class=\"label checkboxes__label\" for=\"compare-{{ id }}\">Compare</label>\n" +
                    "          </div>\n" +
                    "     </div>\n" +
                    "</div>\n" +
                    "</li>";

    $.each(data, function(index, framework) {

      var isSavedinBasket = basketData.includes(framework.framework.Id);

      console.log(isSavedinBasket)

      html = html + template.replace(/{{ id }}/g, framework.framework.Id)
          .replace('{{ title }}', framework.framework.Title)
          .replace('{{ new }}', function () {
              return framework.framework.EffectiveTo ? '<div class="new"><span>new</span></div>' : '';
          })
          .replace('{{ savedLabel }}', function () {
              return !isSavedinBasket ? 'Save' : 'Remove'
          })
          .replace('{{ isSaved }}', function () {
            return !isSavedinBasket ? '' : 'checked'
          })
          .replace('{{ level }}', framework.framework.Level)
          .replace('{{ length }}', framework.framework.Duration);
    });

    $('.fat-value').html(data.length);
    $('#fat-search-results').html(html).fadeIn();
    this.setUpCheckboxes();
  },
  setUpCheckboxes: function() {
    var that = this;

    $('.checkbox-save').on('change', function() {

      var checked = $(this).prop('checked');
      var id = $(this).closest('li.search-result').data('id');
      if (checked) {
        that.add(id, 'savedFrameworks');
        $(this).next().text('Remove');
      } else {
        that.remove(id, 'savedFrameworks');
        $(this).next().text('Save');
      }
    });

    $('.checkbox-compare').on('change', function() {
      var checked = $(this).prop('checked');
      var id = $(this).closest('li.search-result').data('id');
      if (checked) {
        that.add(id, 'compareFrameworks');
      } else {
        that.remove(id, 'compareFrameworks');
      }
    });
  },
  add: function(id, localStorageName) {
    var id = id.toString();
    var savedFrameworks = JSON.parse(localStorage.getItem(localStorageName));
    var alreadySaved = savedFrameworks.indexOf(id) !== -1;

    if (!alreadySaved) {
      savedFrameworks.push(id);
      localStorage.setItem(localStorageName, JSON.stringify(savedFrameworks));
      if (localStorageName === 'savedFrameworks') {
        fat.basket.updateBasketCount(savedFrameworks.length)
      }
    }
  },
  remove: function(id, localStorageName) {
    var id = id.toString();
    var savedFrameworks = JSON.parse(localStorage.getItem(localStorageName));
    var alreadySaved = savedFrameworks.indexOf(id) !== -1;

    if (alreadySaved) {
      var filteredFrameworks = savedFrameworks.filter(function(value, index, arr){
        return value !== id;
      });
      localStorage.setItem(localStorageName, JSON.stringify(filteredFrameworks));
      if (localStorageName === 'savedFrameworks') {
        fat.basket.updateBasketCount(filteredFrameworks.length)
      }
    }
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
    const getOrderTitle = o => o.framework.Title
    const getOrder = o => o.count

    const sortByTitle = sortBy(getOrderTitle)
    const sortByOrder = sortBy(getOrder)

    filteredData.sort(sortByTitle)
    filteredData.sort(sortByOrder)
    filteredData.reverse();

    this.printResults(filteredData);

  }
}

