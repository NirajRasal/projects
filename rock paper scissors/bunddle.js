	let userinput;
	let computerinput;

	//document.getElementById('display').innerHTML=document.getElementById('rock').value;

	//var rock=document.getElementById("rock");
	var options= ["rock","paper","scissors"];
	function rock()
	{
		userinput='rock';
		var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
		document.getElementById('display').innerHTML='user:'+userinput;
		document.getElementById('display1').innerHTML='computer:'+computerinput;
		if (computerinput=='rock')
		{
			document.getElementById('output').innerHTML="it is draw";    //not working
		}
		else if (computerinput=='paper')
		{
			document.getElementById('output').innerHTML='you lose';
		}
		else if(computerinput=='scissors')
		{
			document.getElementById('output').innerHTML='you win';
		}
		else{
			document.getElementById('output').innerHTML='Something went wrong!!! Please try agian..';
		}
	}
	function paper()
	{
		var userinput='paper';
		var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
		document.getElementById('display').innerHTML='user:'+userinput;
		document.getElementById('display1').innerHTML='computer:'+computerinput;
		if (computerinput=='rock')
		{	
			document.getElementById('output').innerHTML="you win";           // Adds to the document	not working
		}
		else if (computerinput=='paper')
		{
			document.getElementById('output').innerHTML='it is draw';
		}
		else if(computerinput=='scissors')
		{
			document.getElementById('output').innerHTML='you lose';
		}
		else{
			document.getElementById('output').innerHTML='Something went wrong!!Please try agian..';
		}
	}
	function scissors()
	{
		userinput='scissors';
		var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
		document.getElementById('display').innerHTML='user:'+userinput;
		document.getElementById('display1').innerHTML='computer:'+computerinput;
		if (computerinput=='rock')
		{
			document.getElementById('output').innerHTML="you lose";
		}
		else if (computerinput=='paper')
		{
			document.getElementById('output').innerHTML='you win';
		}
		else if(computerinput=='scissors')
		{
			document.getElementById('output').innerHTML='it is draw';
		}
		else{
			document.getElementById('output').innerHTML='Something went wrong!!Please try agian..';
		}
	}