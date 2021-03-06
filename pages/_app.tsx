import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthManager from "../authentication/AuthManager";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthManager>
			<Component {...pageProps} />
		</AuthManager>
	);
}

export default MyApp;
