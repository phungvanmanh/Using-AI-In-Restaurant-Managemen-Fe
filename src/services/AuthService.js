import axios from "@/axiosConfig";

class AuthService {
    login(user) {
        return axios
            .post("login", {
                email: user.email,
                password: user.password,
            })
            .then((response) => {
                if (response.data.access_token) {
                    localStorage.setItem("admin", JSON.stringify(response.data));
                }

                return response.data;
            });
    }
}

export default new AuthService();
