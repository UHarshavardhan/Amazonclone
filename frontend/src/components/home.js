import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Ui/home.css';
import slide1 from '../Ui/slide1.jpg';
import slide2 from '../Ui/slide2.jpg';

import Navbar from './Search'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';




// import required modules
import { Navigation } from 'swiper/modules';


export default function Home() {
  

    return (
     
        <div>

          <Navbar/>
        
            <main>
          
                <div className="main">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={slide1}/></SwiperSlide>
        <SwiperSlide><img src={slide2}/></SwiperSlide>
        

      </Swiper> 
                </div>
                <div className="shop">
                <div className="shop">
      <div className="shop1 box">
        <div className="box1-content">
          <h2>Toys Under $30</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
      <div className="shop2 box">
        <div className="box1-content">
          <h2>Deals & Promotions</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
      <div className="shop3 box">
        <div className="box1-content">
          <h2>Health & Personal Care</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
      <div className="shop4 box">
        <div className="box1-content">
          <h2>New arrivals in Toys</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
      <div className="shop1 box">
        <div className="box1-content">
          <h2>For your Fitness Needs</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
      <div className="shop2 box">
        <div className="box1-content">
          <h2>Kindle E readers</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
      <div className="shop3 box">
        <div className="box1-content">
          <h2>Home refresh ideas</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_379x304_1X_en_US._SY304_CB592739737_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
      <div className="shop4 box">
        <div className="box1-content">
          <h2>Shop Laptops & Tablets</h2>
          <div className="box1-img" style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg)"}}></div>
          <p><a href="#">Shop now</a></p>
        </div>
      </div>
    </div>
                    {/* Add other shop items here */}

                </div>
            </main>
            <footer>
                <div className="firstpanel">
                    Back to top
                </div>
                <div className="secondpanel">
                
        <ul>
         <p>Get to Know Us</p>
         <a>Careers</a>
         <a>Blog</a>
         <a>About Amazon</a>
         <a>Investor Relations</a>
         <a>Amazon Devices</a>
         <a>Amazon Science</a>
        </ul>
        <ul>
          <p>Make Money with Us</p>
          <a>Sell products on Amazon</a>
          <a>Sell on Amazon Business</a>
          <a>Sell apps on Amazon</a>
          <a>Become an Affiliate</a>
          <a>Self-Publish with Us</a>
          <a>Host an Amazon Hub</a>
          <a>›See More Make Money with Us</a>
         </ul>
         <ul>
         <p>Amazon Payment Products</p>
         <a>Amazon Business Card</a>
         <a>Shop with Points</a>
         <a>Reload Your Balance</a>
         <a>Amazon Currency Converter</a>
        </ul>
          <ul>
          <p>Let Us Help You</p>
          <a>Amazon and COVID-19</a>
          <a>Your Account</a>
          <a>Your Orders</a>
          <a>Shipping Rates & Policies</a>
          <a>Returns & Replacements</a>
          <a>Manage Your Content and Devices</a>
          <a>Amazon Assistant</a>
          <a>Help</a>
         </ul>
                </div>
                <div className="thirdpanel">
                <div className="logo"></div>
<div className="select-op">
    <select name="" id="" className="sele">
        <option value="En">English</option>
    </select>
    <select name="" id="" className="sele">
        <option value="1">$ USD - U.S. Dollar</option>
    </select>
    <select name="" id="" className="sele">
        <option value="4">United States</option>
    </select>
</div>



                </div>
                <div className="panel4">

                    <div className="page">
    <a href="">Conditions of Use</a>
    <a href="">Privacy Notice</a>
    <a href="">Your Ads Privacy Choices</a>
</div>
<div className="copyright">
    © 1996-2023, Amazon.com, Inc. or its affiliates
</div>

                </div>
            </footer>
        </div>
    );
}
