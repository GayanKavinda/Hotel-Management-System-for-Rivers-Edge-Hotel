<nav id="main-menu" class="dark">
    <ul>
        <li><a href="index.jsp">
                <div>Home</div>
            </a>

        </li>
        <li class="mega-menu"><a href="menus.jsp">
                <div>Menu</div>
            </a>

        </li>

        <li><a href="login.jsp">
                <div>Login</div>
            </a> </li>
        
        <li><a href="customerreviews.jsp">
                <div>Customer Reviews</div>
            </a> </li>
        <li><a href="bookparking.jsp">
                <div>Parking Details</div>
            </a> </li>

        <%
            pojo.Customer cuz = (pojo.Customer) request.getSession().getAttribute("userobj");
            if (cuz == null) {

            } else {


        %>
        
                  <li><a href="#">
              <div>Hello <%= cuz.getName()%></div>
              </a>
              <ul class="menu-pos-invert">
                  <li><a href="myreservations.jsp">
                  <div>My Orders</div>
                  </a></li>
                  <li><a href="myparkings.jsp">
                  <div>My Parking</div>
                  </a></li>
                  <li><a href="#">
                  <div>My Profile</div>
                  </a></li>
                  <li><a href="cart.jsp">
                  <div>My Cart</div>
                  </a></li>
                  <li><a href="#">
                  <div>Logout</div>
                  </a></li>
                
              </ul>
            </li>
           


        <%                }
        %>
        <!-- Mega Menu
         ============================================= -->

        <!-- Mega Menu
         ============================================= -->
        <!--            
                    <li class=" left"><a href="#">
                      <div>Shop</div>
                      </a>
                      <ul class="menu-pos-invert">
                        <li><a href="shop_carts.html">
                          <div>Carts</div>
                          </a></li>
                        <li><a href="shop_wishlist.html">
                          <div>Wishlist</div>
                          </a></li>
                        <li><a href="shop_checkout.html">
                          <div>Checkout</div>
                          </a></li>
                        <li><a href="shop_myaccount.html">
                          <div>My Account</div>
                          </a></li>
                      </ul>
                    </li>-->
    </ul>
    <!-- Top Cart
                  ============================================= -->
    <!--    <div id="shop_cart" > <a href="#" id="shop_tigger"><i class="fa fa-shopping-cart"></i><span>3</span></a>
            <div class="shop_cart_content">
                <h4>Shopping Cart</h4>
                <div class="cart_items">
                    <div class="item clearfix"> <a href="#"><img src="img/post_thumb.jpg" alt=""></a>
                        <div class="item_desc"> <a href="menu_single.html">Food Name</a> <span class="item_price">$12.89</span> <span class="item_quantity">x 2</span> </div>
                    </div>
                     End item 
                    <div class="item clearfix"> <a href="#"><img src="img/post_thumb2.jpg" alt=""></a>
                        <div class="item_desc"> <a href="menu_single.html">Food Name</a> <span class="item_price">$30.00</span> <span class="item_quantity">x 2</span> </div>
                    </div>
                     End item 
                    <div class="item clearfix"> <a href="#"><img src="img/post_thumb3.jpg" alt=""></a>
                        <div class="item_desc"> <a href="menu_single.html">Food Name</a> <span class="item_price">$21.99</span> <span class="item_quantity">x 4</span> </div>
                    </div>
                     End item 
                    <div class="shop_action clearfix"> <span class="shop_checkout_price">$150.99</span>
                        <button class="btn btn-dark">View Cart</button>
                    </div>
                </div>
                 End cart items 
            </div>
             End shop cart content 
        </div>-->
    <!-- End shop cart -->
</nav>