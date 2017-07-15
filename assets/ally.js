/**
 * @author Muthu Selvam
 * @muthu.softwar@gmail.com
 */
$(function() {

	var data = [ {
		"name" : "Big Guy Financial",
		"apy" : 0.75,
		"earnings" : 376.41
	}, {
		"name" : "Dewey, Cheatam & Howe",
		"apy" : 0.01,
		"earnings" : 5.00
	}, {
		"name" : "URBank",
		"apy" : 0.87,
		"earnings" : 436.89
	}, {
		"name" : "First Onion",
		"apy" : 0.01,
		"earnings" : 5.00
	}, {
		"name" : "Bank of Everywhere",
		"apy" : 0.01,
		"earnings" : 5.00
	} ];
	
	// Passing JSON value to Jquery template 
	$("#allyTableTemplate").tmpl(data).appendTo("#allyBankFinancialCenter_details");
	
	// Tab functionlity 
	$(".tabs-menu a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab-content").not(tab).css("display", "none");
		$(tab).fadeIn();
	});
	
	//login popup functionality
   var modal = document.getElementById('id01');
	window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});
