import { createContext, useContext } from "react";
import useAuth from "./auth";

type AuthManagerType = {
	children: React.ReactNode;
};

type ContextType = {
	isLoggedIn: boolean;
	setIsLoggedIn: (value: boolean) => void;
	logout: () => void;
};

export const AuthManagerContext = createContext({} as ContextType);

const AuthManager = ({ children }: AuthManagerType) => {
	const { isLoggedIn, setIsLoggedIn, logout } = useAuth();

	return (
		<AuthManagerContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				logout,
			}}
		>
			{children}
		</AuthManagerContext.Provider>
	);
};

export const useContextAuthManager = () => {
	return useContext(AuthManagerContext);
};

export default AuthManager;
