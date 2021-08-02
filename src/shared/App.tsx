import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import favicon from '../shared/assets/favicon.png';
import routes from './routes';
import css from './App.module.scss';

const App: FC = () => {
    useEffect(() => {
        const jssStyles: HTMLScriptElement | null = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        // <Suspense fallback={<div>Loading</div>}>
        <div className={css.wrapper}>
            <Helmet
                defaultTitle="Github Repo Search"
                titleTemplate="%s – Github Repo Search"
                link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
                meta={[{ name: 'description', content: 'Github Repo Search' }]}
            />
            <h1>Github Repo Search</h1>
            <Switch>
                <Route
                    exact
                    path={routes.home}
                    component={loadable(() => import('./pages/Home'))}
                />
                <Route render={() => '404!'} />
            </Switch>
        </div>
        // </Suspense>
    );
};

export default App;
