import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              ></input>
            </div>
            <div className="col-12 form-group">
              <label>Password</label>
              <input
                type="password"
                className="col-12 form-control login-input"
                placeholder="Enter your password"
              ></input>
            </div>
            <div className="col-12">
              <button className="col-12 btn-login">Login</button>
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
