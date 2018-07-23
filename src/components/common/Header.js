import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({ loading, courses }) => {
  return (
    <nav className="nav">
      <IndexLink to="/" className="nav-link" activeClassName="active">Home</IndexLink>
      <Link to="/courses" className="nav-link" activeClassName="active">Courses <span className="badge badge-primary">{courses.length}</span></Link>
      <Link to="/scores" className="nav-link" activeClassName="active">Scores</Link>
      <Link to="/about" className="nav-link" activeClassName="active">About</Link>
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
