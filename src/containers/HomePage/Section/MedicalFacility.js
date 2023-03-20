import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import specialtyImg from "../../../assets/specialty/120741-tim-mach.jpg";
class MedicalFacility extends Component {
  changeLangguage = (language) => {};
  render() {
    return (
      <div className="section-share section-medical">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Bệnh viện</div>
              </div>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Bệnh viện 2</div>
              </div>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Bệnh viện 3</div>
              </div>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Bệnh viện 4</div>
              </div>
              <div className="section-cus">
                <div className="bg-image"></div>
                <div>Bệnh viện 5</div>
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
