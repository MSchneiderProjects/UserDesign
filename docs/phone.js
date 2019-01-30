var contacts = [];

$(document).ready(function(){
	
	$("#dialer_b").click(function() { // Display Phone Dial
		 $("#dialer").removeClass("hidden");
		 $("#contact_list").addClass("hidden");
		 $("#add_contact").addClass("hidden");
	});
	
	$("#contact_list_b").click(function() { // Display Contacct List
		$("#dialer").addClass("hidden");
		$("#contact_list").removeClass("hidden");
		$("#add_contact").addClass("hidden");
	});
	
	$("#add_contact_b").click(function() { // Display Add New Contact List
		$("#dialer").addClass("hidden");
		$("#contact_list").addClass("hidden");
		$("#add_contact").removeClass("hidden");
	});
});

function addDigit(digit){
	var currentNum = document.getElementById("number").value;
	if( String(currentNum).length == 0){
		document.getElementById("number").value += "(";
	}
	else if( String(currentNum).length == 4){
		document.getElementById("number").value += ") ";
	}
	else if( String(currentNum).length == 9){
		document.getElementById("number").value += "-";
	}
	if(String(currentNum).length <= 13){ 
		document.getElementById("number").value += String(digit);
	}
}

function addContact(){
	var c_name = document.getElementById("name").value;
	var c_phoneNumber = document.getElementById("phoneNumber").value;
	var c_email = document.getElementById("email").value;
	if(c_name.length != 0 && c_phoneNumber.length != 0 && c_email.length != 0)
	{
		var duplicateFound = false;
		contacts.forEach(function(contact){
			if(c_name === contact.name)
			{
				duplicateFound = true;
				alert("WARNING... DUPLICATE FOUND... DUPLICATES CANNOT BE ADDED TO THE CONTACT LIST");
			}
		});
		
		if(!duplicateFound ){//Add a new contact to the contacts list
			var entry = {name: c_name, phone: c_phoneNumber, email: c_email};
			
			contacts.push(entry);
			//Update the contacts list tab
			updateContactListTab();
			
			//Switch views to show the contact list tab
			$("#dialer").addClass("hidden");
			$("#contact_list").removeClass("hidden");
			$("#add_contact").addClass("hidden");
			
			
		}
	}
	
}

function updateContactListTab()
{
								
	var contactInfo = '<br><br><div class="row justify-content-center">';
	var colCounter = 0;
	contacts.forEach(function(contact) {
		contactInfo += '<button class="btn btn-primary btn-lg" type="button" onclick="" >'+contact.name +'</button>';
		colCounter++;
		if(colCounter % 3 == 0)
		{
			contactInfo += '</div><div class="row justify-content-center">';
		}
		
	});

	contactInfo += '</div>';
	document.getElementById("contact_info").innerHTML = contactInfo;
}
