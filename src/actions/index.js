//selectBook is an action creator and it should return an action with type and payload
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
