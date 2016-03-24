$(document).ready(function () {
    $("tr").hide();

    $("#listcurrentauctions").click(function () {
        $("tbody").empty();
        $.getJSON("http://nackademiska.azurewebsites.net/2/getongoingauctions", function (data) {
            $.each(data, function (i, auction) {
                $("tbody").append(
                    "<tr><td class='name'>" + auction.Name + "</td>" + "<td>" + auction.Description + "</td>" +
                    "<td>" + auction.EndTime + "</td>" + "<td>" + auction.CategoryId + "</td>" +
                    "<td>" + auction.AcceptPrice +
                    "</td></tr>")
                    
                    var options = {
  					valueNames: [ 'name' ]
					};var userList = new List('users', options);
                    
            });
        });
        $("tr").show();
    });

    $("#clearlist").click(function () {
        $("tbody").empty();
        $("tr").hide();
    });
});
