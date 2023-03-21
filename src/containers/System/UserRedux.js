import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class UserRedux extends Component {
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
            <FormattedMessage id="menu.system.system-administrator.user-redux" />
          </div>
        </div>
        <div className="user-redux-body">
          <div>
            <FormattedMessage id="manager.create-user" />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
