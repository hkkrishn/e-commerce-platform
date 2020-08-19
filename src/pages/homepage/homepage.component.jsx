//Author:Harikrishnan Kuppusamykrishnan
//Project: E-Commerce Website
//Date: 08/06/2020
//Description: Hompage container component

import React from 'react'
//import styles associated with homepage
import '../../styles/homepage/homepage.styles.scss'
import Directory from '../../components/directory/directory.component'


//functional component since we do not need any state or lifecycle methods
  export const Homepage = ()=>{
    return(
        <div className = "homepage">
            <Directory/>
        </div>
    )
}

