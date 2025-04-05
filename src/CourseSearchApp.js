import React, { useState } from 'react';
import './CourseSearchApp.css';
import {coursesData} from './data.js';

const CourseSearchApp = () => {
  const [searchPrefix, setSearchPrefix] = useState('');
  const [searchCode, setSearchCode] = useState('');
  const [courseResult, setCourseResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Normalize inputs
    const normalizedPrefix = searchPrefix.trim().toUpperCase();
    const normalizedCode = searchCode.trim();

    // Find matching course
    const foundCourse = coursesData.find(
      course => course.prefix === normalizedPrefix && course.code === normalizedCode
    );

    if (foundCourse) {
      setCourseResult(foundCourse);
      setError('');
    } else {
      setCourseResult(null);
      setError('No course found with that prefix and code.');
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h2 className="title">Course Search</h2>
        <div className="searchBars">
          <input 
            type="text"
            placeholder="Course Prefix (e.g., MATH)"
            value={searchPrefix}
            onChange={(e) => setSearchPrefix(e.target.value)}
            className="searchbar"
          />
          <input 
            type="text"
            placeholder="Course Code (e.g., 101)"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
            className="searchbar"
          />
        </div>
      <div className="searchContainer">
        <button
          onClick={handleSearch}
          className="searchbutton"
        >
          Search Course
        </button>
        </div>
        {error && (
          <div className="text-red-500 mt-4 text-center">
            {error}
          </div>
        )}

        {courseResult && (
          <div className="window">
            <h3 className="window-title">
              {courseResult.prefix} {courseResult.code}: {courseResult.name}
            </h3>
            <div className="window-content">
              <p><strong>Description:</strong> {courseResult.description}</p>
              <p><strong>Credits:</strong> {courseResult.credits}</p>
              <p><strong>Prerequisites:</strong> {courseResult.prerequisites}</p>
              <p><strong>Instructor:</strong> {courseResult.instructor}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSearchApp;
