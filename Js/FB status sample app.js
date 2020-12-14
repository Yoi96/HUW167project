// JavaScript Document


function post()
{
	var userInput = document.getElementById('textinput').value;

	if (userInput !== null && userInput !== '') 
	{
		var element = document.createElement('p');
		
		element.style.display = "inline-block";
		
		element.style.color = "blue";
		
		element.style.borderBottom="1px solid gray";
		
		element.style.fontSize = "20px";

		var text = document.createTextNode( ' " ' +  userInput  + ' " ');

		element.appendChild(text );

		document.body.appendChild(element);

		var like = document.createElement('p');
		like.setAttribute("id", "Div1");

		var likeText = document.createTextNode(' LIKE ');
		like.appendChild(likeText);
		document.body.appendChild(like);
		like.addEventListener("click", likeCounter);
	
		like.style.display = "inline-block";

}

else 
{ 	
	alert('you have to write a status!');
}


}


	var x =-1;

	


	function likeCounter()
	{
		x = x+1;
		document.getElementById('show').innerHTML = x+1 + " people like your comment!";	

	}
