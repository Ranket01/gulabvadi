import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import "./AdminPanelUploadImage.css";
import firebase from './firebase'

export default function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview]= useState(null)

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(selectedImage.name).put(selectedImage);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Error uploading image:", error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          // console.log("Image uploaded successfully to:", downloadURL);
          setSelectedImage(null)
          setPreview(null)
          // Do something with the download URL (e.g. save it to a database)
        });
      }
    );
  };

  return (
    <div className="upload-container">
        <h2>Upload Image to photo gallery</h2>
      <input
        className="upload-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="upload-input"
      />
      <label htmlFor="upload-input" className="upload-label">
        <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
        <span className="upload-text">Select Image to Upload</span>
      </label>
      {preview && (<>
        <div className="upload-preview-container">
          <img src={preview} alt="Preview" className="upload-preview" />
          
        </div>
        <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>
      </>)}
    </div>
  );
}
