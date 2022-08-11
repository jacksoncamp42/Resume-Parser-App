import React, { useState, useEffect }from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen === 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
  }
  
  const findLinks = (str, substr) => {
      if(!str.includes('https://')){
        var insert = 'https://';
        var indices = getIndicesOf("github", str) 
        var extra = 0;
  
        for(let i = 0; i < indices.length; i++){
          console.log(indices[i] + extra)
          str = [str.slice(0, indices[i] + extra), insert, str.slice(indices[i] + extra)].join('')
          extra = extra + 8
        }
        let pos2 = str.indexOf("linkedin"); 
        str = [str.slice(0, pos2), insert, str.slice(pos2)].join('')
        console.log(str)
      }
      var name = str.split(/(?=https)/)
      var result = ""
      for(let i = 0; i < name.length; i++) {
        if (name[i].includes(substr)) {
          result = name[i]
          break;
        }
      }
      return result
    }

const ResumeCard = ({ resume }) => {
    let favoriteButtonOutline = resume.hasOwnProperty('isFavorite') && resume.isFavorite === true ? 'https://img.icons8.com/material-rounded/96/0038ff/christmas-star.png' : 'https://img.icons8.com/metro/96/0038ff/star.png'
    const [show, setShow] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFavoriteClick = () => {
      setLoading(true);
    }

    function networkSimulation(){
      return new Promise((resolve) => setTimeout(resolve, 2000))
    }

    async function handleFavoriteRequest() {
      if(resume.isFavorite == true){ //Handle remove from favorites:
        return await networkSimulation();
      }
      else{ // Handle add to favorites:
        return await networkSimulation();
      }
    }

    useEffect(() => {
      if (isLoading) {
        handleFavoriteRequest().then(() => {
          setLoading(false);
          setShow(false);
        });
      }
    }, [isLoading]);

    function handleViewResume() {

    }

    return (
      <>
        <Modal show={show} onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit favorites?</Modal.Title>
          </Modal.Header>
          <Modal.Body> {resume.isFavorite === true ? `${resume.name} will be removed from your favorites.` : `${resume.name} will be added to your favorites.`} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleFavoriteClick : null}>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden={!isLoading}></span>
            {isLoading ? ' Saving Changes...' : 'Save Changes'}
            </Button>
          </Modal.Footer>
        </Modal>

        <div className='resumeCard'>
            <div className="resumeCardTitle">
            <p id="resume-name">{resume.hasOwnProperty('name') ? resume.name : "N/A"}</p>
            <button className='resumeFavorite' 
            style={{backgroundImage:`url(${favoriteButtonOutline})`}}
            onClick = {handleShow}
            />
            </div>

            <div className="resumeCardHeader">
                <p className='contacts'>{resume.hasOwnProperty('phone') ? resume.phone : "N/A"}</p>
                <p className='contacts'>{resume.hasOwnProperty('email') ? resume.email : "N/A"}</p>
            </div>

            <p id="resume-education"> <p id = "resume-title">Education:</p> <p id = "resume-fields"> {resume.hasOwnProperty('education') ? resume.education : "N/A"} </p> </p>
            <p id="resume-experience"> <p id = "resume-title">Experience:</p> <p id = "resume-fields"> {resume.hasOwnProperty('experience') ? resume.experience : "N/A"} </p> </p>
            <p id="resume-skills"> <p id ="resume-title">Skillset:</p> <p id = "resume-fields">{resume.hasOwnProperty('skills') ? resume.skills : "N/A"} </p> </p>

            <div className='footer'> 
                <button className='viewResumeButton' onClick={handleViewResume}> View Resume </button>

                <a href={resume.hasOwnProperty('profiles') ? findLinks(resume.profiles, "linkedin") : null} target="_blank" rel="noopener noreferrer">
                <img src={resume.hasOwnProperty('profiles') ? "https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png": null} className='links' alt=''></img>
                </a> 
            </div>
        </div>
        </>
    )
}

export default ResumeCard