import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import CreateBlogs from './components/CreateBlogs';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  callAPI() {
    fetch("http://localhost:9000/blogs")
      .then(res => res.json())
      .then(res => {
        const s = res;
      }
      );
  }

  componentWillMount() {
  }

  /**
   * The footer contains a back to top button that should scrool
   * the page back up to where the results start
   */
  handleBackToTopClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  render() {
    return (
      <div className="App">
        <Header id="header" />
        <main>
        <Router>
            <div className="router">
                <ul>
                  <li>
                    <Link to="/">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/createBlogs">Add Blog</Link>

                  </li>
                </ul>
            </div>

            <Switch>
              <Route path="/createBlogs">
                <CreateBlogs />
              </Route>
              <Route path="/">
                <Blogs />
              </Route>
            </Switch>
          </Router>
        </main>
        <Footer onBackToTopClick={this.handleBackToTopClick} />
      </div>
    );
  }
}

export default App;
