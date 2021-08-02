import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { loadableReady } from '@loadable/component';

import { RepoProvider } from 'providers/RepoProvider';
import App from '../shared/App';

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
loadableReady(() => {
    const root = document.getElementById('app');
    hydrate(
        <RepoProvider>
            <Router>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </Router>
        </RepoProvider>,
        root
    );
});

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
}
