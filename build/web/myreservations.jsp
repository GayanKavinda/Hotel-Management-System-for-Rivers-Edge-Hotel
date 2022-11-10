<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="org.hibernate.criterion.Restrictions"%>
<%@page import="java.util.List"%>
<%@page import="org.hibernate.Criteria"%>
<%@page import="org.hibernate.Session"%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Majesty by creative-wp - Responsive HTML5 template">
        <meta name="author" content="creative-wp">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>MY ORDERS</title>
        <link rel="shortcut icon" href="img/favicon/favicon.ico">
        <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-touch-icon-144x144.png">
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="stylesheets/owl.carousel.css">
        <link rel="stylesheet" href="stylesheets/owl.theme.css">
        <link rel="stylesheet" href="stylesheets/animate.css">
        <link rel="stylesheet" href="stylesheets/jquery.datetimepicker.css">
        <link rel="stylesheet" href="stylesheets/prettyPhoto.css">
        <link rel="stylesheet" href="stylesheets/font-awesome.min.css">
        <link href="fonts/fonts.css" rel="stylesheet">
        <link href="stylesheets/main.css" rel="stylesheet">
        <link href="stylesheets/main-responsive.css" rel="stylesheet">
        <script type="text/javascript" src="custom/sweetalert.min.js"></script>
    </head>
    
    <body class="boxed" >
        <div id="wrapper">
            <section class="banner dark" >
                <div id="service-parallax">
                    <div class="bcg background3"
                         data-center="background-position: 50% 0px;"
                         data-bottom-top="background-position: 50% 100px;"
                         data-top-bottom="background-position: 50% -100px;"
                         data-anchor-target="#service-parallax"
                         >
                        <div class="bg-transparent">
                            <div class="banner-content">
                                <div class="container" >
                                    <div class="slider-content  "> <i class="icon-home-ico"></i>
                                        <h1>My Orders</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <header id="header" class="header-transparent">
                <div class="container">
                    <div class="row">
                        <div id="main-menu-trigger"><i class="fa fa-bars"></i></div>
                        <div id="logo"> <a href="index.jsp" class="light-logo"><img src="img/logo.png" alt="Logo"></a> <a href="index.jsp" class="dark-logo"><img src="img/logo_dark.png" alt="Logo"></a> </div>

                        <%@include file="header.jsp" %>
                    </div>
                </div>
            </header>

            <div id="content">
                <section class="padding-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Order Id</th>
                                                <th>Order Amount</th>
                                                <th>Ordered Date</th>
                                                <th>Ordered Time</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <% 
                                                Session S1 = util.NewHibernateUtil.getSessionFactory().openSession();
                                                pojo.Customer customer = (pojo.Customer) request.getSession().getAttribute("userobj");

                                                Criteria c1 = S1.createCriteria(pojo.Bill.class);
                                                c1.add(Restrictions.eq("customerid", "" + customer.getCid()));
                                                List<pojo.Bill> billdetails = c1.list();
                                                for (pojo.Bill bd : billdetails) {
                                                    Date date = new Date();
                                                    SimpleDateFormat sdf2 = new SimpleDateFormat("hh:mm:s");
                                                    String time = sdf2.format(date);
                                                    Date nowtime = sdf2.parse(time);
                                                    String order = bd.getTimez();
                                                    Date ordertime = sdf2.parse(order);

                                                    long diff = nowtime.getTime() - ordertime.getTime();
                                                    long diffMinutes = diff / (60 * 1000) % 60;
                                                    String status =bd.getStatuz();
                                            %>
                                            <tr>
                                                <th><%= bd.getOrderId()%></th>
                                                <td><%= bd.getAmount()%></td>
                                                <td><%= bd.getDatez()%></td>
                                                <td><%= bd.getTimez()%></td>
                                                <td><%= bd.getStatuz() %></td>

                                                <%
                                                    if (diffMinutes <= 3 && !(status.equals("Cancelled")) ) {   
                                                %>
                                                <td>
                                                    <button  class="small-btn alizarin-btn" onclick="cancelBill(<%=bd.getBillid()%>)">Cancel Order</button>
                                                </td>
                                                <%
                                                    }
                                                %>
                                            </tr>
                                            <%
                                                }
                                            %>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <%@include file="footer.jsp" %>
            <a href="#" id="scroll_up" ><i class="fa fa-angle-up"></i></a> </div>


        <script>
            function cancelBill(id) {
                var yewxmlhttp;
                
                if (window.XMLHttpRequest) {
                    yewxmlhttp = new XMLHttpRequest();
                } else {
                    yewxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                yewxmlhttp.onreadystatechange = function () {

                    if (yewxmlhttp.readyState == 4 && yewxmlhttp.status == 200) {
                        var gett = yewxmlhttp.responseText;
                        
                        if (gett === "ok") {
                            swal("Done!", "Order Cancelled..!", "success");
                            window.location = "myreservations.jsp";
                        }
                    }
                }

                yewxmlhttp.open("POST", "cancellorder", true);
                yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                yewxmlhttp.send("parkingidz=" + id);

            }
        </script>
        <script src="javascripts/libs/jquery.min.js" type="text/javascript"></script>
        <script src="javascripts/libs/plugins.js"></script>
        <!-- JS Plugins -->
        <script src="http://maps.googleapis.com/maps/api/js"></script>
        <script src="javascripts/libs/modernizr.js"></script>
        <!-- JS Custom Codes -->
        <script src="javascripts/custom/main.js" ></script>
    </body>

</html>