import React from 'react';
import TextInput from '../common/TextInput';

const CourseForm = ({course, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="name"
        label="Name"
        value={course.name}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="par"
        label="Par"
        value={course.par}
        onChange={onChange}
        error={errors.par}/>

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

      <TextInput
        name="slope"
        label="Slope"
        value={course.slope}
        onChange={onChange}
        error={errors.slope}/>

      <TextInput
        name="rating"
        label="Rating"
        value={course.rating}
        onChange={onChange}
        error={errors.rating}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
