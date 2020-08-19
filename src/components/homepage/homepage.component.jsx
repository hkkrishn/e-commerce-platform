//Author:Harikrishnan Kuppusamykrishnan
//Project: E-Commerce Website
//Date: 08/06/2020
//Description: Hompage container component

import React from 'react'
//import styles associated with homepage
import '../../styles/homepage/homepage.styles.scss'


//functional component since we do not need any state or lifecycle methods
  export const Homepage = ()=>{
    return(
        <div className = "homepage">
            <div className = "directory-menu">
                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title">HATS</h1>
                        <span className = "subtitle">SHOP NOW</span>
                    </div>
                </div>

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title">JACKETS</h1>
                        <span className = "subtitle">SHOP NOW</span>
                    </div>
                </div>

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title">SNEAKERS</h1>
                        <span className = "subtitle">SHOP NOW</span>
                    </div>
                </div>

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title">WOMENS</h1>
                        <span className = "subtitle">SHOP NOW</span>
                    </div>
                </div>

                <div className = "menu-item">
                    <div className = "content">
                        <h1 className = "title">MENS</h1>
                        <span className = "subtitle">SHOP NOW</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

