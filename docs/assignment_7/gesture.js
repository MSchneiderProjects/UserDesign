/* code here */
var mouseX = 0;
var mouseY = 0;

$( "#gestureArea" ).mousedown(function() {
	mouseX = event.pageX;
	mouseY = event.pageY;
	console.log("Mouse X: " + mouseX.toString() + "  Mouse Y: " + mouseY.toString());
});

$( "#gestureArea" ).mouseup(function() {
	mouseX -= event.pageX;
	mouseY -= event.pageY;
	var x_direction;
	if(mouseX < -20)
	{
		x_direction = 1;//Right
	}
	else if(mouseX > 20)
	{
		x_direction = -1;//Left
	}
	else
	{
		x_direction =0;//No X movement
	}
	
	var y_direction;
	if(mouseY < -20)
	{
		y_direction = -1;//Down
	}
	else if(mouseY > 20)
	{
		y_direction = 1;//Up
	}
	else
	{
		y_direction = 0;//No Y Movement
	}
	console.log("Mouse X: " + mouseX.toString() + "  Mouse Y: " + mouseY.toString());
	console.log("Y Direction: " + y_direction + "X Direction: " + x_direction);
	var direction_message = "No Movement";
	if(x_direction == 1 && y_direction == 0)
	{
		direction_message = "Swipe Right";
	}
	else if(x_direction == -1 && y_direction == 0)
	{
		direction_message = "Swipe Left";
	}
	else if(x_direction == 0 && y_direction == 1)
	{
		direction_message = "Swipe Up";
	}
	else if(x_direction == 0 && y_direction == -1)
	{
		direction_message = "Swipe Down";
	}
	else if(x_direction == 1 && y_direction == 1)
	{
		direction_message = "Swipe Up and to the Right";
	}
	else if(x_direction == 1 && y_direction == -1)
	{
		direction_message = "Swipe Down and to the Right";
	}
	else if(x_direction == -1 && y_direction == 1)
	{
		direction_message = "Swipe Up and to the Left";
	}
	else if(x_direction == -1 && y_direction == -1)
	{
		direction_message = "Swipe Down and to the Left";
	}
	
	document.getElementById("gestureResult").innerHTML = direction_message;
});