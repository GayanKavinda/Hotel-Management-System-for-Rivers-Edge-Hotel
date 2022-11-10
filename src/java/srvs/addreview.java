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
import javax.servlet.http.HttpSession;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author Nipuna Liyanage
 */
public class addreview extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {
            String usercommnt = request.getParameter("userreview");
            HttpSession ses = request.getSession();
            pojo.Customer cus = (pojo.Customer) ses.getAttribute("");
            
            Session hibses = util.NewHibernateUtil.getSessionFactory().openSession();
            Transaction tt = hibses.beginTransaction();
            
            
            pojo.Review rr = new pojo.Review();
            rr.setCid(1);
            rr.setCommentz(usercommnt);
            rr.setStatus("Active");
            hibses.save(rr);
            tt.commit();
            
            PrintWriter out = response.getWriter();
            out.write("ok");
            //rr.setCid(cid);
            

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
