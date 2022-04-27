import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
import LoginAPI from "./authentication/repository/login.api";
import LoginDTO from "./authentication/repository/login.dto";
import LoginReposiory from "./authentication/repository/login.repository";
import {
	getAccessToken,
	saveAccessToken,
	saveRefreshToken,
} from "./authentication/token";

const Home: NextPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (e: any) => {
		e.preventDefault();
		const repostiry = new LoginReposiory(new LoginAPI());

		repostiry.login(new LoginDTO({ email, password })).subscribe({
			next: (res) => {
				saveAccessToken(res.access_token);
				saveRefreshToken(res.refresh_token);
			},
			error: (err) => {
				console.log("err", err);
			},
			complete: () => {},
		});
	};

	return (
		<div className="bg-gray-50" onSubmit={onSubmit}>
			<div className="py-8 min-h-screen flex items-center justify-center">
				<div className="rounded max-w-[480px] w-full border border-gray-300 p-4 bg-white">
					<p className="text-lg mb-2">login</p>

					<form className="flex flex-col gap-y-4">
						<input
							placeholder="email"
							required
							className="border h-[52px] px-2"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="password"
							required
							className="border h-[52px] px-2"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button>login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

// export const getStaticProps = async () => {
// 	const xData = qs.stringify({
// 		email: "jinawong.j@20scoops.net",
// 		password: "Jack_12345",
// 	});
// 	const config = {
// 		method: "post",
// 		url: "https://comdocks-backend.herokuapp.com/user-platforms/auth/login",
// 		headers: {
// 			"Content-Type": "application/x-www-form-urlencoded",
// 		},
// 		data: xData,
// 	};

// 	const res = axios(config);

// 	const data = await res.then((response) => JSON.stringify(response.data));

// 	return { props: { data } };
// };

export default Home;
