import axios from "../axios";
const handleLoginApi = (useremail, userpassword) => {
  return axios.post("/api/login", { email: useremail, password: userpassword });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id= ${inputId}`);
};
const createNewUserService = (data) => {
  return axios.post(`/api/create-new-user`, data);
};
const deleteUserService = (id) => {
  return axios.post(`/api/delete-user`, { id: id });
};
const edituserService = (data) => {
  return axios.put("/api/edit-user", data);
};
const getAllCodeService = (type) => {
  return axios.get(`/api/allcode?type=${type}`);
};
export {
  handleLoginApi,
  getAllUsers,
  createNewUserService,
  deleteUserService,
  edituserService,
  getAllCodeService,
};
