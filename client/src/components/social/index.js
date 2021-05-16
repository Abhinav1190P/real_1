import React from 'react'
import '../../css/app.css'
import FontAwesome from 'react-fontawesome'

const Social = () =>{
    return(

<div id="service" className = "service_div">
<div className = "the_social_service_container">
<div className = "card">
<img src = {require("../../imgs/card.jpg").default} alt = ""/>
</div>

<div className = "service_para">
<FontAwesome className = "fab fa-instagram fa-3x" style={{color:'black'}}/>
<h3>@he_quot3s</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.</p>
</div>
</div>

<div className = "the_technologies_container">

<h4><FontAwesome className = "fas fa-server fa-1x" style={{color:'black'}}/> Technologies i use</h4>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.
</p>


<div className = "mywork_img">
<img src = {require('../../imgs/mywork.jpg').default} alt = ""/>
</div>


</div>



</div>

    )
}

export default Social