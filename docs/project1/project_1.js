var red = 0;
var green = 0;
var blue = 0;


/* Modified From W3Schools Code for Enter Key : https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp */
document.getElementById('redRange').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    slideUpdate();
  }
});

document.getElementById('greenRange').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    slideUpdate();
  }
}); 

document.getElementById('blueRange').addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    slideUpdate();
  }
});

function updateValues(){
	/* Update Red Markers */
	document.getElementById("redRange").value = red;
	document.getElementById("red_box").style.backgroundColor ='rgb(' + red.toString() +',0,0)';	
	document.getElementById("red_box").innerHTML = red.toString();
	document.getElementById("red_range_box").style.backgroundColor ='rgb(' + red.toString() +',0,0)';	
	document.getElementById("red_range_box").innerHTML = red.toString();
		
	/* Update Green Markers */
	document.getElementById("greenRange").value = green;
	document.getElementById("green_box").style.backgroundColor ='rgb(0,' + green.toString() +',0)';	
	document.getElementById("green_box").innerHTML = green.toString();	
	document.getElementById("green_range_box").style.backgroundColor ='rgb(0,' + green.toString() +',0)';	
	document.getElementById("green_range_box").innerHTML = green.toString();	
	
	/* Update Blue Markers */
	document.getElementById("blueRange").value = blue;
	document.getElementById("blue_box").style.backgroundColor ='rgb(0,0,' + blue.toString() +')';	
	document.getElementById("blue_box").innerHTML = blue.toString();
	document.getElementById("blue_range_box").style.backgroundColor ='rgb(0,0,' + blue.toString() +')';	
	document.getElementById("blue_range_box").innerHTML = blue.toString();
	
	/* Update Main Box */
	document.getElementById('box').style.backgroundColor = 'rgb(' + red.toString() +','+green.toString()+','+blue.toString()+')';	
	/* Update Hex Value Listed */
	var redText = parseInt(red).toString(16);
	if(redText.length == 1)
	{
		redText = '0' + redText;
	}
	var blueText = parseInt(blue).toString(16);
	if(blueText.length == 1)
	{
		blueText = '0' + blueText;
	}
	var greenText = parseInt(green).toString(16);
	if(greenText.length == 1)
	{
		greenText = '0' + greenText;
	}
	var hexColor = '#' +redText+ greenText + blueText;
	document.getElementById('hex_val').innerHTML = hexColor;
	//document.getElementById('color_name').innerHTML = hexColor;
}
function changeColor(color, direction)
{
	if(color == 'r')
	{
		if(direction == 'up')
		{
			red += 10;
			if(red > 255)
			{
				red = 255;
			}
		}
		else
		{
			red -= 10;
			if(red < 0)
			{
				red = 0;
			}
		}
		
	}
	else if(color == 'g')
	{
		if(direction == 'up')
		{
			green += 10;
			if(green > 255)
			{
				green = 255;
			}
		}
		else
		{
			green -= 10;
			if(green < 0)
			{
				green = 0;
			}
		}
			
	}
	else
	{
		if(direction == 'up')
		{
			blue += 10;
			if(blue > 255)
			{
				blue = 255;
			}
		}
		else
		{
			blue -= 10;
			if(blue < 0)
			{
				blue = 0;
			}
		}
	}
	updateValues();
	
}

function slideUpdate()
{
	red = document.getElementById("redRange").value;
	green = document.getElementById("greenRange").value;
	blue = document.getElementById("blueRange").value;
	updateValues();
}

