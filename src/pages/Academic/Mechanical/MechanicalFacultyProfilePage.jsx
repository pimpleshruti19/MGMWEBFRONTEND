// src/pages/Academic/Mechanical/MechanicalFacultyProfilePage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mechanicalDepartmentTabs, mechanicalTeachingStaff, mechanicalSupportingStaff } from './mechanicalConstants'; // Import mechanical faculty data

const MechanicalFacultyProfilePage = () => {
  const location = useLocation(); // Hook to get the current URL path

  const currentDeptPath = "/academics/mechanical-engineering"; // Base path for Mechanical department

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        {/* Subtle background SVG for visual interest */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Faculty Profile</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Meet the dedicated and experienced faculty members of the Mechanical Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {mechanicalDepartmentTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 border border-gray-200'
                  }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area with improved card design */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-8 text-indigo-800 border-b-2 border-indigo-200 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Mechanical Engineering Faculty
        </h2>

        {/* Teaching Staff Section */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-6 mt-10 border-b border-indigo-100 pb-2 print:text-xl">Teaching Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mechanicalTeachingStaff.map((faculty) => (
            <div key={faculty.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 print:shadow-none print:border print:rounded-none">
              <Link to={`${currentDeptPath}/faculty/${faculty.id}`} className="block">
                <img
                  src={faculty.img}
                  alt={faculty.name}
                  className="w-full h-48 object-cover object-top print:h-32" // Use object-top to focus on head/shoulders
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }} // Fallback image
                />
                <div className="p-4 text-center print:p-2">
                  <h4 className="text-lg font-semibold text-blue-800 hover:underline print:text-base">{faculty.name}</h4>
                  <p className="text-sm text-gray-600 print:text-xs">{faculty.designation}</p>
                  <p className="text-xs text-gray-500 mt-1 print:text-xxs">{faculty.specialization}</p>
                  {faculty.email && faculty.email !== 'NA' && (
                    <a href={`mailto:${faculty.email}`} className="text-indigo-600 hover:text-indigo-800 text-xs mt-2 inline-flex items-center print:text-xxs print:text-gray-700 print:no-underline">
                      <svg className="w-3 h-3 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {faculty.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Supporting Staff Section */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-6 mt-12 border-b border-indigo-100 pb-2 print:text-xl">Supporting Staff</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mechanicalSupportingStaff.map((staff) => (
            <div key={staff.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 print:shadow-none print:border print:rounded-none">
              <Link to={`${currentDeptPath}/faculty/${staff.id}`} className="block">
                <img
                  src={staff.img}
                  alt={staff.name}
                  className="w-full h-48 object-cover object-top print:h-32"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-faculty.jpg'; }} // Fallback image
                />
                <div className="p-4 text-center print:p-2">
                  <h4 className="text-lg font-semibold text-blue-800 hover:underline print:text-base">{staff.name}</h4>
                  <p className="text-sm text-gray-600 print:text-xs">{staff.designation}</p>
                  <p className="text-xs text-gray-500 mt-1 print:text-xxs">{staff.specialization}</p>
                  {staff.email && staff.email !== 'NA' && staff.email !== '' && (
                    <a href={`mailto:${staff.email}`} className="text-indigo-600 hover:text-indigo-800 text-xs mt-2 inline-flex items-center print:text-xxs print:text-gray-700 print:no-underline">
                      <svg className="w-3 h-3 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      {staff.email}
                    </a>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanicalFacultyProfilePage;