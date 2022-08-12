import React from 'react';
import ResumeCard from './resumeCard';

const ResumeContainer = ({resumes}) => (
<div className='resumeContainer'>
    {
    resumes.map((resume, index)=>(
    <ResumeCard resume = {resume}/>
    )) 
}
</div>
)

export default ResumeContainer