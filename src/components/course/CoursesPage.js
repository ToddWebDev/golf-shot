import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props,context);

    this.state = {
      course: { name: '' }
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event) {
    const course = this.state.course;
    course.name = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.name}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onNameChange}
          value={this.state.course.name} />

          <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
