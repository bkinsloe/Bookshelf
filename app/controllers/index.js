import Ember from 'ember';

export default Ember.Controller.extend({

  //isbn: '',

  // Validate that isbn is 10 or 13 digits
  isValid: Ember.computed.match('isbn', /^(?=(?:.{10}|.{13})$)[0-9]*$/),
  isDisabled: Ember.computed.not('isValid'),

  // Save the book
  actions: {
    saveBook() {
      const title = this.get('title');
      const author = this.get('author');
      const isbn = this.get('isbn');
      const newISBN = this.store.createRecord('book', {title: title, author: author, isbn: isbn});

      newISBN.save().then((response) => {
        console.log(response);
        console.log(`Thank you! We've just saved your book: ${this.get('isbn')}`);
        //this.set('responseMessage', `Thank you! We've just saved your book: ${this.get('isbn')}`);
        this.set('isbn', '');
        this.set('author', '');
        this.set('title', '');
      });
    },

    deleteBook(book) {
      console.log(book);
      const isbn = this.get('isbn');
    }
  }
});
