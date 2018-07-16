import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "harpeth-hills",
    name: "Harpeth Hills Golf Course",
    watchHref: "https://www.golfnow.com",
    par: 72,
    length: 6899,
    slope: 126,
    rating: 73.3
  },
  {
    id: "hermitage-golf-club",
    name: "The President's Reserve",
    watchHref: "https://www.golfnow.com",
    par: 72,
    length: 7157,
    slope: 147,
    rating: 80.1
  },
  {
    id: "gaylord-springs",
    name: "Gaylord Springs Golf Links",
    watchHref: "https://www.golfnow.com",
    par: 72,
    length: 7007,
    slope: 133,
    rating: 74.1
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.name, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseNameLength = 1;
        if (course.name.length < minCourseNameLength) {
          reject(`Name must be at least ${minCourseNameLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;