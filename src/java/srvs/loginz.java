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
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

/**
 *
 * @author Nipuna Liyanage
 */
public class loginz extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try {
            String unamez = request.getParameter("unamaz");
            String pw = request.getParameter("pw");
            
            Session hibses = util.NewHibernateUtil.getSessionFactory().openSession();
            Criteria cri = hibses.createCriteria(pojo.Customer.class);
            cri.add(Restrictions.eq("email", unamez));
            cri.add(Restrictions.eq("password", pw));
            
            pojo.Customer cc = (pojo.Customer) cri.uniqueResult();
            
            PrintWriter out = response.getWriter();
            
            if (cc == null) {
                out.write("invalid");
            } else {
                HttpSession hs = request.getSession();
                hs.setAttribute("userobj", cc);
                out.write("ok");
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
