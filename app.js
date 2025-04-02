import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersDisplay from './pages/UsersDisplay';
import TrendingPosts from './pages/TrendingPosts';
import FeedDisplay from './pages/FeedDisplay';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={UsersDisplay} />
          <Route path="/trending" component={TrendingPosts} />
          <Route path="/feed" component={FeedDisplay} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
