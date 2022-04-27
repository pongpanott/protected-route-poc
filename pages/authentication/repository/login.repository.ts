import { map } from "rxjs";
import LoginAPI from "./login.api";
import LoginDTO from "./login.dto";

class LoginReposiory {
	private loginAPI: LoginAPI;

	constructor(loginAPI: LoginAPI) {
		this.loginAPI = loginAPI;
	}

	login = (data: LoginDTO) => {
		return this.loginAPI.login(data).pipe(
			map((res) => ({
				access_token: res.access_token,
				refresh_token: res.refresh_token,
			}))
		);
	};
}

export default LoginReposiory;
