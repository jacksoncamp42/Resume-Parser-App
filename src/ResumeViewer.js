import React, {useEffect} from 'react';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import Search from './components/Search';
import ResumeContainer from './components/ResumeContainer';
import './ResumeViewer.css';
import { API, graphqlOperation } from "aws-amplify";
import { listResumes } from './api/queries';

export default function ResumeViewer() {
  const [resumes, setResumes] = useState([]);
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState('');
  const [searchedResumes, setSearchedResumes] = useState([]);

  const fetchResumes = async () => {
    try {
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listResumes,
        authMode: "API_KEY"
      });
      const resumes = data.listResumes.items;
      setResumes(resumes);
    } catch (err) {
      console.log(err);
    }
  };

  function handleChange(newValue) {
    setSearch(newValue);
    if (newValue === '') {
      setSearchedResumes([]);
    }
  }

  useEffect(() => {
    fetchResumes();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(search);
    const resumeResult = [];
    for (const resume of resumes) {
      const wordArray = Object.values(resume);
      const result = wordArray.find((word) => word.includes(search));
      if (result) {
        resumeResult.push(resume);
      }
    }
    setSearchedResumes(resumeResult);
  }

  let resume1 = {
    name: 'Miguel Mendoza',
    email: 'igmen@email.com',
    phone: '(123) 456-7890',
    education:
      'Bachelor of Science\nComputer Science\nSan Jose State University\nSeptember 2017 - May 2021\nSan Jose, CA',
    skills:
      'HTML\nCSS\nJavascript\nReact.JS\nRedux\nAngular.JS\nNode.js\nMaterialUI\nWebGL\nBootstrap\nMongoDB\nPython\nRuby on Rails\nPostgreSQL\njQuery',
    certification:
      'S\nAWS\nWORK EXPERIENCE\nComputer Science Teaching Assistant\nSan Jose State University\nJanuary 2018 - current/San Jose, CA\n·\nTaught basic and upper-level undergraduate computer science and\ncybersecurity courses with class sizes averaging 35 students\n·\nConducted 1,000+ hours of scholarship research per departmental\npromotion and tenure guidelines\n·\nEngaged with industry to maintain 100% fluency in focus and to\nprovide opportunities for students to work on industry projects\n·\nAssessed, assisted, and guided 30+ online adjunct CIS/CS faculty\nunder the direction of the department chair\n·\nEngaged in 1,000+ hours of professional development, following\ndepartmental guidelinesAWS\nWORK EXPERIENCE\nComputer Science Teaching Assistant\nSan Jose State University\nJanuary 2018 - current/San Jose, CA\n·\nTaught basic and upper-level undergraduate computer science and\ncybersecurity courses with class sizes averaging 35 students\n·\nConducted 1,000+ hours of scholarship research per departmental\npromotion and tenure guidelines\n·\nEngaged with industry to maintain 100% fluency in focus and to\nprovide opportunities for students to work on industry projects\n·\nAssessed, assisted, and guided 30+ online adjunct CIS/CS faculty\nunder the direction of the department chair\n·\nEngaged in 1,000+ hours of professional development, following\ndepartmental guidelines',
    experience:
      'Computer Science Teaching Assistant\nSan Jose State University\nJanuary 2018 - current/San Jose, CA\n·\nTaught basic and upper-level undergraduate computer science and\ncybersecurity courses with class sizes averaging 35 students\n·\nConducted 1,000+ hours of scholarship research per departmental\npromotion and tenure guidelines\n·\nEngaged with industry to maintain 100% fluency in focus and to\nprovide opportunities for students to work on industry projects\n·\nAssessed, assisted, and guided 30+ online adjunct CIS/CS faculty\nunder the direction of the department chair\n·\nEngaged in 1,000+ hours of professional development, following\ndepartmental guidelines',
    projects:
      'StudyBuddyPlus\nCreator\n- current\n·\nDirected user log-ins, ensuring they were presented with a\ndashboard displaying all study sets\n·\nSupervised users, ensuring they had the ability to view their study\nsets and folders, in addition to creating new folders and study sets\n·\nBuilt using Ruby on Rails, PostgreSQL, React.js, Redux, and jQuery\nMolecularLegos\nCreator\n- current\n·\nDesigned full-stack web application that allowed students to build\nmolecules through 3-D modeled atoms\n·\nCreated machine-learning database to predict and suggest\ncompleted molecules based on the number of specific atoms\nselected\n·\nUsed by K-12 and college professors to demonstrate molecular\nconstruction without the expense and hassle of physical pieces\n·\nBuilt using Javascript, WebGL, HTML, CSS, Bootstrap, MaterialUI,\nand MongoDB',
  };
  let resume2 = {
    name: "Darius O'brien",
    email: 'ario@email.com',
    phone: '(123) 456-7890',
    education:
      'Bachelor of Science\nComputer Science\nUniversity of Santa Clara\nSeptember 2018 - current\nSanta Clara, CA\nGPA: 3.6',
    skills:
      'Java\nSpring\nJavascript\nCSS\nHTML\nREST APIs\nReact Native\nKotlin\nPostgreSQL\nMySQL',
    certification:
      'S\nAWS\nOWASP\nCAREER OBJECTIVE\nSoon-to-be Computer Science graduate eager to continue\nexploring the inspiring, innovative field of Android Development.\nAs a seasoned intern, I am looking to join an Android\nDevelopment team with AT&T as a junior developer.\nWORK EXPERIENCE\nAndroid Developer Intern\nGenesis10\nMay 2021 - currentSan Jose, CA\n·\nDesigned and built 12 innovative, intuitive and responsive\nnative apps\n·\nManaged coding, packaging and deployment, and\nmonitoring performance and stability for 10+ apps\n·\nAnalyzed and guaranteed performance quality and\nresponsiveness of 100% of applications\n·\nInvestigated and resolved 300+ issues reported by testing\nteams to determine impact and root cause\n·\nWorked with 2 Quality Assurance teams for end-to-end\ntesting and certification of product delivery\n·\nOverhauled team development-related processes that\naccelerated delivery, drove innovation, lowered costs, and\nimproved quality\n·\nCompleted 15+ two-week sprints and participated in sprint\nretrospectives and daily standups\n·\nOwned the entire lifecycle of feature development for 12\napplications, from design to launch\nAndroid Developer Intern\nNovalsys, Inc\nJanuary 2021 - May 2021Milpitas, CA\n·\nWorked with 4 mobile engineering team members to build\nnew features\n·\nAssisted with bug fixing and improving performance on 8\ndifferent applications\n·\nMaintained a cutting-edge knowledge of Android\ndevelopment via 100+ hours of personal instruction from\nsenior developers\n·\nExecuted 100% data integrity and validation\n·\nParticipated in all stages of development with 8 other\nAndroid developers of various skill levels\n·\nWorked with 2 product and design teams to innovate\nexisting and new experiencesAWS\nOWASP\nCAREER OBJECTIVE\nSoon-to-be Computer Science graduate eager to continue\nexploring the inspiring, innovative field of Android Development.\nAs a seasoned intern, I am looking to join an Android\nDevelopment team with AT&T as a junior developer.\nWORK EXPERIENCE\nAndroid Developer Intern\nGenesis10\nMay 2021 - currentSan Jose, CA\n·\nDesigned and built 12 innovative, intuitive and responsive\nnative apps\n·\nManaged coding, packaging and deployment, and\nmonitoring performance and stability for 10+ apps\n·\nAnalyzed and guaranteed performance quality and\nresponsiveness of 100% of applications\n·\nInvestigated and resolved 300+ issues reported by testing\nteams to determine impact and root cause\n·\nWorked with 2 Quality Assurance teams for end-to-end\ntesting and certification of product delivery\n·\nOverhauled team development-related processes that\naccelerated delivery, drove innovation, lowered costs, and\nimproved quality\n·\nCompleted 15+ two-week sprints and participated in sprint\nretrospectives and daily standups\n·\nOwned the entire lifecycle of feature development for 12\napplications, from design to launch\nAndroid Developer Intern\nNovalsys, Inc\nJanuary 2021 - May 2021Milpitas, CA\n·\nWorked with 4 mobile engineering team members to build\nnew features\n·\nAssisted with bug fixing and improving performance on 8\ndifferent applications\n·\nMaintained a cutting-edge knowledge of Android\ndevelopment via 100+ hours of personal instruction from\nsenior developers\n·\nExecuted 100% data integrity and validation\n·\nParticipated in all stages of development with 8 other\nAndroid developers of various skill levels\n·\nWorked with 2 product and design teams to innovate\nexisting and new experiences',
    objective:
      'Soon-to-be Computer Science graduate eager to continue\nexploring the inspiring, innovative field of Android Development.\nAs a seasoned intern, I am looking to join an Android\nDevelopment team with AT&T as a junior developer.\nWORK EXPERIENCE\nAndroid Developer Intern\nGenesis10\nMay 2021 - currentSan Jose, CA\n·\nDesigned and built 12 innovative, intuitive and responsive\nnative apps\n·\nManaged coding, packaging and deployment, and\nmonitoring performance and stability for 10+ apps\n·\nAnalyzed and guaranteed performance quality and\nresponsiveness of 100% of applications\n·\nInvestigated and resolved 300+ issues reported by testing\nteams to determine impact and root cause\n·\nWorked with 2 Quality Assurance teams for end-to-end\ntesting and certification of product delivery\n·\nOverhauled team development-related processes that\naccelerated delivery, drove innovation, lowered costs, and\nimproved quality\n·\nCompleted 15+ two-week sprints and participated in sprint\nretrospectives and daily standups\n·\nOwned the entire lifecycle of feature development for 12\napplications, from design to launch\nAndroid Developer Intern\nNovalsys, Inc\nJanuary 2021 - May 2021Milpitas, CA\n·\nWorked with 4 mobile engineering team members to build\nnew features\n·\nAssisted with bug fixing and improving performance on 8\ndifferent applications\n·\nMaintained a cutting-edge knowledge of Android\ndevelopment via 100+ hours of personal instruction from\nsenior developers\n·\nExecuted 100% data integrity and validation\n·\nParticipated in all stages of development with 8 other\nAndroid developers of various skill levels\n·\nWorked with 2 product and design teams to innovate\nexisting and new experiences',
    experience:
      'Android Developer Intern\nGenesis10\nMay 2021 - currentSan Jose, CA\n·\nDesigned and built 12 innovative, intuitive and responsive\nnative apps\n·\nManaged coding, packaging and deployment, and\nmonitoring performance and stability for 10+ apps\n·\nAnalyzed and guaranteed performance quality and\nresponsiveness of 100% of applications\n·\nInvestigated and resolved 300+ issues reported by testing\nteams to determine impact and root cause\n·\nWorked with 2 Quality Assurance teams for end-to-end\ntesting and certification of product delivery\n·\nOverhauled team development-related processes that\naccelerated delivery, drove innovation, lowered costs, and\nimproved quality\n·\nCompleted 15+ two-week sprints and participated in sprint\nretrospectives and daily standups\n·\nOwned the entire lifecycle of feature development for 12\napplications, from design to launch\nAndroid Developer Intern\nNovalsys, Inc\nJanuary 2021 - May 2021Milpitas, CA\n·\nWorked with 4 mobile engineering team members to build\nnew features\n·\nAssisted with bug fixing and improving performance on 8\ndifferent applications\n·\nMaintained a cutting-edge knowledge of Android\ndevelopment via 100+ hours of personal instruction from\nsenior developers\n·\nExecuted 100% data integrity and validation\n·\nParticipated in all stages of development with 8 other\nAndroid developers of various skill levels\n·\nWorked with 2 product and design teams to innovate\nexisting and new experiences',
  };
  let resume3 = {
    name: 'Chandra Finn',
    email: 'c.finn@email.com',
    phone: '(123) 456-7890',
    experience:
      "FreshDirect-Full Stack Engineer Intern\nApril 2018 - September 2018Portland, OR\n·\nConstructed Angular components for customer-facing web app, improving users' page time by 3 minutes\n·\nWorked within agile team to prioritize and scope feature requests, placing biggest impacts at top\n·\nBuilt extensive test coverage for new features, which reduced customer complaints by 23%\n·\nCreated database schemas, saving company more than $7K in implementation costs\nMarketing Science Associates-Full Stack Engineer Intern\nApril 2017 - September 2017Pittsburgh PA\n·\nImplemented RESTful APIs in Django, enabling analytics team to increase reporting speed by 22%\n·\nBuilt out a unit testing infrastructure for a client web application using Selenium that reduced the number\nof bugs reported by the client by 14% month over month\n·\nUpdated documentation while working to triage user problems, increasing efficiency by 10%\n·\nParticipated in code reviews, advising against changes that would hinder scalability",
    projects:
      'Poker Simulation-Creator\n·\nBuilt a full-stack web app to allow users to simulate and visualize outcomes of poker hands against\nopponents of different play styles using open source cards.js on the front-end\n·\nUtilized sci-kit learn in Python to simulate possible outcomes under different scenarios\nCryptocurrency Price Tracker-Creator\n·\nIncorporated API calls to several applications, and stored data in PostgreSQL backend\n·\nUtilized D3.js to allow users to dynamically visualize price movements over time periods',
    education:
      'Portland State University -M.S.,Computer Science\n2018 - 2020Portland, OR\nUniversity of Pittsburgh-B.S.,Computer Science\n2014 - 2018Pittsburgh, PA',
    skills:
      'JavaScript (Angular); HTML/ CSS; Python (Django); SQL (PostgreSQL, Oracle); REST APIs (GraphQL); Git',
    isFavorite: true,
  };
  let resume4 = {
    name: 'Zeke Boliver',
    email: 'zeke.boliver@email.com',
    phone: '(123) 456-7890',
    objective:
      "Collaborative computer science graduate. Eager to secure an\ninternship using my experience with natural language processing\nand building web apps for non-technical users to further the\nmission of Coursera in democratizing education across the world.\nWORK EXPERIENCE\nTechnician\nUniversity of Texas Help Desk\nJanuary 2018 - May 2021Austin, TX\n·\nWorked 18 hours a week in the campus' largest computer lab\nto troubleshoot students' issues with network connectivity,\nprinters, and related technology\n·\nStreamlined the process of responding to issues by\nimplementing a ticketing system and grouping similar issues\ntogether to reduce resources and time to complete inbound\nrequests by 2 hours\n·\nAnswered phone calls, messages, and chatroom, and assisted\nwith scheduling complex issues that required appointments\n·\nTrained 3 freshmen help desk technicians in procedures, work\nticketing system, and conflict management\n·\nPerformed software updates and routine maintenance on\ncomputers, printers, and copy machines\nResearch Assistant\nUT Computer Science Institute\nApril 2015 - January 2018Austin, TX\n·\nDeveloped an interactive web app for Trial, an app that\nstreamlines the process of literature review for researchers in\nthe University of Texas School of Medicine\n·\nResearched and tracked potential programming solutions, and\ndocumented processes and fixes\n·\nBuilt a scraper in Python to structure data on 5K+ publications,\nand used the Natural Language Toolkit library in Python for a\nmore robust search of abstracts for research publications\n·\nProvided ongoing app support to identify, fix, and test bug\nissues, and surveyed user feedback to implement changes that\nincreased user satisfaction by 17%\n·\nCollaborated with undergraduate and graduate computer\nscience students to determine design, app interaction, and\nenhancements",
    experience:
      "Technician\nUniversity of Texas Help Desk\nJanuary 2018 - May 2021Austin, TX\n·\nWorked 18 hours a week in the campus' largest computer lab\nto troubleshoot students' issues with network connectivity,\nprinters, and related technology\n·\nStreamlined the process of responding to issues by\nimplementing a ticketing system and grouping similar issues\ntogether to reduce resources and time to complete inbound\nrequests by 2 hours\n·\nAnswered phone calls, messages, and chatroom, and assisted\nwith scheduling complex issues that required appointments\n·\nTrained 3 freshmen help desk technicians in procedures, work\nticketing system, and conflict management\n·\nPerformed software updates and routine maintenance on\ncomputers, printers, and copy machines\nResearch Assistant\nUT Computer Science Institute\nApril 2015 - January 2018Austin, TX\n·\nDeveloped an interactive web app for Trial, an app that\nstreamlines the process of literature review for researchers in\nthe University of Texas School of Medicine\n·\nResearched and tracked potential programming solutions, and\ndocumented processes and fixes\n·\nBuilt a scraper in Python to structure data on 5K+ publications,\nand used the Natural Language Toolkit library in Python for a\nmore robust search of abstracts for research publications\n·\nProvided ongoing app support to identify, fix, and test bug\nissues, and surveyed user feedback to implement changes that\nincreased user satisfaction by 17%\n·\nCollaborated with undergraduate and graduate computer\nscience students to determine design, app interaction, and\nenhancements",
    education:
      'B.S.\nComputer Science\nUniversity of Texas\nSeptember 2017 - May 2021\nAustin, TX\nGPA: 3.4\nRELEVANT',
    courses:
      'Data Structures\nAlgorithm Design\nDatabase Management Systems\nComputer Vision\nSoftware Design Methodology',
    skills:
      'JavaScript (Angular)\nHTML/ CSS\nPython (Django)\nSQL (PostgreSQL, Oracle)\nREST APIs (GraphQL)\nGit',
  };
  let resume5 = {
    name: 'Hanani Amir',
    email: 'hanani.amir@email.com',
    phone: '(123) 456-7890',
    education:
      "B.S.\nComputer Science\nUniversity of Pittsburgh\nSeptember 2017 - May 2021\nPittsburgh, PA\nGPA: 3.91\nPresidential Scholarship\nCum Laude Society\nDean's List (5/8 semesters)\nRELEVANT COURSES\nData Structures\nAlgorithm Design\nDatabase Management\nSystems\nComputer Vision\nSoftware Design Methodology",
    courses:
      'Data Structures\nAlgorithm Design\nDatabase Management\nSystems\nComputer Vision\nSoftware Design Methodology',
    skills:
      'Advanced: Java, Unix, Git\nFamiliar: Swift, SQL, HTML/CSS\nCAREER OBJECTIVE\nIndustrious recent computer science graduate with a zeal for\ninnovation. Seeking a position at Sikka Software, where the\nstrategic focus on delighting users aligns with my creativity and\ndesire to enhance social events through technology.',
    objective:
      'Industrious recent computer science graduate with a zeal for\ninnovation. Seeking a position at Sikka Software, where the\nstrategic focus on delighting users aligns with my creativity and\ndesire to enhance social events through technology.',
    projects:
      'Party Playlist Votes\nCreator\n·\nBuilt a native mobile app for Android and iOS that allows a\nparty host to invite party attendees to vote on event music,\nwhich reduced decision times by 45 minutes on average\n·\nStarted with a mobile app for Android, and then learned\nSwift to port it to iOS\n·\nUtilized the Spotify API, and built an interactive, real-time\nvoting function on top of it\n·\nUsed Swift, Java, SQL, HTML/CSS in creation and\nmaintenance, implementing user feedback\nStudent Coder Group\nMentor\nSeptember 2018 - May 2021\n·\nMentored 13 incoming computer science freshmen,\nproviding guidance on challenging classes and performing\ncode review for their first CS projects\n·\nCollaborated with fourth-year CS students to organize\nnetworking events for connecting with local developers\nUniversity of Pittsburgh Soccer\nCaptain\nSeptember 2017 - May 2021\n·\nCommunicated practices and events to team, working in\npartnership with coaches to streamline team information\n·\nLed initiative to mentor and coach local youth soccer\nteams in the community for 12 hours each summer month',
  };
  let resume6 = {
    name: 'Hanani Amir',
    email: 'hanani.amir@email.com',
    phone: '(123) 456-7890',
    education:
      "B.S.\nComputer Science\nUniversity of Pittsburgh\nSeptember 2017 - May 2021\nPittsburgh, PA\nGPA: 3.91\nPresidential Scholarship\nCum Laude Society\nDean's List (5/8 semesters)\nRELEVANT COURSES\nData Structures\nAlgorithm Design\nDatabase Management\nSystems\nComputer Vision\nSoftware Design Methodology",
    courses:
      'Data Structures\nAlgorithm Design\nDatabase Management\nSystems\nComputer Vision\nSoftware Design Methodology',
    skills:
      'Advanced: Java, Unix, Git\nFamiliar: Swift, SQL, HTML/CSS\nCAREER OBJECTIVE\nIndustrious recent computer science graduate with a zeal for\ninnovation. Seeking a position at Sikka Software, where the\nstrategic focus on delighting users aligns with my creativity and\ndesire to enhance social events through technology.',
    objective:
      'Industrious recent computer science graduate with a zeal for\ninnovation. Seeking a position at Sikka Software, where the\nstrategic focus on delighting users aligns with my creativity and\ndesire to enhance social events through technology.',
    projects:
      'Party Playlist Votes\nCreator\n·\nBuilt a native mobile app for Android and iOS that allows a\nparty host to invite party attendees to vote on event music,\nwhich reduced decision times by 45 minutes on average\n·\nStarted with a mobile app for Android, and then learned\nSwift to port it to iOS\n·\nUtilized the Spotify API, and built an interactive, real-time\nvoting function on top of it\n·\nUsed Swift, Java, SQL, HTML/CSS in creation and\nmaintenance, implementing user feedback\nStudent Coder Group\nMentor\nSeptember 2018 - May 2021\n·\nMentored 13 incoming computer science freshmen,\nproviding guidance on challenging classes and performing\ncode review for their first CS projects\n·\nCollaborated with fourth-year CS students to organize\nnetworking events for connecting with local developers\nUniversity of Pittsburgh Soccer\nCaptain\nSeptember 2017 - May 2021\n·\nCommunicated practices and events to team, working in\npartnership with coaches to streamline team information\n·\nLed initiative to mentor and coach local youth soccer\nteams in the community for 12 hours each summer month',
  };
  let resume7 = {
    name: 'Hanani Amir',
    email: 'hanani.amir@email.com',
    phone: '(123) 456-7890',
    education:
      "B.S.\nComputer Science\nUniversity of Pittsburgh\nSeptember 2017 - May 2021\nPittsburgh, PA\nGPA: 3.91\nPresidential Scholarship\nCum Laude Society\nDean's List (5/8 semesters)\nRELEVANT COURSES\nData Structures\nAlgorithm Design\nDatabase Management\nSystems\nComputer Vision\nSoftware Design Methodology",
    courses:
      'Data Structures\nAlgorithm Design\nDatabase Management\nSystems\nComputer Vision\nSoftware Design Methodology',
    skills:
      'Advanced: Java, Unix, Git\nFamiliar: Swift, SQL, HTML/CSS\nCAREER OBJECTIVE\nIndustrious recent computer science graduate with a zeal for\ninnovation. Seeking a position at Sikka Software, where the\nstrategic focus on delighting users aligns with my creativity and\ndesire to enhance social events through technology.',
    objective:
      'Industrious recent computer science graduate with a zeal for\ninnovation. Seeking a position at Sikka Software, where the\nstrategic focus on delighting users aligns with my creativity and\ndesire to enhance social events through technology.',
    projects:
      'Party Playlist Votes\nCreator\n·\nBuilt a native mobile app for Android and iOS that allows a\nparty host to invite party attendees to vote on event music,\nwhich reduced decision times by 45 minutes on average\n·\nStarted with a mobile app for Android, and then learned\nSwift to port it to iOS\n·\nUtilized the Spotify API, and built an interactive, real-time\nvoting function on top of it\n·\nUsed Swift, Java, SQL, HTML/CSS in creation and\nmaintenance, implementing user feedback\nStudent Coder Group\nMentor\nSeptember 2018 - May 2021\n·\nMentored 13 incoming computer science freshmen,\nproviding guidance on challenging classes and performing\ncode review for their first CS projects\n·\nCollaborated with fourth-year CS students to organize\nnetworking events for connecting with local developers\nUniversity of Pittsburgh Soccer\nCaptain\nSeptember 2017 - May 2021\n·\nCommunicated practices and events to team, working in\npartnership with coaches to streamline team information\n·\nLed initiative to mentor and coach local youth soccer\nteams in the community for 12 hours each summer month',
  };

  // let resumes = [];
  // resumes.push(resume1);
  // resumes.push(resume2);
  // resumes.push(resume3);
  // resumes.push(resume4);
  // resumes.push(resume5);
  // resumes.push(resume6);
  // resumes.push(resume5);

  return (
    <>
      <Search search={search} onChange={handleChange} onSubmit={handleSubmit} />
      {searchedResumes.length === 0 ? (
        <ResumeContainer resumes={resumes} />
      ) : (
        <ResumeContainer resumes={searchedResumes} />
      )}
    </>
  );
}
