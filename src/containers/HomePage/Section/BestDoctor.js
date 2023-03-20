import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import specialtyImg from "../../../assets/doctor/download.jpeg";
class MedicalFacility extends Component {
  changeLangguage = (language) => {};
  render() {
    return (
      <div className="section-share section-doctor">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần </span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-cus">
                <div className="cus-border">
                  <div className="outer-bg">
                    <div className="bg-image"></div>
                  </div>
                  <div className="position text-center">
                    <div>Khoa sản</div>
                    <div>Giáo sư</div>
                  </div>
                </div>
              </div>
              <div className="section-cus">
                <div className="cus-border">
                  <div className="outer-bg">
                    <div className="bg-image"></div>
                  </div>
                  <div className="position text-center">
                    <div>Khoa sản</div>
                    <div>Giáo sư</div>
                  </div>
                </div>
              </div>
              <div className="section-cus">
                <div className="cus-border">
                  <div className="outer-bg">
                    <div className="bg-image"></div>
                  </div>
                  <div className="position text-center">
                    <div>Khoa sản</div>
                    <div>Giáo sư</div>
                  </div>
                </div>
              </div>
              <div className="section-cus">
                <div className="cus-border">
                  <div className="outer-bg">
                    <div className="bg-image"></div>
                  </div>
                  <div className="position text-center">
                    <div>Khoa sản</div>
                    <div>Giáo sư</div>
                  </div>
                </div>
              </div>
              <div className="section-cus">
                <div className="cus-border">
                  <div className="outer-bg">
                    <div className="bg-image"></div>
                  </div>
                  <div className="position text-center">
                    <div>Khoa sản</div>
                    <div>Giáo sư</div>
                  </div>
                </div>
              </div>
              <div className="section-cus">
                <div className="cus-border">
                  <div className="outer-bg">
                    <div className="bg-image"></div>
                  </div>
                  <div className="position text-center">
                    <div>Khoa sản</div>
                    <div>Giáo sư</div>
                  </div>
                </div>
              </div>
              <div className="section-cus">
                <div className="cus-border">
                  <div className="outer-bg">
                    <div className="bg-image"></div>
                  </div>
                  <div className="position text-center">
                    <div>Khoa sản</div>
                    <div>Giáo sư</div>
                  </div>
                </div>
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
