import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  FileText, 
  Calendar, 
  Target, 
  CheckSquare, 
  Lightbulb, 
  Layout, 
  TestTube, 
  AlertTriangle, 
  Globe, 
  Award, 
  Menu, 
  X 
} from 'lucide-react';

// --- Main Component ---

const ProjectWiki = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Project Background', icon: Heart },
    { id: 'team', name: 'Team Profiles', icon: Users },
    { id: 'charter', name: 'Team Charter', icon: FileText },
    { id: 'plan', name: 'Project Plan', icon: Calendar },
    { id: 'stakeholders', name: 'Stakeholder Analysis', icon: Target },
    { id: 'requirements', name: 'Requirements', icon: CheckSquare },
    { id: 'concept', name: 'Concept & CONOPS', icon: Lightbulb },
    { id: 'analysis', name: 'Pugh Matrix & Utility', icon: Layout },
    { id: 'design', name: 'System Design', icon: Layout },
    { id: 'test', name: 'Test Plan', icon: TestTube },
    { id: 'failure', name: 'Failure Modes', icon: AlertTriangle },
    { id: 'constraints', name: 'Real World Constraints', icon: Globe },
    { id: 'standards', name: 'Engineering Standards', icon: Award }
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'team': return <TeamPage />;
      case 'charter': return <CharterPage />;
      case 'plan': return <PlanPage />;
      case 'stakeholders': return <StakeholdersPage />;
      case 'requirements': return <RequirementsPage />;
      case 'concept': return <ConceptPage />;
      case 'analysis': return <AnalysisPage />;
      case 'design': return <DesignPage />;
      case 'test': return <TestPage />;
      case 'failure': return <FailurePage />;
      case 'constraints': return <ConstraintsPage />;
      case 'standards': return <StandardsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static w-64 bg-blue-900 text-white h-screen overflow-y-auto transition-transform z-40 shadow-xl`}>
        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">VitaSync VR</h1>
          <p className="text-sm text-blue-200 mb-6">Biometric Monitoring System</p>
          <nav className="space-y-1">
            {navigation.map(item => {
              const Icon = item.icon;
              return (
                <button 
                  key={item.id} 
                  onClick={() => { setCurrentPage(item.id); setMenuOpen(false); }} 
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left ${currentPage === item.id ? 'bg-blue-700 text-white' : 'hover:bg-blue-800 text-blue-100'}`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto bg-gray-50">
        <div className="max-w-5xl mx-auto p-6 lg:p-8 pb-20">
            {renderPage()}
        </div>
      </main>
    </div>
  );
};

// --- Page Components ---

const HomePage = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4">VitaSync VR</h1>
      <p className="text-xl opacity-90">Real-Time Biometric Monitoring for Virtual Reality</p>
    </div>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Background</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        VitaSync VR is an integrated biometric monitoring system designed to measure heart rate and breathing rate in real-time while users engage with virtual reality environments. This system bridges the gap between immersive VR experiences and physiological monitoring, enabling applications in fitness, healthcare, stress management, and entertainment.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        As VR technology becomes increasingly prevalent in both consumer and professional settings, understanding and responding to user's physiological states becomes critical for safety, performance optimization, and enhanced user experiences. Our system seamlessly integrates non-invasive biometric sensors with VR headsets to provide continuous monitoring without disrupting the immersive experience.
      </p>
      <p className="text-gray-700 leading-relaxed">
        The project addresses a growing need in the VR industry: the ability to track user wellness and adapt experiences based on physiological feedback. This capability opens new possibilities for personalized VR applications while ensuring user safety during extended VR sessions.
      </p>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Potential Use Cases</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-blue-50/30">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">VR Fitness and Athletic Training</h3>
          <p className="text-gray-600 text-sm mb-2">
            Monitor workout intensity, track cardiovascular metrics, and provide real-time feedback to optimize training sessions in VR fitness applications like Beat Saber, FitXR, or custom training programs.
          </p>
          <p className="text-gray-500 text-xs italic">Target users: Fitness enthusiasts, athletes, personal trainers</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-purple-50/30">
          <h3 className="font-semibold text-lg mb-2 text-purple-600">Mental Health and Therapy</h3>
          <p className="text-gray-600 text-sm mb-2">
            Track stress levels and physiological responses during exposure therapy, meditation sessions, PTSD treatment, or anxiety management programs, allowing therapists to monitor patient responses.
          </p>
          <p className="text-gray-500 text-xs italic">Target users: Therapists, patients, mental health clinics</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-green-50/30">
          <h3 className="font-semibold text-lg mb-2 text-green-600">Adaptive Gaming and Entertainment</h3>
          <p className="text-gray-600 text-sm mb-2">
            Create dynamic gaming experiences that respond to player stress, excitement, and fatigue levels. Games can automatically adjust difficulty, pacing, or intensity based on real-time biometric feedback.
          </p>
          <p className="text-gray-500 text-xs italic">Target users: Gamers, game developers, entertainment venues</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-orange-50/30">
          <h3 className="font-semibold text-lg mb-2 text-orange-600">Medical Training and Simulation</h3>
          <p className="text-gray-600 text-sm mb-2">
            Monitor medical students stress responses during surgical simulations, emergency scenario training, and high-pressure decision-making exercises.
          </p>
          <p className="text-gray-500 text-xs italic">Target users: Medical schools, training hospitals</p>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Overview</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold mb-2 text-blue-800">Duration</h3>
          <p className="text-gray-700">3 months - 12 weeks</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h3 className="font-semibold mb-2 text-purple-800">Team Size</h3>
          <p className="text-gray-700">3 members</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-semibold mb-2 text-green-800">Deliverable</h3>
          <p className="text-gray-700">Functional prototype with documentation</p>
        </div>
      </div>
    </section>
  </div>
);

const TeamPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">Team Profiles</h1>
    <p className="text-gray-600 mb-6">Meet the VitaSync VR development team. Our diverse expertise combines hardware engineering, software development, and systems integration.</p>
    
    <div className="grid md:grid-cols-3 gap-6">
      {/* AJ Profile */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          HD
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Hui Dong</h3>
        <p className="text-blue-600 font-medium mb-3">Project Manager, Hardware Engineer, Software Engineer, Data Scientist</p>
        
        <div className="text-sm text-gray-600 space-y-1 mb-4 bg-gray-50 p-3 rounded-lg">
          <p>📧 huidong@uw.edu</p>
          <p>📱 425-111-1111</p>
          <p>💼 Office: Mon Wed 2-4 PM</p>
        </div>
        
        <div className="text-sm text-left bg-blue-50 p-4 rounded-lg mb-3">
          <p className="font-semibold mb-2 text-blue-800">Expertise</p>
          <ul className="text-gray-700 space-y-1">
            <li>• Circuit design and PCB layout</li>
            <li>• Sensor integration</li>
            <li>• Embedded systems</li>
            <li>• Project management</li>
          </ul>
        </div>
        
        <div className="text-sm text-left bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold mb-2 text-gray-800">Responsibilities</p>
          <ul className="text-gray-600 space-y-1">
            <li>• Lead project planning</li>
            <li>• Design hardware architecture</li>
            <li>• Manage timelines</li>
            <li>• Stakeholder communication</li>
          </ul>
        </div>
      </div>

      {/* SP Profile */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          XX
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Jane Doe</h3>
        <p className="text-purple-600 font-medium mb-3">Software Engineer and Softeware Testing Lead</p>
        
        <div className="text-sm text-gray-600 space-y-1 mb-4 bg-gray-50 p-3 rounded-lg">
          <p>📧 jane.doe@uw.edu</p>
          <p>📱 555-555-5555</p>
          <p>💼 Office: Tue Thu 1-3 PM</p>
        </div>
        
        <div className="text-sm text-left bg-purple-50 p-4 rounded-lg mb-3">
          <p className="font-semibold mb-2 text-purple-800">Expertise</p>
          <ul className="text-gray-700 space-y-1">
            <li>• Python and C++ programming</li>
            <li>• Digital signal processing</li>
            <li>• API development</li>
            <li>• Testing and QA</li>
          </ul>
        </div>
        
        <div className="text-sm text-left bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold mb-2 text-gray-800">Responsibilities</p>
          <ul className="text-gray-600 space-y-1">
            <li>• Develop signal processing</li>
            <li>• Create VR integration</li>
            <li>• Design test protocols</li>
            <li>• Conduct validation</li>
          </ul>
        </div>
      </div>

      {/* MC Profile */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-md">
          YY
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Joe Doe</h3>
        <p className="text-green-600 font-medium mb-3">Systems Integration and Documentation Lead</p>
        
        <div className="text-sm text-gray-600 space-y-1 mb-4 bg-gray-50 p-3 rounded-lg">
          <p>📧 joe.doe@uw.edu</p>
          <p>📱 777-777-7777</p>
          <p>💼 Office: Wed Fri 3-5 PM</p>
        </div>
        
        <div className="text-sm text-left bg-green-50 p-4 rounded-lg mb-3">
          <p className="font-semibold mb-2 text-green-800">Expertise</p>
          <ul className="text-gray-700 space-y-1">
            <li>• Systems integration</li>
            <li>• Technical documentation</li>
            <li>• Budget planning</li>
            <li>• Standards compliance</li>
          </ul>
        </div>
        
        <div className="text-sm text-left bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold mb-2 text-gray-800">Responsibilities</p>
          <ul className="text-gray-600 space-y-1">
            <li>• Integrate subsystems</li>
            <li>• Maintain documentation</li>
            <li>• Manage budget</li>
            <li>• Ensure compliance</li>
          </ul>
        </div>
      </div>
    </div>

    <section className="bg-white rounded-xl p-6 shadow-sm mt-6 border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Team Communication</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-3 pr-3 rounded-r-lg">
          <h3 className="font-semibold mb-2 text-blue-800">Primary Channels</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Slack: #vitasync-vr</li>
            <li>• Weekly: Wed 5 PM</li>
            <li>• GitHub: vitasync-vr</li>
            <li>• Email: team@uw.edu</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 bg-purple-50/50 py-3 pr-3 rounded-r-lg">
          <h3 className="font-semibold mb-2 text-purple-800">Response Times</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Urgent: 4 hours</li>
            <li>• General: 24 hours</li>
            <li>• Code review: 48 hours</li>
            <li>• Docs: Weekly</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const CharterPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Team Charter</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100">
      <div className="flex items-center justify-center mb-6">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Heart className="text-white" size={56} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Team VitaSync</h2>
          <p className="text-xl text-gray-600 italic">Monitoring Life, Enhancing Reality</p>
          <p className="text-sm text-gray-500 mt-2">Established September 2025</p>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Team Mission</h2>
      <p className="text-gray-700 leading-relaxed">
        Develop an innovative, reliable, and user-friendly biometric monitoring system that seamlessly integrates with VR technology, prioritizing user safety, data accuracy, and enhanced experiences.
      </p>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Team Values</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r">
          <h3 className="font-semibold text-blue-700">Innovation</h3>
          <p className="text-sm text-gray-600">Embrace creative solutions</p>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r">
          <h3 className="font-semibold text-purple-700">Collaboration</h3>
          <p className="text-sm text-gray-600">Work together with respect</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r">
          <h3 className="font-semibold text-green-700">Quality</h3>
          <p className="text-sm text-gray-600">Deliver excellence</p>
        </div>
        <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r">
          <h3 className="font-semibold text-orange-700">Accountability</h3>
          <p className="text-sm text-gray-600">Take ownership</p>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Team Rules</h2>
      <div className="space-y-3">
        <div className="bg-blue-50 p-3 rounded border border-blue-100">
          <h3 className="font-semibold text-sm mb-1 text-blue-800">Meetings</h3>
          <p className="text-xs text-gray-700">Weekly Wednesday 5 PM mandatory. Standup updates daily by 10 AM on Slack.</p>
        </div>
        <div className="bg-purple-50 p-3 rounded border border-purple-100">
          <h3 className="font-semibold text-sm mb-1 text-purple-800">Communication</h3>
          <p className="text-xs text-gray-700">Respond within 24 hours weekdays, 48 hours weekends. Use @channel for urgent.</p>
        </div>
        <div className="bg-green-50 p-3 rounded border border-green-100">
          <h3 className="font-semibold text-sm mb-1 text-green-800">Deliverables</h3>
          <p className="text-xs text-gray-700">Submit for peer review 48 hours before deadlines. All code needs review.</p>
        </div>
        <div className="bg-orange-50 p-3 rounded border border-orange-100">
          <h3 className="font-semibold text-sm mb-1 text-orange-800">Decisions</h3>
          <p className="text-xs text-gray-700">Aim for consensus. Majority vote if needed. PM breaks ties.</p>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Role Assignments</h2>
      <div className="space-y-3">
        <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">HD</div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-blue-900">Hui Dong - Team Lead and Software/Data Scientist/Hardware</h3>
            <p className="text-xs text-gray-700 mt-1">Project oversight, machine learning, software development, sensor design, hardware integration</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">JD</div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-purple-900">Jane Doe - Software and Testing</h3>
            <p className="text-xs text-gray-700 mt-1">Signal processing, VR integration, test protocols</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-100">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">JD</div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-green-900">Joe Doe - Documentation and Budget</h3>
            <p className="text-xs text-gray-700 mt-1">System integration, docs, budget, standards</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const PlanPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Project Plan</h1>
    
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Work Breakdown Structure (WBS)</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="font-semibold text-lg mb-2">1.0 Project Management</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-700 list-disc">
            <li>1.1 Team formation and charter development</li>
            <li>1.2 Stakeholder analysis and management</li>
            <li>1.3 Project planning and scheduling</li>
            <li>1.4 Risk management and mitigation</li>
            <li>1.5 Progress tracking and reporting</li>
            <li>1.6 Budget management and procurement</li>
          </ul>
        </div>

        <div className="border-l-4 border-purple-600 pl-4">
          <h3 className="font-semibold text-lg mb-2">2.0 Requirements Engineering</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-700 list-disc">
            <li>2.1 Requirements gathering and analysis</li>
            <li>2.2 L0 system requirements definition</li>
            <li>2.3 L1 subsystem requirements definition</li>
            <li>2.4 Use case development and scenarios</li>
            <li>2.5 Requirements validation and traceability</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="font-semibold text-lg mb-2">3.0 System Design</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-700 list-disc">
            <li>3.1 Concept generation and selection</li>
            <li>3.2 Hardware subsystem architecture</li>
            <li>3.3 Software subsystem architecture</li>
            <li>3.4 Interface design and protocols</li>
            <li>3.5 System integration architecture</li>
            <li>3.6 Trade studies and analysis</li>
          </ul>
        </div>
        
        {/* More WBS items can be added similarly */}
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Gantt Chart - 12 Week Timeline</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left p-2 font-semibold sticky left-0 bg-white z-10 w-32">Task</th>
              <th className="text-center p-1 font-semibold">W1</th>
              <th className="text-center p-1 font-semibold">W2</th>
              <th className="text-center p-1 font-semibold">W3</th>
              <th className="text-center p-1 font-semibold">W4</th>
              <th className="text-center p-1 font-semibold">W5</th>
              <th className="text-center p-1 font-semibold">W6</th>
              <th className="text-center p-1 font-semibold">W7</th>
              <th className="text-center p-1 font-semibold">W8</th>
              <th className="text-center p-1 font-semibold">W9</th>
              <th className="text-center p-1 font-semibold">W10</th>
              <th className="text-center p-1 font-semibold">W11</th>
              <th className="text-center p-1 font-semibold">W12</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 text-xs sticky left-0 bg-white z-10 font-medium shadow-sm">Project Planning</td>
              <td className="bg-blue-600" colSpan={2}></td>
              <td colSpan={10}></td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-xs sticky left-0 bg-white z-10 font-medium shadow-sm">Requirements</td>
              <td className="bg-blue-400"></td>
              <td className="bg-purple-600" colSpan={2}></td>
              <td colSpan={9}></td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-xs sticky left-0 bg-white z-10 font-medium shadow-sm">Concept Design</td>
              <td colSpan={2}></td>
              <td className="bg-purple-400" colSpan={2}></td>
              <td colSpan={8}></td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-xs sticky left-0 bg-white z-10 font-medium shadow-sm">Hardware Design</td>
              <td colSpan={3}></td>
              <td className="bg-green-600" colSpan={3}></td>
              <td colSpan={6}></td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-xs sticky left-0 bg-white z-10 font-medium shadow-sm">Software Dev</td>
              <td colSpan={3}></td>
              <td className="bg-green-400" colSpan={4}></td>
              <td colSpan={5}></td>
            </tr>
            {/* More gantt rows */}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2 text-xs">
        <div className="flex items-center"><div className="w-4 h-4 bg-blue-600 mr-2 rounded-sm"></div>Planning</div>
        <div className="flex items-center"><div className="w-4 h-4 bg-purple-600 mr-2 rounded-sm"></div>Requirements</div>
        <div className="flex items-center"><div className="w-4 h-4 bg-green-600 mr-2 rounded-sm"></div>Development</div>
        <div className="flex items-center"><div className="w-4 h-4 bg-orange-600 mr-2 rounded-sm"></div>Fabrication</div>
        <div className="flex items-center"><div className="w-4 h-4 bg-indigo-600 mr-2 rounded-sm"></div>Testing</div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Resource Allocation</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2 text-blue-700">Budget</h3>
          <p className="text-2xl font-bold text-gray-800 mb-2">$1,500</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Sensors: $400</li>
            <li>• Electronics: $300</li>
            <li>• PCB fabrication: $200</li>
            <li>• VR headset adapter: $250</li>
            <li>• Contingency: $150</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2 text-purple-700">Team Hours</h3>
          <p className="text-2xl font-bold text-gray-800 mb-2">360 hrs</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• 10 hrs per week per member</li>
            <li>• 12 week duration</li>
            <li>• 3 team members</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2 text-green-700">Equipment</h3>
          <p className="text-sm font-bold text-gray-800 mb-2">Available Resources</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• University lab access</li>
            <li>• Oscilloscope and multimeter</li>
            <li>• 3D printer</li>
            <li>• Development computers</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const StakeholdersPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Stakeholder Analysis</h1>
    
    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Stakeholder Identification</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 font-semibold rounded-tl-lg">Stakeholder</th>
              <th className="p-3 font-semibold">Category</th>
              <th className="p-3 font-semibold">Stakes/Interest</th>
              <th className="p-3 font-semibold rounded-tr-lg">Influence Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">End Users (VR Users)</td>
              <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Primary</span></td>
              <td className="p-3 text-xs">Safety, comfort, accurate monitoring</td>
              <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">High</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">Course Instructor/TA</td>
              <td className="p-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Academic</span></td>
              <td className="p-3 text-xs">Project success, learning outcomes</td>
              <td className="p-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Critical</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">Healthcare Pros</td>
              <td className="p-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Medical</span></td>
              <td className="p-3 text-xs">Data accuracy, clinical validity</td>
              <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">High</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 font-medium">University Ethics Board</td>
              <td className="p-3"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Regulatory</span></td>
              <td className="p-3 text-xs">User safety, data privacy</td>
              <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">High</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Power-Interest Grid</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="border-2 border-red-300 bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-sm text-red-800 mb-2">High Power, High Interest</h3>
          <p className="text-xs font-bold mb-1">MANAGE CLOSELY</p>
          <ul className="text-xs text-gray-700">
            <li>• Course Instructor/TA</li>
          </ul>
        </div>
        <div className="border-2 border-blue-300 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-sm text-blue-800 mb-2">High Power, Low Interest</h3>
          <p className="text-xs font-bold mb-1">KEEP INFORMED</p>
          <ul className="text-xs text-gray-700">
            <li>• VR Manufacturers</li>
            <li>• Ethics Board</li>
          </ul>
        </div>
        <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-sm text-green-800 mb-2">Low Power, High Interest</h3>
          <p className="text-xs font-bold mb-1">KEEP SATISFIED</p>
          <ul className="text-xs text-gray-700">
            <li>• End Users</li>
            <li>• Healthcare Professionals</li>
          </ul>
        </div>
        <div className="border-2 border-gray-300 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-sm text-gray-800 mb-2">Low Power, Low Interest</h3>
          <p className="text-xs font-bold mb-1">MONITOR</p>
          <ul className="text-xs text-gray-700">
            <li>• Fitness Industry</li>
            <li>• Privacy Advocates</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const RequirementsPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">System Requirements</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Requirements Overview</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
          <p className="text-3xl font-bold text-blue-600">15</p>
          <p className="text-sm text-gray-700">L0 System Requirements</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
          <p className="text-3xl font-bold text-purple-600">32</p>
          <p className="text-sm text-gray-700">L1 Subsystem Requirements</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
          <p className="text-3xl font-bold text-green-600">8</p>
          <p className="text-sm text-gray-700">Use Cases</p>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">L0 System Requirements</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50/50 rounded-r">
          <h3 className="font-semibold mb-1 text-blue-900">Mission Requirements</h3>
          <div className="space-y-2 mt-2">
            <div className="bg-white p-3 rounded border border-blue-100">
              <p className="text-xs font-mono text-blue-600 mb-1">REQ-M-001</p>
              <p className="text-sm text-gray-800">The system SHALL measure user heart rate in real-time during VR sessions.</p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <p className="text-xs font-mono text-blue-600 mb-1">REQ-M-002</p>
              <p className="text-sm text-gray-800">The system SHALL measure user breathing rate in real-time during VR sessions.</p>
            </div>
          </div>
        </div>
        {/* Add more requirement sections as needed */}
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">System Block Diagram</h2>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="text-center mb-4">
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow">
            VR Biometric Monitoring System
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="border-2 border-blue-400 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-center mb-3 text-blue-700">Hardware Subsystem</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-white p-2 rounded border shadow-sm">PPG Heart Rate Sensor</div>
              <div className="bg-white p-2 rounded border shadow-sm">Breathing Sensor</div>
              <div className="bg-white p-2 rounded border shadow-sm">Microcontroller (ESP32)</div>
            </div>
          </div>
          <div className="border-2 border-green-400 bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-center mb-3 text-green-700">Software Subsystem</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-white p-2 rounded border shadow-sm">Signal Processing</div>
              <div className="bg-white p-2 rounded border shadow-sm">Algorithm Engine</div>
              <div className="bg-white p-2 rounded border shadow-sm">API Server</div>
            </div>
          </div>
          <div className="border-2 border-purple-400 bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-center mb-3 text-purple-700">Integration Subsystem</h4>
            <div className="space-y-2 text-xs">
              <div className="bg-white p-2 rounded border shadow-sm">VR SDK Plugin</div>
              <div className="bg-white p-2 rounded border shadow-sm">Unity API</div>
              <div className="bg-white p-2 rounded border shadow-sm">Dashboard UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ConceptPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Concept Description and CONOPS</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">System Concept Description</h2>
      <p className="text-gray-700 mb-4">
        VitaSync VR is a wearable biometric monitoring system that seamlessly integrates with VR headsets to provide real-time physiological feedback. The system consists of three main components: a lightweight sensor module that attaches to the VR headset, embedded processing firmware for signal analysis, and a software API that delivers biometric data to VR applications.
      </p>
      <p className="text-gray-700">
        The sensor module incorporates a photoplethysmography (PPG) sensor positioned at the temporal artery region and a chest-mounted breathing sensor using strain gauge technology.
      </p>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Concept of Operations (CONOPS)</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-3 text-blue-700">Operational Scenarios</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-blue-200 bg-blue-50/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Home User - VR Fitness</h4>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>1. User puts on chest strap and VR headset</li>
                <li>2. Powers on system via button press</li>
                <li>3. System auto-connects to VR headset</li>
                <li>4. Real-time HR/BR displayed in-game</li>
              </ul>
            </div>
            <div className="border border-green-200 bg-green-50/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Clinical - Therapy Session</h4>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>1. Therapist assists patient with setup</li>
                <li>2. Calibration performed (30 seconds)</li>
                <li>3. Therapist monitors via tablet dashboard</li>
                <li>4. Real-time alerts for elevated stress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const AnalysisPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Pugh Matrix and Utility Analysis</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Design Alternatives Overview</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-2 border-blue-400 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-blue-700">Concept A: Temple-Mounted PPG (Baseline)</h3>
          <ul className="text-xs space-y-1 text-gray-700">
            <li>• BLE wireless communication</li>
            <li>• Integrated battery in headset module</li>
            <li>• Estimated cost: $120 per unit</li>
          </ul>
        </div>
        <div className="border-2 border-green-400 bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 text-green-700">Concept B: Ear-Clip Design</h3>
          <ul className="text-xs space-y-1 text-gray-700">
            <li>• PPG clip attaches to earlobe</li>
            <li>• Wi-Fi Direct communication</li>
            <li>• Estimated cost: $95 per unit</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Pugh Matrix Analysis</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left border">Criteria</th>
              <th className="p-2 text-center border bg-blue-100">Concept A (Base)</th>
              <th className="p-2 text-center border">Concept B (Ear)</th>
              <th className="p-2 text-center border">Concept C (Head)</th>
              <th className="p-2 text-center border">Concept D (Int)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Accuracy</td>
              <td className="p-2 text-center border bg-blue-50">0</td>
              <td className="p-2 text-center border">-</td>
              <td className="p-2 text-center border">+</td>
              <td className="p-2 text-center border">+</td>
            </tr>
            <tr>
              <td className="p-2 border">Comfort</td>
              <td className="p-2 text-center border bg-blue-50">0</td>
              <td className="p-2 text-center border">+</td>
              <td className="p-2 text-center border">-</td>
              <td className="p-2 text-center border">+</td>
            </tr>
            <tr className="bg-blue-100 font-bold text-lg">
              <td className="p-2 border">Total Score</td>
              <td className="p-2 text-center border bg-blue-50">0</td>
              <td className="p-2 text-center border">+3</td>
              <td className="p-2 text-center border">-3</td>
              <td className="p-2 text-center border">+3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded">
        <p className="text-sm font-semibold mb-2 text-green-800">Result: Selected Concept A</p>
        <p className="text-xs text-gray-700">
          Concept A (Temple-Mounted PPG) achieves the highest weighted utility score with excellent balance across all criteria. It offers proven accuracy, reasonable cost, and feasible development timeline.
        </p>
      </div>
    </section>
  </div>
);

const DesignPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">System Design</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">System Architecture Overview</h2>
      <p className="text-gray-700 mb-4 text-sm">
        The VitaSync VR system is designed with a modular architecture consisting of three primary subsystems: Hardware, Software, and Integration layers. Each subsystem is independently testable and interfaces through well-defined protocols.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-4 text-center">
            <div className="font-bold text-blue-700 mb-2">Layer 1: Hardware</div>
            <div className="text-xs text-gray-700">Sensors, MCU, Power, Communications</div>
          </div>
          <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4 text-center">
            <div className="font-bold text-green-700 mb-2">Layer 2: Software</div>
            <div className="text-xs text-gray-700">Processing, Filtering, API, Storage</div>
          </div>
          <div className="bg-purple-100 border-2 border-purple-400 rounded-lg p-4 text-center">
            <div className="font-bold text-purple-700 mb-2">Layer 3: Integration</div>
            <div className="text-xs text-gray-700">VR SDK, UI, Applications</div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Hardware Subsystem Design</h2>
      
      <div className="space-y-4">
        <div className="border border-blue-300 rounded-lg p-4 bg-blue-50/50">
          <h3 className="font-semibold text-lg mb-3 text-blue-700">Component Selection</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded border">
              <h4 className="font-semibold text-sm mb-2">Heart Rate Sensor: MAX30102</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• Integrated PPG and pulse oximetry sensor</li>
                <li>• Red and IR LEDs with photodetector</li>
                <li>• I2C interface, 3.3V operation</li>
                <li>• Cost: $8/unit</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h4 className="font-semibold text-sm mb-2">Breathing Sensor: FlexiForce A201</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• Piezoresistive force sensor</li>
                <li>• Range: 0-445 N, ideal for chest expansion</li>
                <li>• Analog voltage output</li>
                <li>• Cost: $12/unit</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h4 className="font-semibold text-sm mb-2">Microcontroller: ESP32-WROOM-32</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• Dual-core 240 MHz processor</li>
                <li>• Integrated BLE 4.2 and Wi-Fi</li>
                <li>• Cost: $4/unit</li>
              </ul>
            </div>
            
            <div className="bg-white p-3 rounded border">
              <h4 className="font-semibold text-sm mb-2">Power: 500mAh LiPo Battery</h4>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>• 3.7V nominal, 500mAh capacity</li>
                <li>• Estimated runtime: 2.5 hours</li>
                <li>• Cost: $6/unit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Bill of Materials (BOM)</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left border">Component</th>
              <th className="p-2 text-center border">Qty</th>
              <th className="p-2 text-right border">Unit Cost</th>
              <th className="p-2 text-right border">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">PPG Sensor (MAX30102)</td>
              <td className="p-2 text-center border">1</td>
              <td className="p-2 text-right border">$8.00</td>
              <td className="p-2 text-right border font-semibold">$8.00</td>
            </tr>
            <tr>
              <td className="p-2 border">Breathing Sensor (FlexiForce)</td>
              <td className="p-2 text-center border">1</td>
              <td className="p-2 text-right border">$12.00</td>
              <td className="p-2 text-right border font-semibold">$12.00</td>
            </tr>
            <tr>
              <td className="p-2 border">Microcontroller (ESP32)</td>
              <td className="p-2 text-center border">1</td>
              <td className="p-2 text-right border">$4.00</td>
              <td className="p-2 text-right border font-semibold">$4.00</td>
            </tr>
            <tr>
              <td className="p-2 border">Battery (500mAh)</td>
              <td className="p-2 text-center border">1</td>
              <td className="p-2 text-right border">$6.00</td>
              <td className="p-2 text-right border font-semibold">$6.00</td>
            </tr>
            <tr className="bg-gray-100 font-bold">
              <td className="p-2 border" colSpan={3}>Estimated Unit Cost</td>
              <td className="p-2 text-right border">$88.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

const TestPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Test Plan</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Testing Strategy</h2>
      <div className="grid md:grid-cols-4 gap-3">
        <div className="bg-blue-50 p-3 rounded text-center">
          <div className="font-bold text-blue-700 mb-1">Unit Testing</div>
          <div className="text-xs text-gray-600">Individual components</div>
        </div>
        <div className="bg-green-50 p-3 rounded text-center">
          <div className="font-bold text-green-700 mb-1">Integration</div>
          <div className="text-xs text-gray-600">Subsystem interfaces</div>
        </div>
        <div className="bg-purple-50 p-3 rounded text-center">
          <div className="font-bold text-purple-700 mb-1">System Testing</div>
          <div className="text-xs text-gray-600">End-to-end functionality</div>
        </div>
        <div className="bg-orange-50 p-3 rounded text-center">
          <div className="font-bold text-orange-700 mb-1">UAT</div>
          <div className="text-xs text-gray-600">Real-world validation</div>
        </div>
      </div>
    </section>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Test Cases</h2>
      <div className="space-y-3">
        <div className="bg-white p-3 rounded border border-gray-200">
          <p className="font-semibold text-xs mb-1">TEST-HW-001: PPG Sensor Functionality</p>
          <p className="text-xs text-gray-700 mb-1"><strong>Objective:</strong> Verify MAX30102 sensor produces valid signals</p>
          <p className="text-xs text-gray-700"><strong>Pass Criteria:</strong> Signal amplitude greater than 1000 ADC counts</p>
        </div>
        <div className="bg-white p-3 rounded border border-gray-200">
          <p className="font-semibold text-xs mb-1">TEST-SW-001: Heart Rate Algorithm</p>
          <p className="text-xs text-gray-700 mb-1"><strong>Objective:</strong> Validate HR calculation with known signals</p>
          <p className="text-xs text-gray-700"><strong>Pass Criteria:</strong> Calculated HR within ±2 BPM of ground truth</p>
        </div>
      </div>
    </section>
  </div>
);

const FailurePage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Failure Modes and Mitigation</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Project-Level Failure Modes</h2>
      <div className="space-y-3">
        <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50 rounded-r">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold">FM-P-001: Component Supply Chain Delays</h3>
            <span className="text-xs font-bold text-red-700 px-2 py-1 bg-red-200 rounded">HIGH RISK</span>
          </div>
          <p className="text-sm text-gray-700 mb-2"><strong>Impact:</strong> Project timeline delayed by 2-4 weeks.</p>
          <div className="bg-white p-3 rounded mt-2">
            <p className="text-xs font-semibold mb-1">Mitigation:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Order all components in Week 1</li>
              <li>• Identify 2-3 alternative suppliers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ConstraintsPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Real World Constraints</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Environmental & Ethical</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50/50 rounded-r">
          <h3 className="font-semibold text-lg mb-2 text-green-700">Positive Impact</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>✓ Reduced healthcare travel</li>
            <li>✓ Reusable device design</li>
            <li>✓ Eliminates paper charts</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50/50 rounded-r">
          <h3 className="font-semibold text-lg mb-2 text-purple-700">Data Privacy</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Encryption at rest and in transit</li>
            <li>• Local-first processing</li>
            <li>• Transparent privacy policy</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const StandardsPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Engineering Standards</h1>

    <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Applicable Standards</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50/50 rounded-r">
          <h3 className="font-semibold mb-2">IEC 60601-1</h3>
          <p className="text-sm text-gray-700 mb-2">Medical Electrical Equipment Safety</p>
          <ul className="text-xs space-y-1 text-gray-700 ml-4 list-disc">
            <li>Leakage current limits</li>
            <li>Thermal safety limits</li>
          </ul>
        </div>
        <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50/50 rounded-r">
          <h3 className="font-semibold mb-2">Bluetooth 4.2 / IEEE 802.15.1</h3>
          <p className="text-sm text-gray-700 mb-2">Wireless Communication</p>
          <ul className="text-xs space-y-1 text-gray-700 ml-4 list-disc">
            <li>2.4 GHz ISM band operation</li>
            <li>Power consumption limits</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default ProjectWiki;