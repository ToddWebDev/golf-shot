import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const scores = [
  {
    id: 1,
    score: 93,
    course: 'Harpeth Hills Golf Course'
  },
  {
    id: 2,
    score: 84,
    course: 'McCabe Golf Course'
  },
  {
    id: 3,
    score: 88,
    course: 'Harpeth Hills Golf Course'
  },
  {
    id: 4,
    score: 97,
    course: 'Hermitage Golf Club'
  }
];

class ScoreApi {
  static getAllScores() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], scores));
      }, delay);
    });
  }

  // static saveAuthor(author) {
	// author = Object.assign({}, author); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minAuthorNameLength = 3;
  //       if (author.firstName.length < minAuthorNameLength) {
  //         reject(`First Name must be at least ${minAuthorNameLength} characters.`);
  //       }

  //       if (author.lastName.length < minAuthorNameLength) {
  //         reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
  //       }

  //       if (author.id) {
  //         const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
  //         authors.splice(existingAuthorIndex, 1, author);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids for new authors in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         author.id = generateId(author);
  //         authors.push(author);
  //       }

  //       resolve(author);
  //     }, delay);
  //   });
  // }

  // static deleteAuthor(authorId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfAuthorToDelete = authors.findIndex(author => {
  //         author.id == authorId;
  //       });
  //       authors.splice(indexOfAuthorToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default ScoreApi;