export enum TOKEN_VALUE {
	ACCESS_TOKEN = "access_token",
	REFRESH_TOKEN = "refresh_token",
}

export const getAccessToken = () => {
	const cookieArr = document.cookie.split(";");
	let token = "";

	cookieArr.forEach((item) => {
		const cookiePair = item.split("=");

		if (cookiePair[0] == TOKEN_VALUE.ACCESS_TOKEN) {
			token = cookiePair[1];
		}
	});

	return token;
};

export const getRefreshToken = () => {
	const cookieArr = document.cookie.split(";");
	let token = "";

	cookieArr.forEach((item) => {
		const cookiePair = item.split("=");

		if (cookiePair[0] == TOKEN_VALUE.REFRESH_TOKEN) {
			token = cookiePair[1];
		}
	});

	return token;
};

export const saveAccessToken = (token: string) => {
	document.cookie = `${TOKEN_VALUE.ACCESS_TOKEN}=${token}; SameSite=None; Secure`;
};

export const saveRefreshToken = (token: string) => {
	document.cookie = `${TOKEN_VALUE.REFRESH_TOKEN}=${token}; SameSite=None; Secure`;
};

export const clearToken = () => {
	document.cookie = `${TOKEN_VALUE.ACCESS_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
	document.cookie = `${TOKEN_VALUE.REFRESH_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
