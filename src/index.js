import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This component should produce some HTML
class App extends Component {
  render() {
    return <div>React</div>;
  }
}

//Take this component's generated HTML and put it on the page (DOM)
//App - component class
//<App /> - component instance
//ReactDOM.render(componentInstance or JSX elements,DOM element where the JSX should be rendered)

ReactDOM.render(<App />, document.querySelector('.container'));
