import React, { Component } from 'react'

export class admins extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this)
  }



  onChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(e){
    e.preventDefault()
    
    

    if(this.state.email=="admin"  && this.state.password=="admin"){
      this.props.history.push('/admin')
    }else{
       console.log("incorrect password or username")
    }



  }

    render() {
        return (
            <div>
                 <div className="wrapper fadeInDown">
      <div id="formContent">

      <h2 className="active"> Sign In </h2>
    

        {/* Login Form */}
        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username"    value={this.state.email}
                  onChange={this.onChangeEmail} />
          <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" value={this.state.password}
                  onChange={this.onChangePassword} />
         
          <input type="submit" value="Sign In" className="fadeIn fourth" defaultValue="Log In"    onClick={this.onSubmit}     />
        </form>
      
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
   
  );
            </div>
        )
    }
}

export default admins
