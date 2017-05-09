import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import configureStore from './redux/store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history} children={routes} />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("app")
);