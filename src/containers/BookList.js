//These components have direct connection with redux
import React, { Component } from 'react';
//To create a connection between the redux and the booklist component
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions';

class BookList extends Component {
  renderedBooks() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={book => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <div className="col-sm-4 list-group">{this.renderedBooks()}</div>;
  }
}

function mapStateToProps(state) {
  //Whatever returned from this will show up as props
  //booklist component
  return {
    books: state.books
  };
}

//Whatever returned from this will show up as props
//booklist component
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called , the result will be passed to all the reducers through dispatch
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote booklist from a component to container - it needs to know about this new dispatch match, selectBook, make it available as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
