import path from 'path';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
// @ts-ignore - no types provided - TODO: include module definition
import paths from '../../config/paths';
// import { configureStore } from '../shared/store';
import errorHandler from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';
import addStore from './middleware/addStore';
import webhookVerification from './middleware/webhookVerification';
import { i18nextXhr, refreshTranslations } from './middleware/i18n';

require('dotenv').config();

const app = express();
// const app = express.default();
app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});
app.get('*.css', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
});

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
// if (process.env.NODE_ENV === 'development') {
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));
// }
app.use('/robots.txt', express.static(path.join(paths.clientBuild, 'robots.txt')));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/locales/refresh', webhookVerification, refreshTranslations);

// It's probably a good idea to serve these static assets with Nginx or Apache as well:
app.get('/locales/:locale/:ns.json', i18nextXhr);

app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use(serverRenderer());

app.use(errorHandler);

app.listen(process.env.PORT || 8500, () => {
    console.log(
        `[${new Date().toISOString()}]`,
        chalk.blue(`App is running: http://localhost:${process.env.PORT || 8500}`)
    );
});

export default app;
