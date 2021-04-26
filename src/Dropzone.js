import React from "react";

const Dropzone = ({ onDrop, onDragOver, files }) => {
  const onDragEnter = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      className={"drag-drop-zone"}
    >
      <p>Drag your files here</p>
      <div className="img-preview-wrapper">
        {files.map((file, key) => {
          return (
            <div key={key}>
              <img className="preview-image" src={URL.createObjectURL(file)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropzone;
