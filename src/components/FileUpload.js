import React, { Fragment, useState } from 'react';
import UploadPic from './sidebar-icons/UploadPic.png';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [items, setItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchCategory, setSearchCategory] = useState('first_name');
  const [filter, setFilter] = useState('');

  const onChange = (e) => {};

  const onSubmit = async (e) => {};

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="upload-container">
      <div className="left-side">
        <h1>Welcome, User!</h1>
        <div className="left-shape">
          <h2>Upload Your Resume</h2>
          <img src={UploadPic} alt="upload-logo" />
        </div>
      </div>
      <Fragment>
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
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
