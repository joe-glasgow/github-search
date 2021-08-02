import { ChangeEvent, FormEvent, useContext } from 'react';
import { updateRepoList, updateRepoName } from '../../providers/RepoProvider/repoReducer';
import githubService from '../../services/githubService';
import { RepoContext } from '../../providers/RepoProvider';

const RepositoryChecker = () => {
    const { state, dispatch } = useContext(RepoContext);

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (dispatch && state?.repo) {
            dispatch(updateRepoList(await githubService(state.repo)));
        }
    };

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (dispatch) {
            dispatch(updateRepoName(event.target.value));
        }
    };

    return (
        <form className="flex-grid" onSubmit={onSubmit} method="post">
            <div className="col">
                <input
                    onChange={changeHandler}
                    required
                    type="text"
                    name="searchGithub"
                    placeholder="Enter a Github repo"
                />
            </div>
            <div className="col">
                <button type="submit">Search</button>
            </div>
        </form>
    );
};

export default RepositoryChecker;
