import { useCallback, useEffect, useState } from "react";
import {
	clearToken,
	getAccessToken,
	getRefreshToken,
} from "../authentication/token";

const useAuth = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
		clearToken();
	}, []);

	useEffect(() => {
		console.log("call use effect token");
		const token = {
			accessToken: getAccessToken(),
			refresToken: getRefreshToken(),
		};

		if (!token.accessToken) {
			console.log("have no access token");
			setIsLoggedIn(false);
		}
	}, [logout]);

	return { isLoggedIn, setIsLoggedIn, logout };
};

export default useAuth;
