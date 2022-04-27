import Rxios from "../../../core/base-rxios";
import { LoginResponse } from "./login-response";
import LoginDTO from "./login.dto";

class LoginAPI {
	http: Rxios;

	constructor() {
		this.http = new Rxios({ baseURL: process.env.NEXT_PUBLIC_MOCK_API });
	}

	login = (data: LoginDTO) => {
		return this.http.post<LoginResponse>("/auth/login", data.getBodyJSON());
	};
}

export default LoginAPI;
