import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import specialtyImg from "../../../assets/specialty/120741-tim-mach.jpg";

class Specialty extends Component {
  changeLangguage = (language) => {};
  render() {
    
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên khoa phổ biến</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Tim mạch</div>
              </div>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Tim mạch 2</div>
              </div>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Tim mạch 3</div>
              </div>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Tim mạch 4</div>
              </div>
              <div className="section-cus">
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
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
