import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/LandingPage'
import VideoPage from './pages/VideoPage'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


const App = () => {
    return (
        <div>

            <Router>
                <Switch>
                  <Route exact path="/">
                    <LandingPage />
                  </Route>
                  <Route exact path="/video">
                    <VideoPage />
                  </Route>
                </Switch>
            </Router>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));