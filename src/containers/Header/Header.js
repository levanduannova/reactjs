import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { LANGUAGES } from "../../utils/constant";
import { appChangeLanguage } from "../../store/actions";
import { FormattedMessage } from "react-intl";
class Header extends Component {
  handleChangeLanguage = (language) => {
    this.props.appChangeLanguage(language);
  };
  render() {
    let language = this.props.language;
    let userInfo = this.props.userInfo;
    let userName = "Không có tên";
    if (userInfo && userInfo.firstName && userInfo.lastName) {
      userName =
        this.props.userInfo.firstName + " " + this.props.userInfo.lastName;
    }

    const { processLogout } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="languages">
          <span className="welcome">
            {" "}
            <FormattedMessage id="home-header.welcome" />{" "}
            {userName ? userName : ""}{" "}
          </span>
          <span
            className={
              language === LANGUAGES.VI ? "lang-vi active" : "lang-vi "
            }
            onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
          >
            VI
          </span>
          <span
            className={
              language === LANGUAGES.EN ? "lang-en active" : "lang-en "
            }
            onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
          >
            EN
          </span>
          {/* nút logout */}
          <div
            className="btn btn-logout"
            onClick={processLogout}
            title="logout"
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    userInfo: state.user.userInfo,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    appChangeLanguage: (language) => dispatch(appChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
