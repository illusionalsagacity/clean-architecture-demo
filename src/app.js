import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { TodoListContainer, TodoFormContainer } from "Todo/containers";

const App = props => (
  <Provider store={store}>
    <Router>
      <div className="TodoApp">
        <nav className="pt-navbar pt-fixed-top pt-dark">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">Clean Architecture Demo - TodoApp</div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <Link className="TodoNavbar__link" to="/">
              <button className="pt-button pt-minimal pt-icon-home">Home</button>
            </Link>
            <Link className="TodoNavbar__link" to="/todos/add">
              <button className="pt-button pt-minimal pt-icon-add">Add Todo</button>
            </Link>
          </div>
        </nav>

        <Route path="/todos/add" render={() => <TodoFormContainer userID="user-1" />} />
        <Route exact path="/" render={() => <TodoListContainer todoListID="all" />} />
      </div>
    </Router>
  </Provider>
);

export default App;