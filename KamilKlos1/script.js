



function pokaz(){


	document.getElementById("y").style.display = "block";
}





function slider() {












var zdj = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];







setTimeout(function(){document.getElementById("x").src= zdj[0];}, 0);


setTimeout(function(){document.getElementById("x").src= zdj[1];}, 3000);


setTimeout(function(){document.getElementById("x").src= zdj[2];}, 6000);


setTimeout(function(){document.getElementById("x").src= zdj[3];}, 9000);


setTimeout(function(){document.getElementById("x").src= zdj[4];}, 12000);














	
}









function zegar1() {



zegar =new Date();

	document.getElementById('test').innerHTML= zegar;



	var czas= 60;





		const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {





		for (var i = 59 ; i >= 0; i--) {


				for (var j = 60; j >= 0; j--) {
					document.getElementById("zegar").innerHTML = i +":"+ j;
					await sleep(1000)
				}



			await sleep(1000)
 
			}





		

 
  
  
}

repeatedGreetings()



	
}




function obliczenia(){




var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;

var a = parseFloat(a);
var b = parseFloat(b);
var c = parseFloat(c);

var wynik1 =a**b-c;

document.getElementById("wynik").innerHTML = wynik1;





if (b==0) {

document.getElementById("wyniks").innerHTML = "liczba a nie moze byc zerem";

}



else{

	var wynik2= a/b - a*c;
	document.getElementById("wyniks").innerHTML = wynik2;
}







if (b==0 || a==0) {

document.getElementById("wynikc").innerHTML = "liczba  a i liczba b  nie moze byc zerem";

}



else{

	var wynik3= c/b+ b/a;
	document.getElementById("wynikc").innerHTML = wynik3;
}



}





 