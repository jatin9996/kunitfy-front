// src/components/UploadMetadata/UploadMetadata.js
import React, { useState } from "react";
import Switch from "react-switch";
import MetadataUpload from "./metadataUpload";

const UploadMetadata = () => {
  const [isMetadataUpload, setIsMetadataUpload] = useState(false);
  const [metadataFile, setMetadataFile] = useState(null);

  const handleMetadataChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMetadataFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="d-create-file">
        <h5>Upload File</h5>
        <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 5mb.</p>
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
            accept="image/*,video/*"
            onChange={(e) => console.log(e.target.files)}
          />
        </div>
      </div>

      <div className="spacer-20"></div>

      <div className="d-create-file">
        <label>
          <span>Use JSON Metadata</span>
          <Switch
            onChange={() => setIsMetadataUpload(!isMetadataUpload)}
            checked={isMetadataUpload}
            offColor="#888"
            onColor="#0f0"
          />
        </label>
      </div>

      {isMetadataUpload && (
        <div className="spacer-20">
          <MetadataUpload onChange={handleMetadataChange} />
        </div>
      )}
    </div>
  );
};

export default UploadMetadata;