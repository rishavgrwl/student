package com.rishav.student.learn.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class loginServlet
 */
@WebServlet("/loginServlet")
public class loginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public loginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId= request.getParameter("userId");    
		String password= request.getParameter("password");
		
		try { 
			Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/newProjectDatabase"; 
            Connection conn = DriverManager.getConnection(url,"root",""); 
            Statement st = conn.createStatement(); 
            ResultSet rs = st.executeQuery("Select * from customer " + 
                "where customer_id='"+ userId +"' AND customer_password='" + password + "'"); 
            
            if( rs.next() ) {
            	HttpSession session = request.getSession(false);
            	String customerFirstName = rs.getString("customer_first_name");
            	String customerLastName = rs.getString("customer_last_name");
            	String customerEmail= rs.getString("customer_id");
            	session.setAttribute("customerFirstName", customerFirstName + " " + customerLastName);
            	session.setAttribute("customerEmail", customerEmail);
            	response.sendRedirect("Dummy.jsp");
            } else {
            	HttpSession session = request.getSession(false);
            	session.setAttribute("error", "notFound");
            	response.sendRedirect("Login.jsp");
            }
            System.out.println(rs);
            conn.close(); 
            
        } catch (Exception e) { 
            System.err.println("Got an exception! "); 
            System.err.println(e.getMessage()); 
        } 
	}

}
