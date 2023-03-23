import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";
import "./HomeHeader.scss";
import { LANGUAGES } from "../../utils/constant";

import { appChangeLanguage } from "../../store/actions";

class HomeHeader extends Component {
  changeLangguage = (language) => {
    this.props.appChangeLanguage(language);
    //fire redux event
  };
  render() {
    let language = this.props.language;
    console.log(this.props.userInfo)
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.specialty" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.infospecialty" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.health-facilities" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.choose-a-hospital" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.physician" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.choose_a_good_doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.examination_package" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.general_health_check" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="far fa-question-circle"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={(event) => this.changeLangguage(LANGUAGES.VI)}>
                  VI
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-eng active"
                    : "language-eng"
                }
              >
                <span onClick={(event) => this.changeLangguage(LANGUAGES.EN)}>
                  ENG
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title-1">
              <FormattedMessage id="home-header.MEDICAL_BACKGROUND" />
            </div>
            <div className="title-1">
              <FormattedMessage id="home-header.COMPREHENSIVE_HEALTH_CARE" />
            </div>
            <div className="search-banner">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm kiếm" />
            </div>
          </div>
          <div className="content-down">
            <div className="options-banner">
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.specialized_examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.remote_examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-hospital-alt"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.general_examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fab fa-joomla"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.medical_test" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-wheelchair"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.mental_health" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-ninja"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.dental_examination" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-astronaut"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.surgery_pack" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-transgender-alt"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.medical_products" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-walking"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="home-header.business_health" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appChangeLanguage: (language) => dispatch(appChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
