//$(document).ready(function() {
	
	
	//$('table').filterTable();
	
	
	
//					var options = {
//  					valueNames: [ 'name']
//					};var userList = new List('users', options);
					

//							var $rows = $('table tr');
//							$('#search').keyup(function() {
//    						var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
//    
//    						$rows.show().filter(function() {
//							var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
//							return !~text.indexOf(val);
//    						}).hide();
//							});
//
//});
//

var table2_Props = {
    col_0: "select",
    col_4: "none",
    display_all_text: " [ Show all ] ",
    sort_select: true
};
var tf2 = setFilterGrid("table2", table2_Props);