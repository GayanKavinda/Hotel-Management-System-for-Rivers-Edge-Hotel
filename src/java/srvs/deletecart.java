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
 * @author nuwan
 */
public class deletecart extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            
            String menuidz = request.getParameter("orfd");
            int usermenuidz = Integer.parseInt(menuidz);
            pojo.Customer customez = (pojo.Customer) request.getSession().getAttribute("userobj");
            System.out.printf("Comes To Servlett...!");
            if (customez == null) {
                response.getWriter().write("userz");
            } else {

                Session sess = util.NewHibernateUtil.getSessionFactory().openSession();
                Transaction tc = sess.beginTransaction();

                pojo.OrderFood mm = (pojo.OrderFood) sess.load(pojo.OrderFood.class, Integer.parseInt(menuidz));
                
                
                sess.delete(mm);
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
