import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>  
        <br></br> 
        <hr />
        <br></br> 
        <a href="mailto: info@jlvalde.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Email_Shiny_Icon.svg/1024px-Email_Shiny_Icon.svg.png" className="Mail"  alt="" width="60px"/></a>

        <a href="https://www.Facebook.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png" className="Facebook"  alt="" width="60px"/></a>

        <a href="https://www.instagram.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" className="Instagram"  alt="" width="57px"/></a>
        
    </div> 
  )
}

export default Footer;