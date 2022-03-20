import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className="card shadow-md compact bg-base-100">
			<div className="flex-row items-center space-x-4 card-body">
				<div>
					<div className="avatar">
						<div className="rounded-full shadow w-14 h-14">
							<img src={avatar_url} alt="Profile" />
						</div>
					</div>
				</div>
				<div>
					<h2 className="card-title mb-1 capitalize tracking-wide">
						{login}
					</h2>
					<Link
						to={`/user/${login}`}
						className="text-base-content text-opacity-90 text-[0.9rem] tracking-wide"
					>
						Visit Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
