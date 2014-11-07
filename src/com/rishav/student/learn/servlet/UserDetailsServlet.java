package com.rishav.student.learn.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Calendar;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class UserDetailsServlet
 */
@WebServlet("/UserDetailsServlet")
public class UserDetailsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserDetailsServlet() {
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
		
		Calendar lCDateTime = Calendar.getInstance();
		// TODO Auto-generated method stub
		
		HttpSession session = request.getSession(false);
		String firstName= (String) session.getAttribute("firstName");    
		String lastName= (String) session.getAttribute("lastName");
		String emailId= (String) session.getAttribute("emailId");
		String password= (String) session.getAttribute("password");
		String addressId = request.getParameter("addressId");
		String addressLine1 = request.getParameter("street1");
		String addressLine2 = request.getParameter("street2");
		String city = request.getParameter("city");
		String state = request.getParameter("state");
		String zipCode = request.getParameter("zipCode");
		String phone = request.getParameter("phone");
		String landmark = request.getParameter("landmark");
		int atomicHackMaintainer = 0;
		Connection conn = null;
		Statement st = null;
		try { 
			Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/newProjectDatabase"; 
            conn = DriverManager.getConnection(url,"root",""); 
            st = conn.createStatement(); 
            st.executeUpdate("INSERT INTO customerData (customer_id, customer_first_name, customer_last_name, customer_password) " + 
                "VALUES ('"+ emailId +"', '"+ firstName +"', '"+ lastName +"', '"+ password +"')");
            
            atomicHackMaintainer++;
            st.executeUpdate("INSERT INTO userDetailsTable (userId, userJoiningDate, rating, immediateRating) " + 
                    "VALUES ('"+ emailId +"', '"+ Math.log( lCDateTime.getTimeInMillis()) +"', '"+ 0.0 +"', '"+ 0.0 +"')");
            
            atomicHackMaintainer++;
            
            st.executeUpdate("INSERT INTO userAddressesTable (userId, addressId, street1, street2, state, zipcode, landmark, city, phoneNumber) " + 
                    "VALUES ('"+ emailId +"', '"+ addressId +"', '"+ addressLine1 +"', '"+ addressLine2 +"', '"+ state +"', '"+ zipCode +"', '" + landmark +"', '" + city +"', '"+ phone  + "')");
            
            atomicHackMaintainer++;

            conn.close(); 
            response.sendRedirect("userDetails.jsp");
        } catch (Exception e) {

        	if(atomicHackMaintainer == 1) {
        		try {
					st.executeUpdate("delete from customerData where customer_id =" +emailId+ " ");
				} catch (SQLException e1) {
					e1.printStackTrace();
				}
        	} else if(atomicHackMaintainer == 2) {
        		try {
					st.executeUpdate("delete from customerData where customer_id =" +emailId+ " ");
					st.executeUpdate("delete from userDetailsTable where userId =" +emailId+ " ");
				} catch (SQLException e1) {
				}
        		
        	}
            System.err.println("Got an exception! "); 
            System.err.println(e.getMessage()); 
        } 
	}

}
