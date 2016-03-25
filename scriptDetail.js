$(document).ready(function () {
	var asd = sessionStorage.getItem('useridasd123kapparosshello')
	//alert('User ' + asd + " is now logged in");
	
	if(asd !== null) {
		$("#auctionsID").show();
		$("#startID").show();
		$("#start").show();
		$("#logOut").html('Logga ut');
	}
		

    $("tr").hide();
    $("#h2ID").hide();
    $("#h3ID").hide();
    $("#listcurrentauctions").click(function () {
        $("#tbody1").empty();
        $("#h2ID").show();
        $("#h3ID").show();
        $.getJSON("http://nackademiska.azurewebsites.net/2/getongoingauctions", function (data) {
            $.each(data, function (i, auction) {
                $("#tbody1").append(
                    "<tr id='testrow'><td><img src='data:image/jpeg;base64,"  + auction.Image + "' height='100' width='100'></td>" + "<td><a href='#'>" + auction.Name + "</a></td>" +
                    "<td>" + auction.Description + "</td>" +
                    "<td id='aid'>" + auction.Id + "</td>" +
                    "<td>" + auction.EndTime + "</td>" + "<td>" + auction.CategoryId + "</td>" +
                    "<td>" + auction.AcceptPrice +
                    "</td></tr>"
                )
            });
        });

        $('#tbody1').on('click', 'tr', function(){
            $.getJSON("http://nackademiska.azurewebsites.net/2/getauctiondetails?auctionid=" + this.childNodes[3].innerHTML, function(auction) {   
                    $("#tbody2").append(    	
                    	"<tr id='testrow'><td><img src='data:image/jpeg;base64,"  + auction.Image + "' height='100' width='100'></td>" + "<td><a href='#'>" + auction.Name + "</a></td>" +
                        "<td id='aid'>" + auction.Id + "</td>" +
                        "<td>" + auction.StartTime + "</td>" + "<td>" + auction.EndTime + "</td>" +
                        "<td>" + auction.CategoryId  + "</td>" + "<td id='supI'>" + auction.SupplierId  + "</td>" +
                        "<td>" + auction.AcceptPrice +  "</td>" + "<td>" + "<button id='clickBuy' onclick='buyNow("+ auction.Id + ',' + asd +");'>" + 'Köp' + "</button>" + "</td>" + "<td>" + auction.Sold + "</td>" + "<td>" +"<form>" + 
                        "<input type='text' name='money' id='money'>" + "</form>" + "</td>" + "<td>" + "<button id='clicky' onclick='postForm("+ auction.Id + ',' + asd +");'>" + 
                        'Buda' + "</button>" + "</td>" +
                        "</td></tr>"              
                    )             
            });
        });
        
        $("tr").show();
        
        
        $('#tbody2').on('click', 'tr', function() {
        	$.getJSON("http://nackademiska.azurewebsites.net/2/getsupplierdetails?supplierid=" + this.childNodes[6].innerHTML, function(supplier) {
        		$("#tbody3").append(  
        				"<tr id='test2'><td><a href='#'>"  + supplier.Name + "</a></td>" + "<td>" + supplier.Address + "</td>" +
                        "<td id='supI'>" + supplier.Id + "</td>" +
                        "<td>" + supplier.PostalCode  + "</td>" + "<td>" + supplier.City  + "</td>" +
                        "<td>" + supplier.Phone  + "<td>" + supplier.Email + "</td>" + "<td>" + supplier.Provision + "</td>" +
                        "</td></tr>"
        				
        				)
        	});
        	
        	
        });
        
        


    });
    $("#clearlist").click(function () {
        $("#tbody1").empty();
        $("#tbody2").empty();
        $("#tbody3").empty();
        $("#h2ID").hide();
        $("#h3ID").hide();
        $("tr").hide();
    });

});



function postForm(aid, asd) {

    var mon = {
    offer: $("#money").val(),
    auctionid: aid,
    customerid: asd

    };

    $.ajax( {
    type: 'POST',
    url: 'http://nackademiska.azurewebsites.net/2/addoffer',
    data: mon,
    success: function(data) {
      alert('hej');
       
    },
    error: function(data) {
    	alert(JSON.stringify(data));
        //alert('error saving delt');
    }

    });
}

function buyNow(aid, asd) {
	
	var info = {
		auctionid: aid,
		customerid: asd
	};
	
	$.ajax( {
		type: 'POST',
		url: 'http://nackademiska.azurewebsites.net/2/buynow',
		data: info,
		success: function(data) {
			alert('hej');
		},
		error: function(data) {
			alert(JSON.stringify(data));
		}
				
	});
	
}


$("#clicky").click(function(e) {
     postForm();
	 e.preventDefault();
});

$("#clickBuy").click(function(e) {
    buyNow();
	 e.preventDefault();
});

$('#logOut').click(function(e) {
	sessionStorage.setItem('useridasd123kapparosshello', data.Id === null);
	window.location.reload(true);
	e.preventDefault();
});

