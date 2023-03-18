import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import "./HomeHeader.scss";
class HomeHeader extends Component {
  render() {
    const { processLogout } = this.props;

    return (
      <div className="home-header-container">
        <div className="home-header-content">
          <div className="left-content">
            <i className="fas fa-bars"></i>
            <div className="header-logo"></div>
          </div>
          <div className="center-content">
            <div className="child-content">
              <div>
                <b>Chuyên khoa</b>
              </div>
              <div className="sub-title">TÌm bác sĩ theo chuyên khoa</div>
            </div>
            <div className="child-content">
              <div>
                <b>Cơ sở y tế</b>
              </div>
              <div className="sub-title">Chọn bệnh viện phòng khám</div>
            </div>
            <div className="child-content">
              <div>
                <b>Bác sĩ</b>
              </div>
              <div className="sub-title">Chọn bác sí giỏi</div>
            </div>
            <div className="child-content">
              <div>
                <b>Gói khám</b>
              </div>
              <div className="sub-title">Khám sức khỏe tổng quát </div>
            </div>
          </div>
          <div className="right-content">
            <div className="support">
              <i className="far fa-question-circle"></i>
              Hỗ trợ
            </div>
            <div className="flag">VN</div>
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
  return {
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
