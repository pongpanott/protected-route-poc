import BaseDTO from "../../core/dto/base.dto";

type LoginPayload = {
	email: string;
	password: string;
};

class LoginDTO implements BaseDTO {
	private email: string;
	private password: string;

	constructor(data: LoginPayload) {
		this.email = data.email;
		this.password = data.password;
	}

	getBodyJSON = () => {
		return {
			email: this.email,
			password: this.password,
		};
	};
}

export default LoginDTO;
