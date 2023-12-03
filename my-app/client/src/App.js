import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactUsPage from './components/ContactUsPage';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/blog" component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;