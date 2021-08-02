import { useContext, useEffect, useState } from 'react';
import { RepoContext } from '../../providers/RepoProvider';

const RepoResults = () => {
    const { state } = useContext(RepoContext);
    const [languages, setLanguages] = useState<string[]>([]);
    const [mounted, setMounted] = useState<boolean>(false);
    // TODO: Enhancement, factor out to a util for unit test
    const mode: (arr: string[]) => string | undefined = (arr: string[]) =>
        arr
            .sort(
                (a, b) =>
                    arr.filter((item) => item === a).length -
                    arr.filter((item) => item === b).length
            )
            .pop();

    useEffect(() => {
        if (state?.repos.length) {
            setLanguages(state.repos.map((item: { language: string }) => item.language));
        }
    }, [state?.repo, state?.repos]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="flex-grid">
            {mounted ? (
                <>
                    <div className="col">
                        <p className="repo-name">
                            <strong>Repo:</strong> {state?.repo}
                        </p>
                    </div>
                    <div className="col">
                        <p className="repo-language">
                            <strong>Language:</strong> {mode(languages)}
                        </p>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default RepoResults;
