import React, { Component } from 'react'

 class Signup extends Component {
  render() {
    return (
        <form>
            <h3>Sign Up</h3>
        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div><br></br>
        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div><br></br>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div><br></br>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div><br></br>
        <div class="d-grid gap-2 col-12 mx-auto">
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </div>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
    </form>

    )
  }
}
export default Signup;