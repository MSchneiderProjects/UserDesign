var contacts = [{name: "John Doe", phone: "(123)457-9999", email: "john.john@email.com"}];

$(document).ready(function(){
	
	$("#dialer_b").click(function() { // Display Phone Dial
		 $("#dialer").removeClass("hidden");
		 $("#contact_list").addClass("hidden");
		 $("#add_contact").addClass("hidden");
		 $("#help").addClass("hidden");
	});
	
	$("#contact_list_b").click(function() { // Display Contacct List
		$("#dialer").addClass("hidden");
		$("#contact_list").removeClass("hidden");
		$("#add_contact").addClass("hidden");
		$("#help").addClass("hidden");
	});
	
	$("#add_contact_b").click(function() { // Display Add New Contact List
		$("#dialer").addClass("hidden");
		$("#contact_list").addClass("hidden");
		$("#add_contact").removeClass("hidden");
		$("#help").addClass("hidden");
	});
	
	$("#help_b").click(function() { // Display Add New Contact List
		$("#dialer").addClass("hidden");
		$("#contact_list").addClass("hidden");
		$("#add_contact").addClass("hidden");
		$("#help").removeClass("hidden");
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

function clearDial()
{
	document.getElementById("number").value = "";
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
			$("#help").addClass("hidden");
			
		}
	}
	
}

function updateContactListTab()
{
								
	var contactInfo = '<br><br><table class="table table-hover"><thead><tr><th>Name</th><th>Email</th><th>Phone Number</th></tr></thead><tbody>';
	var colCounter = 0;
	contacts.forEach(function(contact) {
		contactInfo += '<tr><td>'+contact.name +'</td><td>'+contact.email +'</td><td>'+contact.phone +'</td></tr>';		
	});

	contactInfo += '</tbody></table>';
	document.getElementById("contact_info").innerHTML = contactInfo;
}
