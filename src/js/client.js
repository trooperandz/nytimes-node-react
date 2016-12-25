import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Bootstrap from './vendor/bootstrap-without-jquery.min';

import Layout from './pages/Layout';
import Latest from './pages/Latest';
import MyNews from './pages/MyNews';
import Search from './pages/Search';
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Search}></IndexRoute>
            <Route path="mynews" name="mynews" component={MyNews}></Route>
            <Route path="latest" name="latest" component={Latest}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
    </Router>,
app);