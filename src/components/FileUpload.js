import React, { Fragment, useState, useEffect } from "react";
import UploadPic from "./sidebar-icons/UploadPic.png";
import UploadFile from "./sidebar-icons/uploadFile.svg";
import { Storage } from "aws-amplify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [filename, setFilename] = useState("Drop your file here.");
  const [uploadedFile, setUploadedFile] = useState({});
  const [items, setItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchCategory, setSearchCategory] = useState("first_name");
  const [filter, setFilter] = useState("");

  var [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Handle custom file name
    var fileInput = document.querySelector("input[type=file]");
    var dropzone = document.querySelector("label");

    fileInput.addEventListener("change", function () {          
      fileInput.files.length > 1
        ? setFilename(fileInput.files.length + " files to upload.")
        : setFilename(fileInput.value.split("\\").pop());
    });

    fileInput.addEventListener("dragenter", function () {
      dropzone.classList.add("dragover");
    });

    fileInput.addEventListener("dragleave", function () {
      dropzone.classList.remove("dragover");
    });
  }, []);

  // useEffect(() => {
  //   console.log(files);
  // }, [files]);

  async function fetchFiles() {
    let fileKeys = await Storage.list("");
    fileKeys = await Promise.all(
      fileKeys.map(async (k) => {
        const signedUrl = await Storage.get(k.key);
        return signedUrl;
      })
    );
    setFiles(fileKeys);
  }

  async function onChange(e) {
      setFiles(e.target.files);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    await Promise.all(
      [...files].map((file) => {
        if(file.type === 'application/pdf'){
        Storage.put(file.name, file).then(result => {
          setIsLoading(false);
          toast.success('Successfully uploaded: ' + file.name, {
            position: "top-center",
            });
        })
        .catch((e) => {
          console.log('Upload Failed for ' + file.name + " due to: " + e );
          setIsLoading(false);
          toast.error('Upload Failed for ' + file.name + " due to: " + e, {
            position: "top-center",
            }); 
        })
        }
        else{
          toast.error('File type not supported for: ' + file.name + ' Please use PDF.', {
            position: "top-center",
            }); 
          setIsLoading(false);
        }  
      })
    );
  }

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="upload-container">
      <div className="left-side">
        <h1>Welcome, User!</h1>
        <div className="left-shape">
          <h2>
            Upload your <mark>resume</mark>
          </h2>
          <img src={UploadPic} alt="upload-logo" />
        </div>
      </div>

      <Fragment>
        <form className="file-upload-area" onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <label className="custom-file-label" htmlFor="customFile">
              {isLoading? <div class="spinner-border text-secondary" role="status"/> :
              <img className="icon" src={UploadFile} alt=""></img>
              }
              <p>{filename}</p>
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={onChange}
                disabled={isLoading}
                multiple
              />
            </label>
          </div>
          <input
            type="submit"
            value="Submit Resume"
            className="btn btn-primary btn-block mt-4"
            disabled={isLoading}
          />
        </form>
      </Fragment>
    </div>
  );
};

export default FileUpload;
