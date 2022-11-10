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
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

/**
 *
 * @author nuwan
 */
public class updatecustomer extends HttpServlet {
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {
            String unamefull = request.getParameter("namez");
            String email = request.getParameter("emailz");
            String phonenum = request.getParameter("phone");
            String retypepw = request.getParameter("passw");

            org.hibernate.Session hibses = util.NewHibernateUtil.getSessionFactory().openSession();
            pojo.Customer customezf = (pojo.Customer) request.getSession().getAttribute("userobj");
            Transaction tt = hibses.beginTransaction();

            Criteria cri = hibses.createCriteria(pojo.Customer.class);
            cri.add(Restrictions.eq("email", email));
            pojo.Customer cus = (pojo.Customer) cri.uniqueResult();
            PrintWriter out = response.getWriter();
            if (cus == null) {

                customezf.setName(unamefull);
                customezf.setEmail(email);
                customezf.setPassword(retypepw);
                customezf.setPhone(phonenum);

                hibses.update(customezf);
                tt.commit();

                out.write("ok");
            } else {

                out.write("already");
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
