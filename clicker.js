// JavaScript source code
$('document').ready(function(){


var Cockies = 0;

var PerClick = 1;

var PerSec = 0;

var GrandmaCost = 10;
var PekarCost = 50;
var SmallShopCost = 500;
var FarmCost = 500;
var FactotyCost = 5000;
var ShopCost = 7000;
var CountryCost = 200000;
var PlanetCost = 1000000;

function EverySec(){
	Cockies+=PerSec;
	$(".balanceText").text(Cockies)
	setTimeout(EverySec, 1000);
}
setTimeout(EverySec, 1000);

$(".grandma").on("click", function()
{
	GrandmaCost = Buy(".grandmaCost",GrandmaCost,"c",1);
});

$(".Rab").on("click", function()
{
	PekarCost = Buy(".RabCost",PekarCost,"s",1);
});

$(".SmallShop").on("click", function()
{
	SmallShopCost = Buy(".SmallShopCost",SmallShopCost,"s",5);
});


$(".Ferma").on("click", function()
{
	FarmCost = Buy(".FermaCost",FarmCost,"c",10);
});

$(".Factoty").on("click", function()
{
	FactotyCost = Buy(".FactotyCost",FactotyCost,"c",100);
});

$(".Shop").on("click", function()
{
	ShopCost = Buy(".ShopCost",ShopCost,"s",100);
});

$(".Country").on("click", function()
{
	CountryCost = Buy(".CountryCost",CountryCost,"s",1000);
});

$(".Planet").on("click", function()
{
	PlanetCost = Buy(".PlanetCost",PlanetCost,"c",10000);
});


function Buy(itemCost,Cost, ProfitType,Profit){
	if(Cockies>=Cost)
	{
		Cockies-=Cost;
		NewCost = Math.round(Cost*1.7)
		if(ProfitType == "c"){
			PerClick+=Profit;
			$(".PerClick").text(PerClick)
		}else{
			PerSec+=Profit;
			$(".PerSec").text(PerSec)
		}
		
		var  newcost = 0;

		if(NewCost/1000>=1){
			if(NewCost/1000000 >= 1){
				if(NewCost/1000000000>=1){
					$(itemCost).text(Math.trunc(NewCost/100000000)/10+"B");
					newcost = Math.trunc(NewCost/100000000)*100000000;
				}else{
					$(itemCost).text(Math.trunc(NewCost/100000)/10+"M");
					newcost = Math.trunc(NewCost/100000)*100000;
				}
			}else{
				$(itemCost).text(Math.trunc(NewCost/100)/10+"K");
				newcost = Math.trunc(NewCost/100)*100;
			}
		}else{
			$(itemCost).text(NewCost);
			newcost = NewCost
		}
		console.log(newcost)
		return newcost;
	}else{
		return Cost;
	}

}

$(".clickerBut").mousedown(function(){
	$(".clickerBut").css("height", 230);
    $(".clickerBut").css("width", 230);
});

$(".clickerBut").on("click",function()
{
	Cockies+=PerClick;
	$(".balanceText").text(Cockies)
	$(".clickerBut").css("height", 250);
    $(".clickerBut").css("width", 250);
});


});
