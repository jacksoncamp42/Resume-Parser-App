import React, { Fragment, useState, useEffect } from 'react';
import UploadPic from './sidebar-icons/UploadPic.png';
import UploadFile from './sidebar-icons/uploadFile.svg';


const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Drop your file here.');
  const [uploadedFile, setUploadedFile] = useState({});
  const [items, setItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchCategory, setSearchCategory] = useState('first_name');
  const [filter, setFilter] = useState('');

  useEffect (()=>{ //Handle custom file name
    var fileInput = document.querySelector('input[type=file]');
    var dropzone = document.querySelector('label');

    fileInput.addEventListener('change', function() {
        fileInput.files.length > 1 ? setFilename(fileInput.files.length + " files to upload."): setFilename(fileInput.value.split('\\').pop());
    });

    fileInput.addEventListener('dragenter', function() {
        dropzone.classList.add('dragover');
    });

    fileInput.addEventListener('dragleave', function() {
        dropzone.classList.remove('dragover');
    });
  },[]);

  const onChange = (e) => {
  };

  const onSubmit = async (e) => {};

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="upload-container">
      <div className="left-side">
        <h1>Welcome, User!</h1>
        <div className="left-shape">
          <h2>Upload your <mark>resume</mark></h2>
          <img src={UploadPic} alt="upload-logo" />
        </div>
      </div>

      <Fragment>
        <form className="file-upload-area" onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <label className="custom-file-label" htmlFor="customFile">
            <img className="icon" src={UploadFile} alt=""></img>
              <p>{filename}</p>
              <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
              multiple
            />
            </label>
          </div>
          <input
            type="submit"
            value="Submit Resume"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
      </Fragment>

    </div>
  );
};

export default FileUpload;
