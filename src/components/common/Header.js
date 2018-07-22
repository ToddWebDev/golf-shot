import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({ loading, courses }) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses <span className="badge badge-primary">{courses.length}</span></Link>
      {" | "}
      <Link to="/scores" activeClassName="active">Scores</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={5} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    courses: state.courses
  };
}

export default Header;
