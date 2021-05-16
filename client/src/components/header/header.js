import React from 'react'
import Logo from './logo/logo' 
import Navbar from './navBar/Nav'
import '../../css/app.css'

const Header = () =>{
return(
<div className="header">
<Logo/>
<Navbar/>
</div>
)

}

export default Header