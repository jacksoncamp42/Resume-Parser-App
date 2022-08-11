import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
// import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Authenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createResume } from "../api/mutations";
import config from "../aws-exports";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [items, setItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchCategory, setSearchCategory] = useState("first_name");
  const [filter, setFilter] = useState("");
  const [resumeDetails, setResumeDetails] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    certification: "",
    experience: "",
    projects: "",
    favorite: false,
  });

  const onChange = (e) => {};

  const onSubmit = async (e) => {};

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
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
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;
