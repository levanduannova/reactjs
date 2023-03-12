import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
class UserManage extends Component {
  constructor(props) {
    super(props); // Ham tao
    this.state = {
      arrayUsers: [],
    };
  }
  state = {};

  async componentDidMount() {
    let response = await getAllUsers("");
    if (response && response.errCode === 0) {
      this.setState({
        arrayUsers: response.users,
      });
    }
  }

  render() {
    console.log("Check render ", this.state.arrayUsers);
    let arrayUsers = this.state.arrayUsers;
    return (
      <div className="users-container">
        <div className="title text-center">Manage user</div>
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
                    <tr>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>{item.phoneNumber}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
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
