import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function FormSubmit() {
  const [file, setFile] = useState(null);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData.file);
    axios
      .post('http://localhost:3001/upload', formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post('http://localhost:3001/resumes', formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form method="post" action="#" id="#" onSubmit={handleSubmit}>
      <div className="form-group files">
        <label>Upload Your File </label>
        <input
          type="file"
          className="form-control"
          multiple=""
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}
