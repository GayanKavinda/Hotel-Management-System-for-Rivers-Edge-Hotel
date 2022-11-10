<%@page import="java.util.List"%>
<%@page import="org.hibernate.criterion.Restrictions"%>
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
        <title>SELECTED FOOD</title>
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
            <section class="banner about dark" >
                <div id="menu-single-parallax">
                    <div class="bcg background42"
                         data-center="background-position: 50% 0px;"
                         data-bottom-top="background-position: 50% 100px;"
                         data-top-bottom="background-position: 50% -100px;"
                         data-anchor-target="#menu-single-parallax"
                         >
                        <div class="bg-transparent">
                            <div class="banner-content">
                                <div class="container" >
                                    <div class="slider-content  "> <i class="icon-home-ico"></i>
                                        <h1>Selected Food Category</h1>
                                        <p>Eat Healthier & Delicious Foods</p>
                                        <ol class="breadcrumb">
                                            <li><a href="index.jsp">Home</a></li>
                                            <li><a href="menu_grid.html">Menu</a></li>
                                            <li>Single Menu</li>
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
                        <div id="logo"> <a href="index.jsp" class="light-logo"><img src="img/logo.png" alt="Logo"></a> <a href="index.jsp" class="dark-logo"><img src="img/logo_dark.png" alt="Logo"></a> </div>
                        <%@include file="header.jsp" %>
                    </div>
                </div>
            </header>
                    
            <!-- End header -->
            
            <div id="content">

                <section class="single-menu text-left padding-100">
                    <div class="container">
                        <div class="row">
                            <%  String menuId = request.getParameter("menuid");

                                Session S1 = util.NewHibernateUtil.getSessionFactory().openSession();
                                pojo.Menu menu = (pojo.Menu) S1.load(pojo.Menu.class, Integer.parseInt(menuId));
                            %>
                            
                            <div class="menu-desc col-md-12">
                                <h2><%= menu.getFoodName()%><span class="pull-right">RS. <%= menu.getPrice()%> /=</span></h2>
                                <fieldset class="rating">
                                    <span class="active">
                                        <i class="fa fa-star"></i></span> <span class="active"><i class="fa fa-star"></i></span> <span class="active"><i class="fa fa-star"></i></span> <span class="active"><i class="fa fa-star"></i></span> <span><i class="fa fa-star"></i></span>
                                    <button  id="bt1" class="btn btn-success" onclick="Addtocart(<%= menu.getMenuId()%>)">Add To Cart</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </section>
                                
            <script>

                function Addtocart(ee) {
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
                                swal("Done!", "Item Added To cart..!", "success");
                                window.loacation = "menus.jsp";
                            } else if (gett === "userz") {
                                swal("Error..!", "Please Login To Continue..!", "error");
                                window.location = "login.jsp";
                            } else if (gett === "updated") {
                                swal("Done!", "Cart Updated..!", "success");
                                window.loacation = "menus.jsp";
                            }
                        }
                    }
                        yewxmlhttp.open("POST", "addtocart", true);
                        yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                        yewxmlhttp.send("menuid=" + ee);
                }
                
            </script>

            </div>
                <%@include file="footer.jsp" %>
                <a href="#" id="scroll_up" ><i class="fa fa-angle-up"></i></a> </div>


        <script src="javascripts/libs/jquery.min.js" type="text/javascript"></script>
        <script src="javascripts/libs/plugins.js"></script>
        <script src="http://maps.googleapis.com/maps/api/js"></script>
        <script src="javascripts/libs/modernizr.js"></script>
        <script src="javascripts/custom/main.js" ></script>
    </body>
</html>