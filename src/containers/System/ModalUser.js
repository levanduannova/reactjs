import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      gender: "",
      roleId: "",
    };
  }

  componentDidMount() {}
  toggle = () => {
    this.props.toggleUFromParent();
  };

  handleOnchange = (event, item) => {
    let copyState = { ...this.state };
    copyState[item] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
      "gender",
      "roleId",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Mising :" + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  hanndleAddNewUser = () => {
    if (this.checkValidateInput()) {
      //Call api
      this.props.createNewUser(this.state);
    //   console.log("data modal ", this.state);
    }
  };
  render() {
    // console.log("State cua cha/ Prop cua con : ", this.props);
    // console.log("State cua cha/ Prop cua con  : ", this.props.isOpen);

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        size="lg"
        className={"modal-user"}
        scrollable={true}
        centered
      >
        <ModalHeader toggle={() => this.toggle()}>
          {" "}
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="form-row">
                <div className="form-group col-md-24">
                  <label>Email</label>
                  <input
                    type="email"
                    onChange={(event) => {
                      this.handleOnchange(event, "email");
                    }}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                  />
                </div>
                <div className="form-group col-md-24">
                  <label>Password</label>
                  <input
                    type="password"
                    onChange={(event) => {
                      this.handleOnchange(event, "password");
                    }}
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-24">
                  <label>First name</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      this.handleOnchange(event, "firstName");
                    }}
                    className="form-control"
                    name="firstName"
                    placeholder="First name"
                    value={this.state.firstName}
                  />
                </div>
                <div className="form-group col-md-24">
                  <label>Last name</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      this.handleOnchange(event, "lastName");
                    }}
                    className="form-control"
                    name="lastName"
                    placeholder="Last name"
                    value={this.state.lastName}
                  />
                </div>
              </div>
              <div className="form-group col-md-24">
                <label>Address</label>
                <input
                  type="text"
                  onChange={(event) => {
                    this.handleOnchange(event, "address");
                  }}
                  className="form-control"
                  name="address"
                  placeholder="1234 Main St"
                  value={this.state.address}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-24">
                  <label>Phone number</label>
                  <input
                    type="text"
                    onChange={(event) => {
                      this.handleOnchange(event, "phoneNumber");
                    }}
                    className="form-control"
                    name="phoneNumber"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Gender</label>
                  <select
                    name="gender"
                    onChange={(event) => {
                      this.handleOnchange(event, "gender");
                    }}
                    className="form-control"
                    value={this.state.gender}
                  >
                    <option value="">Select</option>
                    <option value="0">Male</option>
                    <option value="1">FaMale</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label>Role</label>
                  <select
                    name="roleId"
                    className="form-control"
                    onChange={(event) => {
                      this.handleOnchange(event, "roleId");
                    }}
                    value={this.state.roleId}
                  >
                    <option value="">Select</option>
                    <option value="1">Admin</option>
                    <option value="2">Doctor</option>
                    <option value="3">Patient</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary "
            className="px-3"
            onClick={() => this.hanndleAddNewUser()}
          >
            Create
          </Button>{" "}
          <Button
            color="danger "
            className="px-3"
            onClick={() => this.toggle()}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
