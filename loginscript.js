function postForm() {

    var cust = {
    email: $("#email").val(),
    password: $("#password").val()

    };

    $.ajax( {
    type: 'POST',
    url: 'http://nackademiska.azurewebsites.net/2/login',
    data: cust,
    success: function(data) {
        //alert('User ' + data.Id + " is now logged in");
        sessionStorage.setItem('useridasd123kapparosshello', data.Id);
        location.href = "main.html";
    },
    error: function(data) {
    	alert(JSON.stringify(data));
        //alert('error saving delt');
    }

    });
}


$("#add").click(function(e) {
    postForm();
	 e.preventDefault();
});
