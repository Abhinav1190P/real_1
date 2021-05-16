import React from 'react'
import '../../../css/app.css'

const Imggrid = () =>{
    return(

<div>

<ul className = "img_list">
<li><img className="in_img_1" src = {require("../../../imgs/in1.jpg").default} alt =""/></li>
<li><img className="in_img_2" src = {require("../../../imgs/in2.jpg").default} alt =""/></li>
<li><img className="in_img_3" src = {require("../../../imgs/in3.jpg").default} alt = ""/></li>

</ul>

</div>




    )
}

export default Imggrid;