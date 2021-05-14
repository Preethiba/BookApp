import React from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

//Create a new component. This component should produce some HTML
class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
