// src/pages/Academic/Mechanical/MechanicalProgrammesPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  mechanicalDepartmentTabs,
  mechanicalProgrammesCourses,
  programAssessmentCommittee,
  departmentAdvisoryBoard
} from './mechanicalConstants';

const MechanicalProgrammesPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/mechanical-engineering"; // Base path for Mechanical department

  // Reusable component for rendering committee tables
  const CommitteeTable = ({ title, description, members }) => (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center print:text-xl">
        <svg className="w-7 h-7 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        {title}
      </h3>
      <p className="prose max-w-none text-gray-700 mb-6 print:text-sm">{description}</p>
      <div className="overflow-x-auto relative rounded-xl shadow-md border border-gray-200 print:shadow-none print:border print:rounded-none">
        <table className="w-full text-sm text-left text-gray-700 print:text-xs">
          <thead className="text-xs text-white uppercase bg-gradient-to-r from-gray-700 to-gray-800 print:bg-gray-800">
            <tr>
              <th scope="col" className="py-3 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
              <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Name</th>
              <th scope="col" className="py-3 px-4 md:px-6 print:py-2 print:px-3">Designation</th>
              <th scope="col" className="py-3 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                <td className="py-3 px-4 md:px-6 font-medium text-gray-900 text-center print:py-2 print:px-3">{member.srNo}</td>
                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.name}</td>
                <td className="py-3 px-4 md:px-6 print:py-2 print:px-3">{member.designation}</td>
                <td className="py-3 px-4 md:px-6 text-center print:py-2 print:px-3">{member.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Mechanical Engineering theme */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.44 12.99l-2.54-.29c-.1-.01-.19-.06-.28-.11L15.2 11c-.41-.23-.62-.7-.5-1.18l.58-2.32c.12-.49-.03-1.02-.44-1.35l-1.63-1.32c-.41-.33-.96-.41-1.43-.2l-2.43 1.04c-.47.2-.99.2-1.46,0L5.46 4.93c-.47-.2-1.02-.12-1.43.2L2.4 6.45c-.41.33-.56.86-.44 1.35l.58 2.32c.12.49-.09.95-.5 1.18L.62 12.7c-.41.23-.64.7-.5 1.18l.58 2.32c.12.49.43.87.89.97l2.54.29c.1.01.19.06.28.11l1.42 1.58c.41.23.62.7.5 1.18l-.58 2.32c-.12.49.03 1.02.44 1.35l1.63 1.32c.41.33.96.41 1.43.2l2.43-1.04c.47-.2.99-.2 1.46,0l2.43 1.04c.47.2 1.02.12 1.43-.2l1.63-1.32c.41-.33.56-.86.44-1.35l-.58-2.32c-.12-.49.09-.95.5-1.18l1.42-1.58c.09-.05.18-.1.28-.11l2.54-.29c.46-.09.77-.48.89-.97l.58-2.32c.13-.48-.09-.95-.5-1.18zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Programmes</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Overview of academic programmes offered by the Mechanical Engineering Department.
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
          <svg className="w-8 h-8 mr-3 text-indigo-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          Mechanical Engineering Programmes Offered
        </h2>

        {/* Programmes Table */}
        <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Course Name</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Start Year</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Duration (Years)</th>
                <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Type</th>
                <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Intake Capacity</th>
              </tr>
            </thead>
            <tbody>
              {mechanicalProgrammesCourses.map((course, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                  <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                    {course.srNo}
                  </td>
                  <td className="py-4 px-4 md:px-6 font-medium print:py-2 print:px-3">
                    {course.name}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.startYear}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.duration}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.type}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">
                    {course.intake}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="my-10 border-t-2 border-indigo-100 print:my-6" />

        {/* Departmental Committees Section */}
        <CommitteeTable 
          title={programAssessmentCommittee.title}
          description={programAssessmentCommittee.description}
          members={programAssessmentCommittee.members}
        />
        
        <CommitteeTable 
          title={departmentAdvisoryBoard.title}
          description={departmentAdvisoryBoard.description}
          members={departmentAdvisoryBoard.members}
        />
      </div>
    </div>
  );
};

export default MechanicalProgrammesPage;