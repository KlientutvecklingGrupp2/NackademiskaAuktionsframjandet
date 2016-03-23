$(document).ready(function() {

    $('testrow').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            window.location = href;
        }
    });

});


/*

$(document).ready(function() {

    $.getJSON("http://nackademiska.azurewebsites.net/2/getcategories", function(data) {
        $.each(data, function(i, getcategories) {

				$("#body").append("<tr><td>" + getcategories.Name + "</td></tr>")

    });

  });

});



$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });





$(document).ready(function() {

    $.getJSON("http://nackademiska.azurewebsites.net/2/getcustomers", function(data) {
        $.each(data, function(i, deltagare) {

$(function() {
    var availableTags = [


				$("tbody").append(deltagare.Name)

    ];
    $( "#search" ).autocomplete({
      source: availableTags
    });
    });
    });

  });

});

*/
