import { getAccessToken } from "../authentication/token";
import useAuth from "../hooks/auth";
import cookie from "cookie";
import { GetServerSidePropsContext } from "next";

const Home = ({ cookie }: { cookie: any }) => {
	console.log("cookie", cookie);
	return <div> this is home page </div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	// const mycookie = cookie.parse(
	// 	(context.req && context.req.headers.cookie) || ""
	// );

	// let cookieData = {};
	// if (mycookie.access_token) {
	// cookieData = mycookie.access_token;
	// }

	// if (!mycookie) {
	// context.res.writeHead(302, {
	// Location: "/login",
	// });
	// context.res.end();
	// }

	// return {
	// props: { cookie: "cookieeeeee" }, // will be passed to the page component as props
	// };
	const cookies = parseCookie(context.req);
	if (!cookies.accessToken) {
		const { accessToken, refreshToken } = await refreshTokens();
		context.res.setHeader("set-cookie", [accessToken, refreshToken]);
	}

	return {};
}

export default Home;
