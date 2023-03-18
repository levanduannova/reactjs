import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  edituserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emiiter";
class UserManage extends Component {
  constructor(props) {
    super(props); // Ham tao
    this.state = {
      arrayUsers: [],

      isOpenModal: false,
      isOpenEditUser: false,
      userEdit: {},
    };
  }
  state = {};

  async componentDidMount() {
    await this.getAllUsersFrom();
  }
  handleAddNewuser = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  toggleUserMoDal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  toggleUserEditMoDal = () => {
    this.setState({
      isOpenEditUser: !this.state.isOpenEditUser,
    });
  };

  getAllUsersFrom = async () => {
    let response = await getAllUsers("");
    if (response && response.errCode === 0) {
      this.setState({
        arrayUsers: response.users,
      });
    }
  };
  createNewUsers = async (data) => {
    try {
      let response = await createNewUserService(data);

      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFrom();
        this.setState({
          isOpenModal: false,
        });
        emitter.emit("EVENT_CLEAR_MODAL", { id: "123" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteUser = async (item) => {
    try {
      let response = await deleteUserService(item.id);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFrom();
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleEditUser = async (item) => {
    this.setState({
      isOpenEditUser: true,
      userEdit: item,
    });
  };

  saveEditUser = async (data) => {
    try {
      let response = await edituserService(data);

      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFrom();
        this.setState({
          isOpenEditUser: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let arrayUsers = this.state.arrayUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggleUFromParent={this.toggleUserMoDal}
          createNewUser={this.createNewUsers}
        />
        {this.state.isOpenEditUser && (
          <ModalEditUser
            isOpen={this.state.isOpenEditUser}
            toggleUFromParent={this.toggleUserEditMoDal}
            currentUser={this.state.userEdit}
            saveUser={this.saveEditUser}
            // createNewUser={this.createNewUsers}
          />
        )}

        <div className="title text-center">Manage user</div>
        <div className="mx-1">
          <button
            className="bnt btn-primary px-3"
            onClick={() => this.handleAddNewuser()}
          >
            <i className="fas fa-plus"></i> Add a new user
          </button>
        </div>
        <div>
          <table className="table mx-3 mt-4 table-hover">
            <thead className="thead-dark bg-success">
              <tr>
                <th scope="col">Email</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {arrayUsers &&
                arrayUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>{item.phoneNumber}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={() => this.handleEditUser(item)}
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
