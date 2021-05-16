import React from 'react'
import '../../css/app.css'
import Intro from '../intro/index'
import Show from '../showoff/show'
import Social from '../social/index'
import Form from '../form/index'

const Home = () =>{
    return(
        <div className = "The_Home">
        <h1>
            Hi, i am <strong>Abhinav.</strong>
        </h1>
        <p>A web-developer.</p>

<div>
<Show/>
</div>

<div>
<Intro/>
</div>

<div>
    <Social/>
</div>


<div>
<Form/>
</div>

       
        </div>
    )
}
export default Home