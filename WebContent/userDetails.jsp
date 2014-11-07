<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>New User</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="js/address.js"></script>
<script type="text/javascript" src="js/MD5.js"></script>
<link href="css/Style.css" rel="stylesheet" type="text/css" />
</head>
<body>
				<%
					String [] states = {"Andhra Pradesh","Arunachal Pradesh", "Assam",
										"Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
										"Himachal Pradesh", "Jammu and Kashmir", "Jharkhand",
										"Karnataka", "Kerala", "Madya Pradesh", "Maharashtra",
										"Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa",
										"Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura",
										"Uttaranchal", "Uttar Pradesh", "West Bengal", 
										"Andaman and Nicobar Islands", "Chandigarh",
										"Dadar and Nagar Haveli", "Daman and Diu",
										"New Delhi", "Lakshadeep", "Pondicherry"};
				%>
<a name="top" id="top"></a>
<center>
		<div id="menu">
				<a href="#top">home</a> <a href="#intro">introduction</a> <a href="#css">css &amp; xhtml</a> <a href="#about">about the author</a> 
		</div>
		
		<div id="header">
				<h1>Please enter your details</h1>
				<h2>Last Step! </h2>
		</div>
		
		<div id="content">

		<div id="mainbar">
			<form action="UserDetailsServlet" method="post">
				<input type="hidden" id="addressId" name="addressId" value="">
				<p>
						<label class="instructionLabel"> Please enter your address line 1: </label> 
						<input type = "text" id="street1" name="street1" class= "inputTextField" maxlength=50/>
						<span id="addressLine1Error" class= "ErrorLabel" > </span>
				</p>
				<p>
						<label class="instructionLabel"> Please enter your address line 2: </label> 
						<input type = "text" id="street2" name="street2" class= "inputTextField" maxlength=50/>
						<span id="addressLine2Error" class= "ErrorLabel" > </span>
				</p>
				<p>
						<label class="instructionLabel"> Please enter your city name: </label> 
						<input type = "text" id="city" name="city" class= "inputTextField" maxlength=20/>
						<span id="cityError" class= "ErrorLabel" > </span>
				</p>
				<p>
						<label class="instructionLabel"> Please enter your state: </label> 
						<select id="state" name="state" class= "inputTextField">
						<%
							for(String state : states){
						%>
							<option value="<%= state %>"> <%= state %> </option>
						<%
							}
						%>
						</select>
				</p>
				<p>
						<label class="instructionLabel"> Please enter your zip code: </label> 
						<input type = "text" id="zipCode" name="zipCode" class= "inputTextField" maxlength=6/>
						<span id="zipCodeError" class= "ErrorLabel" > </span>
				</p>
				
				<p>
						<label class="instructionLabel"> Please enter your phone number: </label> 
						<input type = "text" id="phone" name="phone" class= "inputTextField" maxlength=11/>
						<span id="phoneError" class= "ErrorLabel" > </span>
				</p>
				
				<p>
						<label class="instructionLabel"> Please enter any landmark (optional): </label> 
						<input type = "text" id="landmark" name="landmark" class= "inputTextField" maxlength=30/>
				</p>
				<p>
				<input type="submit" value="submit" id="submitButton" disabled/>
				</p> 
			</form>
		</div>
		
  </div>
  <div id="footer">
  		This is the footer. Put all your copyright info here.<br />
  Page designed by <a href="http://www.sixshootermedia.com">6ix Shooter Media</a> extra modificated by <a href="mailto:mcposeidon@mcville.net">Pos3idon</a></div>
</center>
</body>
</html>