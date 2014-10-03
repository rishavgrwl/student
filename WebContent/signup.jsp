<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>New User</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="js/pass.js"></script>
<script type="text/javascript" src="js/MD5.js"></script>
<link href="css/Style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<a name="top" id="top"></a>
<center>
		<div id="menu">
				<a href="#top">home</a> <a href="#intro">introduction</a> <a href="#css">css &amp; xhtml</a> <a href="#about">about the author</a> 
		</div>
		
		<div id="header">
				<h1>Sign Up</h1>
				<h2>Its free! </h2>
		</div>
		
		<div id="content">
				
		<div id="mainbar">
			<form action="signUpServlet" method="post">
				<p>
						<label class="instructionLabel"> Please enter your first name: </label> 
						<input type = "text" id="firstName" name="firstName" class= "inputTextField" maxlength=15/>
						<span id="firstNameError" class= "ErrorLabel" > </span>
				</p>
				<p>
						<label class="instructionLabel"> Please enter your last name:  </label>
						<input type = "text" id="lastName" name="lastName" class= "inputTextField" maxlength=15/>
						<span id="lastNameError" class= "ErrorLabel" > </span>
				</p>
				<p>
						<label class="instructionLabel">Please enter your email id:  </label>
						<input type = "text" id="emailId" name="emailId" class= "inputTextField" maxlength=30/>
						<span id="emailError" class= "ErrorLabel" > </span>
				</p>
				<p>
						<label class="instructionLabel"> Please enter your password:  </label>
						<input type = "password" id="password" name="password" class= "inputTextField"/>
						<span id="passError" class= "ErrorLabel" > </span>
				</p>
				<p>
						<label class="instructionLabel"> Please re-enter your password:  </label>
						<input type = "password" id="repassword" name="repassword" class= "inputTextField"/>
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