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
import pojo.Customer;

/**
 *
 * @author Nipuna Liyanage
 */
public class resgiscus extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {

            String fname = request.getParameter("namez");
            String email = request.getParameter("emailz");
            String password = request.getParameter("passwordz");
            String address = request.getParameter("address");
            String phone = request.getParameter("phone");

            Session hibses = util.NewHibernateUtil.getSessionFactory().openSession();
            Transaction tt = hibses.beginTransaction();

            Criteria cri = hibses.createCriteria(pojo.Customer.class);
            cri.add(Restrictions.eq("email", email));
            pojo.Customer cus = (pojo.Customer) cri.uniqueResult();
            PrintWriter out = response.getWriter();
            if (cus == null) {
                pojo.Customer cc = new Customer();
                cc.setName(fname);
                cc.setEmail(email);
                cc.setPassword(password);
                cc.setPhone(phone);
                cc.setAddress(address);

                hibses.save(cc);
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
