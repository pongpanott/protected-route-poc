export type TokenState = {
	accessToken: string | null;
	refreshToken: string | null;
};

export const getAccessToken = () => {
	return localStorage.getItem("access_token");
};

export const getRefreshToken = () => {
	return localStorage.getItem("refresh_token");
};

export const saveAccessToken = (token: string) => {
	return localStorage.setItem("access_token", token);
};

export const saveRefreshToken = (token: string) => {
	return localStorage.setItem("refresh_token", token);
};

export const clearToken = () => {
	localStorage.removeItem("refresh_token");
	localStorage.removeItem("access_token");
};
