import { useCallback, useEffect, useState } from "react";
import { clearToken, getAccessToken, getRefreshToken } from "../common/token";

const useAuth = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
		clearToken();
	}, []);

	useEffect((): void => {
		const token = {
			accessToken: getAccessToken(),
			refreshToken: getRefreshToken(),
		};

		const loginAPI = `${process.env.NEXT_PUBLIC_MOCK_API}/auth/login`;

		if (loginAPI) {
			fetch(loginAPI, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					email: "jinawong.j@20scoops.net",
					password: "Jack_12345",
				}),
			})
				.then((response) => {
					console.log("response", response);
					// handle the response
				})
				.catch((error) => {
					console.log("error", error);
					// handle the error
				});
		}
	}, [logout]);

	return {
		isLoggedIn,
		setIsLoggedIn,
		isLoading,
		logout,
	};
};

export default useAuth;
