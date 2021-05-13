import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDmM_GzGJ567kj7QhIvInzvjkqvDyl0EWg';

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'Vijay' }, videos => {
      this.setState({ videos }); //this.setState({ videos: videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (DOM)
//App - component class
//<App /> - component instance
//ReactDOM.render(componentInstance or JSX elements,DOM element where the JSX should be rendered)

ReactDOM.render(<App />, document.querySelector('.container'));
