import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Sub-navigation tabs for the Mechanical Engineering department
const mechanicalDepartmentTabs = [
    { name: "DEPT Profile", path: "/academics/mechanical-engineering" },
    { name: "Vision-Mission", path: "/academics/mechanical-engineering/vision-mission" },
    { name: "Programmes", path: "/academics/mechanical-engineering/programmes" },
    { name: "Faculty Profile", path: "/academics/mechanical-engineering/faculty" },
    { name: "Laboratory", path: "/academics/mechanical-engineering/labs" },
    { name: "Training and Placement", path: "/academics/mechanical-engineering/training-placement" },
    { name: "Research & Publication", path: "/academics/mechanical-engineering/research-publication" },
    { name: "Achievements", path: "/academics/mechanical-engineering/achievements" },
    { name: "Departmental Activity", path: "/academics/mechanical-engineering/activities" },
];

/**
 * MechanicalVisionMissionPage
 * Displays the Vision, Mission, PEOs, PSOs, and POs for the Mechanical Engineering Department.
 * Uses the blue/indigo theme for a clean, professional look, matching the other department pages.
 */
const MechanicalVisionMissionPage = () => {
    const location = useLocation();

    // Reusable utility function to create icons for cards
    const CardIcon = ({ svgPath, colorClass, title }) => (
        <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-opacity-30 mb-3 print:hidden" 
                 style={{ backgroundColor: `${colorClass.replace('text-', '')}20`, color: colorClass }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={svgPath}></path>
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 print:text-xl">{title}</h3>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8 mt-28 max-w-6xl print:mt-4 print:max-w-none">
            
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-8 md:p-12 text-white mb-6 shadow-2xl relative overflow-hidden print:bg-blue-900 print:shadow-none print:rounded-none print:p-6">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10 print:hidden">
                    {/* Custom SVG for Mechanical Engineering theme (e.g., gears) */}
                    <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.4 12.6c.1-.5.1-1 .1-1.6s0-1.1-.1-1.6l2.1-1.6c.2-.1.2-.4.1-.6l-2-3.5c-.1-.2-.4-.3-.6-.2l-2.5 1c-.5-.4-1.1-.7-1.7-1l-.4-2.8c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5l-.4 2.8c-.6.3-1.2.6-1.7 1l-2.5-1c-.2-.1-.5 0-.6.2l-2 3.5c-.1.2-.1.5.1.6l2.1 1.6c0 .5-.1 1.1-.1 1.6s0 1.1.1 1.6l-2.1 1.6c-.2.1-.2.4-.1.6l2 3.5c.1.2.4.3.6.2l2.5-1c.5.4 1.1.7 1.7 1l.4 2.8c0 .3.2.5.5.5h4c.3 0 .5-.2.5-.5l.4-2.8c.6-.3 1.2-.6 1.7-1l2.5 1c.2.1.5 0 .6-.2l2-3.5c.1-.2.1-.5-.1-.6l-2.1-1.6zM12 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                    </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 print:text-3xl">Mechanical Engineering: Vision & Mission</h1>
                <p className="text-xl opacity-90 max-w-2xl relative z-10 print:text-lg">
                    Our guiding principles and objectives for the Mechanical Engineering Department.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 print:hidden"></div>
            </div>

            {/* Department Sub-Navigation Tabs */}
            <nav className={`mb-8 bg-white rounded-lg shadow-md transition-all duration-300 print:hidden`}>
                <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Department Sections:</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
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

            {/* Main Content Area - Card Layout */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-yellow-200 print:shadow-none print:border-none print:rounded-none">
                <h2 className="text-3xl font-bold mb-8 text-indigo-900 border-b-2 border-indigo-200 pb-4 flex items-center print:text-2xl">
                    <svg className="w-8 h-8 mr-3 text-indigo-600 print:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Departmental Guiding Statements
                </h2>

                {/* Vision and Mission Section Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 print:grid-cols-2 print:gap-4 print:mb-6">
                    
                    {/* Vision Section */}
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4">
                        <CardIcon 
                            title="Department Vision" 
                            colorClass="text-blue-700"
                            svgPath="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                        <p className="text-gray-700 text-center leading-relaxed print:text-sm">
                            To be one of the leading Departments for Mechanical Engineering education to develop proficient engineers with global acceptance in the service of mankind.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4">
                        <CardIcon 
                            title="Department Mission" 
                            colorClass="text-indigo-700"
                            svgPath="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
                            <li className="pl-2">
                                M1: Providing quality education in Mechanical Engineering with cutting edge technologies like Computer Numerical Control, Coordinate Measuring Machine, Additive manufacturing with multidisciplinary as well as green manufacturing approach on sustainable basis.
                            </li>
                            <li className="pl-2">
                                M2: Developing competent engineers to solve real life problems related to Mechanical Engineering and facilitate continuous learning based on the changing needs of the Industry.
                            </li>
                            <li className="pl-2">
                                M3: Cultivating leadership qualities, employability skills, with ethical values, through learner-centric approach among Mechanical Engineering graduates.
                            </li>
                            <li className="pl-2">
                                M4: Nurturing communication with research and development organizations, Industries and alumni leading to excellence in teaching-learning covering Automation technologies, Advanced manufacturing and allied Mechanical research to enhance creativity.
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Program Educational Objectives (PEOs) Section */}
                <div className="mb-10 p-6 bg-purple-50 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
                    <CardIcon 
                        title="Program Educational Objectives (PEOs)" 
                        colorClass="text-purple-700"
                        svgPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                    <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
                        Graduates of Mechanical Engineering employed should be able to:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
                        <li className="pl-2">
                            PEO1: Implement technological expertise to design, formulate and address complex Mechanical Engineering problems providing Green manufacturing solutions on sustainable basis.
                        </li>
                        <li className="pl-2">
                            PEO2: Apply their knowledge, professional competence and skills acquired in Higher education and Research emphasizing automation based technologies to meet the current trends in manufacturing, design and power sector.
                        </li>
                        <li className="pl-2">
                            PEO3: Practice work ethics, teamwork and multi disciplinary approach for professional development in Mechanical Engineering through lifelong learning.
                        </li>
                        <li className="pl-2">
                            PEO4: Demonstrate competencies to pursue the research and development activities in allied Mechanical Engineering fields to meet the demands of changing Industry needs.
                        </li>
                    </ol>
                </div>

                {/* Program Specific Outcomes (PSOs) Section */}
                <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4 print:mb-6">
                    <CardIcon 
                        title="Program Specific Outcomes (PSOs)" 
                        colorClass="text-blue-700"
                        svgPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
                        Graduate will be able to:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 pl-4 print:text-sm print:space-y-2">
                        <li className="pl-2">
                            PSO1: Ability to develop and implement new ideas on product design and development using Modern Tools, with focus on energy efficiency and environmental issues.
                        </li>
                        <li className="pl-2">
                            PSO2: Capability to work in industries on advanced Pneumatics, Computer Numerical Control, Coordinate Measuring Machines, Automation based technologies and Robotics to meet the changing needs of the Industry.
                        </li>
                        <li className="pl-2">
                            PSO3: Agility to get updated with Additive Manufacturing, Mechatronics, advanced tools in Industry / Research settings and propose innovative solutions to real life problems.
                        </li>
                    </ol>
                </div>

                {/* Program Outcomes (POs) Section */}
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow print:shadow-none print:border print:p-4">
                    <CardIcon 
                        title="Program Outcomes (POs)" 
                        colorClass="text-gray-700"
                        svgPath="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                     <p className="text-gray-700 text-center font-semibold mb-4 print:text-sm">
                        Graduate Engineers should be having the following abilities:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 space-y-4 pl-4 print:text-sm print:space-y-2">
                        {[
                            "PO1. Engineering Knowledge: Apply the knowledge of science and engineering to solve complex engineering problems.",
                            "PO2. Problem analysis: Analyze complex engineering problems and synthesize solutions for it.",
                            "PO3. Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes taking care of public health, safety, cultural, societal and environmental needs.",
                            "PO4. Conduct Investigations of Complex Problems: Ability to apply research based knowledge and methods for analysis and interpretation of data, and synthesis of information.",
                            "PO5. Modern Tool Usage: Create, select, and apply techniques, resources, modern engineering and IT tools for the design, modeling, simulation and analysis.",
                            "PO6. The Engineer and Society: Apply reasoning and knowledge to assess societal, health, safety, legal and cultural issues relevant to the professional engineering practice.",
                            "PO7. Environment and Sustainability: Understand the impact of the engineering solutions on society & environment, and work for sustainable development.",
                            "PO8. Ethics: Ability to apply professional ethics and norms of the engineering practice.",
                            "PO9. Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse multidisciplinary teams.",
                            "PO10. Communication: Ability to communicate effectively with both engineers and society.",
                            "PO11. Project Management and Finance: Ability to apply engineering and management principles to manage the multidisciplinary projects.",
                            "PO12. Life-long Learning: Ability to engage in independent and life-long learning."
                        ].map((item, index) => (
                            <li key={index} className="pl-2 pb-2 border-b border-gray-200 last:border-b-0 print:border-b print:pb-1">
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default MechanicalVisionMissionPage;