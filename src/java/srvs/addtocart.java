package srvs;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import pojo.Order;
import pojo.OrderFood;

public class addtocart extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        try {

            String MenuId = request.getParameter("menuid");
            int SelectedMenuId = Integer.parseInt(MenuId);
            
            pojo.Customer customer = (pojo.Customer) request.getSession().getAttribute("userobj");
            if (customer == null) {
                response.getWriter().write("userz");
            } else {
                Session S1 = util.NewHibernateUtil.getSessionFactory().openSession();
                Transaction transaction = S1.beginTransaction();

                pojo.Menu menu = (pojo.Menu) S1.load(pojo.Menu.class, Integer.parseInt(MenuId));

                Date date = new Date();
                SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
                String todayDate = format.format(date);

                SimpleDateFormat timeFormat = new SimpleDateFormat("hh:mm:ss");
                String todayTime = timeFormat.format(date);

                Criteria cri = S1.createCriteria(pojo.Order.class);
                cri.add(Restrictions.eq("cid", customer.getCid()));
                cri.add(Restrictions.eq("status", "Pending"));

                
                // If no food items in the cart

                pojo.Order cart = (Order) cri.uniqueResult();
                if (cart == null) {
                    pojo.Order orders = new pojo.Order();
                        orders.setDate(todayDate);
                        orders.setTime(todayTime);
                        orders.setCid(customer.getCid());
                        orders.setStatus("Pending");
                    S1.save(orders);

                    pojo.OrderFood of = new pojo.OrderFood();
                        of.setOrderId(orders.getOrderId());
                        of.setFoodId(menu.getMenuId());
                        of.setQty(1);
                    S1.save(of);
                    response.getWriter().write("ok");

                    
                // If no food items in the cart
                } else {
                    Criteria criteria2 = S1.createCriteria(pojo.OrderFood.class);
                    criteria2.add(Restrictions.eq("orderId", cart.getOrderId()));
                    List<pojo.OrderFood> orlist = criteria2.list();
                    for (OrderFood ORD : orlist) {
                        int menuideka = ORD.getFoodId();
                        if (menuideka == SelectedMenuId) {
                            ORD.setQty(ORD.getQty() + 1);
                            S1.update(ORD);
                            break;
                            
                        } else {
                            pojo.OrderFood ofd = new pojo.OrderFood();
                            ofd.setOrderId(cart.getOrderId());
                            ofd.setFoodId(menu.getMenuId());
                            ofd.setQty(1);
                            S1.save(ofd);
                            break;
                        }

                    }

                    response.getWriter().write("updated");
                }
                transaction.commit();
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
