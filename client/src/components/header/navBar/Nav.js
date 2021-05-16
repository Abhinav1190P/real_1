import React from 'react'
import '../../../css/app.css'
import FontAwesome from 'react-fontawesome'
const Navbar = () =>{
    return(
        <nav className="the_nav">
<ul className = "ulist">

<li><a href = "#"><FontAwesome className="fal fa-home" style = {{color:'white'}}/> Home</a></li>
<li><a href = "#about"><FontAwesome className="fas fa-address-card" style = {{color:'white'}}/> About</a></li>
<li><a href = "#service"><FontAwesome className="fas fa-id-badge" style = {{color:'white'}}/> Services</a></li>
<li><a href = "#forme"><FontAwesome className="fas fa-file-signature" style = {{color:'white'}}/> Join</a></li>
</ul>

        </nav>
    )
}
export default Navbar