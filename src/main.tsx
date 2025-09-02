import { createRoot } from "react-dom/client";
import { Route, Switch } from "@/lib/wouter";
import "./index.css";
import NotFound from "@/pages/404";
import routes from "@/routes";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
	<Switch>
		{Object.values(routes).map(({ path, component: Component }) => (
			<Route key={path} path={path}>
				<Component />
			</Route>
		))}
		{/* 404 opcional */}
		<Route>
			<NotFound />
		</Route>
	</Switch>,
);
