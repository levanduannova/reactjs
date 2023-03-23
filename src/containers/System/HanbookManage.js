import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class HanbookManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="user-redux-container">
        <div className="title">
          <div className="text-center">
          
            <FormattedMessage id="menu.admin.manage-hanbook" />
          </div>
        </div>
        <div className="user-redux-body">
          <div>
            <FormattedMessage id="menu.admin.hanbook" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HanbookManage);
