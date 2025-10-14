// src/pages/Academic/Mechanical/MechanicalTrainingPlacementPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  mechanicalDepartmentTabs,
  mechanicalTrainingPrograms,
  mechanicalPlacementRecordPdfs,
  mechanicalPlacedStudents,
  mechanicalTrainingGallery,
  mechanicalPlacedStudentsGallery
} from './mechanicalConstants';

const MechanicalTrainingPlacementPage = () => {
  const location = useLocation();
  const currentDeptPath = "/academics/mechanical-engineering"; // Base path for Mechanical department

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Mechanical Engineering theme */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.44 12.99l-2.54-.29c-.23-.03-.45.08-.59.27l-1.33 1.9c-1.42-.99-2.58-2.15-3.57-3.57l1.9-1.33c.19-.13.3-.36.27-.59l-.29-2.54c-.06-.5-.48-.86-.98-.86h-2.99c-.55 0-1 .45-1 1 0 5.52 4.48 10 10 10 .55 0 1-.45 1-1v-2.99c0-.5-.36-.93-.86-.98zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.18 0 .35-.01.53-.03-1.23-1.1-2.2-2.43-2.9-3.97-.62-1.33-.93-2.74-.93-4.17s.31-2.84.93-4.17c.7-1.54 1.67-2.87 2.9-3.97C12.35 2.01 12.18 2 12 2z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Training & Placement</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Fostering career development and industry connections for Mechanical Engineering students.
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
        <div className="prose prose-lg max-w-none text-gray-700 print:text-sm">
          
          <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center print:text-xl">
            <i className="fas fa-chalkboard-user text-indigo-500 mr-3"></i> Training Programs & Resources
          </h3>
          <p className="mb-6">The Department organizes and provides resources on various training programs, industry interactions, and placement activities to enhance students' technical and professional skills.</p>
          
          {/* Training Programs */}
          <div className="space-y-6">
            {mechanicalTrainingPrograms.map((program, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-blue-700 mb-2">{program.title}</h4>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>

          <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />

          {/* Placement Record PDFs */}
          <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center print:text-xl">
            <i className="fas fa-file-pdf text-indigo-500 mr-3"></i> Placement & Training Information (PDFs)
          </h3>
          <ul className="list-disc pl-8 space-y-2 mb-8">
            {mechanicalPlacementRecordPdfs.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-bold">
                  {pdf.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Conditional Rendering for Placed Students Table */}
          {mechanicalPlacedStudents.length > 0 && (
            <>
              <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center print:text-xl">
                <i className="fas fa-table text-indigo-500 mr-3"></i> Placed Students Overview
              </h3>
              <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
                <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                  <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                    <tr>
                      <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Sr. No.</th>
                      <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Name of Student</th>
                      <th scope="col" className="py-4 px-4 md:px-6 print:py-2 print:px-3">Company / Organization</th>
                      <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mechanicalPlacedStudents.map((student, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                        <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">{student.srNo}</td>
                        <td className="py-4 px-4 md:px-6 print:py-2 print:px-3"><span className="font-medium">{student.name}</span></td>
                        <td className="py-4 px-4 md:px-6 print:py-2 print:px-3">{student.company}</td>
                        <td className="py-4 px-4 md:px-6 text-center print:py-2 print:px-3">{student.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Conditional Rendering for Galleries */}
          {mechanicalTrainingGallery.length > 0 && (
             <>
              <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />
               <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center print:text-xl">
                <i className="fas fa-camera text-indigo-500 mr-3"></i> Training Photo Gallery
               </h3>
               <div className="space-y-8">
                 {mechanicalTrainingGallery.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h4 className="text-xl font-semibold text-blue-700 mb-4">{catIndex + 1}. {category.category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="bg-gray-50 p-3 rounded-lg shadow-sm flex justify-center items-center">
                          <img src={img.src} alt={img.alt} className="max-w-full h-auto rounded-md object-cover border border-gray-200" style={{ maxHeight: '350px' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                 ))}
               </div>
             </>
          )}

          {mechanicalPlacedStudentsGallery.length > 0 && (
            <>
              <hr className="my-8 border-t-2 border-indigo-100 print:my-4" />
              <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center print:text-xl">
                <i className="fas fa-images text-indigo-500 mr-3"></i> Photo Gallery of Placed Students
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mechanicalPlacedStudentsGallery.map((img, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm flex justify-center items-center">
                    <img src={img.src} alt={img.alt} className="max-w-full h-auto rounded-md object-cover border border-gray-200" style={{ maxHeight: '350px' }} />
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default MechanicalTrainingPlacementPage;