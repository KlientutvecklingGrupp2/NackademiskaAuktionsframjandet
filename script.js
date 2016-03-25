$(document).ready(function () {
    $("tr").hide();
    
    alert("hej");

    $("#listcurrentauctions").click(function () {
        $("tbody").empty();
        $.getJSON("http://nackademiska.azurewebsites.net/2/getongoingauctions", function (data) {
            $.each(data, function (i, auction) {
                $("tbody").append(
                    "<tr><td class='name'>" + auction.Name + "</td>" + "<td>" + auction.Description + "</td>" +
                    "<td>" + auction.EndTime + "</td>" + "<td>" + auction.CategoryId + "</td>" +
                    "<td>" + auction.AcceptPrice +
                    "</td></tr>")
                    
                    //var options = {
//  					valueNames: [ 'name' ]
//					};var userList = new List('users', options);
                    
					
                    
                    var $rows = $('table tr');
                $('#search').keyup(function() {
                    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
                    
                    $rows.show().filter(function() {
                        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                        return !~text.indexOf(val);
                    }).hide();
                });
                    
                    
                    
            });
            
            
        });
        
        
        $("tr").show();
    });

    $("#clearlist").click(function () {
        $("tbody").empty();
        $("tr").hide();
    });
    
});


