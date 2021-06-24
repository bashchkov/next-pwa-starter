import axios from "library/axios/axiosInstance";


class authAPI {
    static authTokenLogin = ({email, password}) => axios.post("/auth/token/login/", {email, password});
    static authTokenLogout = () => axios.post("/auth/token/logout/");
}

export default authAPI;