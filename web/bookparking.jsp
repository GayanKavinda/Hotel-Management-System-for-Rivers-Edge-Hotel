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
        <title>Majesty | Book Parking</title>
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
                                        <h1>Parking</h1>
                                        <p>Book Your Parking Here</p>
                                        <ol class="breadcrumb">
                                            <li><a href="index.jsp">Home</a></li>
                                            <li>Parking</li>
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



                <section id="intro-3" class="reservation dark text-center">
                    <!-- Bg Parallax -->
                    <div class="bcg background15"
                         data-center="background-position: 50% 0px;"
                         data-bottom-top="background-position: 50% 100px;"
                         data-top-bottom="background-position: 50% -100px;"
                         data-anchor-target="#intro-3">
                        <!-- Bg Transparent -->
                        <div class="bg-transparent padding-100">
                            <div class="container">
                                <div class="row"> 
                                    <!-- Head Title -->
                                    <div class="head_title">
                                        <i class="icon-intro"></i>
                                        <h1>Parking</h1>
                                        <span class="welcome">Book your Parking</span>
                                    </div>
                                    <!-- End# Head Title -->

                                    <!-- Reservation form -->
                                    <div class="reserv_form">
                                        <!-- Form group -->
                                        <div class="form-group">


                                            <div class="col-md-3 col-sm-6 col-sx-12 animated" data-animation="fadeInLeft" data-animation-delay="600">
                                                <!-- Selct wrap -->
                                                <div class="select_wrap">
                                                    <select class="form-control" name="Purpose" id="parkingslot">

                                                        <option value="one">Slot Name</option>
                                                        <%                                                            Session ss = util.NewHibernateUtil.getSessionFactory().openSession();
                                                            Criteria cc = ss.createCriteria(pojo.Parkslot.class);
                                                            cc.add(Restrictions.eq("available", "out"));

                                                            List<pojo.Parkslot> parking = cc.list();
                                                            for (pojo.Parkslot pp : parking) {
                                                        %>
                                                        <option><%= pp.getSlotname()%></option>
                                                        <%
                                                            }
                                                        %>


                                                    </select>
                                                </div>
                                                <!-- End select wrap -->
                                            </div>
                                            <div class="col-md-3 col-sm-6 col-sx-12 animated" data-animation="fadeInLeft" data-animation-delay="800">
                                                <!-- Selct wrap -->
                                                <div class="select_wrap">
                                                    <select class="form-control" name="food" id="vehtype">
                                                        <option>Vehicle Type</option>
                                                        <option>Bike</option>
                                                        <option>Car</option>
                                                        <option>Cab</option>
                                                        <option>Van</option>
                                                        <option>Bus</option>
                                                        <option>Other</option>

                                                    </select>
                                                </div>
                                                <!-- End select wrap -->
                                            </div>
                                        </div>
                                        <!-- End form group -->
                                        <!-- form group -->
                                        <div class="form-group">

                                            <div class="col-md-3 col-sm-6 col-sx-12 datepicker animated" data-animation="fadeInLeft" data-animation-delay="1600">
                                                <input name="date" class="form-control" id="datez" placeholder="Date" type="date" >

                                                <i class="fa fa-calendar"></i> </div>

                                            <div class="col-md-3 col-sm-6 col-sx-12 datepicker animated" data-animation="fadeInLeft" data-animation-delay="1600">

                                                <input  class="form-control" id="timez" placeholder="Type Time like 12:35 PM" type="text" >
                                                <i class="fa fa-calendar"></i> </div>  
                                        </div>
                                        <!-- End form group -->
                                        <!-- Form group -->

                                        <!-- End form group -->
                                        <div class="loading2"></div>
                                        <button class="btn btn-gold white animated" onclick="addparkingnew()">BOOK Parking</button> 
                                    </div>
                                    <!-- End reservation form -->
                                    <div class="done2">

                                    </div>
                                </div>
                            </div>
                            <!-- End bg transparent -->
                        </div>
                        <!-- End Bg Parallax -->
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
            function addparkingnew() {


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
                            //   alert("inside if");
                            swal("Done!", "Booking Added Sucessfully..!", "success");
                            window.location = "index.jsp";

                        } else if (gett == "userz") {

                            swal("Invalid Entry!", "Please Login TO COntinue", "error");
                            window.location = "login.jsp";
                        }


                    }
                }

                var slotname = document.getElementById("parkingslot").value;
                var vehtype = document.getElementById("vehtype").value;
                var datez = document.getElementById("datez").value;
                var timez = document.getElementById("timez").value;



                if (slotname == "" || vehtype == "" || datez == "" || timez == "") {

                    swal("Invalid Entry!", "Please Fill Neccessery Feilds", "error");


                } else if (slotname == "Slot Name" || vehtype == "Vehicle Type") {

                    swal("Invalid Entry!", "Please Fill Neccessery Feilds", "error");

                } else {
                    yewxmlhttp.open("POST", "saveparksz", true);
                    yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    yewxmlhttp.send("slotnamez=" + slotname + "&vehtype=" + vehtype + "&datez=" + datez + "&timez=" + timez);

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