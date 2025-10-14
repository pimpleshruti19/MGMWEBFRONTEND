// src/pages/Academic/Mechanical/mechanicalConstants.js

// Navigation tabs for the Mechanical Engineering department section
export const mechanicalDepartmentTabs = [
  { name: 'Profile', path: '/academics/mechanical-engineering/profile' },
  { name: 'Vision-Mission', path: '/academics/mechanical-engineering/vision-mission' },
  { name: 'Programmes', path: '/academics/mechanical-engineering/programmes' },
  { name: 'Faculty', path: '/academics/mechanical-engineering/faculty' },
  { name: 'Laboratories', path: '/academics/mechanical-engineering/laboratories' },
  { name: 'Placements', path: '/academics/mechanical-engineering/placements' },
  { name: 'Research', path: '/academics/mechanical-engineering/research' },
  { name: 'Achievements', path: '/academics/mechanical-engineering/achievements' },
  { name: 'Activities', path: '/academics/mechanical-engineering/activities' },
  { name: 'MESA', path: '/academics/mechanical-engineering/mesa' },
  { name: 'Downloads', path: '/academics/mechanical-engineering/downloads' },
  { name: 'Consultancy', path: '/academics/mechanical-engineering/consultancy' },
];

// Detailed information for the Mechanical Engineering department profile page
export const mechanicalDepartmentDetails = [
  { label: 'Head of Department', value: 'Dr. M.G. Harkare', image: '/images/Dr.MG.Harkare_HOD.jpg' },
  { label: 'E –mail ID', value: 'harkare_mg@mgmcen.ac.in', type: 'email' },
  { label: 'Department Location', value: 'West Wing, Ground & First Floor' },
  { label: 'Year of Establishment', value: '1987-88' },
  { label: 'Contact No', value: '+91 9881747185' },
  { label: 'Total No of Classrooms', value: '03' },
  { label: 'Total no of Laboratories', value: '10' },
  { label: 'Number of Professors', value: '05' },
  { label: 'Number of Associate Professors', value: '00' },
  { label: 'Number of Assistant Professors', value: '12' },
  { label: 'Total Teaching Faculty', value: '17' },
  { label: 'Supporting Teaching Staff', value: 'Department: 02, Work Shop: 04, Lab. Attendant: 03' },
];

// Vision, Mission, PEOs, PSOs, and POs for the Mechanical Engineering department
export const mechanicalVisionMissionPEOs = {
  vision: 'To be one of the leading Departments for Mechanical Engineering education to develop proficient engineers with global acceptance in the service of mankind.',
  mission: [
    'M1: Providing quality education in Mechanical Engineering with cutting edge technologies like Computer Numerical Control, Coordinate Measuring Machine, Additive manufacturing with multidisciplinary as well as green manufacturing approach on sustainable basis.',
    'M2: Developing competent engineers to solve real life problems related to Mechanical Engineering and facilitate continuous learning based on the changing needs of the Industry.',
    'M3: Cultivating leadership qualities, employability skills, with ethical values, through learner-centric approach among Mechanical Engineering graduates.',
    'M4: Nurturing communication with research and development organizations, Industries and alumni leading to excellence in teaching-learning covering Automation technologies, Advanced manufacturing and allied Mechanical research to enhance creativity.',
  ],
  peos: [
    'PEO1: Implement technological expertise to design, formulate and address complex Mechanical Engineering problems providing Green manufacturing solutions on sustainable basis.',
    'PEO2: Apply their knowledge, professional competence and skills acquired in Higher education and Research emphasizing automation based technologies to meet the current trends in manufacturing, design and power sector.',
    'PEO3: Practice work ethics, teamwork and multi disciplinary approach for professional development in Mechanical Engineering through lifelong learning.',
    'PEO4: Demonstrate competencies to pursue the research and development activities in allied Mechanical Engineering fields to meet the demands of changing Industry needs.',
  ],
  psos: [
    'PSO1: Ability to develop and implement new ideas on product design and development using Modern Tools, with focus on energy efficiency and environmental issues.',
    'PSO2: Capability to work in industries on advanced Pneumatics, Computer Numerical Control, Coordinate Measuring Machines, Automation based technologies and Robotics to meet the changing needs of the Industry.',
    'PSO3: Agility to get updated with Additive Manufacturing, Mechatronics, advanced tools in Industry / Research settings and propose innovative solutions to real life problems.',
  ],
  pos: [
    'PO1: Engineering Knowledge: Apply the knowledge of science and engineering to solve complex engineering problems.',
    'PO2: Problem analysis: Analyze complex engineering problems and synthesize solutions for it.',
    'PO3: Design/Development of Solutions: Design solutions for complex engineering problems and design system components or processes taking care of public health, safety, cultural, societal and environmental needs.',
    'PO4: Conduct Investigations of Complex Problems: Ability to apply research based knowledge and methods for analysis and interpretation of data, and synthesis of information.',
    'PO5: Modern Tool Usage: Create, select, and apply techniques, resources, modern engineering and IT tools for the design, modeling, simulation and analysis.',
    'PO6: The Engineer and Society: Apply reasoning and knowledge to assess societal, health, safety, legal and cultural issues relevant to the professional engineering practice.',
    'PO7: Environment and Sustainability: Understand the impact of the engineering solutions on society & environment, and work for sustainable development.',
    'PO8: Ethics: Ability to apply professional ethics and norms of the engineering practice.',
    'PO9: Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse multidisciplinary teams.',
    'PO10: Communication: Ability to communicate effectively with both engineers and society.',
    'PO11: Project Management and Finance: Ability to apply engineering and management principles to manage the multidisciplinary projects.',
    'PO12: Life-long Learning: Ability to engage in independent and life-long learning.',
  ],
};

// --- CONSTANTS FOR PROGRAMMES PAGE ---
// Academic programmes offered by the Mechanical Engineering department
export const mechanicalProgrammesCourses = [
  { srNo: 1, name: 'B.Tech Mechanical Engineering', startYear: 1984, duration: 4, type: 'Full Time', intake: 60 },
  { srNo: 2, name: 'M.Tech Manufacturing Process Engineering', startYear: 2010, duration: 2, type: 'Full Time', intake: 9 },
];

// Data for the Program Assessment Committee (PAC)
export const programAssessmentCommittee = {
  title: 'Program Assessment Committee (PAC)',
  description: 'The Program Assessment Committee (PAC) has been constituted to monitor program activities. The PAC consists of HOD and Faculty members of the department, who periodically monitor the achievements of Course Outcomes (COs), Program Outcomes (POs), Program Specific Outcomes (PSOs) and Program Educational Objectives (PEOs). The Following members are nominated and approved for the constitution of PAC for the AY 2023-2024.',
  members: [
    { srNo: 1, name: 'Dr M G Harkare', designation: 'Professor and Head, IQAC Co-ordinator', status: 'Chairman' },
    { srNo: 2, name: 'Dr. A. M. Rajurkar', designation: 'Professor and Head (CSE Dept.)', status: 'Expert' },
    { srNo: 3, name: 'Mr. S. A. Hashmi', designation: 'Associate Professor and Head (IT Dept.)', status: 'Expert' },
    { srNo: 4, name: 'Dr J S Sidhu', designation: 'Professor, Dept. NBA Co-ordinator', status: 'Member' },
    { srNo: 5, name: 'J K Sawale', designation: 'Professor', status: 'Member' },
    { srNo: 6, name: 'D N Hatkar', designation: 'Assistant Professor, Dept. IQAC co-ordinator', status: 'Member' },
    { srNo: 7, name: 'C V Bandela', designation: 'Assistant Professor', status: 'T & P Coordinator' },
  ],
};

// Data for the Department Advisory Board (DAB)
export const departmentAdvisoryBoard = {
  title: 'Department Advisory Board (DAB)',
  description: 'Department Advisory Board (DAB) has been formed with the objective of remaining up-to-date with the latest requirement of the industry and incorporating necessary changes in the curriculum as much as possible. The present composition of DAB is as given in the table below:',
  members: [
    { srNo: 1, name: 'Dr M G Harkare', designation: 'Professor and Head', status: 'Chairman' },
    { srNo: 2, name: 'Dr J S Sidhu', designation: 'Professor', status: 'Dept. NBA Co-ordinator' },
    { srNo: 3, name: 'Dr.V B Tungikar', designation: 'Former Professor', status: 'Academic Expert' },
    { srNo: 4, name: 'Dr M K Rodge', designation: 'Professor, Dept. Mech. Engg, SGGSIE&T, Nanded', status: 'Academic Expert' },
    { srNo: 5, name: 'J K Sawale', designation: 'Professor', status: 'Faculty Representative' },
    { srNo: 6, name: 'N A Kadam', designation: 'Assistant Professor', status: 'Faculty Representative' },
    { srNo: 7, name: 'C V Bandela', designation: 'Assistant Professor', status: 'Faculty Rep. and T&P co-ordinator' },
    { srNo: 8, name: 'Dr S S Choudhary', designation: 'HOD, Mechanical Govt. Polytechnic , Nanded', status: 'Alumni' },
    { srNo: 9, name: 'Rohit Wadgaonkar', designation: 'Director , Urvi Steels', status: 'Alumni' },
    { srNo: 10, name: 'Sunil Nandedkar', designation: 'Director Sofware Company', status: 'Industrial Expert' },
    { srNo: 11, name: 'Anand Deshpande', designation: 'Senior Manager', status: 'Industrial Expert' },
    { srNo: 12, name: 'Bansode A T', designation: 'Student B Tech. Mech', status: 'Student Representative' },
    { srNo: 13, name: 'Devanpalle D G', designation: 'Student TY. Mech', status: 'Student Representative' },
    { srNo: 14, name: 'Hashmi Mozamali', designation: 'System Analyst', status: 'Parent Representative' },
  ],
};

// --- CONSTANTS FOR MECHANICAL FACULTY PROFILE PAGE ---
export const mechanicalTeachingStaff = [
  { id: 'dr-mrs-g-s-lathkar', name: 'Dr. Mrs. G. S. Lathkar', designation: 'Director', specialization: 'Manufacturing, Design', email: 'lathkar_gs@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20181509144134.jpg' },
  { id: 'harkare-mahesh-gurunathappa', name: 'Harkare Mahesh Gurunathappa', designation: 'Professor', specialization: 'Thermal Engg.', email: 'Harkare_mg@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20161803180225.png' },
  { id: 'dr-jasbeer-singh-sidhu', name: 'Dr. Jasbeer Singh Sidhu', designation: 'Professor', specialization: 'Material Science and Manufacturing', email: 'sidhu_js@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20161803180247.png' },
  { id: 'sawale-jagannath-khandoji', name: 'Sawale Jagannath Khandoji', designation: 'Professor', specialization: 'Manufacturing, Design', email: 'sawale_jk@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20161803180325.png' },
  { id: 'kadam-narayan-anandrao', name: 'Kadam Narayan Anandrao', designation: 'Assistant Professor', specialization: 'Manufacturing and Automation', email: 'kadam_na@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20161803180436.png' },
  { id: 'hatkar-deepak-narayanrao', name: 'Hatkar Deepak Narayanrao', designation: 'Assistant Professor', specialization: 'Heat Power', email: 'hatkar_dn@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20161803180405.png' },
  { id: 'abdul-rehman-md-iqbal', name: 'Abdul Rehman MD Iqbal', designation: 'Assistant Professor', specialization: 'CADCAMCAE Additive Manufacturing', email: 'rehman_ai@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20161803180602.png' },
  { id: 'pratap-sitaram-more', name: 'Pratap Sitaram More', designation: 'Assistant Professor', specialization: 'Renewable Energy (Biogas); Thermal Engineering', email: 'more_ps@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20241111135537.png' },
  { id: 'bandela-chandrashekhar-venkatswamy', name: 'Bandela Chandrashekhar Venkatswamy', designation: 'Assistant Professor', specialization: 'Mechanical PLM', email: 'bandela_cv@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20161803180915.png' },
  { id: 'dr-rahulkumar-shivajirao-hingole', name: 'Dr. Rahulkumar Shivajirao Hingole', designation: 'Professor', specialization: 'Metal Forming, Expert System', email: 'Hingole_rs@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20242908145216.jpg' },
  { id: 'pahinkar-prashant-madhukarrao', name: 'Pahinkar Prashant Madhukarrao', designation: 'Assistant Professor', specialization: 'Thermal Engineering', email: 'pahinkar_pm@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20212501183347.jpg' },
  { id: 'dr-prashanth-d-machkale', name: 'Dr.Prashanth.D.Machkale', designation: 'Asst. Professor', specialization: 'Manufacturing Engineering', email: 'machkale_pd@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20242908151716.jpg' },
  { id: 'kamble-vijay-narayanrao', name: 'Kamble Vijay Narayanrao', designation: 'Assistant Professor', specialization: 'Manufacturing Process Engineering', email: 'kamble_vn@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20242908152622.jpg' },
  { id: 'darak-akashkumar-rajeshkumar', name: 'Darak Akashkumar Rajeshkumar', designation: 'Assistant Professor', specialization: 'Manufacturing Process Engineering', email: 'darak_akashkumar@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20240509135207.jpg' },
  { id: 'shripad-subhashrao-deulkar', name: 'Shripad Subhashrao Deulkar', designation: 'Assistant Professor', specialization: 'Manufacturing Process Engineering', email: 'deulkar_ss@mgmcen.ac.in', img: '/images/department/faculty/Department_6-20240910170757.jpg' },
  { id: 'shatalwar-balaji-jagannath', name: 'Shatalwar Balaji Jagannath', designation: 'Assistant Professor', specialization: 'Mechanical CAD/CAM', email: 'balajishatalwar1982@gmail.com', img: '/images/department/faculty/Department_6-20240910171038.jpg' },
  { id: 'mr-chetan-p-ramdasi', name: 'Mr. Chetan P Ramdasi', designation: 'Assistant Professor', specialization: 'Manufacturing', email: 'chetanramdasi@gmail.com', img: '/images/department/faculty/Department_6-20240910172529.jpg' },
];

export const mechanicalSupportingStaff = [
  { id: 'mr-a-d-telkikar', name: 'Mr. A.D.Telkikar', designation: 'Lab Assistant', specialization: 'Mechanical Engg', email: 'NA', img: '/images/department/faculty/Department_6-20242211112917.jpg' },
  { id: 'mr-s-s-kulkarni', name: 'Mr. S.S.Kulkarni', designation: 'Lab Assistant', specialization: 'Mechanical Engg', email: 'NA', img: '/images/department/faculty/Department_6-20242211112959.jpg' },
  { id: 'mr-gurumeetsingh-g-bhosiwale', name: 'Mr. Gurumeetsingh G.Bhosiwale', designation: 'Instructor', specialization: 'Welder', email: 'NA', img: '/images/department/faculty/Department_6-20242211113052.jpg' },
  { id: 'mr-bhupindersingh-sardar', name: 'Mr. Bhupindersingh Sardar', designation: 'Instructor', specialization: 'Turner', email: 'NA', img: '/images/department/faculty/Department_6-20242211113120.jpg' },
  { id: 'mr-v-d-deshmukh', name: 'Mr. V.D.Deshmukh', designation: 'Instructor', specialization: 'Turner', email: 'NA', img: '/images/department/faculty/Department_6-20242211113155.jpg' },
  { id: 'mr-d-r-panchal', name: 'Mr. D.R.Panchal', designation: 'Instructor', specialization: 'Carpentry', email: 'NA', img: '/images/department/faculty/Department_6-20242211113237.jpg' },
  { id: 'mr-ritesh-ghale', name: 'Mr. Ritesh Ghale', designation: 'Lab Assistant', specialization: 'Turner', email: 'NA', img: '/images/department/faculty/Department_6-20242211113607.png' },
  { id: 'mr-balaji-bhise', name: 'Mr. Balaji Bhise', designation: 'Peon', specialization: '--', email: 'NA', img: '/images/department/faculty/Department_6-20242211113700.png' },
  { id: 'mr-madhav-rajegore', name: 'Mr Madhav Rajegore', designation: 'Peon', specialization: '--', email: 'NA', img: '/images/department/faculty/Department_6-20242211113756.png' },
  { id: 'mr-laxman-telange', name: 'Mr. Laxman Telange', designation: 'Peon', specialization: 'Welder', email: 'NA', img: '/images/department/faculty/Department_6-20242211114042.png' },
];

export const allMechanicalFacultyData = [...mechanicalTeachingStaff, ...mechanicalSupportingStaff];

// --- CONSTANTS FOR LABORATORIES PAGE ---
// Data for all laboratories in the Mechanical Engineering department
export const mechanicalLaboratories = [
  { srNo: 1, id: 'mechanical-measurement-metrology', name: 'Mechanical Measurement & Metrology', area: '93.3 sq. m.', incharge: null },
  { srNo: 2, id: 'theory-of-machine-lab', name: 'Theory of Machine Lab', area: '93.3 sq. m.', incharge: 'Pahinkar Prashant Madhukarrao' },
  { srNo: 3, id: 'fluid-mechanics-hydraulic-machinery', name: 'Fluid Mechanics & hydraulic Machinery', area: '93.3 sq. m.', incharge: 'Hatkar Deepak Narayanrao' },
  { srNo: 4, id: 'metallurgy-lab', name: 'Metallurgy Lab', area: '93.3 sq. m.', incharge: 'Bandela Chandrashekhar Venkatswamy' },
  { srNo: 5, id: 'cad-cam-lab', name: 'CAD-CAM Lab', area: '93.3 sq. m.', incharge: 'Abdul Rehman MD Iqbal' },
  { srNo: 6, id: 'cnc-shop-research-lab', name: 'CNC Shop & Research Lab', area: '404.58 sq.m.', incharge: 'Dr. Jasbeer Singh Sidhu' },
  { srNo: 7, id: 'thermal-science-lab', name: 'Thermal Science Lab (EME, ETD, HT, SGT, ICE, RAC,AE)', area: '460.0 sq. m.', incharge: 'Hatkar Deepak Narayanrao' },
  { srNo: 8, id: 'machine-shop', name: 'Machine Shop', area: '380.0 sq. m', incharge: 'Sawale Jagannath Khandoji' },
  { srNo: 9, id: 'workshop', name: 'Workshop', area: '320.0 sq. m.', incharge: 'Sawale Jagannath Khandoji' },
  { srNo: 10, id: 'acs-mechatronics', name: 'A.C.S. & MECHATRONICS', area: '103.55 sq.m.', incharge: 'Kadam Narayan Anandrao' },
];

// --- CONSTANTS FOR TRAINING AND PLACEMENT PAGE ---
// Training programs conducted
export const mechanicalTrainingPrograms = [
  {
    title: 'MGM’S College of Engineering, Nanded & Indo German Tool Room, Aurangabad Joint Training Programmes',
    description: 'The department facilitates joint training programs in collaboration with the Indo-German Tool Room (IGTR), Aurangabad, to provide students with advanced practical skills and exposure to industry-standard manufacturing and automation technologies.',
  },
];

// List of placement-related PDFs
export const mechanicalPlacementRecordPdfs = [
  { name: 'Industry Institute Interaction', url: 'http://mgmcen.ac.in/pdf/Industry Institute Intreraction.pdf' },
  { name: 'Distinguished Alumina', url: 'http://mgmcen.ac.in/pdf/Distinguished Alumina.pdf' },
  { name: 'Recruiters and Placement, Training', url: 'http://mgmcen.ac.in/pdf/Recruiters and Placement, Training.pdf' },
  { name: 'Training Placement Data', url: 'http://mgmcen.ac.in/pdf/Training placement data website.pdf' },
];

// Placed students data (empty as per source)
export const mechanicalPlacedStudents = [];

// Training photo gallery (empty as per source)
export const mechanicalTrainingGallery = [];

// Placed students photo gallery (empty as per source)
export const mechanicalPlacedStudentsGallery = [];

// --- CONSTANTS FOR RESEARCH AND PUBLICATION PAGE ---
export const mechanicalResearchPublicationsSummary = [
  { label: 'International refereed Journals', count: 21, anchor: 'international-journals' },
  { label: 'National Journals', count: 5, anchor: 'national-journals' },
  { label: 'International Conferences', count: 10, anchor: 'international-conferences' },
  { label: 'National Conferences', count: 20, anchor: 'national-conferences' },
];

export const mechanicalResearchPublications = [
  {
    id: 'international-journals',
    category: 'International Journals',
    facultyPublications: [
      {
        facultyName: 'Dr. Mrs. G. S. Lathkar',
        papers: [
          { srNo: 1, authors: 'V.P.Mhala , Dr.G.S.Lathkar', title: 'Contact Deformation of Machine Tool Joints Using UHMWPE under varying process parameters and Environmental Condition', journalName: 'Institute of Engineers Journals', volumeNo: '89', issueNo: '-', year: 'Sept. 2008', pageRange: '12-15' },
          { srNo: 2, authors: 'Mrs.G.S.Lathkar & Prof.S.K.Basu', title: 'Some Experiments in Machining Using Grease Based Solid Lubricant', journalName: 'Journal of Institute of Engineers', volumeNo: '', issueNo: '', year: '2011', pageRange: '' },
          { srNo: 3, authors: 'M.S.Kadam, Dr.B.M.Dabade & Dr.Mrs.G.S.Lathkar', title: 'Experimental Investigation and Comparative Performance of the Titanium Coated Carbide Inserts for Turning of Hardened Steel Material', journalName: 'International Journal of Emerging Technologies and Applications in Engineering Technology and Sciences (IJ-CA-ETS)', volumeNo: '', issueNo: '', year: '9/4/2010', pageRange: '' },
          { srNo: 4, authors: 'M.S.Kadam, Dr.B.M.Dabade & Dr.Mrs.G.S.Lathkar', title: 'Through RSM Based Models Condition based system reliability with imperfect preventive maintenance', journalName: 'International Journal of Emerging Technologies and Applications in Engineering Technology and Sciences (IJ-CA-ETS)', volumeNo: '', issueNo: '', year: '9/4/2010', pageRange: '' },
          { srNo: 5, authors: 'S.H.Sarje1, Dr.(Mrs.)G.S.Lathkar2, Dr.S.K.Basu3', title: 'Development of Epoxy Composite filled Micro Tungsten Disulphide Particles And Its Mechanical Properties', journalName: '', volumeNo: '', issueNo: '', year: '', pageRange: '' },
          { srNo: 6, authors: 'Dr.Mrs.)G.S.Lathkar2, Dr.S.B.Sharma3)', title: 'Failure prevention of hydraulic system based on oil contamination', journalName: '', volumeNo: '', issueNo: '', year: '', pageRange: '' },
          { srNo: 7, authors: 'Manmohansingh Rajput1, Dr.(Mrs.)G.S.Lathkar2, Dr.Basu S.K.3', title: 'Reliability analysis of electro-hydraulic based auto leveling system for mobile platform', journalName: '(IJEIT)', volumeNo: 'Vol.-I', issueNo: 'Issue 2', year: '', pageRange: '' },
          { srNo: 8, authors: 'Manmohansingh Rajput1, M.D.Jaybhaye2, Dr.(Mrs.)G.S.Lathkar3, Dr.Basu S.K.4', title: 'CBM policy for an online continuously monitored deteriorating system with random change of mode', journalName: '', volumeNo: '93 (1),', issueNo: '', year: 'Feb. 2012', pageRange: '27-32' },
          { srNo: 9, authors: 'S.H.Sarje1*, Dr.Mrs.G.S.Lathkar2, Dr.Basu S.K.3', title: 'Monte Carlo simulation of two echelon supply chain', journalName: 'Journal of Institution of Engineer (India),', volumeNo: 'Vol. VI', issueNo: 'issue No.2', year: '', pageRange: '' },
          { srNo: 10, authors: 'S.H.Sarje1*, Dr.(Mrs.)G.S.Lathkar2', title: 'Sensitivity analysis for the mathematical model of surface roughness and tool wear while machining of HCHCr using PVD coated end milling cutters', journalName: 'Journal of institute of industrial Engineers', volumeNo: '', issueNo: '', year: '(Jan-March 2012)', pageRange: '' },
          { srNo: 11, authors: '1Biradar S.K., 2Dr.(Mrs.)G.S.Lathkar', title: 'Sensitivity analysis for the mathematical model of surface roughness and tool wear while machining of HCHCr using PVD coated end milling cutters', journalName: 'AIMTDR', volumeNo: '', issueNo: '', year: 'Feb. 2013', pageRange: '' },
          { srNo: 12, authors: 'Bachchhav B.D., Lathkar G.S., Bagchi', title: 'Criticality assessment in lubricant selection for metal forming processes by AHP', journalName: '', volumeNo: '', issueNo: '', year: '', pageRange: '' },
        ],
      },
      {
        facultyName: 'Harkare Mahesh Gurunathappa',
        papers: [
          { srNo: 1, authors: 'Mr.S.P. Gadewar, Mr. P. Swaminathan, Mr. M.G.Harkare.', title: '“Experimental Investigation of Weld Characteristics for a single pass TIG Welding with SS304”', journalName: 'International Journal of Engg. Science and Tech.', volumeNo: 'Vol. X(XX),', issueNo: '', year: '2010', pageRange: '1-5' },
          { srNo: 2, authors: 'Mr.M.G.Harkare, Mr.G.U.Shinde, Dr.B.M.Dabade', title: '“Thermostructural analysis of Mobile blancher component”', journalName: 'International Referred Research Journal, Research analysis and evaluation, ISSN', volumeNo: 'VOL-II', issueNo: 'ISSUE 21.', year: '2011', pageRange: '' },
          { srNo: 3, authors: 'Mr.M .G.Harkare, Dr.B.M.Dabade, Dr.V.B.Tungikar', title: '“Design and Thermostructural analysis of a mobile Blancher for Turmeric processing”,', journalName: 'International journal of Techanical Engineering Research and Development (IJMERD)', volumeNo: 'Vol. I', issueNo: '', year: 'Oct-2011', pageRange: '24-32' },
          { srNo: 4, authors: 'Mr.M.G.Harkare, Dr.B.M.Dabade, Dr.V.B.Tungikar', title: '“Design and fabrictaiton of a mobile Blancher for Turmeric processing”,', journalName: 'Australian Journal of Mechanical Engineering (AJME).', volumeNo: '', issueNo: '', year: '', pageRange: '' },
          { srNo: 5, authors: 'Mr.M.G.Harkare', title: 'CFD Analysis of Two-Stroke I.C. Engine using Ansys Fluent', journalName: 'International Journal of Mechanical & Production', volumeNo: 'Vol. IV', issueNo: 'Issue-IX', year: 'Sept.14', pageRange: '' },
        ],
      },
      {
        facultyName: 'Dr. Jasbeer Singh Sidhu',
        papers: [
          { srNo: 1, authors: 'M.H. Shaikh, G.J. Pawar J.S. Sidhu, Dr. S.B. Sharma', title: 'Tribological Characterization and Morphological study of Epoxy composites filled with WS2 under Dry sliding', journalName: 'IJSR, India', volumeNo: '', issueNo: '2319', year: '2013', pageRange: '' },
          { srNo: 2, authors: 'J.S. Sidhu, G.S. Lathkar, S.B. Sharma', title: '“Mechanical properties of Micro Tungesten disulphide particle Filled Epoxy Composite & its resistance against sliding wear”', journalName: 'Malaysian Polymer Journal', volumeNo: 'vol.9', issueNo: '', year: '2014', pageRange: 'PP-24-32' },
          { srNo: 3, authors: 'M.H. Shaikh, J.S. Sidhu', title: 'Experimental Investigation & Optimization of process Parameters in Turning of AISI D2 Steel using Different Lubricants', journalName: 'IJEAT', volumeNo: 'vol3', issueNo: 'issue-5', year: '2014', pageRange: '' },
          { srNo: 4, authors: 'S.N. Naik, J.S. Sidhu', title: 'Optimization of cutting Parameters of SS316 using Different cutting Tools on CNC Lathe', journalName: 'IJSRMS', volumeNo: 'vol1', issueNo: 'issue-9', year: '2015', pageRange: 'PP-275-282' },
          { srNo: 5, authors: 'J.S. Sidhu, G.S. Lathkar, S.B. Shrama', title: 'Design of Epoxy Based Resin Composites for Automotive Applications: A Case Study on I C Engine Valve guide', journalName: 'Communicated to IEIC for publication', volumeNo: '', issueNo: '', year: '', pageRange: '' },
        ],
      },
      {
        facultyName: 'Pratap Sitaram More',
        papers: [
          { srNo: 1, authors: 'Pratap S. More & Prof. Azim Aijaz', title: 'Thermal Analysis Of Energy And Exergy Analysis Of Back Pressure Steam Turbine In Sugar Cogeneration Plant', journalName: 'IJETAE', volumeNo: '4', issueNo: '1', year: 'January2014', pageRange: '674-682' },
        ],
      },
      {
        facultyName: 'Dr. Rahulkumar Shivajirao Hingole',
        papers: [
          { srNo: 1, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Application of a Web based Expert System for Deep Drawing Component in Sheet Metal forming Design', journalName: 'International Journal of MechanicalEngineering', volumeNo: '1', issueNo: '2', year: 'December 2008', pageRange: '' },
          { srNo: 2, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'The Web Based Expert System for Prediction of Rolling Load During Hot Rolling of Sheet', journalName: 'International Journal of Mechanical Engineering', volumeNo: '', issueNo: '', year: '2008', pageRange: '' },
          { srNo: 3, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'The Need of Expert System for Forming Analyisi of Extrusion Process', journalName: 'International Journal of Mechanical Engineering and Technology (IJMET)', volumeNo: '1', issueNo: '1', year: 'July-Aug (2010)', pageRange: '248-252' },
          { srNo: 4, authors: 'R. S. Hingole', title: 'Expert System for Rolling Load Prediction in 20 Hi Sendzimir Mill', journalName: 'International Journal of Mechanical Engineering and Technology (IJMET)', volumeNo: '2', issueNo: '2', year: 'May-July (2011)', pageRange: '47-51' },
          { srNo: 5, authors: 'Ujwal Gawai and R. S. Hingole', title: 'Hybrid (Solar and Wind) Energy Systems', journalName: 'International Journal of Engineering and Technology Research, IJETR', volumeNo: '1(4)', issueNo: '', year: 'September-2012', pageRange: '025-033' },
          { srNo: 6, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Analysis of springback phenomenon in pipe bending', journalName: 'World Journal of Engineering', volumeNo: '11(3)', issueNo: '', year: '2014', pageRange: '229-232' },
          { srNo: 7, authors: 'Adik Yadav, R. S. Hingole', title: 'Modeling And Analysis Of Impact Energy Absorber By Using Ls Dyna', journalName: 'World Journal Of Engineering', volumeNo: '', issueNo: '', year: '2014', pageRange: '' },
          { srNo: 8, authors: 'Ganesh R. Ghodake, R. S. Hingole', title: 'Experimental Analysis of Heat Transfer and Friction Factor Characteristics in Turbulent Flow through a Tube Fitted With Rectangular-Hole Twisted Tape Inserts', journalName: 'International Engineering Research Journal (IERJ)', volumeNo: 'Special Issue 2', issueNo: '', year: '2015', pageRange: '1599-1604' },
          { srNo: 9, authors: 'Bapurao Marapalle, R. S. Hingole', title: 'A Review Paper on FEA Application for Sheet Metal forming analysis', journalName: 'International Journal of Scientific & Engineering Research', volumeNo: '6', issueNo: '12', year: '', pageRange: '' },
          { srNo: 10, authors: 'Bapurao Marapalle, R. S. Hingole', title: 'The case study on analysis of formability properties Of low carbon steel sheet on conventional press', journalName: 'IJSRD - International Journal for Scientific Research & Development', volumeNo: '', issueNo: '', year: 'Feb. 2016', pageRange: '' },
        ],
      },
    ],
  },
  {
    id: 'national-journals',
    category: 'National Journals',
    facultyPublications: [
      {
        facultyName: 'Dr. Mrs. G. S. Lathkar',
        papers: [
          { srNo: 1, authors: 'S.P.Lathkar, Ch.Sureshkumar, Dr.G.S.Lathkar & Dr.S.K.Basu', title: 'Evaluation of surface roughness while machining M.S and EN-8 and analysis of Geometric error', journalName: '2nd International and 23rd All India Manufacturing Technology, Design and Research conference (AIMTDR 2008) Chennai', volumeNo: '', issueNo: '', year: '2008', pageRange: '' },
          { srNo: 2, authors: 'N.A. Kadam and Dr.G.S.Lathkar', title: 'Experimental Investigation And Optimization Of Tool Life While Turning O.H.N.S. By Using Coated Carbide Inserts', journalName: '2nd International and 23rd All India Manufacturing Technology, Design and Research conference (AIMTDR 2008), Chennai', volumeNo: '', issueNo: '', year: '2008', pageRange: '' },
          { srNo: 3, authors: 'Bachchhav B.D., Lathkar G.S., Bagchi H.', title: 'Tribology of easter added lubricants', journalName: 'Journal of Tribology and Surface Engineering, NOVA Science Publishers, Inc., USA', volumeNo: '3', issueNo: '1-2', year: 'Jul-Sept. 2012', pageRange: '' },
          { srNo: 4, authors: 'Bachchhav B.D., Lathkar G.S., Bagchi H.', title: 'Tribology of drawing lubricants for low carbon steel', journalName: 'Industrial Lubrication and Tribology, Emerald Group Publishing Limited', volumeNo: '', issueNo: '', year: 'Accepted', pageRange: '' },
          { srNo: 5, authors: 'Bachchhav B.D., Lathkar G.S., Bagchi H.', title: 'A study of tribo-characterstics of deep drawing oils', journalName: 'Journal of Manufacturing Engineering', volumeNo: '6', issueNo: '3', year: 'Sept. 2011', pageRange: '147-152' },
        ],
      },
    ],
  },
  {
    id: 'international-conferences',
    category: 'International Conferences',
    facultyPublications: [
      {
        facultyName: 'Dr. Mrs. G. S. Lathkar',
        papers: [
          { srNo: 1, authors: '', title: 'Surface Finish in Hard Machining by PVD-Coated End-Mills using solid lubricant', conferenceName: 'ASME conference (MSEC 2008 & ICM & P 2008)', heldAt: 'North Western University, Evanston, IL, USA, Chicago', duration: 'October 7-10, 2008' },
          { srNo: 2, authors: 'M.S.Kadam, Dr.B.M.Dabade & Dr.Mrs.G.S.Lathkar', title: 'Experimental Investigation and Comparative Performance of the Titanium Coated Carbide Inserts for Turning of Hardened Steel Material', conferenceName: 'International Journal of Emerging Technologies and Applications in Engineering Technology and Sciences (IJ-CA-ETS)', heldAt: '', duration: 'April/July 2010' },
          { srNo: 3, authors: 'M.S.Kadam, Dr.B.M.Dabade & Dr.Mrs.G.S.Lathkar', title: 'Analysis of Surface Roughness and Tool Wear in Finish Hard Turned Jobs Through RSM Based Models', conferenceName: 'International Journal of Emerging Technologies and Applications in Engineering Technology and Sciences (IJ-CA-ETS)', heldAt: '', duration: 'April/July 2010' },
          { srNo: 4, authors: 'S.H.Sarje, Dr.(Mrs.)G.S.Lathkar, Dr.S.K.Basu', title: 'Condition based system reliability with imperfect preventive maintenance', conferenceName: '', heldAt: '', duration: '' },
          { srNo: 5, authors: 'Bachchhav B.D., Lathkar G.S., Bagchi H.', title: 'General tribological evaluation of deep drawing oils', conferenceName: 'Journal of Manufacturing Technology Today', heldAt: '', duration: 'Sept. 2011' },
          { srNo: 6, authors: 'Bachchhav B.D., Lathkar G.S., Bagchi H.', title: 'Frictional characteristics of lubricants for 1010 low carbon steel/steel in sliding contact', conferenceName: 'International Conference on Materials Processing and Characterization (ICMPC-2012)', heldAt: 'Hyderabad, India', duration: 'March, 8-10, 2012' },
          { srNo: 7, authors: 'Bachchhav B.D., Lathkar G.S., Bagchi H.', title: 'Lubricant selection for metal forming processes by subjective and objective integrated multi-attribute decision making method', conferenceName: 'International Conference on Industrial Tribology (ICIT-2012)', heldAt: 'Pune, India', duration: 'Dec., 7-9, 2012' },
        ],
      },
      {
        facultyName: 'Harkare Mahesh Gurunathappa',
        papers: [
          { srNo: 1, authors: 'Mr. G.U.Shinde, Dr.K.J.Kamble and Mr.M.G.Harkare', title: 'process optimization in Turmeric heat treatment by design and fabrication of Blancher', conferenceName: 'International Conference on Environmental and Agriculture Engineering –ICEAE', heldAt: 'Chengdu, China', duration: '2011' },
        ],
      },
      {
        facultyName: 'Dr. Jasbeer Singh Sidhu',
        papers: [
          { srNo: 1, authors: 'J.S. Sidhu, Dr. Mrs. G.S. Lathkar', title: 'Development of Epoxy composite filled with Micro Tungsten Disulphide Particles and Its Mechanical Properties', conferenceName: 'International Conference on Advanced Material and Manufacturing Science(ICAMMS-2012)', heldAt: 'Beijing, China', duration: '20-21, Dec. 2012' },
        ],
      },
      {
        facultyName: 'Dr. Rahulkumar Shivajirao Hingole',
        papers: [
          { srNo: 1, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Web Based Application In Sheet Metal Forming', conferenceName: 'International Conference Deep Drawing Research Group', heldAt: 'Sindelfingen, Düsseldorf, Germany', duration: 'May 22-28, 2004' },
          { srNo: 2, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'The Need of Web-Based Expert System for MetalForming', conferenceName: 'International Symposium on Intelligence based Materials and Manufacturing', heldAt: 'Ranchi, India', duration: 'August 18-20, 2005' },
          { srNo: 3, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'A case study of Web-Based Expert System for Sheet Metal Forming Operations', conferenceName: 'International Conference Deep Drawing Research Group', heldAt: 'Porto, Portugal', duration: 'June,19-21, 2006' },
          { srNo: 4, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Development of Web Enabled Expert System For Rolling Load Prediction In 20 Hi Sendzimir Mill', conferenceName: 'International Deep-drawing Research Group IDDRG 2007 International Conference', heldAt: 'Gyor-Hungary', duration: '21-23 May 2007' },
          { srNo: 5, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Application of Web Enabled Expert System For Bending Operation', conferenceName: 'International Conference on International Deep-drawing Research Group IDDRG 2009', heldAt: 'Denver, USA', duration: '31 May-3 June 2009' },
          { srNo: 6, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'A Case Study of Spring back in Automobile Sheet Metal Component', conferenceName: 'International Conference on International Deep-drawing Research Group IDDRG 2009', heldAt: 'Denver, USA', duration: '31 May, 3 June 2009' },
        ],
      },
    ],
  },
  {
    id: 'national-conferences',
    category: 'National Conferences',
    facultyPublications: [
      {
        facultyName: 'Dr. Mrs. G. S. Lathkar',
        papers: [
          { srNo: 1, authors: 'Mrs. G.S. Lathkar & Prof. S.K. Basu', title: 'Clean Metal Cutting Process Using Solid Lubricants', conferenceName: 'AIMTDR conference 2000', heldAt: 'Chennai', duration: '2000' },
          { srNo: 2, authors: 'Mrs.G.S.Lathkar & Prof.S.K.Basu', title: 'Some Experiments in Machining Using Grease Based Solid Lubricant', conferenceName: 'Journal of Institute of Engineers', heldAt: '', duration: '2001' },
          { srNo: 3, authors: 'Dr.Mrs.G.S.Lathkar & Prof.S.K.Basu', title: 'Optimization of Cutting Parameters In Fine Machining Using Sequential Search', conferenceName: '', heldAt: 'BHU, Varanasi', duration: '18-19th January 2002' },
          { srNo: 4, authors: 'Dr.Mrs.G.S.Lathkar, Prof.S.K.Basu, Mr.M.D.Jaybhaye', title: 'Criticality Assessment of Clean Metal Cutting Parameters Using Digraph and AHP', conferenceName: 'National Conference on Advances in Manufacturing Systems, AMS', heldAt: 'Jadavpur University, Kolkata', duration: '28-29th March 2003' },
          { srNo: 5, authors: 'Dr.Mrs.G.S.Lathkar & Dr.S.K.Basu', title: 'Optimum cut-plan selection and Machine allocation in manufacturing', conferenceName: '21st AIMTDR conference', heldAt: 'Vellore', duration: 'December 2004' },
        ],
      },
      {
        facultyName: 'Harkare Mahesh Gurunathappa',
        papers: [
          { srNo: 1, authors: 'Mr. M.G. Harkare', title: 'Natural Gas as I.C. Engine Fuel', conferenceName: 'National Conference', heldAt: 'COE, Pusad.', duration: '1998' },
          { srNo: 2, authors: 'Mr. M.G. Harkare', title: 'Emission Reducing Trends & its control', conferenceName: 'National Conference', heldAt: 'COE, Pusad.', duration: '1998' },
          { srNo: 3, authors: 'Mr.Nagnath Deshpande & Mr.M.G.Harkare', title: 'Failure Analysis of heat exchanger tube die to corrosion', conferenceName: 'National Conference', heldAt: 'MIT, Pune', duration: '[ 2012 ]' },
        ],
      },
      {
        facultyName: 'Dr. Jasbeer Singh Sidhu',
        papers: [
          { srNo: 1, authors: 'S.G. Jadhav, E.R. Ghogare, J.S. Sidhu', title: 'The effects of WS2 filler on Mechanical strength of Epoxy Based Resin', conferenceName: 'National Conference on Recent trends in Mech. Engg. 2012', heldAt: 'Amrutvahini C.O.E., Sangamner, Maharashtra', duration: '19-20 March, 2005' },
          { srNo: 2, authors: 'R.K. Belkar Sureshkumar C. J.S. Sidhu', title: 'Prediction and optimization of surface roughness in turning based on response surface methodology', conferenceName: 'National Conference on Emerging Trends in Mech. Engg. 2011', heldAt: 'L.R. Tiwari C.O.E., Mumbai', duration: '' },
        ],
      },
      {
        facultyName: 'Dr. Rahulkumar Shivajirao Hingole',
        papers: [
          { srNo: 1, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Web Based Application for formability Analysis of Sheet Metal Component', conferenceName: 'National Conference On Advanced Manufacturing Technology', heldAt: 'Palghat, Kerala', duration: '13-15, 2003' },
          { srNo: 2, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Software Development for Formability Analysis of Automobile Sheet Metal Component', conferenceName: 'National Conference on Emerging Trends in Engineering, Technology and Management', heldAt: 'ISTE Chapter Adhiyamaan Engineering College, Hosur, Tamilnadu', duration: '8-9 September 2003' },
          { srNo: 3, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Formability Study of Automobile Sheet Metal Component', conferenceName: 'National Conference of ISME', heldAt: 'IIT Roorke, Uttarnchal', duration: '30,31 Dec 2003' },
          { srNo: 4, authors: 'R. S. Hingole & V. M. Nandedkar', title: 'Sheet Metal Forming: A Case Study of FormabilityAnalysis of Automobile Sheet Metal Component', conferenceName: 'One day workshop', heldAt: 'BHU Varanasi', duration: 'Jan 12-13,2004' },
        ],
      },
    ],
  },
];

// --- CONSTANTS FOR ACHIEVEMENT PAGE ---
export const mechanicalAchievements = [
  {
    year: '2019-20',
    entries: [
      { srNo: 1, name: 'Mr. Pranav Raut (B.E. MECH)', activity: 'COEP ZEST 2020 sports meet', heldAt: 'Pune', prize: 'Gold Medal' },
      { srNo: 2, name: 'Mr. Pranav Raut (B.E. MECH)', activity: 'All India Inter University Tournaments', heldAt: 'LPU University, Phagwara', prize: 'Participated' },
      { srNo: 3, name: 'Mr. Pranav Raut (B.E. MECH)', activity: 'ICT Swimming (Men) Tournament', heldAt: 'DSM College, Parbhani', prize: 'Winner' },
      { srNo: 4, name: 'Mr. Pranav Raut (B.E. MECH)', activity: 'National Level Inter Engg. Sports Meet (Swimming 50 M free style)', heldAt: 'MIT, WPU, Pune', prize: 'Runner-up' },
      { srNo: 5, name: 'Mr. Pranav Raut (B.E. MECH)', activity: 'COEP, ZEST 18 (Swimming 50 M free style)', heldAt: 'COEP, Pune', prize: '3rd Prize' },
      { srNo: 6, name: 'Mr. Pranav Raut (B.E. MECH)', activity: 'COEP, ZEST 18 (Swimming 50 M BREST)', heldAt: 'COEP, Pune', prize: '3rd Prize' },
      { srNo: 7, name: 'Mr. Shubham Dahale (B.E. Mech)', activity: 'Talking Pen event in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '1st Prize' },
      { srNo: 8, name: 'Mr. Shubham Dahale (B.E. Mech)', activity: 'Carve Your Design event in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '1st Prize' },
      { srNo: 9, name: 'Mr. Shubham Dahale (B.E. Mech)', activity: 'Tech CADWAR event in KRATOS-2K19', heldAt: 'MPGI, Nanded', prize: '1st Position' },
      { srNo: 10, name: 'Mr. Satyavrat D. Surawar (T.E. Mech)', activity: 'C-Quiz in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '1st Prize' },
      { srNo: 11, name: 'Mr. Satyavrat D. Surawar (T.E. Mech)', activity: 'Edge-it in KRATOS-2K20', heldAt: 'MPGI, Nanded', prize: '1st Position' },
      { srNo: 12, name: 'Mr. Satyavrat D. Surawar (T.E. Mech)', activity: 'Stocking Tower in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '2nd Prize' },
      { srNo: 13, name: 'Mr. Sumedh R. Pandit (B.E. Mech)', activity: 'Infosys Placement Drive', heldAt: 'Campus Placement', prize: 'Selected as System Engineer' },
      { srNo: 14, name: 'Mr. Sumedh R. Pandit (B.E. Mech)', activity: 'Lathe War TECHNO-ARENA 2K19', heldAt: 'Govt. College of Engg. Jalgaon', prize: '2nd Prize' },
      { srNo: 15, name: 'Mr. Sumedh R. Pandit (B.E. Mech)', activity: 'SRTMU, Nanded’s Youth Festival Matoshri- 2016', heldAt: 'MPGI, Nanded', prize: '1st Prize' },
      { srNo: 16, name: 'Ms. Snehal S. Wattamwar (BE Mech)', activity: 'C-Quiz in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '1st Prize' },
      { srNo: 17, name: 'Ms. Snehal S. Wattamwar (BE Mech)', activity: 'Stocking Tower in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '2nd Prize' },
      { srNo: 18, name: 'Ms. Snehal S. Wattamwar (BE Mech)', activity: 'Bridge-It in KRATOS-2K20', heldAt: 'MPGI, Nanded', prize: '1st Prize' },
      { srNo: 19, name: 'Mr. Ninad S. Nagpure (B.E. Mech)', activity: 'TCS Placement Drive', heldAt: 'Campus Placement', prize: 'Selected as System Engineer' },
      { srNo: 20, name: 'Mr.Md. Umar M A Mubeen (B.E. Mech)', activity: 'Inter Collegiate Chess Tournament', heldAt: 'Inter-Collegiate', prize: 'Runner up' },
      { srNo: 21, name: 'Mr. Sanket P. Ganfade (T.E. Mech)', activity: 'Intercollegiate Sports Competition (Basketball)', heldAt: 'BATU, at Samarth Institute of Pharmacy', prize: '3rd Prize' },
      { srNo: 22, name: 'Mr. Sanket P. Ganfade (T.E. Mech)', activity: '4th State Level Intercollegiate Vishwanath Sports Meet (Basketball)', heldAt: 'MIT, University, Pune', prize: '3rd Prize' },
      { srNo: 23, name: 'Mr. Sumit K. Gaikwad (B.E. Mech)', activity: 'Zonal Competition ‘Utkraanti’', heldAt: 'IIT-Bombay', prize: '1st Position in Prelim Round' },
      { srNo: 24, name: 'Mr. Yogesh Waghmare (T.E. Mech)', activity: 'Tech Quiz in KRATOS-2K19', heldAt: 'MPGI, Nanded', prize: '1st Position' },
      { srNo: 25, name: 'Mr. Mangesh P. Khedkar (SY Mech)', activity: 'C-Quiz in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '1st Prize' },
      { srNo: 26, name: 'Mr. Mangesh P. Khedkar (SY Mech)', activity: 'Stacking Tower in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '2nd Prize' },
      { srNo: 27, name: 'Mr. Mangesh P. Khedkar (SY Mech)', activity: 'Bridge-It in KRATOS-2K20', heldAt: 'MPGI, Nanded', prize: '1st Prize' },
      { srNo: 28, name: 'Ms. Vaishnavi R. Sugaonkar (SY Mech)', activity: '3rd TAFTYGAS National Games 2019 (Taekwondo)', heldAt: 'SRTMU, Nanded', prize: 'Gold Medal' },
      { srNo: 29, name: 'Ms. Devyani N. Kulkarni (SY Mech)', activity: 'Draw Your Design in PRAGYAA 2020', heldAt: 'SGGSIE&T', prize: '2nd Prize' },
    ],
  },
  {
    year: '2018-19',
    entries: [
      { srNo: 1, name: 'Mr. Rahulsingh R. Chandel (B.E. Mech)', activity: 'RASHTRAPATI SCOUT Award', heldAt: 'Awarded by the President of India', prize: 'Awarded' },
      { srNo: 2, name: 'Mr. Rahulsingh R. Chandel (B.E. Mech)', activity: 'Fencing (Men) Tournament', heldAt: 'KTP College Hadolti, Latur', prize: '1st Prize' },
      { srNo: 3, name: 'Mr. Rahulsingh R. Chandel (B.E. Mech)', activity: 'Fencing (Men) Tournament', heldAt: 'N.C. Law College, Nanded', prize: '1st Prize' },
      { srNo: 4, name: 'Mr. Rahulsingh R. Chandel (B.E. Mech)', activity: 'All India Inter-University Fencing Tournament', heldAt: 'Punjab University, Chandigarh', prize: 'Represented SRTMU' },
      { srNo: 5, name: 'Mr. Rahulsingh R. Chandel (B.E. Mech)', activity: 'Circle Fencing Federation of India (Eppe Team Event)', heldAt: 'Chennai', prize: 'Bronze Medal' },
      { srNo: 6, name: 'Mr. Rahulsingh R. Chandel (B.E. Mech)', activity: 'Circle Fencing Federation of India (Eppe Team Event)', heldAt: 'Chennai', prize: 'Gold Medal' },
      { srNo: 7, name: 'Mr. Pranav Raut (T.E. MECH)', activity: 'ICT Swimming (Men) Tournament', heldAt: 'DSM College, Parbhani', prize: 'Winner' },
      { srNo: 8, name: 'Mr. Pranav Raut (T.E. MECH)', activity: 'National Level Inter Engg. Sports Meet (Swimming 50 M free style)', heldAt: 'MIT, WPU, Pune', prize: 'Runner-up' },
      { srNo: 9, name: 'Mr.Nehal K. Kulkarni (B.E. Mech)', activity: 'UVIMAC Engg. Solutions Pvt. Ltd Placement', heldAt: 'Pune', prize: 'Selected as Trainee Engineer' },
      { srNo: 10, name: 'Mr.Nehal K. Kulkarni (B.E. Mech)', activity: 'E-Paper event of PRAGYA-2018', heldAt: 'SGGSIET, Nanded', prize: '1st Prize' },
      { srNo: 11, name: 'Mr. Mangesh P. Khedkar (SY Mech)', activity: 'Tower Hunt in KRATOS-2K19', heldAt: 'MPGI, Nanded', prize: 'Runner' },
      { srNo: 12, name: 'Mr. Satyavrat D. Surawar (SY Mech)', activity: 'Tower Hunt in KRATOS-2K19', heldAt: 'MPGI, Nanded', prize: 'Runner' },
      { srNo: 13, name: 'Mr. Vishwesh Jatale Patil (B.E. Mech)', activity: 'TCS Placement Drive', heldAt: 'Campus Placement', prize: 'Selected as Asst. System Engineer' },
      { srNo: 14, name: 'Mr. Shivraj S. Pendalwar (BE Mech)', activity: 'ICT swimming (50 M. Backstroke)', heldAt: 'DSM College Parbhani', prize: 'Gold Medal' },
      { srNo: 15, name: 'Mr. Yogesh Waghmare (T.E. Mech)', activity: 'Tech-Quiz in KRATOS-2K19', heldAt: 'MPGI, Nanded', prize: '1st Prize' },
      { srNo: 16, name: 'Ms. Devyani N. Kulkarni (SY Mech)', activity: 'Doodle IT in PRAGYAA 2019', heldAt: 'SGGSIET, Nanded', prize: '3rd Prize' },
      { srNo: 17, name: 'Mr. Ninad S. Nagpure (T.E. Mech)', activity: 'Lathe War in TECHNO-ARENA-2K19', heldAt: 'Govt. College of Engg. Kalahandi, Odhisha', prize: '2nd Prize' },
      { srNo: 18, name: 'Mr. Sandeep S. Joshi (B.E. Mech)', activity: 'UVIMAC Engg. Solutions Pvt. Ltd Placement', heldAt: 'Pune', prize: 'Selected as Trainee Engineer' },
    ],
  },
];

// --- CONSTANTS FOR DEPARTMENTAL ACTIVITY PAGE ---
export const mechanicalDepartmentalActivities = [
  {
    id: 1,
    title: 'Internship on 3D Printer by Anet',
    date: 'Recent Activity',
    type: 'rich-text',
    content: 'Hon. Director Madam addressing students of TY Mechanical regarding an Internship conducted by the Chinese company Anet in collaboration with MGM’s College of Engineering, Nanded on 3D Printers.',
    images: [
      { src: '/assets/images/department/mechanical/activity-1.jpg', alt: 'Internship on 3D Printer', caption: 'Director addressing students about the internship.' },
      { src: '/assets/images/department/mechanical/activity-2.jpg', alt: '3D Printer Internship session', caption: 'Session in progress.' },
    ],
  },
  {
    id: 2,
    title: 'Workshops and Seminars (2019-2020)',
    date: '2019-2020',
    type: 'text',
    content: '- Seminar on Industry 4.0 by Dr. B.K. Buktar, HOD Mech., Sardar Patel College of Engg. Mumbai. (114 participants, 16/08/2019)\n- Workshop on BMW Engine Diagnosis by Rakesh Sharma, Abhyuday-Social body of IIT-Bombay. (36 participants, 15 & 16-10-2019)\n- Seminar on Job Opportunity in CAD-CAM by Mr. Akshay Joshi, CAD-CAM-GURU Solutions, Pune. (122 participants, 02/03/2020)\n- Webinar on Placement opportunities for Mechanical Engineering students by Prof. Pramod Dastoorkar, head Corporate Relations-MIT, AOE, Pune. (137 participants, 26/06/2020)\n- Webinar on From Class Room to Board Room by Mr. Naman Kumar, Group CEO, Rescon Holding Dubai, UAE. (112 participants, 03/07/2020)\n- Webinar on Energy Forever: Renewable Energy India by Dr. Sandeep Joshi, Principal, Pillai College of Engineering, New Panvel. (96 participants, 04/07/2020)\n- Webinar on Application of Civil and Mechanical Engineering in Oil & Gas Industry by Mr. Sachin Mathkari, Analysis Manager, Technip FMC, USA. (281 participants, 12/07/2020)\n- Webinar on Novel Solar Air Heater for Agro Produce Drying by Dr. Sandeep Joshi, Principal, Pillai College of Engineering, New Panvel. (85 participants, 11/07/2020)',
    images: [
      { src: '/assets/images/department/mechanical/activity-3.jpg', alt: 'Seminar on Industry 4.0', caption: 'Dr. B.K. Buktar delivering a lecture on Industry 4.0.' },
      { src: '/assets/images/department/mechanical/activity-5.jpg', alt: 'Workshop session', caption: 'Students engaged in a departmental workshop.' },
    ],
  },
  {
    id: 3,
    title: 'Expert Lecture on CAD-CAM by Mr. Akshay Joshi',
    date: 'Recent Activity',
    type: 'rich-text',
    resourcePerson: 'Mr. Akshay Joshi from CAD-CAM- GURU, Pune',
    content: 'An expert lecture focusing on the latest trends and opportunities in Computer-Aided Design and Manufacturing.',
    images: [
      { src: '/assets/images/department/mechanical/activity-8.jpg', alt: 'Expert Lecture by Mr. Akshay Joshi', caption: 'Mr. Akshay Joshi engaging with the students.' },
      { src: '/assets/images/department/mechanical/activity-9a.jpg', alt: 'Audience at the CAD-CAM lecture', caption: 'Students and faculty during the session.' },
    ],
  },
  {
    id: 4,
    title: 'BMW Training at Mumbai',
    date: '19th Nov 2019',
    type: 'rich-text',
    content: 'Students participated in a specialized training session on BMW engines and diagnostics in Mumbai, gaining hands-on experience with advanced automotive technology.',
    images: [
      { src: '/assets/images/department/mechanical/activity-15.jpg', alt: 'Students at BMW Training in Mumbai', caption: 'Students and faculty during the BMW training session.' },
    ],
  },
  {
    id: 5,
    title: 'Expert Lecture on Industry 4.0 by Dr. B.K. Bhutkar',
    date: 'Recent Activity',
    type: 'rich-text',
    resourcePerson: 'Dr. B.K. Bhutkar, HOD Mech., Sardar Patel College of Engg. Mumbai',
    content: 'An insightful session on the fourth industrial revolution, covering topics like IoT, AI, and smart manufacturing in the context of mechanical engineering.',
    images: [
      { src: '/assets/images/department/mechanical/activity-19.jpg', alt: 'Dr. B.K. Bhutkar delivering the lecture', caption: 'Dr. B.K. Bhutkar presenting on Industry 4.0.' },
      { src: '/assets/images/department/mechanical/activity-20.jpg', alt: 'Students attending the Industry 4.0 lecture', caption: 'An attentive audience during the expert lecture.' },
    ],
  },
  {
    id: 6,
    title: 'Seminar on Advanced Refrigeration',
    date: '5th April 2017',
    type: 'long-description-with-gallery',
    resourcePerson: 'Prof. S.N. Sapali, Govt. College of Engineering, Pune',
    contentSections: [
      { type: 'paragraph', text: 'A Seminar on Advanced Refrigeration by Prof. S.N. Sapali was organized for BE Mechanical students. He interacted with students regarding recent advances in Refrigeration technology and its applications.' },
      { type: 'paragraph', text: 'Prof. S.N. Sapali discussed the following key areas:' },
      { type: 'list', items: [
        'The most widely used applications of refrigeration in air conditioning of private homes, public buildings, and the refrigeration of foodstuffs.',
        'The use of refrigeration to liquefy gases like oxygen, nitrogen, propane, and methane in commerce and manufacturing.',
        'The role of refrigeration in oil refineries, chemical plants, and petrochemical plants to maintain processes at low temperatures.',
        'The necessity of refrigeration in transporting temperature-sensitive foodstuffs and other materials via trucks, trains, airplanes, and seagoing vessels.',
      ]},
    ],
  },
  {
    id: 7,
    title: 'Seminar on Sustainable Energy',
    date: '7th October 2016',
    type: 'long-description-with-gallery',
    resourcePerson: 'Prof. D. L. Waikar, EduEnergy Consultant LLP, Singapore',
    contentSections: [
      { type: 'paragraph', text: 'A Seminar on Sustainable Energy was organized for TE and BE students and all faculty members. Prof. Waikar provided information regarding Sustainable Energy, its objectives, and its benefits.' },
      { type: 'image-with-caption', src: '/assets/images/department/mechanical/gallery-imgmd1.jpg', alt: 'Seminar on Sustainable Energy', caption: 'Prof. D. L. Waikar addressing the audience.' },
      { type: 'paragraph', text: 'Objectives of the seminar included advancing the idea of Sustainable Energy, highlighting future trends, determining policy gaps, and strengthening the opinion on the growth of Nuclear Energy as a sustainable method.' },
      { type: 'paragraph', text: 'The benefits discussed revolved around India\'s need to shift from coal dependency to a low-carbon path through more efficient energy use, demand-side management, and ramping up renewable energy sources.' },
    ],
  },
  {
    id: 8,
    title: 'Workshop on Engineering Mechanics',
    date: '23rd - 24th September 2015',
    type: 'long-description-with-gallery',
    resourcePerson: 'Dr. Amitabha Ghosh, Ex-Director, IIT, Kanpur',
    contentSections: [
      { type: 'paragraph', text: 'A workshop on Engineering Mechanics was organized for all first-year students and faculty members. Dr. Amitabha Ghosh delivered lectures on the Dynamics of Engineering Mechanics as per the university syllabus.' },
      { type: 'image-with-caption', src: '/assets/images/department/mechanical/gallery-imgmd4.jpg', alt: 'Welcome of Dr. Amitabha Ghosh', caption: 'Honorable Chairman Shri Kamalkishorji Kadam welcoming Dr. Amitabha Ghosh.' },
      { type: 'paragraph', text: 'The workshop aimed to teach students how to apply Newtonian physics to analyze physical mechanisms, with an emphasis on common engineering applications. It covered kinematics and kinetics for systems not in equilibrium.' },
      { type: 'list', items: [
        'Day 1: Kinematics (Displacement, Velocity, and Acceleration) & Newton’s laws of motion.',
        'Day 2: Dynamics (Force, Momentum, Work, and Energy) & the Impulse-Momentum principle.',
      ]},
    ],
  },
];

// --- CONSTANTS FOR MESA PAGE ---
// MESA Reports and related documents
export const mesaReports = [
  { year: 'Recent Activities', url: '/pdf/MESA Recent Activities New.pdf' },
  { year: 'Report 2022-23', url: '/pdf/MESA Report 2022.23 Final.pdf' },
  { year: 'Report 2021-22', url: '/pdf/MESA Report 2021.22 Final.pdf' },
  { year: 'Report 2020-21', url: '/pdf/MESA Report 2020.21 Final.pdf' },
];

// Institution of Engineers Student Chapter documents
export const ieStudentChapterReports = [
  { name: 'Institution of Engineers Student Association', url: '/pdf/Institution of Engineers Student Association.pdf' },
  { name: 'Activity Report', url: '/pdf/Activity Report of Institution of Engineers.pdf' },
];

// Archive data including about section, office bearers, and past events
export const mesaArchiveData = {
  title: "Mechanical Engineering Students' Association (MESA)",
  subtitle: 'PROFESSIONAL BODY ACTIVITIES',
  about: [
    'Mechanical Engineering Students Association (MESA) is formed by staff and students of Department of Mechanical Engineering for conducting different social, cultural & knowledge based activities for all the students of engineering in campus.',
    'It conducts various events on the occasions like Teachers day, Engineers day, Gandhi jayanti etc. So that students can involve in these activities and gain some knowledge of management & become a responsible person in life.',
  ],
  guidance: 'The team MESA conducts every event or program under the guidance of respective faculty In-charge Prof. Jarikote S. S. With the valuable guidelines of head of the department Dr. Sidhu J. S.',
  events2015_16: {
    title: 'Events & Activities (2015-2016)',
    events: [
      { name: 'Celebration of “GURUPURNIMA”', date: '31/07/2015', description: 'All the students of Department of Mechanical Engg. wished to all faculties in college by offering them a rose & a greeting card on this day. It’s a sign of respect from them.' },
      { name: 'Teacher’s Day Celebration', date: '05/09/2015', description: 'A small program for felicitation of all staff of Mechanical Engg. Dept. was arranged. Events included lectures by students, an Essay Competition, and a felicitation program for staff.' },
      { name: 'Gandhi Jayanti Celebration', date: '02/10/2015', description: 'Activities included a Techno-hunt competition, a Math Quiz, and a Poster Competition.' },
      { name: 'Two-day workshop on “Micro-Meso Scales in Manufacturing”', date: '14/12/2015', description: 'Presented by Prof. Kornel Ehmaan & Prof. Suhas Joshi.' },
      { name: 'Guest Lecture on Competitive Exams (GATE, UPSC)', date: '05/02/2016', description: 'By Mr. Mahendra Wadje from CAD-CAM Guru Institute, Pune.' },
      { name: 'Guest Lecture on Importance of Competitive exams', date: '08/02/2016', description: 'By Mr. Yogesh Tyagi from Gateway Institute, Pune.' },
    ],
  },
  expertLectures2014_15: {
    title: 'Expert Lectures (2014-2015)',
    lectures: [
      'Alligning Manufacturing for A/C by Mr. Prashant Singh, Deputy Manager HAL (18.08.2014).',
      'Navy Services & its importance by Mr. Ravi Kale (05.09.2014).',
      'Modern Machines & manufacturing by Mr. Pradhan D.K. of IGTR, Aurangabad (26.09.2014).',
      'Analysis of Manufacturing Processes by Dr. H. Bagchi (Emeritus Prof.) (11.11.2014).',
      'Recent Research Activities of IITs & Synopsis of R & D by K. Reddy, IIT, Hyderabad (06.12.2014).',
      'Micro/Macro Scale manufacturing by Prof. Kornel F. Ehmann of North Western University, USA (05.12.2014).',
      'Leadership Qualities by Dr. H. Bagchi (Emeritus Pro.) (19.03.2015).',
      'Cryogenics by Dr. K.G. Narayankhedkar (Director General, MGM.) (19.03.2015).',
      'CAD software & its applications by Mr. Tejander Singh, Alumni (15.04.2015).',
    ],
    images: [
      { src: '/images/gallery/mesa_lecture_joshi.jpg', alt: 'Expert Lecture By Prof. Suhas Joshi' },
      { src: '/images/gallery/mesa_lecture_ehmann.jpg', alt: 'Expert Lecture By Prof. Kornel F. Ehmann' },
      { src: '/images/gallery/mesa_lecture_narayankhedkar.jpg', alt: 'Expert Lecture By Prof. K.G. Narayankhedkar' },
      { src: '/images/gallery/mesa_lecture_pradhan.jpg', alt: 'Expert Lecture By Prof. D.K. Pradhan' },
      { src: '/images/gallery/mesa_lecture_bagchi.jpg', alt: 'Expert Lecture By Prof. H.Bagchi' },
    ],
  },
  mesaActivities2014: {
    title: 'MESA Activities (2014)',
    activities: [
      'Teacher’s Day Celebration (5th Sept. 2014).',
      'Engineer’s Day Celebration (15th Sept. 2014).',
      'Debate Competition (17 Sept. 2014).',
      'Robotix Competition (26-28 Sept. 2014), with 1st and 2nd prizes at IIT, Gandhinagar, and 2nd Prize at IIT, Delhi.',
      'Brain Drill Test (29 Sept. 2014) with 362 students.',
      'Poster Competition (30 Sept. 2014).',
      'Gandhi Jayanti Celebration (2 Oct. 2014).',
    ],
    image: { src: '/images/gallery/mesa_gandhi_jayanti.jpg', alt: 'Gandhi Jayanti Celebration' },
  },
};

// --- CONSTANTS FOR DOWNLOADS PAGE (CURRICULUM, ASSIGNMENTS) ---
// Syllabus data extracted from the "Syllabus" table
export const mechanicalSyllabus = [
  { srNo: 1, heading: 'First Year B.TECH DBATU 2017-18', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_6-20212501190314.pdf' },
  { srNo: 2, heading: 'S.Y. & T.Y. B.TECH Mechanical 2018-20', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_6-20212501190542.pdf' },
  { srNo: 3, heading: 'Final Year B.TECH', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_6-20212701181534.pdf' },
  { srNo: 4, heading: 'M.Tech Manufacturing Process Engg. 2017-18', url: 'http://mgmcen.ac.in/images/department/syllabus/Department_6-20212501190656.pdf' },
];

// Assignments data extracted from the "Assignments" table
export const mechanicalAssignments = [
    { srNo: 1, heading: 'S.Y. Midsem', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20190306160630.doc' },
    { srNo: 2, heading: 'S.Y. Periodic 2', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20190306160701.doc' },
    { srNo: 3, heading: 'S.Y. Periodic 1', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20190306160728.doc' },
    { srNo: 4, heading: 'T.E. Minor-I', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20190306160310.doc' },
    { srNo: 5, heading: 'T.E. Minor-II', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20190306160332.doc' },
    { srNo: 6, heading: 'B.E. Minor-I', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20190306160047.doc' },
    { srNo: 7, heading: 'B.E. Minor-II', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20190306160207.doc' },
    { srNo: 8, heading: 'FMHM', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503023031.docx' },
    { srNo: 9, heading: 'TOM', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503023112.docx' },
    { srNo: 10, heading: 'MT-II', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503033834.docx' },
    { srNo: 11, heading: 'Tool Engg', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503035037.docx' },
    { srNo: 12, heading: 'CAD/CAM/CIM', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503035220.docx' },
    { srNo: 13, heading: 'DOM', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503035432.docx' },
    { srNo: 14, heading: 'RAC', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503020753.docx' },
    { srNo: 15, heading: 'EL-II A&R', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503020852.docx' },
    { srNo: 16, heading: 'P.M.', url: 'http://mgmcen.ac.in/images/department/assignment/Department_6-20140503020942.docx' },
];

// Other downloads data extracted from the "Other" table
export const mechanicalOtherDownloads = [
  { srNo: 1, heading: 'Question Bank for Minor Test 1 S.E. (Mech.)', url: 'http://mgmcen.ac.in/images/department/other/Department_6-20162908145505.doc' },
  { srNo: 2, heading: 'Question Bank for Minor Test 1 T.E. (Mech.)', url: 'http://mgmcen.ac.in/images/department/other/Department_6-20162908145656.doc' },
  { srNo: 3, heading: 'T.E. MECH CGPA', url: 'http://mgmcen.ac.in/images/department/other/Department_6-20162908151439.pdf' },
  { srNo: 4, heading: 'Question Bank for Minor Test 1 B.E. (Mech.)', url: 'http://mgmcen.ac.in/images/department/other/Department_6-20162908151606.doc' },
  { srNo: 5, heading: 'Time Table', url: 'http://mgmcen.ac.in/images/department/other/Department_6-20162908152938.xlsx' },
  { srNo: 6, heading: 'Timetable', url: 'http://mgmcen.ac.in/images/department/other/Department_6-20190306160441.xlsx' },
];

// --- CONSTANTS FOR CONSULTANCY PAGE ---
const consultancyByYear = [
  { year: 'CAY (2021-2022)', projects: [{ srNo: '1', title: 'Entrepreneurship Development Program', agency: 'MITCON Pune', amount: '1,20,000' }] },
  { year: 'CAY (2022-23)', projects: [{ srNo: '1', title: 'Entrepreneurship Development Program', agency: 'MITCON Pune', amount: '1,20,000' }] },
  { year: 'CAY (2023-24)', projects: [{ srNo: '1', title: 'Entrepreneurship Development Program', agency: 'MITCON Pune', amount: '1,20,000' }] },
];

export const mechanicalConsultancyResources = [
  {
    id: 'innovation-section',
    title: 'Innovation in Teaching Learning',
    type: 'iframe',
    iframeSrc: 'https://mgmcen.ac.in/pdf/Innovation in Teaching Learning Process.pdf',
    linkText: 'View Innovation in Teaching Learning PDF',
  },
  {
    id: 'consultancy-section',
    title: 'Consultancy From MITCON Pune',
    type: 'table',
    tableData: {
      headers: ['Sr.no', 'Project Title', 'Funding Agency Name', 'Amount'],
      rowsByYear: consultancyByYear,
      total: { label: 'Total amount for past 3 years', amount: '3,60,000' },
    },
  },
];