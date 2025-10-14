// src/pages/Academic/Mechanical/MechanicalAchievementPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mechanicalDepartmentTabs, mechanicalAchievements } from './mechanicalConstants'; // Import new constants

const MechanicalAchievementPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/mechanical-engineering"; // Base path for Mechanical department

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section - Consistent with other redesigned pages */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Achievements theme */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.88-7-7.93s3.05-7.44 7-7.93v15.86z"></path>
            <path d="M12 11h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c-.55 0-1 .45-1 1s-.45-1-1-1z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Achievements</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Highlighting the remarkable achievements of our students and faculty.
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

      {/* Main Content Area */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-100 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Departmental Achievements by Academic Year
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          {mechanicalAchievements.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="mb-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center print:text-xl">
                <i className="fas fa-calendar-alt text-blue-500 mr-3"></i> {yearGroup.year}
              </h3>
              <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
                <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                  <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                    <tr>
                      <th scope="col" className="py-3 px-3 md:px-4 rounded-tl-lg print:py-2 print:px-2">Sr. No.</th>
                      <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Name of Student</th>
                      <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Activity</th>
                      <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Activity Held At</th>
                      <th scope="col" className="py-3 px-3 md:px-4 rounded-tr-lg print:py-2 print:px-2">Prize</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearGroup.entries.map((achievement, entryIndex) => (
                      <tr key={entryIndex} className={`${entryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                        <td className="py-3 px-3 md:px-4 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-2">
                          {achievement.srNo}
                        </td>
                        <td className="py-3 px-3 md:px-4 print:py-2 print:px-2">
                          <p className="whitespace-pre-line font-medium">{achievement.name}</p>
                        </td>
                        <td className="py-3 px-3 md:px-4 print:py-2 print:px-2">
                          <p className="whitespace-pre-line">{achievement.activity}</p>
                        </td>
                        <td className="py-3 px-3 md:px-4 print:py-2 print:px-2">
                          <p className="whitespace-pre-line">{achievement.heldAt}</p>
                        </td>
                        <td className="py-3 px-3 md:px-4 text-center font-semibold print:py-2 print:px-2">
                          {achievement.prize}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MechanicalAchievementPage;