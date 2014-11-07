package com.rishav.student.learn.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.jdbc.*;


@WebServlet("/signUpServlet")
public class signUpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public signUpServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String firstName= request.getParameter("firstName");    
		String lastName= request.getParameter("lastName");
		String emailId= request.getParameter("emailId");
		String password= request.getParameter("password");
		
		HttpSession session = request.getSession(false);
    	session.setAttribute("firstName", firstName);
    	session.setAttribute("lastName", lastName);
    	session.setAttribute("emailId", emailId);
		session.setAttribute("password", password);
		
        response.sendRedirect("userDetails.jsp");
	}

}
