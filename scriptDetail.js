$(document).ready(function () {
	
	

    $("tr").hide();
    $("#listcurrentauctions").click(function () {
        $("tbody").empty();
        $.getJSON("http://nackademiska.azurewebsites.net/2/getongoingauctions", function (data) {
            $.each(data, function (i, auction) {
                $("tbody").append(
                    "<tr id='testrow'><td><a href='#'>"  + auction.Name + "</a></td>" + "<td>" + auction.Description + "</td>" +
                    "<td id='aid'>" + auction.Id + "</td>" +
                    "<td>" + auction.EndTime + "</td>" + "<td>" + auction.CategoryId + "</td>" +
                    "<td>" + auction.AcceptPrice +
                    "</td></tr>"
                )
            });
        });
        
        $('tbody').on('click', 'tr', function(){
            $.getJSON("http://nackademiska.azurewebsites.net/2/getauctiondetails?auctionid=" + this.childNodes[2].innerHTML, function(auction) {   
                    $("tbody").append(
                     "<tr id='testrow'><td><a href='#'>"  + auction.Name + "</a></td>" + "<td>" + auction.Description + "</td>" +
                        "<td id='aid'>" + auction.Id + "</td>" +
                        "<td>" + auction.StartTime + "</td>" + "<td>" + auction.EndTime + "</td>" +
                        "<td>" + auction.CategoryId  + "</td>" + "<td>" + auction.SupplierId  + "</td>" +
                        "<td>" + auction.AcceptPrice + "<td>" + auction.Sold +
                        "</td></tr>"   
                       
                   
                    )
               
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
