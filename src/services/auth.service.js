import axios from "axios";

const API_URL = "https://desolate-crag-78080.herokuapp.com/api/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "signin", { email, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(fullName, email, password) {
        return axios.post(API_URL + "signup", {
            fullName,
            email,
            password,
        });
    }
}

export default new AuthService();