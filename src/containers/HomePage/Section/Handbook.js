import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import medicalImg from "../../../assets/medical/083122lo-go-viet-duc.jpg";
import specialtyImg from "../../../assets/doctor/download.jpeg";
import hanbook1 from "../../../assets/handbook/hanbook1.jpeg";
class MedicalFacility extends Component {
  changeLangguage = (language) => {};
  render() {
    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cẩm nang</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-cus">
                <div className="outer-bg">
                  <div className="bg-image"></div>
                </div>
                <div className="position "></div>
              </div>
              <div className="section-cus">
                <div className="outer-bg">
                  <div className="bg-image"></div>
                </div>
                <div className="position "></div>
              </div>
              <div className="section-cus">
                <div className="outer-bg">
                  <div className="bg-image"></div>
                </div>
                <div className="position "></div>
              </div>
              <div className="section-cus">
                <div className="outer-bg">
                  <div className="bg-image"></div>
                </div>
                <div className="position "></div>
              </div>
              <div className="section-cus">
                <div className="outer-bg"></div>
                <div className="bg-image"></div>
                <div className="position "></div>
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
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
