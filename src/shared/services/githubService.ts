const githubService = async (user: string) => {
    const userRepo: string = `${process.env.GITHUB_API}/${user}/repos`;
    const result = await fetch(userRepo, { method: 'GET' });
    try {
        return result.json().then((data) => data);
    } catch (e) {
        // TODO: Enhancement, create ErrorProviderContext for dispatching errors
        return [];
    }
};

export default githubService;
