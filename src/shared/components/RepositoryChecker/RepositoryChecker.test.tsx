import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import RepositoryChecker from './RepositoryChecker';

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

describe('RepositoryChecker', () => {
    it('renders form with input and button', () => {
        act(() => {
            ReactDOM.render(<RepositoryChecker />, container);
        });
        const button = container?.querySelector('button');
        const searchBox = container?.querySelector('input[type=text]');
        expect(button?.textContent).toBe('Search');
        expect(searchBox?.textContent).toBe('');
    });
});
