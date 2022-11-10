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
public class cancellorder extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String parkidz = request.getParameter("parkingidz");

            Session sess = util.NewHibernateUtil.getSessionFactory().openSession();
            Transaction tt = sess.beginTransaction();
            pojo.Bill cusp = (pojo.Bill) sess.load(pojo.Bill.class, Integer.parseInt(parkidz));

           
            cusp.setStatuz("Cancelled");

           
            sess.update(cusp);
            tt.commit();
            response.getWriter().write("ok");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
