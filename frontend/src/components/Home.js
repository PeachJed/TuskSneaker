import React from 'react'
import Header from './Header'

export default function Home() {
    return (
        <React.Fragment>

            <header className='sticky'>
                <a href="#" class="logo"><img src="image/logo1.png" alt="" /></a>

                <ul class="navmenu">
                    <li><a href="#main-home">Home</a></li>
                    <li><a href="#trending">Product</a></li>
                    <li><a href="#client-reviews">Review</a></li>
                    <li><a href="#Update-news">Gallery</a></li>
                </ul>

                <div class="nav-icon">
                    <a href="#" id="searchButton"><i class='bx bx-search'></i></a>
                    <input type="text" class="searchInput" id="searchInput" />
                    <a href="register.html"><i class='bx bx-user' ></i></a>
                    <a href="cart.html"><i class='bx bx-cart' ></i></a>

                    <div class="bx bx-menu" id="menu-icon"></div>

                </div>
                <Header />
            </header>

            <section className="main-home" id="main-home">
                <div className="main-text">
                    <h5>Tusk Sneaker Shoes</h5>
                    <h1>Codex</h1>
                    <p>Tusk Sneaker is a high-quality sneaker produced by Tusk, <br />
                        a brand known for its commitment to the highest quality materials <br />
                        and craftsmanship. These sneakers are made from top-of-the-line materials and are designed to last.</p>

                    <a href="#" className="main-btn">Shop Now <i className='bx bx-right-arrow-alt' ></i></a>
                </div>

                <div className="down-arrow">
                    <a href="#Update-news" className="down"><i className='bx bx-down-arrow-alt' ></i></a>
                </div>
            </section>

            <section class="trending-product" id="trending">
                <div class="center-text">
                    <h2>Our <span>Products</span></h2>
                </div>

                <div class="products">

                    <div class="row">
                        <img src="image/tb1.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div style={{
                        }} class="info-icon" onclick="location.href='Codex.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Codex</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb2.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Prism.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Prism</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb3.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Nemo.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Nemo</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb4.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Lumos.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Lumos</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb5.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Aura.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Aura</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb6.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Pixel.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Pixel</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb7.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Apex.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Apex</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb8.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Anima.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Anima</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb9.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Hope.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Hope</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb10.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Intra.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Intra</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb11.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Impulse.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Impulse</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb12.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Care.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Care</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb13.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Echo.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Echo</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb14.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Helix.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Helix</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb15.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Neo.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Neo</h4>
                            <p>$99</p>
                        </div>
                    </div>

                    <div class="row">
                        <img src="image/tb16.png" alt="" />
                        <div class="product-text">
                            <h5>New</h5>
                        </div>
                        <div class="info-icon" onclick="location.href='Logic.html'">
                            <i class='bx bxs-info-circle' ></i>
                        </div>
                        <div class="ratting">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>

                        <div class="price">
                            <h4>Logic</h4>
                            <p>$99</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="client-reviews" id="client-reviews">
                <div className="reviews">
                    <h3>Frontend Developer</h3>
                    <img src="image\peach.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br />
                        aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

                    <h2>Jedsadakorn Suma</h2>
                    <p>CEO of Tusk</p>
                </div>

                <div className="reviews">
                    <h3>Backend Developer</h3>
                    <img src="image\namhfon.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br />
                        aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

                    <h2>Phiyada Kinglek</h2>
                    <p>CEO of Tusk</p>
                </div>
            </section>

            <section class="Update-news" id="Update-news">
                <div class="up-center-text">
                    <h2>Gallery</h2>
                </div>

                <div class="update-cart">
                    <div class="cart">
                        <img src="image\show1.jpg" alt="" />
                        <h5>26 jan 2022</h5>
                        <h4>Let's Start bring sale on this summer vacation.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>

                        <h6>Continue Reading..</h6>
                    </div>

                    <div class="cart">
                        <img src="image\show2.jpg" alt="" />
                        <h5>26 jan 2022</h5>
                        <h4>Let's Start bring sale on this summer vacation.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>

                        <h6>Continue Reading..</h6>
                    </div>

                    <div class="cart">
                        <img src="image\show3.jpg" alt="" />
                        <h5>26 jan 2022</h5>
                        <h4>Let's Start bring sale on this summer vacation.</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>

                        <h6>Continue Reading..</h6>
                    </div>
                </div>
            </section>

            <section class="contact">
                <div class="contact-info">
                    <div class="first-info">
                        <img src="image\logo1.png" alt="" />

                        <p>3245 Grant Street Longview, <br /> TX united kingdom 765378</p>
                        <p>01601348732</p>
                        <p>saidulahmed3080@gmail.com</p>

                        <div class="social-icon">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-twitter' ></i></a>
                            <a href="#"><i class='bx bxl-instagram' ></i></a>
                            <a href="#"><i class='bx bxl-youtube' ></i></a>
                            <a href="#"><i class='bx bxl-linkedin' ></i></a>
                        </div>
                    </div>

                    <div class="second-info">
                        <h4>Support</h4>
                        <p>Contact us</p>
                        <p>About page</p>
                        <p>Size Guide</p>
                        <p>Shopping & Resturns</p>
                        <p>Privacy</p>
                    </div>

                    <div class="third-info">
                        <h4>Shop</h4>
                        <p>Men's Shopping</p>
                        <p>Women's Shopping</p>
                        <p>Kids's Shopping</p>
                        <p>Furniture</p>
                        <p>Discount</p>
                    </div>

                    <div class="fourth-info">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Affiliate</p>
                        <p>Login</p>
                    </div>

                    <div class="five">
                        <h4>Subscribe</h4>
                        <p>Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eum, Debitis.</p>
                        <p>Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily</p>
                    </div>
                </div>
            </section>

            <div class="end-text">
                <p>Copyright © @2022. All Rights Reserved.Designd By Saidul Islam.</p>
            </div>


        </React.Fragment>
    )
}