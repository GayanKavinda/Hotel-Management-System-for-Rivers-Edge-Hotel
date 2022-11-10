<%@page import="org.hibernate.criterion.Restrictions"%>
<%@page import="java.util.List"%>
<%@page import="org.hibernate.Criteria"%>
<%@page import="org.hibernate.Session"%>
<!DOCTYPE html>
<html lang="en">

    <head>
        <!-- Meta Tags
            ============================================= -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Majesty by creative-wp - Responsive HTML5 template">
        <meta name="author" content="creative-wp">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Your Title Page
            ============================================= -->
        <title>Majesty | Testimonials</title>
        <!-- Favicon Icons
             ============================================= -->
        <link rel="shortcut icon" href="img/favicon/favicon.ico">
        <!-- Standard iPhone Touch Icon-->
        <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-touch-icon-57x57.png">
        <!-- Retina iPhone Touch Icon-->
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
        <!-- Standard iPad Touch Icon-->
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
        <!-- Retina iPad Touch Icon-->
        <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-touch-icon-144x144.png">
        <!-- Bootstrap Links
             ============================================= -->
        <!-- Bootstrap CSS  -->
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <!-- Plugins
             ============================================= -->
        <!-- Owl Carousal -->
        <link rel="stylesheet" href="stylesheets/owl.carousel.css">
        <link rel="stylesheet" href="stylesheets/owl.theme.css">
        <!-- Animate -->
        <link rel="stylesheet" href="stylesheets/animate.css">
        <!-- Date Picker -->
        <link rel="stylesheet" href="stylesheets/jquery.datetimepicker.css">
        <!-- Pretty Photo -->
        <link rel="stylesheet" href="stylesheets/prettyPhoto.css">
        <!-- Font awsome icons -->
        <link rel="stylesheet" href="stylesheets/font-awesome.min.css">
        <!-- General Stylesheet
            ============================================= -->
        <!-- Custom Fonts Setup via Font-face CSS3 -->
        <link href="fonts/fonts.css" rel="stylesheet">
        <!-- Main Template Styles -->
        <link href="stylesheets/main.css" rel="stylesheet">
        <!-- Main Template Responsive Styles -->
        <link href="stylesheets/main-responsive.css" rel="stylesheet">
        <script type="text/javascript" src="custom/sweetalert.min.js"></script>
        <!--[if lt IE 9]>
              <script src="javascripts/libs/html5shiv.js"></script>
              <script src="javascripts/libs/respond.min.js"></script>
            <![endif]-->
    </head>
    <body class="boxed" >
        <!-- Loader
            ============================================= -->

        <!-- Document Wrapper
            ============================================= -->
        <div id="wrapper">
            <!-- banner 
              ============================================= -->
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
                                        <h1>Testimonials</h1>
                                        <p>What Happy Clients Said</p>
                                        <ol class="breadcrumb">
                                            <li><a href="index.jsp">Home</a></li>
                                            <li>Testimonials</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <!-- End Banner content -->
                        </div>
                        <!-- End bg trnsparent -->
                    </div>
                </div>
                <!-- Service parallax -->
            </section>
            <!-- End Banner -->
            <!-- Header
              ============================================= -->
            <header id="header" class="header-transparent">
                <div class="container">
                    <div class="row">
                        <div id="main-menu-trigger"><i class="fa fa-bars"></i></div>
                        <!-- Logo
                                    ============================================= -->
                        <div id="logo"> <a href="index.jsp" class="light-logo"><img src="img/logo.png" alt="Logo"></a> <a href="index.jsp" class="dark-logo"><img src="img/logo_dark.png" alt="Logo"></a> </div>
                        <!-- #logo end -->
                        <!-- Primary Navigation
                                    ============================================= -->
                        <%@include file="header.jsp" %>
                        <!-- #main-menu end -->
                    </div>
                </div>
            </header>
            <!-- ends of header -->
            <div id="content">
                <!-- Testimonials 
                ============================================= -->
                <section class="padding-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <!-- Article -->

                                <%                                    Session ses = util.NewHibernateUtil.getSessionFactory().openSession();
                                    Criteria cc = ses.createCriteria(pojo.Review.class);
                                    cc.add(Restrictions.eq("status", "Active"));
                                    List<pojo.Review> rr = cc.list();
                                    for (pojo.Review cusrev : rr) {


                                %>
                                <article class="testimonials ">
                                    <!-- Image -->
                                    <div class="quote_image">
                                        <div class="col-sm-2 pull-left"> <img src="img/user-icon-6.png" class="img-responsive" alt=""> </div>
                                    </div>
                                    <!-- End#Image -->
                                    <!-- Quote -->
                                    <div class="col-sm-10 pull-right">
                                        <blockquote>
                                            <p><%= cusrev.getCommentz()%></p>
                                        </blockquote>
                                        <div class="author_name">
                                            <p></p>
                                        </div>
                                    </div>
                                    <!-- End#Quote -->
                                </article>
                                <%                                    }
                                %>
                                <!-- End# Article -->
                                <!-- Article -->


                                <div class="row">
                                    <div class="col-md-12">
                                        <!-- Form Group -->
                                        <div class="form-group">
                                            <!-- Element -->
                                            <div class="element">
                                                <div>
                                                    <!-- Element -->
                                                    <div class="element">
                                                        <textarea name="comment" class="text textarea" id="txtmessage" placeholder="Add Your Review" ></textarea>
                                                    </div>
                                                    <!-- End Element -->
                                                </div>
                                            </div>
                                            <!-- End Element -->
                                        </div>
                                        <!-- End form Group -->
                                    </div>
                                </div>

                                <div class="element">
                                    <button type="button" id="addreview"  class="btn btn-black" onclick="Addreview()">Add Review</button>
                                    <div class="loading"></div>
                                </div>




                                <!-- End# Article -->         </div>
                        </div>
                    </div>
                </section>
                <!-- End Testimonials -->
            </div>
            <!-- end of #content -->
            <!-- Footer
              ============================================= -->
            <%@include file="footer.jsp" %>
            <!-- End footer -->
            <!--  scroll to top of the page-->
            <a href="#" id="scroll_up" ><i class="fa fa-angle-up"></i></a> </div>


        <script>
            function Addreview() {
                //alert("clicked");
                var yewxmlhttp;
                if (window.XMLHttpRequest) {

                    yewxmlhttp = new XMLHttpRequest();


                } else {
                    yewxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

                }

                yewxmlhttp.onreadystatechange = function () {


                    if (yewxmlhttp.readyState == 4 && yewxmlhttp.status == 200) {

                        var gett = yewxmlhttp.responseText;
                        //  alert(gett);
                        if (gett === "ok") {
                            //   alert("inside if");
                            swal("Done!", "Comment Added Sucessfully..!", "success");
                            window.location = "customerreviews.jsp";

                        } else {

                            swal("Error..!", "Please Login To Continue..!", "error");
                            window.location = "login.jsp";
                        }


                    }
                }

                var cusreveiw = document.getElementById("txtmessage").value;
                if (cusreveiw == "") {
                    swal("Error..!", "Please Fill All the feilds..!", "error");
                } else {
                    // alert(cusreveiw);

                    yewxmlhttp.open("POST", "addreview", true);
                    yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    yewxmlhttp.send("userreview=" + cusreveiw);

                }
            }
        </script>
        <!-- ends of wrapper -->
        <!-- Core JS Libraries -->

        <script src="javascripts/libs/jquery.min.js" type="text/javascript"></script>
        <script src="javascripts/libs/plugins.js"></script>
        <!-- JS Plugins -->
        <script src="http://maps.googleapis.com/maps/api/js"></script>
        <script src="javascripts/libs/modernizr.js"></script>
        <!-- JS Custom Codes -->
        <script src="javascripts/custom/main.js" ></script>
    </body>


</html>