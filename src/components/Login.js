import React, { Component } from 'react'

 class Login extends Component {
  render() {
    return (
        <form>
        <h3>Login Form</h3>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="User Name" />
        </div><br></br>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
        </div><br></br>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-success">Sign  In</button>
        </div><br></br>
        <p className="forgot-password text-center">
            Forgot your password <a href="#">Click Here!</a>
        </p>
    </form>
        
    )
  }
}
export default Login;