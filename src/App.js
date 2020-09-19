import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {

    return (
        <Router>
            <div>
                <Menu/>
                <div className="container">
                    <div className="row">
                        {showContentMenu(routes)}
                    </div>
                </div>
            </div>
        </Router>
    );

    function showContentMenu(routes) {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />)
            })
        }
        return <Switch>{result}</Switch>

    }
}

export default App;
