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
        <title>MENU</title>
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
    </head>
    
    <body class="boxed">
        <div id="wrapper">
            <section class="banner dark" >
                <div id="menu-parallax">
                    <div class="bcg background41"
                         data-center="background-position: 50% 0px;"
                         data-bottom-top="background-position: 50% 100px;"
                         data-top-bottom="background-position: 50% -100px;"
                         data-anchor-target="#menu-parallax">
                        <div class="bg-transparent">
                            <div class="banner-content">
                                <div class="container" >
                                    <div class="slider-content  "> <i class="icon-home-ico"></i>
                                        <h1>MENU</h1>
                                        <p>Your Taste is Our Goal</p>
                                        <ol class="breadcrumb">
                                            <li><a href="index.jsp">Home</a></li>
                                            <li>Menu</li>
                                        </ol>
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
                        <!-- Logo
                                    ============================================= -->
                        <div id="logo"> <a href="index.jsp" class="light-logo"><img src="img/logo.png" alt="Logo"></a> <a href="index.jsp" class="dark-logo"><img src="img/logo_dark.png" alt="Logo"></a> </div>
                        <%@include file="header.jsp" %>
                    </div>
                </div>
            </header>
                    
            <!-- End header -->

            <div id="content">
                <div class="menu_list  text-center">
                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 padding-t-100 padding-b-60"> 
                                    <div class="head_title">
                                        <i class="icon-breakfast icon-large"></i>
                                        <h1>Food List</h1>
                                        <span class="welcome">We Accept the Orders from 7.00 AM to 10.00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!--Food list starts here-->
                        
                        <div class="container">
                            <div class="row">
                                <%              
                                Session s1 = util.NewHibernateUtil.getSessionFactory().openSession();
                                Criteria cc = s1.createCriteria(pojo.Menu.class);
                                List<pojo.Menu> Menu = cc.list();
                                for (pojo.Menu menu : Menu) {
                                %>

                                <article class="menu-item-list col-md-12 col-sm-12" onclick="loadSelectedItem(<%= menu.getMenuId()%>)">
                                <h3 onclick="loadSelectedItem(<%= menu.getMenuId()%>)"><a onclick="loadSelectedItem(<%= menu.getMenuId()%>)"><%= menu.getFoodName()%></a> <span class="label red"> <%= menu.getMenuType()%></span> 
                                <span class="price">RS. <%=  menu.getPrice()%> /=</span>
                                <p><%= menu.getPortionSize() %></p>
                                </h3>
                                </article>
                                <%
                                    }
                                %>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
                             
            <%@include file="footer.jsp" %>
            <a href="#" id="scroll_up" ><i class="fa fa-angle-up"></i></a> </div>
        
        <script>
            function loadSelectedItem(id){
                window.location= "Singlemenudetails.jsp?menuid="+id;
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