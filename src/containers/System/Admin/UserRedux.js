import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import { LANGUAGES } from "../../../utils/constant.js";
import * as actions from "../../../store/actions";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./UserRedux.scss";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      roleArr: [],
      positionArr: [],
      previewImg: "",
      isOpen: false,
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
  }

  componentDidUpdate(prevProp, prevState, snapshot) {
    if (prevProp.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
    if (prevProp.positionRedux !== this.props.positionRedux) {
      this.setState({
        positionArr: this.props.positionRedux,
      });
    }
    if (prevProp.roleRedux !== this.props.roleRedux) {
      this.setState({
        roleArr: this.props.roleRedux,
      });
    }
  }

  handleOnchangeImg = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let imageUrl = URL.createObjectURL(file);
      this.setState({
        previewImg: imageUrl,
      });
    }
  };
  OpenPreviewImg = (event) => {
    if(!this.state.previewImg) return;
    this.setState({
      isOpen: true,
    });
  };

  render() {
    let gender = this.state.genderArr;
    let role = this.state.roleArr;
    let position = this.state.positionArr;
    let language = this.props.language;
    let isLoadingGender = this.props.isLoadingGender;
    let isLoadingPosition = this.props.isLoadingPosition;
    let isLoadingRole = this.props.isLoadingRole;
    return (
      <div className="user-redux-container">
        <div className="title">
          <div className="text-center">
            <FormattedMessage id="menu.system.system-administrator.user-redux" />
          </div>
        </div>
        <div className="user-redux-body">
          <div className="container my-3">
            <div className="my-3">
              <h3>
                <FormattedMessage id="manager.create-user" />
              </h3>
            </div>
            <div className="row">
              <div className="col-6">
                <label>Email</label>
                <input className="form-control" type="email"></input>
              </div>
              <div className="col-6">
                <label>
                  <FormattedMessage id="manager.password" />
                </label>
                <input className="form-control" type="password"></input>
              </div>
              <div className="col-6">
                <label>
                  <FormattedMessage id="manager.first_name" />
                </label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-6">
                <label>
                  <FormattedMessage id="manager.last_name" />
                </label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-9">
                <label>
                  <FormattedMessage id="manager.address" />
                </label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="col-3">
                <label>
                  <FormattedMessage id="manager.phone" />
                </label>
                <input className="form-control" type="text"></input>
              </div>
              <div className=" col-4">
                <label>
                  {isLoadingGender === true ? (
                    `Loading gender ...`
                  ) : (
                    <FormattedMessage id="manager.gender" />
                  )}
                </label>
                <select className="form-control">
                  {gender &&
                    gender.length > 0 &&
                    gender.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className=" col-4">
                <label>
                  {isLoadingRole === true ? (
                    `Loading role ...`
                  ) : (
                    <FormattedMessage id="manager.role" />
                  )}
                </label>
                <select className="form-control">
                  {role &&
                    role.length > 0 &&
                    role.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className=" col-4">
                <label>
                  {isLoadingPosition === true ? (
                    `Loading position ...`
                  ) : (
                    <FormattedMessage id="manager.position" />
                  )}
                </label>
                <select className="form-control">
                  {position &&
                    position.length > 0 &&
                    position.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className=" col-4">
                <label>
                  <FormattedMessage id="manager.image" />
                </label>
                <div className="preview-img-container">
                  <input
                    id="previewimg"
                    type="file"
                    hidden
                    onChange={(event) => this.handleOnchangeImg(event)}
                  />
                  <label className="label-upload" htmlFor="previewimg">
                    <i className="fas fa-cloud-upload-alt">
                      <FormattedMessage id="manager.upload" />
                    </i>
                  </label>
                  <div
                    onClick={(event) => this.OpenPreviewImg(event)}
                    className="preview-image"
                    style={{ backgroundImage: `url(${this.state.previewImg})` }}
                  ></div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <button className="btn btn-primary">
                  {" "}
                  <FormattedMessage id="manager.save" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.previewImg}
            
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    isLoadingGender: state.admin.isLoadingGender,
    isLoadingRole: state.admin.isLoadingRole,
    isLoadingPosition: state.admin.isLoadingPosition,
    roleRedux: state.admin.roles,
    positionRedux: state.admin.positions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
