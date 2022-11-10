<%@page import="pojo.OrderFood"%>
<%@page import="java.util.List"%>
<%@page import="org.hibernate.Criteria"%>
<%@page import="pojo.Order"%>
<%@page import="org.hibernate.criterion.Restrictions"%>
<%@page import="org.hibernate.Session"%>
<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Majesty by creative-wp - Responsive HTML5 template">
        <meta name="author" content="creative-wp">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CART DETAILS</title>
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
                <div id="cart-parallax">
                    <div class="bcg background39"
                         data-center="background-position: 50% 0px;"
                         data-bottom-top="background-position: 50% 100px;"
                         data-top-bottom="background-position: 50% -100px;"
                         data-anchor-target="#cart-parallax"
                         >
                        <div class="bg-transparent">
                            <div class="banner-content">
                                <div class="container" >
                                    <div class="slider-content  "> <i class="icon-home-ico"></i>
                                        <h1>Cart Details</h1>
                                        <p>Let's Order And Enjoy Foods</p>
                                        <ol class="breadcrumb">
                                            <li><a href="index.jsp">Home</a></li>
                                            <li>Cart</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <%@include file="header.jsp"%>

            <div id="content">
                <section class="carts text-center padding-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <table class="table table-striped table-responsive table-cart">
                                    <thead>
                                        <tr>
                                            <th style="width:40%">Food Item</th>
                                            <th style="width:15%">Price</th>
                                            <th style="width:20%">Quantity</th>
                                            <th style="width:25%">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <%  
                                            Session S1 = util.NewHibernateUtil.getSessionFactory().openSession();
                                            pojo.Customer customer = (pojo.Customer) request.getSession().getAttribute("userobj");
                                            Criteria cri = S1.createCriteria(pojo.Order.class);
                                            cri.add(Restrictions.eq("cid", customer.getCid()));
                                            cri.add(Restrictions.eq("status", "Pending"));

                                            pojo.Order customercart = (Order) cri.uniqueResult();
                                            double totVal=0;
                                            int cartekeideka=customercart.getOrderId();
                                            if (customercart == null) {
                                         
                                            } else {
                                                Criteria cri1 = S1.createCriteria(pojo.OrderFood.class);
                                                cri1.add(Restrictions.eq("orderId", customercart.getOrderId()));
                                                List<pojo.OrderFood> orlist = cri1.list();
                                                
                                                for (OrderFood Orders : orlist) {
                                                    int menuidz = Orders.getFoodId();
                                                    pojo.Menu mm = (pojo.Menu) S1.load(pojo.Menu.class, menuidz);
                                                    double totalprice = Orders.getQty() * mm.getPrice();
                                                    totVal += totalprice;
                                        %>

                                        <tr>

                                            <td><a><%= mm.getFoodName()%></a> </td>
                                            <td>RS .<%= mm.getPrice()%> /=</td>
                                            <td>
                                                <div class="input-group plus-minus">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-default btn-number" onclick="decrease(<%= Orders.getOfid()%>)"> <span class="fa fa-minus"></span> </button>                                                      
                                                    </span>
                                                    <input type="number" name="quant[1]" class="form-control input-number" value="<%= Orders.getQty()%>" min="1">
                                                    <span class="input-group-btn">
                                                        <button type="button" class="btn btn-default btn-number" onclick="increase(<%= Orders.getOfid()%>)"> <span class="fa fa-plus"></span> </button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td><span class="total">RS .<%= totalprice%>  /=</span></td>
                                            <td>
                                                <span class="total">
                                                    <button onclick="deletecart(<%= Orders.getOfid()%>)" class="btn btn-danger" >Delete From Cart</button>
                                                </span>
                                            </td>
                                        </tr>
                                        <%    }
                                            }
                                        %>
                                    </tbody>
                                </table>
                            </div>
                        <div class="col-md-12 carts-content">
                            <div class="row">
                                <div class="col-md-5 left-side">
                                    <div class="carts-total text-left margin-tb-60">
                                        <h3>Total Amount of the Cart</h3>
                                        <table class="table table-bordered">
                                            <tbody>
                                              <tr>
                                                <td>Total Amount</td>
                                                <td><%= totVal %></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                              
                                <div class="col-md-5 col-md-offset-2 right-side">
                                    <div class="form-group text-right checkout">
                                        <button type="submit" class="btn  btn-black" onclick="checkout(<%= cartekeideka %>,<%= totVal %>)">PROCEED TO CHECKOUT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- End footer -->
            <a href="#" id="scroll_up" ><i class="fa fa-angle-up"></i></a> </div>

        <script>
            function increase(id) {
                var yewxmlhttp;
                if (window.XMLHttpRequest) {
                    yewxmlhttp = new XMLHttpRequest();
                } else {
                    yewxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                yewxmlhttp.onreadystatechange = function() {

                    if (yewxmlhttp.readyState == 4 && yewxmlhttp.status == 200) {
                        var gett = yewxmlhttp.responseText;

                        if (gett === "ok") {
                            swal("Done!", "Cart Updated..!", "success");
                            window.location = "cart.jsp";
                        }
                    }else{
                       swal("Done!", "Cart Updated..!", "success");
                    }
                }

                yewxmlhttp.open("POST", "UpdateCart", true);
                yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                yewxmlhttp.send("orfd=" + id);
            }

            function decrease(id) {
                var yewxmlhttp;
                
                if (window.XMLHttpRequest) {
                    yewxmlhttp = new XMLHttpRequest();
                } else {
                    yewxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                yewxmlhttp.onreadystatechange = function() {

                    if (yewxmlhttp.readyState == 4 && yewxmlhttp.status == 200) {
                        var gett = yewxmlhttp.responseText;
                       
                        if (gett === "ok") {
                            swal("Done!", "Cart Updated..!", "success");
                            window.location = "cart.jsp";
                        }
                        else if (gett === "dele") {
                            swal("Error!", "Successfully Removed this Item From Cart..!", "error");
                        }
                    }
                }

                yewxmlhttp.open("POST", "removefromcart", true);
                yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                yewxmlhttp.send("orfd=" + id);

            }


            function deletecart(zz) {
                var yewxmlhttp;
                
                if (window.XMLHttpRequest) {
                    yewxmlhttp = new XMLHttpRequest();
                } else {
                    yewxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                yewxmlhttp.onreadystatechange = function() {

                    if (yewxmlhttp.readyState == 4 && yewxmlhttp.status == 200) {
                        var gett = yewxmlhttp.responseText;
                       
                        if (gett === "ok") {
                            swal("Done!", "Cart Updated..!", "success");
                            window.location = "cart.jsp";
                        }
                    }
                }

                yewxmlhttp.open("POST", "deletecart", true);
                yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                yewxmlhttp.send("orfd=" + zz);

            }
            
            function checkout(yy,vv){
                var yewxmlhttp;
                
                if (window.XMLHttpRequest) {
                    yewxmlhttp = new XMLHttpRequest();
                } else {
                    yewxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }

                yewxmlhttp.onreadystatechange = function() {

                    if (yewxmlhttp.readyState == 4 && yewxmlhttp.status == 200) {
                        var gett = yewxmlhttp.responseText;
                        
                        if (gett === "ok") {
                            swal("Done!", "Order Complete..!", "success");
                            window.location = "menus.jsp";
                        }
                    }
                }

                yewxmlhttp.open("POST", "checkoutz", true);
                yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                yewxmlhttp.send("orfd=" + yy+"&subz="+vv);
            }
        </script>

        <script src="javascripts/libs/jquery.min.js" type="text/javascript"></script>
        <script src="javascripts/libs/plugins.js"></script>
        <script src="http://maps.googleapis.com/maps/api/js"></script>
        <script src="javascripts/libs/modernizr.js"></script>
        <script src="javascripts/custom/main.js" ></script>
    </body>

</html>