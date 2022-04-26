import withPrivateRoute from "../authentication/withPrivateRoute";

const Dashboard = () => {
	return <div>This is a dashboard page which is private.</div>;
};

Dashboard.getInitialProps = async (props: any) => {
	console.info("##### Congratulations! You are authorized! ######", props);
	return {};
};

export default withPrivateRoute(Dashboard);
