<%@page import="org.hibernate.Session"%>
<!doctype html>
<html>


    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A Components Mix Bootstarp 3 Admin Dashboard Template">
        <meta name="author" content="Westilian">
        <title>Update Customer Profile</title>
        <link rel="stylesheet" href="stylesheets/css/font-awesome.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/bootstrap.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/animate.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/waves.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/layout.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/components.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/plugins.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/common-styles.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/pages.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/responsive.css" type="text/css">
        <link rel="stylesheet" href="stylesheets/css/matmix-iconfont.css" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Roboto:400,300,400italic,500,500italic" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet" type="text/css">
        <script type="text/javascript" src="custom/sweetalert.min.js"></script>
    </head>
    <body>
        <div class="page-container iconic-view">
            <!--Leftbar Start Here -->

            <div class="page-content">
                <!--Topbar Start Here -->

                <div class="main-container">
                    <div class="container-fluid">
                        <div class="page-breadcrumb">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="page-breadcrumb-wrap">
                                        <div class="page-breadcrumb-info">
                                            <h2 class="breadcrumb-titles">Customize Profile <small>Customize your Account</small></h2>
                                            <ul class="list-page-breadcrumb">
                                                <li><a href="#">Home</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="box-widget widget-module no-border">
                                    <div class="widget-container">
                                        <div class=" widget-block">
                                            <div class="page-header">
                                                <h2>Update Account</h2>
                                                <%
                                                    Session sess = util.NewHibernateUtil.getSessionFactory().openSession();
                                                    pojo.Customer customez = (pojo.Customer) request.getSession().getAttribute("userobj");
                                               
                                                    %>
                                            </div>
                                            <form id="SignUpForm" method="post" class="form-horizontal" onsubmit="updatecusz()">
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Full name</label>
                                                    <div class="col-lg-4">
                                                        <input type="text" class="form-control" name="firstName" value="<%= customez.getName()%>" placeholder="First name" id="fnamez"/>
                                                    </div>

                                                </div>

                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Email address</label>
                                                    <div class="col-lg-4">
                                                        <input type="email" value="<%= customez.getEmail()%>" class="form-control" name="email" id="emailz"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Phone Number</label>
                                                    <div class="col-lg-4">
                                                        <input type="text" value="<%= customez.getPhone()%>" class="form-control" name="phonenum" id="phonenumbz"/>
                                                    </div>
                                                </div>
                                                    

                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Current Password</label>
                                                    <div class="col-lg-4">
                                                        <input type="password" value="<%= customez.getPassword()%>" class="form-control" name="currpassword"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">New Password</label>
                                                    <div class="col-lg-4">
                                                        <input type="password" class="form-control" name="password"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label">Retype password</label>
                                                    <div class="col-lg-4">
                                                        <input type="password" class="form-control" name="confirmPassword" id="retpw"/>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-lg-3 control-label" id="captchaOperation"></label>
                                                    <div class="col-lg-4">
                                                        <input type="text" class="form-control" name="captcha"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-lg-4 col-lg-offset-3">
                                                        <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Update</button>
                                                        <button type="button" class="btn btn-info" id="resetBtn">Reset form</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Footer Start Here -->

            </div>
        </div>
        <!--Rightbar Start Here -->
        <script>
            function updatecusz() {


                var yewxmlhttp;
                if (window.XMLHttpRequest) {

                    yewxmlhttp = new XMLHttpRequest();


                } else {
                    yewxmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

                }

                yewxmlhttp.onreadystatechange = function() {


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

                var fullname = document.getElementById("fnamez").value;
                var email = document.getElementById("emailz").value;
                
                var retypepassword = document.getElementById("retpw").value;
                
                var phone = document.getElementById("phonenumbz").value;


                var phonelenghth = phone.length;

                if (fullname == "" || email == "" ||retypepassword == "" || phone == "") {
                    alert("inside if");
                    swal("Invalid Entry!", "Please Fill Neccessery Feilds", "error");


                }  else if (phonelenghth < 10 || phonelenghth > 10) {

                    swal("Invalid Entry!", "Invalid Phone Number", "error");


                } else {

                    yewxmlhttp.open("POST", "updatecustomer", true);
                    yewxmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    yewxmlhttp.send("namez=" + fullname + "&emailz=" + email +"&phone=" + phone+"&passw="+retypepassword);

                }

               




            }
        </script>
        <script src="javascripts/js/jquery-1.11.2.min.js"></script>
        <script src="javascripts/js/jquery-migrate-1.2.1.min.js"></script>
        <!--Load Mask-->
        <script src="javascripts/js/jquery.loadmask.js"></script>
        <script src="javascripts/js/jRespond.min.js"></script>
        <script src="javascripts/js/bootstrap.min.js"></script>
        <script src="javascripts/js/nav-accordion.js"></script>
        <script src="javascripts/js/hoverintent.js"></script>
        <!--Materialize Effect-->
        <script src="javascripts/js/waves.js"></script>
        <!--iCheck-->
        <script src="javascripts/js/icheck.js"></script>
        <!--Select2-->
        <script src="javascripts/js/select2.js"></script>
        <!--jquery.mentionsInput-->
        <script src="javascripts/js/underscore.js"></script>
        <script src="javascripts/js/jquery.elastic.js"></script>
        <script src="javascripts/js/jquery.events.input.js"></script>
        <script src="javascripts/js/jquery.mentionsInput.js"></script>
        <script src="javascripts/js/jquery.validate.js"></script>
        <script src="javascripts/js/additional-methods.js"></script>
        <!--Boostrap Form Validator-->
        <script src="javascripts/js/form/bootstrapValidator.js"></script>
        <!--Text Editor-->
        <script src="javascripts/js/summernote.min.js"></script>
        <!--CHARTS-->
        <script src="javascripts/js/chart/sparkline/jquery.sparkline.js"></script>
        <script src="javascripts/js/chart/easypie/jquery.easypiechart.min.js"></script>
        <!--Smart Resize-->
        <script src="javascripts/js/smart-resize.js"></script>
        <!--Layout Initialize-->
        <script src="javascripts/js/layout.init.js"></script>
        <!--Template Plugins Initialize-->
        <script src="javascripts/js/matmix.init.js"></script>
        <!--Boostrap Form Validator Initialize-->
        <script src="javascripts/js/form.validate.init.js"></script>
        <!--High Resolution Ready-->
        <script src="javascripts/js/retina.min.js"></script>
    </body>


</html>