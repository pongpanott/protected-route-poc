import { createContext, ReactNode, useContext } from "react";
import useAuth from "../hooks/useAuth";

type IAuthManager = {
	children: ReactNode;
};

type RouteType = {
	publicPath: string;
	privatePath: string;
};

type ContextType = {
	isLoggedIn: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
	logout: () => void;
};

export const AuthManagerContext = createContext({} as ContextType);

const AuthManager = ({ children }: IAuthManager) => {
	const { isLoggedIn, setIsLoggedIn, isLoading, logout } = useAuth();

	return (
		<AuthManagerContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				logout,
			}}
		>
			{!isLoading && children}
		</AuthManagerContext.Provider>
	);
};

export const useContextAuthManager = () => {
	return useContext(AuthManagerContext);
};

export default AuthManager;
