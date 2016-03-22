$(document).ready(function () {
    $("tr").hide();
    $("#listcurrentauctions").click(function () {
        $.getJSON("http://nackademiska.azurewebsites.net/2/getongoingauctions", function (data) {
            $.each(data, function (i, auction) {
                $("tbody").append(
                    "<tr><td>" + auction.Id + "</td>" + "<td>" + auction.Name + " </td>" +
                    "<td>" + auction.Description + "</td>" + "<td>" + auction.StartTime + "</td>" +
                    "<td>" + auction.EndTime + "</td>" + "<td>" + auction.CategoryId + "</td>" +
                    "<td>" + auction.SupplierId + "</td>" + "<td>" + auction.AcceptPrice +
                    "</td></tr>")
            });
        });
        $("tr").show();
    });
    $("#clearlist").click(function () {
        $("tbody").empty();
        $("tr").hide();
    });
});

/*
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
*/