import githubService from './githubService';

require('dotenv').config();

window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        json: () => Promise.resolve(require('./mock.json')),
    })
);

describe('Github service test', () => {
    it('makes a request to github api', async () => {
        const repos = await githubService('joe-glasgow');
        expect(repos.length).toBe(30);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/joe-glasgow/repos', {
            method: 'GET',
        });
    });
});
