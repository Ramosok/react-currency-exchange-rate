// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import List from './List';
import Layout from './Layout';
// styles
import './App.scss';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/edit" component={List} />
            </Switch>
        </Layout>
    );
};

export default App;
