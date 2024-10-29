import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="foody-logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ( {resName, cuisine, resStar} ) => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lufqwcvjqllfw24ab82x" alt="res-logo"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{resStar} stars</h4>
            <h4>29 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Mani's Dum Biriyani" cuisine="Biriyani, South Indian" resStar="4.4"/>
                <RestaurantCard resName="KFC" cuisine="Chicken Snacks, Fast Food" resStar="3.9"/>
                <RestaurantCard resName="Domino's" cuisine="Pizza, Italian" resStar="3.8"/>
                <RestaurantCard resName="Altaf Egg Rice" cuisine="Biriyani, Karnataka food" resStar="4.1"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);