import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
	return (
		<div className="rounded-lg shadow card bg-base-200">
			<div className="card-body">
				<h2>Latest Repositories</h2>
				{repos.map((repo) => (
					<RepoItem key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
};

RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
