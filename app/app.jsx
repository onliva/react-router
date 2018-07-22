var React = require("react");
var ReactDOM = require("react-dom");
import { Route, Redirect, Switch } from "react-router";
import { HashRouter as Router, Link } from "react-router-dom";
// console.log('react-router: ', Router, Route, IndexRoute, hashHistory);

// var HomePage = require('./components/HomePage');
import Account from "./components/Account";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
import Login from "./components/Login";
import Transaction from "./components/Transaction";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
const user = (state = { username: null}, action) => {
    switch (action.type) {
        case "LOGIN":
            return { username: action.username,};
        case "LOGOUT":
            return { username: null };
        default:
            return state;
    }
};
const reducer = combineReducers({ user });
const store = createStore(reducer);
store.subscribe(function() {
    console.log(store.getState());
});
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <fieldset>
                        <legend>App</legend>
                        <Main />
                        <Route exact path="/" component={HomePage} />
                        <Route path="/account" component={Account} />
                        <Route path="/login" component={Login} />
                        <Route
                            path="/transaction"
                            render={() => {
                                return store.getState().user.username === null ? (
                                    <Redirect to="/login" />
                                ) : (
                                    <Transaction />
                                );
                            }}
                        />
                    </fieldset>
                </Router>
            </Provider>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
