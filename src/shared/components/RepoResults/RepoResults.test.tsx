import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { RepoContext } from '../../providers/RepoProvider';
import RepoResults from './RepoResults';

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    if (container) {
        document.body.removeChild(container);
        container = null;
    }
});

const state = {
    repo: 'joe-glasgow',
    repos: require('../../services/mock.json'),
};

describe('RepoResults', () => {
    it('checks that a repo name and language is shown', () => {
        act(() => {
            ReactDOM.render(
                <RepoContext.Provider value={{ state }}>
                    <RepoResults />
                </RepoContext.Provider>,
                container
            );
        });
        const name = container?.querySelector('.repo-name');
        const language = container?.querySelector('.repo-language');
        expect(name?.textContent).toBe('Repo: joe-glasgow');
        expect(language?.textContent).toBe('Language: JavaScript');
    });
});
