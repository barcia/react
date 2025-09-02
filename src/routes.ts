import Home from "@/pages/home";

type RouteDef = {
	path: string;
	component: React.ComponentType;
};

const routes: Record<string, RouteDef> = {
	home: {
		path: "/",
		component: Home,
	},
};

export default routes;
