	let userinput;
	let computerinput;
	let i=0;
	let win=0;
	let lose=0;
	let draw=0;
	//let username=document.getElementById('username').value;
/*function usernamee()													not working
{
	username=document.getElementById("username").value;
}
console.log(username);*/
for(i=0;i<5;i++)
{
	var options= ["rock","paper","scissors"];
	function rock()
	{
		userinput='rock';
		var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
		document.getElementById('display').innerHTML='you:'+userinput;
		document.getElementById('display1').innerHTML='computer:'+computerinput;
		if (computerinput=='rock')
		{
			document.getElementById('output').innerHTML="it is draw";
			draw++;  
			document.getElementById('draw').innerHTML='draw='+draw;
		}
		else if (computerinput=='paper')
		{
			document.getElementById('output').innerHTML='you lose';
			lose++;
			document.getElementById('losser').innerHTML='lose='+lose;
		}
		else if(computerinput=='scissors')
		{
			document.getElementById('output').innerHTML='you win';
			win++;
			document.getElementById('winner').innerHTML='win='+win;
		}
		else{
			document.getElementById('output').innerHTML='Something went wrong!!! Please try agian..';
		}
	}
	function paper()
	{
		var userinput='paper';
		var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
		document.getElementById('display').innerHTML='you:'+userinput;
		document.getElementById('display1').innerHTML='computer:'+computerinput;
		if (computerinput=='rock')
		{	
			document.getElementById('output').innerHTML="you win";
			win++;
			document.getElementById('winner').innerHTML='win='+win;      
		}
		else if (computerinput=='paper')
		{
			document.getElementById('output').innerHTML='it is draw';
			draw++;
			document.getElementById('draw').innerHTML='draw='+draw;
		}
		else if(computerinput=='scissors')
		{
			document.getElementById('output').innerHTML='you lose';
			lose++;
			document.getElementById('losser').innerHTML='lose='+lose;
		}
		else{
			document.getElementById('output').innerHTML='Something went wrong!!Please try agian..';
		}
	}
	function scissors()
	{
		userinput='scissors';
		var computerinput = options[Math.floor(Math.random() * options.length)];//to get random array element
		document.getElementById('display').innerHTML='you:'+userinput;
		document.getElementById('display1').innerHTML='computer:'+computerinput;
		if (computerinput=='rock')
		{
			document.getElementById('output').innerHTML="you lose";
			lose++;
			document.getElementById('losser').innerHTML='lose='+lose;
		}
		else if (computerinput=='paper')
		{
			document.getElementById('output').innerHTML='you win';
			win++;
			document.getElementById('winner').innerHTML='win='+win;
		}
		else if(computerinput=='scissors')
		{
			document.getElementById('output').innerHTML='it is draw';
			draw++;
			document.getElementById('draw').innerHTML='draw='+draw;
		}
		else{
			document.getElementById('output').innerHTML='Something went wrong!!Please try agian..';
		}
	}
}
//document.getElementById('rock').disabled=true;
//document.getElementById('paper').disabled=true;
//document.getElementById('scissors').disabled=true;