import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions";

class Login extends Component {
  constructor(props) {
    super(props); // Ham tao
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
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
  handleLogin = async (event) => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user)
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
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
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnchangePassword(event)}
                ></input>
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "fas fa-eye"
                        : "fas fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
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

    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
