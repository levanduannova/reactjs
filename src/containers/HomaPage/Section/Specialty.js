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
import specialtyImg from "../../../assets/specialty/120741-tim-mach.jpg";

class Specialty extends Component {
  changeLangguage = (language) => {
    // this.props.appChangeLanguage(language);
    //fire redux event
  };
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    // let language = this.props.language;
    return (
      <div className="section-specialty">
        <div className="specialty-container">
          <div className="specialty-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="specialty-cus">
                <div className="bg-image"></div>
                <div>Tim mạch</div>
              </div>
              <div className="specialty-cus">
                <div className="bg-image"></div>
                <div>Tim mạch 2</div>
              </div>
              <div className="specialty-cus">
                <div className="bg-image"></div>
                <div>Tim mạch 3</div>
              </div>
              <div className="specialty-cus">
                <div className="bg-image"></div>
                <div>Tim mạch 4</div>
              </div>
              <div className="specialty-cus">
                <div className="bg-image"></div>
                <div>Tim mạch 5</div>
              </div>
            </Slider>
          </div>
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
