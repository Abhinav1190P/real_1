import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../../css/app.css'

const Show = () =>{
    return(
        <div className = "showoff_div">
<nav>
<ul className = "social_link">
<li><a href="#"><FontAwesome className="fab fa-facebook fa-3x" /></a></li>    
<li><a href="#"><FontAwesome className="fab fa-instagram fa-3x" /></a></li>
<li><a href="#"><FontAwesome className="fab fa-twitter fa-3x"/></a></li>
<li><a href="#"><FontAwesome className="fab fa-youtube fa-3x" /></a></li>
</ul>

</nav>
        </div>
    )

}

export default Show
