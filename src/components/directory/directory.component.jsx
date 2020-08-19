//Author:Harikrishnan Kuppusamykrishnan
//Project: E-Commerce Website
//Date: 08/06/2020
//Description:Directory component that holds the menu item component

import React,{Component} from 'react';
import {MenuItem} from  '../menu-item/menu-item.component'
import './directory.styles.scss'

//class component is required to hold state that is based to each menu item
class Directory extends Component{
    constructor(props){
        super(props)
        this.state = {
            //sections includes the images and titles for each menu-item component
            sections:[
                {
                  title: 'Masks',
                  imageUrl: 'https://i.ibb.co/WzfqvXc/MASKS.jpg',
                  id: 1,
                  linkUrl: 'shop/masks'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]

        }
    }

    render(){
        //map through all sections in state and pass values to MenuItem component
        return(
            <div className = "directory-menu">
                {this.state.sections.map((section)=>{
                    const {title,imageUrl,size,id,linkUrl} = section
                    return(
                        <MenuItem
                        title = {title}
                        imageUrl = {imageUrl}
                        key = {id}
                        size = {size}
                        linkedUrl ={linkUrl} />
                    )
                })}
            </div>

        )

    }
}

export default Directory;