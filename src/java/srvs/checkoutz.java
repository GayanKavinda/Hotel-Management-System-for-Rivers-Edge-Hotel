/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package srvs;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author nuwan
 */
public class checkoutz extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            
            String menuidz = request.getParameter("orfd");
            String subtotalz = request.getParameter("subz");
            int usermenuidz = Integer.parseInt(menuidz);
            pojo.Customer customez = (pojo.Customer) request.getSession().getAttribute("userobj");
            System.out.printf("Comes To Servlett...!");
            if (customez == null) {
                response.getWriter().write("userz");
            } else {

                Session sess = util.NewHibernateUtil.getSessionFactory().openSession();
                Transaction tc = sess.beginTransaction();

                pojo.Order mm = (pojo.Order) sess.load(pojo.Order.class, Integer.parseInt(menuidz));
                mm.setStatus("Payed");
                              
                
                sess.update(mm);
                
                pojo.Bill bb = new pojo.Bill();
                
                Date dd = new Date();
                
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
                SimpleDateFormat sdf2 = new SimpleDateFormat("hh:mm:s");
                
                String datez =sdf.format(dd);
                String timez =sdf2.format(dd);
                
                
                
                
                bb.setOrderId(usermenuidz);
                bb.setAmount(Integer.parseInt(subtotalz));
                bb.setDatez(datez);
                bb.setTimez(timez);
                bb.setStatuz("Ordered");
                bb.setCustomerid(""+customez.getCid());
                
                
                sess.save(bb);
                tc.commit();
                
                
                response.getWriter().write("ok");
                
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
