import { Link } from "@/lib/wouter";
import routes from "@/routes";

const NotFound = () => {
	return (
		<section className="flex h-screen flex-col items-center justify-center gap-4">
			<header className="flex flex-col items-center justify-center gap-1">
				<h1 className="font-bold text-4xl">404</h1>
				<p className="text-gray-500 text-lg">Not found</p>
			</header>
			<footer>
				<Link to={routes.home.path} className="underline">
					Go to home
				</Link>
			</footer>
		</section>
	);
};

export default NotFound;
