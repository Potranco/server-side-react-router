import React from 'react';
import MyComponent from './MyComponent'
import { Route, Switch, NavLink } from 'react-router-dom';


const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const Links = () => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink
      activeStyle={{color: 'green'}}
      to="/about">About</NavLink>
    <NavLink
      to="/contact">Contact</NavLink>
    <NavLink to="/component">Component</NavLink>
  </nav>
);

const MyComponentCompiled = () => <MyComponent version="Client" />;

const App = (props) => {
  return (
    <div>
      <Links />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/component" component={MyComponentCompiled} />
      </Switch>
    </div>
  );
}
console.log('Module App');
export default App;
