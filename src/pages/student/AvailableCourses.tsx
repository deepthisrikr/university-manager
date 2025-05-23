import React from 'react';
import { BookOpen } from 'lucide-react';

const AvailableCourses = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Course cards will be populated here */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-gray-500 text-sm">No courses available at the moment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCourses;