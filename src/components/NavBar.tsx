import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();
	const url = location.pathname;

	const pages = [
		{
			path: "/",
			text: "Home",
		},
		{
			path: "/about",
			text: "About",
		},
		{
			path: "/contact",
			text: "Contact",
		},
	];

	return (
		<nav className="flex justify-end py-4 relative z-10 animate-slide-from-right">
			<ul className="flex gap-6">
				{pages.map((page) => (
					<li
						key={page.path}
						className={`text-lg font-bold text-white ${
							url === page.path
								? "opacity-80 pointer-events-none"
								: "transition hover:opacity-80 underline"
						}`}
					>
						<Link to={page.path}>{page.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
