//Author:Harikrishnan Kuppusamykrishnan
//Project: E-Commerce Website
//Date: 08/06/2020
//Description:Menu item component that holds each menu item

import React from 'react';
import './menu-item.styles.scss'


//functional component since state is not necessary
//allows to dynamically set title, the size of the image and image Url are passed via props to the directory

export const MenuItem =({title,imageUrl,size})=>{
    return(
        <div style = {{
            backgroundImage:`url(${imageUrl})`

        }} className = {`${size} menu-item`}>
                    <div className = "content">
                        <h1 className = "title">{title}</h1>
                        <span className = "subtitle">SHOP NOW</span>
                    </div>
                </div>
    )
}


