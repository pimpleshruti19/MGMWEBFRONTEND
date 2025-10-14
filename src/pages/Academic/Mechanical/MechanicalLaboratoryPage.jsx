// src/pages/Academic/Mechanical/MechanicalLaboratoryPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mechanicalDepartmentTabs, mechanicalLaboratories, allMechanicalFacultyData } from './mechanicalConstants';

const MechanicalLaboratoryPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/mechanical-engineering"; // Base path for Mechanical department

  // Helper to find faculty details for incharge if needed for linking
  const getFacultyForIncharge = (inchargeName) => {
    return allMechanicalFacultyData.find(f => f.name === inchargeName);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-slate-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-slate-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Laboratory theme (e.g., a gear) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Laboratories</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Explore the state-of-the-art laboratories and facilities of the Mechanical Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-gray-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {mechanicalDepartmentTabs.map((tab) => {
            const isActive = location.pathname.includes(tab.path);
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`p-3 text-center rounded-md transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium
                  ${isActive
                    ? 'bg-slate-200 text-slate-800 border-2 border-slate-400 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-slate-700 border border-gray-200'
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
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-slate-200 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-slate-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
          Mechanical Engineering Laboratories
        </h2>

        {/* Laboratories Table */}
        <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
          <table className="w-full text-sm text-left text-gray-700 print:text-xs">
            <thead className="text-xs text-white uppercase bg-gradient-to-r from-gray-700 to-slate-800 print:bg-gray-800">
              <tr>
                <th scope="col" className="py-3 px-3 md:px-4 rounded-tl-lg print:py-2 print:px-2">Sr. No.</th>
                <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Laboratory Name</th>
                <th scope="col" className="py-3 px-3 md:px-4 print:py-2 print:px-2">Area</th>
                <th scope="col" className="py-3 px-3 md:px-4 rounded-tr-lg print:py-2 print:px-2">Laboratory Incharge</th>
              </tr>
            </thead>
            <tbody>
              {mechanicalLaboratories.map((lab, index) => {
                const inchargeFaculty = lab.incharge ? getFacultyForIncharge(lab.incharge) : null;
                return (
                  <tr key={lab.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-slate-50 transition-colors print:border-b`}>
                    <td className="py-3 px-3 md:px-4 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-2">
                      {lab.srNo}
                    </td>
                    <td className="py-3 px-3 md:px-4 print:py-2 print:px-2">
                      <Link to={`${currentDeptPath}/labs/${lab.id}`} className="font-semibold text-blue-700 hover:underline">
                        {lab.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3 md:px-4 text-center print:py-2 print:px-2">
                      {lab.area}
                    </td>
                    <td className="py-3 px-3 md:px-4 text-center print:py-2 print:px-2">
                      {inchargeFaculty ? (
                        <Link to={`${currentDeptPath}/faculty/${inchargeFaculty.id}`} className="text-slate-700 hover:underline">
                          {lab.incharge}
                        </Link>
                      ) : (
                        lab.incharge || 'N/A'
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700 mt-10 print:text-sm">
          <p className="mb-4">
            The Mechanical Engineering Department is equipped with a comprehensive range of laboratories that provide hands-on experience
            and facilitate advanced research for students and faculty. Each laboratory is designed to complement
            theoretical knowledge with practical application across various specializations within Mechanical Engineering.
          </p>
          <p>
            From CAD/CAM and CNC programming to thermal sciences and fluid mechanics, our labs are central to fostering innovation and developing skilled engineers ready for the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MechanicalLaboratoryPage;
