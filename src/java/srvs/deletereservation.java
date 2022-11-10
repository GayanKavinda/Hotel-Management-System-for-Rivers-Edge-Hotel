/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package srvs;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author Nipuna Liyanage
 */
public class deletereservation extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String parkidz = request.getParameter("parkingidz");

        Session sess = util.NewHibernateUtil.getSessionFactory().openSession();
        Transaction tt = sess.beginTransaction();
        pojo.BookingTable cusp = (pojo.BookingTable) sess.load(pojo.BookingTable.class, Integer.parseInt(parkidz));

        sess.delete(cusp);

        tt.commit();
        response.getWriter().write("ok");
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
