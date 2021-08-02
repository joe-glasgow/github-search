import React from 'react';

export interface RepoInterface {
    name: string;
    repos: string[];
}

interface RepoActionInterface extends RepoInterface {
    type: string;
}

export interface RepoContextInterface extends RepoInterface {
    state: any;
    dispatch: React.Dispatch<any>;
}

export const initialState: RepoInterface = {
    name: '',
    repos: [],
};

export const initialiser = (initialValue: RepoInterface = initialState) => {
    if (typeof window === 'object') {
        return JSON.parse(<string>localStorage.getItem('localRepos')) || initialValue;
    }
    return initialValue;
};

export const repoReducer = (state: RepoInterface = initialState, action: RepoActionInterface) => {
    switch (action.type) {
        case 'UPDATE_REPO_NAME':
            return { ...state, repo: action.name };
        case 'UPDATE_REPO_LIST':
            return { ...state, repos: action.repos };
    }
};

export const updateRepoName = (name: string) => ({ type: 'UPDATE_REPO_NAME', name });
export const updateRepoList = (repos: string[]) => ({ type: 'UPDATE_REPO_LIST', repos });
