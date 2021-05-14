import React from 'react';
import BookList from '../containers/BookList';

//Create a new component. This component should produce some HTML
class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

export default App;
