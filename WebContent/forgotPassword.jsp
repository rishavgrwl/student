<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>New User</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="js/forgotPass.js"></script>
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
				<h1>Forgot Password</h1>
				<h2></h2>
		</div>
		
		<div id="content">
				
		<div id="mainbar">
			<%
				if (session.getAttribute("error") != null && session.getAttribute("error").equals("notFound") ){ 
			%>
				<span id="userIdError" class= "loginError" > This user name does not exist. Please check the userId or Please sign up <br/> </span>
			<% 		
					session.removeAttribute("error");
				}
			%>
			
			<form action="forgotServlet" method="post">
				<p>
						<label class="instructionLabel"> Please enter your user id: </label> 
						<input type = "text" id="userId" name="userId" class= "inputTextField" maxlength=30/>
						<span id="userIdError" class= "ErrorLabel" > </span>
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
				<input type="submit" value="Submit" id="submitButton" disabled/>
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