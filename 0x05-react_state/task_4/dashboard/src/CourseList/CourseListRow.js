import React, { useState } from 'react';
import styles from './CourseListRow.css';

const CourseListRow = ({ course }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const rowStyle = isChecked ? styles.rowChecked : {};

  return (
    <tr style={rowStyle}>
      <td>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      </td>
      <td>{course.id}</td>
      <td>{course.name}</td>
      <td>{course.credit}</td>
    </tr>
  );
};

export default CourseListRow;
