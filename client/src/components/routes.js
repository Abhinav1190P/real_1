import React from 'react'
import { Switch , Route} from 'react-router-dom'
import Layout from './layout/layout'
import Home from './home/index' 
const Routes = () =>{
    return(
<div>
<Layout>
<Switch>
<Route path = "/" exact component = {Home}/>
</Switch>
</Layout>


</div>

    )
}


export default Routes