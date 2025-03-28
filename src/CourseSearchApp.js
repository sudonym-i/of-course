import React, { useState } from 'react';
import './CourseSearchApp.css'
// Sample course dataset
const coursesData = [
  {
    prefix: 'CS',
    code: '101',
    name: 'Introduction to Computer Science',
    description: 'Fundamental concepts of computer science and programming.',
    credits: 3,
    prerequisites: 'None',
    instructor: 'Dr. Jane Smith'
  },
  {
    prefix: 'MATH',
    code: '200',
    name: 'Calculus I',
    description: 'Comprehensive introduction to differential and integral calculus.',
    credits: 4,
    prerequisites: 'High School Algebra',
    instructor: 'Prof. John Doe'
  },
  {
    prefix: 'ENG',
    code: '305',
    name: 'Advanced Technical Writing',
    description: 'Advanced techniques in professional and technical communication.',
    credits: 3,
    prerequisites: 'ENG 101',
    instructor: 'Dr. Emily Brown'
  }
];

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
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="title">Course Search</h2>
        <div className="flex space-x-2 mb-4">
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
        <button
          onClick={handleSearch}
          className="searchbutton"
        >
          Search Course
        </button>

        {error && (
          <div className="text-red-500 mt-4 text-center">
            {error}
          </div>
        )}

        {courseResult && (
          <div className="window">
            <h3 className="text-xl font-bold mb-2">
              {courseResult.prefix} {courseResult.code}: {courseResult.name}
            </h3>
            <div className="space-y-2">
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
