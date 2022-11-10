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
import pojo.BookingTable;

/**
 *
 * @author Nipuna Liyanage
 */
public class addreservationz extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String tablecount = request.getParameter("tablecoun");
            String occacions = request.getParameter("occacianzz");
            String mealplansz = request.getParameter("mealplanz");
            String selecteddated = request.getParameter("selecteddate");
            String selectetimez = request.getParameter("selectedtimez");

            PrintWriter ot = response.getWriter();
            System.out.println("awaaaaa servlet ekataaa reservation");

            pojo.Customer cuz = (pojo.Customer) request.getSession().getAttribute("userobj");
            if (cuz == null) {
                ot.write("userz");
            } else {
                Session sess = util.NewHibernateUtil.getSessionFactory().openSession();
                Transaction tt = sess.beginTransaction();
                
                pojo.BookingTable bttab = new BookingTable();
             //   bttab.setBookeddate(selecteddated);
               // bttab.setBooktime(selectetimez);
                bttab.setCid(cuz.getCid());
                bttab.setMealplan(mealplansz);
                bttab.setNumberOfSeat(Integer.parseInt(tablecount));
                bttab.setOccasionz(occacions);
                bttab.setStatus("Active");
                
                sess.save(bttab);
                tt.commit();
                ot.write("ok");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
