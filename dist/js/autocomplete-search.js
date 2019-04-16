$(function(){
  var currencies = [
       { value: "Abattoir worker" },
       { value: "Able seafarer (deck)" }

  ];

     // setup autocomplete function pulling from currencies[] array
     $('#site-search').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#outputcontent').html(thehtml);
          }
     });

});
