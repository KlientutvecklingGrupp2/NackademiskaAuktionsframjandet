$(document).ready(function () {
    $("tr").hide();

    $("#listcurrentauctions").click(function () {
        $("tbody").empty();
        $.getJSON("http://nackademiska.azurewebsites.net/2/getongoingauctions", function (data) {
            $.each(data, function (i, auction) {
                $("tbody").append(
                    "<tr id='testrow'><td><a href='#'>" + auction.Name + "</a></td>" + "<td>" + auction.Description + "</td>" +
                    "<td>" + auction.EndTime + "</td>" + "<td>" + auction.CategoryId + "</td>" +
                    "<td>" + auction.AcceptPrice +
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
