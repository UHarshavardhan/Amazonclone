import React from "react"

import { Link } from "react-router-dom"


 
 export default function Navbar(){
    return(
<header>
                <div className="navbar">
                    <div className="navlogo">
                        <div className="logo border"></div>
                    </div>
                    <div className="navadd border">
                        <p className="addfirst icon">Deliver to</p>
                        <div className="addicon">
                            <i className="fa-solid fa-location-dot icon"></i>
                            <p className="addsecond icon">India</p>
                        </div>
                    </div>

                    <div className="nav-search">
                        <select className="search-option1">
                            <option value="All" className="search-option2">All</option>
                        </select>
                        <input type="text" placeholder="Search Amazon" className="search-input" />
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="languageoption border">
                        <div className="american"></div>
                        <select className="lanoption">
                            <option value="lan">EN</option>
                        </select>
                    </div>
                    <div className="sign border">
                        <Link to='/eshop/signin'>
                        <h4 className="hello">
                          sign in
                        </h4>
                        </Link>
                        <div className="account">
                            <select className="account-sign">
                                <option value="Account">Account & Lists</option>
                            </select>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="box6 border">
                        <p className="return">
                            Returns
                        </p>
                        <p className="order">
                            & Orders
                        </p>
                    </div>
                    <div className="cart border">
                        <i className="fa-solid fa-cart-shopping"></i>
                        cart
                    </div>
                </div>
                <div className="second-nav">
                    <div className="allicon border">
                        <i className="fa-solid fa-bars"></i>
                        <p className="list">All</p>
                    </div>
                    <div className="panel-ops">
                        <p className="ptag border">Today's Deals</p>
                        <p className="ptag border">Customer Service</p>
                        <p className="ptag border">Registry</p>
                        <p className="ptag border">Gift Cards</p>
                        <p className="ptag border"> Sell</p>
                    </div>
                    <div className="deals">
                        <p>Shop deals in Electronics</p>
                    </div>
                </div>
            </header>
        )    
        }