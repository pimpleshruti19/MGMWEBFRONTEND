// src/pages/Academic/Entc/EntcTrainingPlacementPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  entcDepartmentTabs,
  entcTrainingFieldTraining,
  entcTrainingPrograms,
  entcTrainingGallery,
  entcPlacementRecordPdfs,
  entcPlacedStudents,
  entcPlacedStudentsGallery,
} from './entcConstants'; // Import all T&P data

const EntcTrainingPlacementPage = () => {
  const location = useLocation();

  // Reusable table rendering function for placed students
  const renderPlacedStudentsTable = (headers, data, keyPrefix) => (
    <div className="overflow-x-auto relative shadow-md rounded-lg my-6 border border-gray-300">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-white uppercase bg-indigo-700">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className={`py-3 px-4 md:px-6 ${index === 0 ? 'rounded-tl-lg' : ''} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''} whitespace-nowrap`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={`${keyPrefix}-${rowIndex}`} className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors duration-150`}>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">{row.srNo}.</td>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">{row.name}</td>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-pre-line">{row.company}</td>
              <td className="py-3 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Training & Placement</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Opportunities for professional development and career growth in the Electronics & Telecommunication Engineering Department.
          <span className="text-sm block mt-2 text-yellow-200">
            (Note: Content below is currently populated with Civil Engineering data. Please update `entcConstants.js` for ENTC-specific details.)
          </span>
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {entcDepartmentTabs.map((tab) => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          Training and Placement Details
        </h2>

        {/* Field Training Section */}
        <section className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center print:text-xl">Field Training</h3>
          <p className="text-gray-700 leading-relaxed mb-4 print:text-sm">
            {entcTrainingFieldTraining.intro}
          </p>
          <p className="text-gray-700 font-semibold mb-3 print:text-sm">
            Student should observe following operations for various structures carefully on field:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 print:text-sm print:space-y-1">
            {entcTrainingFieldTraining.operations.map((op, index) => (
              <li key={index} className="pl-2">{op}</li>
            ))}
          </ul>
        </section>

        {/* Training Programs Conducted */}
        <section className="mb-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center print:text-xl">Training Program Conducted for Students</h3>
          <p className="text-gray-700 leading-relaxed mb-4 print:text-sm">
            The Department conducts various training programs to improve the Technical skills as well as soft skills among the students. Following training program conducted:
          </p>
          <div className="space-y-4">
            {entcTrainingPrograms.map((program, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 print:border print:p-2">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">
                  {index + 1}. {program.title}
                </h4>
                <p className="text-gray-600 leading-relaxed print:text-xs">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery - Training */}
        <section className="mb-8 p-6 bg-green-50 rounded-xl border border-green-100">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center print:text-xl">Photo Gallery (Training)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {entcTrainingGallery.map((category, catIndex) => (
              <div key={catIndex} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 print:border print:p-2">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">{category.category}</h4>
                <div className="space-y-4">
                  {category.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="flex flex-col items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-md object-cover shadow-md"
                        loading="lazy"
                        style={{ maxWidth: '500px', height: 'auto' }} // Enforce max-width as per source, maintain aspect ratio
                      />
                      {image.caption && (
                        <p className="text-gray-500 text-sm mt-2 text-center italic print:text-xs">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Record */}
        <section className="mb-8 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center print:text-xl">Placement Record</h3>
          <h4 className="text-lg font-semibold text-blue-700 mb-3">Placement Record PDFs:</h4>
          {entcPlacementRecordPdfs.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              {entcPlacementRecordPdfs.map((pdf, index) => (
                <li key={index}>
                  <a
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 hover:text-blue-900 hover:underline transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-10 10"></path></svg>
                    {pdf.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 italic text-center">No placement record PDFs available.</p>
          )}

          <h4 className="text-lg font-semibold text-blue-700 mb-3 mt-6">Placed Students List:</h4>
          {renderPlacedStudentsTable(
            ['Sr. No', 'Name of Student', 'Company / Organization', 'Year'],
            entcPlacedStudents,
            'entc-placed-student'
          )}
        </section>

        {/* Photo Gallery - Placed Students */}
        <section className="mb-8 p-6 bg-pink-50 rounded-xl border border-pink-100">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center print:text-xl">Photo Gallery of Placed Students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {entcPlacedStudentsGallery.map((image, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100 print:border print:p-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-md object-cover shadow-md"
                  loading="lazy"
                  style={{ maxWidth: '500px', height: 'auto' }} // Enforce max-width as per source, maintain aspect ratio
                />
                {image.caption && (
                  <p className="text-gray-500 text-sm mt-2 text-center italic print:text-xs">{image.caption}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EntcTrainingPlacementPage;