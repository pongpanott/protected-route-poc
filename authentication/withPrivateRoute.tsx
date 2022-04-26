import React from "react";
import Router from "next/router";

const login = "/login";

const checkUserAuthentication = () => {
	return { auth: true };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrappedComponent: any) => {
	const hocComponent = ({ ...props }) => {
		return <WrappedComponent {...props} />;
	};

	hocComponent.getInitialProps = async (context: {
		res: {
			writeHead: (arg0: number, arg1: { Location: string }) => void;
			end: () => void;
		};
	}) => {
		const userAuth = checkUserAuthentication();

		// Are you an authorized user or not?
		if (!userAuth?.auth) {
			// Handle server-side and client-side rendering.
			if (context.res) {
				context.res?.writeHead(302, {
					Location: login,
				});
				context.res?.end();
			} else {
				Router.replace(login);
			}
		} else if (WrappedComponent.getInitialProps) {
			const wrappedProps = await WrappedComponent.getInitialProps({
				...context,
				auth: userAuth,
			});
			return { ...wrappedProps, userAuth };
		}

		return { userAuth };
	};

	return hocComponent;
};
