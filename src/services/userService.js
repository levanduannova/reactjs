import axios from "../axios";
const handleLoginApi = (useremail,userpassword) => {
    return axios.post("/api/login",{email: useremail,password: userpassword})
};
export {handleLoginApi}
