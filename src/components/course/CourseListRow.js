import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Make Tee Time</a></td>
      <td><Link to={'/course/' + course.id}>{course.name}</Link></td>
      <td>{course.par}</td>
      <td>{course.length}</td>
      <td>{course.slope}</td>
      <td>{course.rating}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
