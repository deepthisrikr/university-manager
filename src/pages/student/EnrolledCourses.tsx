import React from 'react';

const EnrolledCourses = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Enrolled Courses</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <p className="text-gray-500">Loading enrolled courses...</p>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;