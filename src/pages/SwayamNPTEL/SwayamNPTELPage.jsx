// src/pages/admissions/SwayamNPTELPage.jsx

import React from 'react';

// Data for SWAYAM-NPTEL documents, organized by category
const swayamNPTELData = [
  {
    categoryTitle: "Active local Chapter Certificates",
    documents: [
      { title: "Active SPOC July -Dec 2023", link: "http://mgmcen.ac.in/pdf/swayam-nptel/Active%20SPOC%20July%20-Dec%202023.jpg" },
      { title: "Active SPOC Jan -April 2023", link: "http://mgmcen.ac.in/pdf/swayam-nptel/Active%20SPOC%20Jan%20-April%202023.jpg" },
      { title: "Active SPOC July-Dec 2022", link: "http://mgmcen.ac.in/pdf/swayam-nptel/Active%20SPOC%20July-Dec%202022.jpg" },
      { title: "Active SPOC Jan -Dec 2021", link: "http://mgmcen.ac.in/pdf/swayam-nptel/Active%20SPOC%20Jan%20-Dec%202021.jpg" },
      { title: "Active Spoc July-Dec 2020", link: "http://mgmcen.ac.in/pdf/swayam-nptel/Active%20Spoc%20July-Dec%202020.jpg" },
      { title: "SPOC Appreciation Letter Jan 2020", link: "http://mgmcen.ac.in/pdf/swayam-nptel/SPOC%20Appreciation%20Letter%20Jan%202020.pdf" },
    ]
  },
  {
    categoryTitle: "Summary Report of last five year activities",
    documents: [
      { title: "Summary report of SWAYAM-NPTEL Activities", link: "https://mgmcen.ac.in/pdf/swayam-nptel/Summary%20report%20of%20SWAYAM-NPTEL%20Activities.pdf" },
    ]
  },
  {
    categoryTitle: "SOP",
    documents: [
      { title: "SOP", link: "https://mgmcen.ac.in/pdf/swayam-nptel/SOP%20for%20SWAYAM%20and%20NPTEL%20Courses%20(1).pdf" },
    ]
  },
  {
    categoryTitle: "Swayam result",
    documents: [
      { title: "Swayam result", link: "https://mgmcen.ac.in/pdf/swayam-nptel/SWAYAM-NPTEL%20RESULTS%20AY%202019-2024%20(1).pdf" },
    ]
  }
];

const SwayamNPTELPage = () => {
  return (
    // Outer container matching established theme
    <div className="bg-gray-50 min-h-screen py-12 pt-40">
      <div className="container mx-auto px-4">
        
        {/* Page Title - Consistent with other pages */}
        <header className="mb-8" aria-labelledby="swayam-nptel-title">
          <h1 id="swayam-nptel-title" className="text-4xl font-bold text-indigo-800 border-b-2 border-indigo-200 pb-4">
            SWAYAM-NPTEL
          </h1>
        </header>

        {/* Main content section - Consistent with other pages' content wrapper */}
        <section className="bg-white p-6 rounded-lg shadow-lg" aria-label="SWAYAM-NPTEL Information and Downloads">
          <div className="space-y-8">
            {swayamNPTELData.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {category.categoryTitle}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-center">
                      <a 
                        href={doc.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline flex items-center gap-2"
                      >
                        {/* Using FontAwesome for consistency, assuming it's available */}
                        <i className="fas fa-file-pdf text-lg"></i>
                        <span>{doc.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SwayamNPTELPage;