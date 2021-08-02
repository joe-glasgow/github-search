import { FC } from 'react';
import RepositoryChecker from 'components/RepositoryChecker/RepositoryChecker';
import RepoResults from 'components/RepoResults/RepoResults';

const App: FC = () => {
    return (
        <div className="container">
            <RepositoryChecker />
            <RepoResults />
        </div>
    );
};

export default App;
