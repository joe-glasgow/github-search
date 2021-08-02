import React, { createContext, FC, useEffect, useReducer } from 'react';
import { repoReducer, initialState, RepoContextInterface, initialiser } from './repoReducer';

export const RepoContext = createContext<Partial<RepoContextInterface>>(initialState);

export const RepoProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(repoReducer, initialState, initialiser);

    useEffect(() => {
        localStorage?.setItem('localRepos', JSON.stringify(state));
    }, [state]);

    return <RepoContext.Provider value={{ state, dispatch }}>{children}</RepoContext.Provider>;
};
