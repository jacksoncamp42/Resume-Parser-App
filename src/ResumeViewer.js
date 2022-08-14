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
