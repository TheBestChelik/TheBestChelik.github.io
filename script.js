// JavaScript source code
$('document').ready(function()
{

	$("#first").on("click",function()
	{
		alert("Ну и зачем ты это сделал?");
	});
	$("#GetIp").on("click",function()
	{
		alert("Ты прада хочешь его узнать?");
		$.getJSON("https://api.ipify.org/?format=json", function(e) {
			console.log(e.ip)
			$("#GetIp").text("Ваш IP: "+e.ip)
		});
		console.log(ip)

	});
	var count = 0
	$("#second").on("click",function()
	{
		count++;
		console.log(count)
		if($("p").is("#count")){
			console.log("exists")
			$("#count").text("Нажатий на кнопку: "+ count)
		}else{
			console.log("Addinf")
			$("body").append('<p id ="count">Нажатий на кнопку: 1</p>');
		}
	});
	
	var ip = ""
	
	
});
