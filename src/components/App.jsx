// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import List from './List';
import Edit from './Edit';
import Layout from './Layout';
// styles
import './App.css';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/edit" component={Edit} />
            </Switch>
        </Layout>
    );
};

export default App;
