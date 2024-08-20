// src/components/UploadMetadata/MetadataUpload.js
import React from "react";

const MetadataUpload = ({ onChange }) => {
  return (
    <div className="d-create-file">
      <h5>Upload Metadata</h5>
      <p id="file_name">JSON file. Max 5mb.</p>
      <div className="browse"> 
        <input
          type="button"
          id="get_file"
          className="btn-main"
          value="Browse"
        />
        <input
          id="upload_file"
          type="file"
          accept=".json"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MetadataUpload;