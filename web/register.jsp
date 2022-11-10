<!DOCTYPE html>
<html lang="en">

    <!-- Mirrored from creative-wp.com/demos/majesty/boxed/login_video.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 26 Aug 2019 05:41:09 GMT -->
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
        <title>Sanaya | Register</title>
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

        <!-- End Loader -->
        <!-- Document Wrapper
            ============================================= -->
        <div id="wrapper">
            <!-- Video Full with login
              ============================================= -->
            <section  class="video-full dark login-full">
                <!-- video content -->
                <div class="video-content ">

                    <h1>Register</h1>
                    <span class="welcome ">Register to continue</span>


                    <div class="form-group padding-50">

                        <input type="text" class="form-control" style="text-transform: none" placeholder="Name In Full"  id="namezinfull" required="">
                        <input type="email" class="form-control" style="text-transform: none" placeholder="Email" id="emailz" required="">
                        <input type="password" class="form-control" style="text-transform: none" placeholder="Password" id="passwordz1" required="">
                        <input type="password" class="form-control" style="text-transform: none" placeholder="Retype Password" id="passwordz2" required="">
                        <input type="text" class="form-control" style="text-transform: none" placeholder="Address" id="addressz" required="">
                        <input type="tel" onkeypress="isInputNumber(event)" class="form-control" style="text-transform: none" placeholder="Phone No" id="teleno" required="">
                        <script>
                            function isInputNumber(evt){
                                var ch=String.fromCharCode(evt.which);
                                if(!(/[0-9]/.test(ch))){
                                    evt.preventDefault()
                                }
                            }
                        </script>
                        <button type="button" id="savecustomer" onclick="AddCustomer()" class="btn form-control btn-white">Create Account</button>

                    </div>

                    <div class="forget text-center">
                        <p><a href="login.jsp">Login <i class="fa fa-chevron-circle-right"></i></a></p>

                    </div>
                </div>
                <!-- End video content -->
                <!-- Video Wrap -->
                <div class="video-wrap">
                    <!-- Bg Transparent -->
                    <video poster="img/videos/explore-poster.jpg" preload="auto" loop autoplay muted>
                        <source src='img/videos/explore.mp4' type='video/mp4' />
                        <source src='img/videos/explore.webm' type='video/webm' />
                    </video>
                </div>
                <!-- End Video Wrap -->
            </section>
            <!-- End Video Full  -->
            <!-- Header Sticky One page
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

                        <!-- #main-menu end -->
                    </div>
                </div>
            </header>
            <!-- End Header Sticky One Page -->

            <!-- Footer
              ============================================= -->
            <%@include file="footer.jsp" %>
            <!-- End footer -->
        </div>
        <script>
            function AddCustomer() {


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
                            swal("Done!", "Registered Added Sucessfully..!", "success");
                            window.location = "login.jsp";

                        } else if (gett == "already") {
                            swal("Invalid Entry!", "This Email is Already Registered", "error");
                        }


                    }
                }

                var fullname = document.getElementById("namezinfull").value;
                var email = document.getElementById("emailz").value;
                var password = document.getElementById("passwordz1").value;
                var retypepassword = document.getElementById("passwordz2").value;
                var address = document.getElementById("addressz").value;
                var phone = document.getElementById("teleno").value;

                
                var phonelenghth = phone.length;
                var atindex=email.indexOf('@');
                var dotindex=email.lastIndexOf('.');

                if (fullname == "" || email == "" || password == "" || retypepassword == "" || address == "" || phone == "") {
                    
                    swal("Invalid Entry!", "Please Fill Neccessery Feilds", "error");


                } else if (atindex<=0 || atindex+1 >= dotindex) {

                    swal("Invalid Entry!", "Invalid Email type", "error");
                }else if (!(password == retypepassword)) {

                    swal("Invalid Entry!", "Passwords Doesnot Match..!", "error");
                } else if (phonelenghth < 10 || phonelenghth > 10 ) {

                    swal("Invalid Entry!", "Invalid Phone Number", "error");


                } else {

                    yewxmlhttp.open("POST", "resgiscus", true);
                    yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    yewxmlhttp.send("namez=" + fullname + "&emailz=" + email + "&passwordz=" + password + "&address=" + address + "&phone=" + phone);
                
    }

                // alert(cusreveiw);




            }
        </script>
        <!-- End wrapper -->
        <!-- Core JS Libraries -->
        <script src="javascripts/libs/jquery.min.js" type="text/javascript"></script>
        <script src="javascripts/libs/plugins.js"></script>
        <!-- JS Plugins -->
        <script src="http://maps.googleapis.com/maps/api/js"></script>
        <script src="javascripts/libs/modernizr.js"></script>
        <!-- for this page only JS -->
        <script src="../../../../maps.googleapis.com/maps/api/js555e?key=&amp;sensor=false&amp;extension=.js"></script>
        <!-- JS Custom Codes -->
        <script src="javascripts/custom/main.js" ></script>
    </body>

    <!-- Mirrored from creative-wp.com/demos/majesty/boxed/login_video.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 26 Aug 2019 05:41:09 GMT -->
</html>