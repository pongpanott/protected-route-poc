import { useCallback, useEffect, useState } from "react";
import { clearToken, getAccessToken } from "../authentication/token";

const useAuth = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
		clearToken();
	}, []);

	useEffect(() => {
		const token = {
			accessToken: getAccessToken(),
		};
		console.log("token", token);

		const repsitory = new UserReposiry(new UserAPI());
	}, [logout]);
};
