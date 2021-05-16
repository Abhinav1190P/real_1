import React, { Component } from 'react'
import '../../css/app.css'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import FontAwesome from 'react-fontawesome'





class Form extends Component {

state = {
name: '',
lastname: '',
email: ''

}

nameHandle = (event) =>{
event.preventDefault();
this.setState({
    name: event.target.value
})

}

lastnameHandle = (event) =>{
    event.preventDefault();
    this.setState({
        lastname: event.target.value
    })
}

emailHandle = (event) =>{
event.preventDefault();

this.setState({
    email: event.target.value
})

}

startAction = (event) =>{
    event.preventDefault();
this.props.users(this.state)

}



    render() {
 let user = this.props.data.userDATA
 console.log(this.props.data)
        return (
        
            <div id="forme" className = "the_form">
<div className = "form_head">
 <h5>Join in now <FontAwesome className="fas fa-file-signature" style = {{color:'black'}}/></h5>
</div>

                
<form>

<input value = {this.state.name} onChange={this.nameHandle} className="name_input" type = "text" placeholder="Enter name"/><br/>

<input value = {this.state.lastname} onChange={this.lastnameHandle} className="lastname_input" type = "text" placeholder="Enter lastname"/><br/>

<input value={this.state.email} onChange={this.emailHandle} className="email_input" type = "email" placeholder="Enter email"/><br/>

<button onClick={this.startAction} type = "submit">SUBMIT</button>

{
 user ?
 user.joined ?  
 <div className = "status_true"> 
<p className = "the_msg_para">You have successfully joined</p>
 </div>:
 <div className = "status_false"> 
 <p className = "the_msg_para">Something went wrong, try again.</p>
  </div>
 :null
}

</form>                




            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
   
return{
    data: state.users
}
}


export default connect(mapStateToProps,actions)(Form);