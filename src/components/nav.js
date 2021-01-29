import React from 'react';
import "../styles/nav.css"

export default function nav() {
    return (
        <div className="nav">
            <div className="navigation">
                <div className="nav-1">
                    <img width="160px"
                        src="data:image/jpeg;base64,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"
                        alt="LouisPhillipe" />
                </div>
                <div className="nav-2">
                    <div className="links">
                        <ul>
                            <li>LOGIN/REGISTER</li>
                            <li>STORE LOCATOR</li>
                            <li>SHOPPING CART(0)</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" /> <i className='bx bx-search'></i>
                    </div>
                </div>
            </div>
            <div className="content-bottom">
                <ul className="navbar">
                    <li> <a href="#">SHOP</a>
                        <div className="dropdown_container">
                            <div className="container">
                                <ul>
                                    <h1>NEW ARRIVALS</h1>
                                </ul>
                            </div>
                            <div className="container">
                                <ul className="sm-left">
                                    <h1>APPAREL</h1>
                                    <li>T-SHIRTS</li>
                                    <li>SUITS & BLAZERS</li>
                                    <li>JACKETS</li>
                                    <li>SWEATERS</li>
                                    <li>SWEATSHIRTS</li>
                                    <li>TROUSERS & CHINOS</li>
                                    <li>JEANS</li>
                                    <li>SHORTS</li>
                                    <li>ETHNIC WEAR</li>
                                </ul>
                            </div>
                            <div className="container">
                                <ul  className="sm-left">
                                    <h1>FOOTWEAR</h1>
                                    <li>FORMAL</li>
                                    <li>CASUAL</li>
                                    <li>LEISURE</li>
                                </ul>
                                <ul  className="sm-left">
                                    <h1>ACCESSORIES</h1>
                                    <li>MASK</li>
                                    <li>ACC COMBO</li>
                                    <li>BELTS</li>
                                    <li>WALLETS</li>
                                    <li>TIES</li>
                                    <li>POCKET SQUARE</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li> <a href="#">COLLECTION</a>
                        <div className="dropdown_container">
                            <div className="container">
                                <ul>
                                    <h1>COLLECTIONS</h1>
                                    <li>GREATER TOGETHER T-SHIRTS</li>
                                    <li>GODS AND KINGS</li>
                                    <li>ATH PLAY</li>
                                    <li>BLUE CREST</li>
                                    <li>ATH WORK </li>
                                    <li>SPORT LUXURY</li>
                                    <li>ANTIVIRAL</li>
                                    <li>WASH AND WEAR</li>
                                    <li>SOFT FORMALS</li>
                                    <li>LUXURY WEDDING</li>
                                    <li>MAHARAJA</li>
                                    <li>SPECIAL SIZES</li>
                                </ul>
                            </div>
                            <div className="container">
                                <ul className="left">
                                    <h1>SUB BRANDS</h1>
                                    <li>LP MAINLINE</li>
                                    <li>LP SPORTS</li>
                                    <li>LP JEANS</li>
                                    <li>LP LUXURE</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li> <a href="#">WINTERWEAR</a>
                        <div className="dropdown_container">
                            <div className="container">
                                <ul>
                                    <h1>WINTERWEAR</h1>
                                    <li>JACKETS</li>
                                    <li>SWEATERS</li>
                                    <li>SWEATSHIRTS</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li> <a href="#">BULK ORDER</a> </li>
                    <li> <a href="#">ORDER</a> </li>
                    <li> <a href="#">SALE</a>
                        <div className="dropdown_container">
                            <div className="container">
                                <ul>
                                    <h1>SALE</h1>
                                    <li>UP TO 40% OFF</li>
                                    <li>UP TO 50% OFF</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

    )
}
