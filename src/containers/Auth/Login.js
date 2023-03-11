import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props); // Ham tao
    this.state = {
      username: "",
      password: "",
      isShowPassword: false
    };
  }
  handleOnchangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = (event) => {
    console.log(
      "Username :" + this.state.username,
      "Password :" + this.state.password
    );
    console.log("All state :", this.state);
  };
  handleShowHidePassword = () =>{
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }
  render() {
    //JSX

    return (
      <div className="login-backgruond">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-center text-login">Login</div>
            <div className="col-12 form-group">
              <label>Username</label>
              <input
                type="text"
                className="col-12 form-control login-input"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnchangeUserName(event)}
              ></input>
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>

              <div className="custom-input-password">
                <input
                  type={
                    this.state.isShowPassword ? "text" : "password"
                  }
                  className="form-control"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnchangePassword(event)}
                ></input>
                <span onClick={()=>{
                  this.handleShowHidePassword()
                }}>
                <i className={this.state.isShowPassword ? "fas fa-eye": "fas fa-eye-slash"} con></i>
                </span>
                
                {/* <i className="fas fa-eye-slash"></i> */}
              </div>

            </div>
            <div className="col-12">
              <button
                className="col-12 btn-login"
                onClick={(event) => {
                  this.handleLogin(event);
                }}
              >
                Login
              </button>
            </div>

            <div className="col-12">
              <span className="fg-pass">Quen mat khau ?</span>
            </div>
            <div className="col-12 text-center mt-4">
              <span className="text-other-login">Or Login with :</span>
            </div>
            <div className="col-12 text-center social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook facebook"></i>
              <i className="fab fa-github github"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
