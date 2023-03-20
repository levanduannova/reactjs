import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
// import * as actions from "../../store/actions";
import "./Specialty.scss";
// import { LANGUAGES } from "../../utils/constant";
import Slider from "react-slick";
// import { appChangeLanguage } from "../../store/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {
  changeLangguage = (language) => {
    // this.props.appChangeLanguage(language);
    //fire redux event
  };
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    // let language = this.props.language;
    return (
      <div className="section-specialty">
        <div className="specialty-content">
          <Slider {...settings}>
            <div className="img-1">
              <h3>1</h3>
            </div>
            <div className="img-2">
              <h3>2</h3>
            </div>
            <div className="img-3">
              <h3>3</h3>
            </div>
            <div className="img-4">
              <h3>4</h3>
            </div>
            <div className="img-5">
              <h3>5</h3>
            </div>
            <div className="img-6">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // appChangeLanguage: (language) => dispatch(appChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
