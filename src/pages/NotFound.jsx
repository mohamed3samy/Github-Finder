import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="hero">
			<div className="text-center hero-content">
				<div className="max-w-lg flex flex-col gap-y-8">
					<h2 className="text-7xl font-bold">Oop!</h2>
					<p className="text-3xl">404 - Page Not Found!</p>
					<Link
						to="/"
						className="btn btn-primary btn-lg capitalize"
					>
						<FaHome className="mr-2" />
						back to home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
