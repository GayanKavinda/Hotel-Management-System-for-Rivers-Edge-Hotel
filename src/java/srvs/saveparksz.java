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
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

/**
 *
 * @author Nipuna Liyanage
 */
public class saveparksz extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {
            String slotname = request.getParameter("slotnamez");
            String vehtype = request.getParameter("vehtype");
            String datez = request.getParameter("datez");
            String timez = request.getParameter("timez");
            PrintWriter ot = response.getWriter();
            System.out.println("awaaaaa servlet ekataaa");
            pojo.Customer cuz = (pojo.Customer) request.getSession().getAttribute("userobj");
            if (cuz == null) {
                ot.write("userz");
            } else {
                
                Session sess = util.NewHibernateUtil.getSessionFactory().openSession();
                Transaction tt  = sess.beginTransaction();
                Criteria cc = sess.createCriteria(pojo.Parkslot.class);
                cc.add(Restrictions.eq("slotname", slotname));
                
                pojo.Parkslot parkz = (pojo.Parkslot) cc.uniqueResult();
                
                pojo.Customerpark cusz = new pojo.Customerpark();
                cusz.setCid(cuz.getCid());
                cusz.setDuration("Active");
                cusz.setSlotId(parkz.getSlotId());
                cusz.setDate(datez);
                cusz.setTime(timez);
                cusz.setType(vehtype);
                
                parkz.setAvailable("in");
                sess.update(parkz);
                sess.save(cusz);
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
