// src/pages/Academic/Mechanical/MechanicalLaboratoryDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mechanicalLaboratories, allMechanicalFacultyData } from './mechanicalConstants';

const MechanicalLaboratoryDetailPage = () => {
  const { labId } = useParams(); // Get labId from URL
  const [labDetails, setLabDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentDeptPath = "/academics/mechanical-engineering"; // Base path for Mechanical department

  useEffect(() => {
    setLoading(true);
    setError(null);
    const foundLab = mechanicalLaboratories.find(lab => lab.id === labId);

    if (foundLab) {
      setLabDetails(foundLab);
    } else {
      setError('Laboratory not found.');
    }
    setLoading(false);
  }, [labId]); // Re-run effect if labId changes

  if (loading) return <div className="text-center py-8 mt-28 text-gray-700 print:mt-4">Loading laboratory details...</div>;
  if (error) return <div className="text-red-600 text-center py-8 mt-28 print:mt-4">{error}</div>;
  if (!labDetails) return <div className="text-center py-8 mt-28 text-gray-700 print:mt-4">Laboratory details not found.</div>;

  const inchargeFaculty = labDetails.incharge ? allMechanicalFacultyData.find(f => f.name === labDetails.incharge) : null;

  return (
    <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-slate-900 rounded-xl p-8 md:p-12 text-white mb-12 shadow-2xl relative overflow-hidden print:bg-slate-900 print:shadow-none print:rounded-none print:p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">{labDetails.name}</h1>
        <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">Detailed information about this specialized laboratory.</p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 to-gray-400 print:hidden"></div>
      </div>

      {/* Main Content Area for individual laboratory details */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100 print:shadow-none print:border-none print:rounded-none">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 border-b-2 border-slate-200 pb-4 flex items-center print:text-2xl">
          <svg className="w-8 h-8 mr-3 text-slate-500 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
          {labDetails.name}
        </h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-8 print:flex-col print:space-x-0">
          <div className="md:w-1/2 text-gray-700 leading-relaxed print:w-full print:text-sm">
            <p className="text-lg mb-2 print:text-base"><strong>Area:</strong> <span className="font-medium">{labDetails.area}</span></p>
            <p className="text-lg mb-2 print:text-base">
              <strong>Incharge:</strong>
              {inchargeFaculty ? (
                <Link to={`${currentDeptPath}/faculty/${inchargeFaculty.id}`} className="text-slate-700 hover:underline print:text-gray-700 print:no-underline">
                  <span className="font-medium">{labDetails.incharge}</span>
                </Link>
              ) : (
                <span className="font-medium">{labDetails.incharge || 'Not Available'}</span>
              )}
            </p>
            
            <p className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm italic print:text-xs print:bg-white print:p-0 print:border-none print:shadow-none">
              This is a placeholder for a detailed description of the {labDetails.name}.
              It would include information about available equipment, experiments conducted,
              its importance to the curriculum, and any specialized research facilities.
              This content can be expanded and fetched from a more extensive data source.
            </p>
            
            <div className="mt-8 print:hidden">
              <Link to={`${currentDeptPath}/labs`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                &larr; Back to Laboratories List
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex-shrink-0 mt-6 md:mt-0 print:w-full print:mt-4">
            <img
              src={`/images/mechanical/labs/${labDetails.id}.jpg`} // Assumes lab-specific images in this path
              alt={labDetails.name}
              className="w-full h-auto object-cover rounded-lg shadow-md border border-gray-200 print:shadow-none print:border-none print:rounded-none"
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder-lab.jpg'; }} // Fallback image
            />
            <p className="text-center text-gray-500 text-sm mt-2 print:text-xs">Image of the {labDetails.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalLaboratoryDetailPage;