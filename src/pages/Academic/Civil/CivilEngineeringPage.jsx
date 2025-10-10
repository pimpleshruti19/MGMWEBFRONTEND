// src/pages/Academic/Civil/CivilEngineeringPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { civilDepartmentTabs, civilDepartmentDetails } from './civilConstants'; // Import shared constants

const CivilEngineeringPage = () => {
  const location = useLocation();

  // Find HOD details from civilDepartmentDetails
  const hodDetails = civilDepartmentDetails.find(item => item.label === 'Head of Department');
  const hodEmail = civilDepartmentDetails.find(item => item.label === 'E –mail ID');

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
          {/* Custom SVG for Civil Engineering theme (Construction/Building related) */}
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.88-7-7.93s3.05-7.44 7-7.93v15.86z"></path>
            <path d="M12 11h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Civil Engineering</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
          Comprehensive profile of the Civil Engineering Department.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
      </div>

      {/* Department Sub-Navigation Tabs */}
      <nav className="mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2">
          {civilDepartmentTabs.map((tab) => {
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
          Civil Engineering Department Profile
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Department Overview Paragraphs */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-6 print:text-sm">
              {/* HOD image and info block, floated right as in original HTML */}
              {hodDetails && hodDetails.image && (
                <div className="float-right w-full sm:w-80 ml-0 sm:ml-6 mb-6 rounded-lg overflow-hidden shadow-md border border-gray-200 lg:w-96 lg:ml-8 print:hidden">
                  <img
                    alt={`${hodDetails.value}, Head, Department of Civil Engineering`}
                    className="w-full h-64 object-cover"
                    src='/images/Dr.AK Hashmi_HOD.jpg'
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-person.jpg'; }} // Fallback
                  />
                  <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-1">
                      {hodDetails.value}
                    </h3>
                    <p className="text-gray-600 mb-2">Head, Department of Civil Engineering</p>
                    {hodEmail && (
                      <a
                        href={`mailto:${hodEmail.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        {hodEmail.value}
                      </a>
                    )}
                  </div>
                </div>
              )}

              <p className="leading-relaxed mb-4">
                This branch of engineering encompasses every facet of civilization, including shelter and water, roads and railways, bridges and tunnels, dams and canals, harbors, airports, and similar construction activities directly related to the welfare of human beings. As long as civilization continues to expand, the civil engineering profession will persist. The Department of Civil Engineering was established right from the inception of the institute in the year 1984 with an initial intake of 30 students. In 2010, a postgraduate course specializing in Structural Engineering was initiated. The department has well-established laboratories equipped with modern tools in the fields of surveying, strength of materials, concrete technology, fluid mechanics, geology, and engineering mechanics, among others.
              </p>
              <p className="leading-relaxed mb-4">
                The Department of Civil Engineering has been primarily involved in providing quality civil engineering education to equip students as competent planners, designers, and constructors of the future physical built environment. The department is also eager to undertake research and development activities and industrial consultancy assignments.
              </p>
            </div>

            {/* Faculty List PDF Link */}
            <div className="flex justify-start mb-8 print:hidden">
              <a
                href="http://mgmcen.ac.in/pdf/List%20of%20Faculty-Civil%20Department.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out inline-flex items-center transform hover:-translate-y-1 hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                Faculty List From 2020-2025
              </a>
            </div>

            {/* Department Details Table */}
            <div className="overflow-x-auto relative rounded-xl shadow-md mb-8 border border-gray-200 print:shadow-none print:border print:rounded-none">
              <table className="w-full text-sm text-left text-gray-700 print:text-xs">
                <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-700 to-indigo-800 print:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tl-lg print:py-2 print:px-3">Detail</th>
                    <th scope="col" className="py-4 px-4 md:px-6 rounded-tr-lg print:py-2 print:px-3">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {civilDepartmentDetails.map((item, index) => (
                    // Exclude HOD's image from the table if it exists as an explicit item
                    // Or, in this case, we have a specific HOD item, so we skip it to prevent duplication
                    item.label === 'Head of Department' || item.label === 'E –mail ID' ? null : (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors print:border-b`}>
                        <td className="py-4 px-4 md:px-6 font-medium text-gray-900 whitespace-nowrap print:py-2 print:px-3">
                          <strong>{item.label}</strong>
                        </td>
                        <td className="py-4 px-4 md:px-6 print:py-2 print:px-3">
                          {item.type === 'email' ? (
                            <a href={`mailto:${item.value}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center print:text-gray-700">
                              <svg className="w-4 h-4 mr-1 print:hidden" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                              </svg>
                              {item.value}
                            </a>
                          ) : (
                            <span className="font-medium">{item.value}</span>
                          )}
                        </td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Links to other sections (kept from previous version) */}
        <div className="mt-10 p-6 bg-indigo-50 rounded-xl border border-indigo-100 print:hidden">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/academics/civil-engineering/vision-mission" // Now points to the separate page
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Vision & Mission</h4>
                <p className="text-sm text-gray-600">Our guiding principles and objectives</p>
              </div>
            </Link>
            <Link
              to="/academics/civil-engineering/programmes"
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">Programmes</h4>
                <p className="text-sm text-gray-600">Our academic offerings</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilEngineeringPage;