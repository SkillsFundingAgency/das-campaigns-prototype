
$(document).ready(function () {




    $.when(GetJson(), GetHtml()).done(function (json, html) {
        json[0].Results.forEach(item => {
            item.DistanceInMiles = parseFloat(item.DistanceInMiles).toFixed(2);
            var renderedHtml = Template(html[0], item)
            $('#vacancy-search-results').append(renderedHtml);
        });

        $('.faa-total').text(json[0].Results.length);
    })





});

function GetJson() {
    var sector = $.cookie("faa-search-interest");

    return $.getJSON('/campaign/json/b664nd/' + sector, function (result) {
        return result.Results;


    });
}

function GetHtml() {
    return $.ajax('/campaign/faa-search-template', function (result2) {
        return result2;


    });
}

function Template(template, data) {
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var value = data[key];
            template = template.replace('((' + key + '))', value);
        }
    }
    return template;
}
