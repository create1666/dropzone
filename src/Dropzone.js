import React from "react";

const Dropzone = ({ onDrop, onDragOver, files }) => {
  const onDragEnter = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  // const onImageDrag = (e) => {
  //   console.log("Thiss sbing dragged");
  // };

  const onImageDragLeave = (e) => {
    console.log("Img drag leave");
  };

  const onImgDragEnd = (e) => {
    console.log("Image dragged start");
    
    const dragId = e.currentTarget.id;
    console.log(dragId, "dragid image");
    e.dataTransfer.setData("text", dragId);
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
        {files.map((item, key) => {
          const { id, file } = item;
          return (
            <div
              id={id}
              draggable={true}
              onDragStart={onImgDragEnd}
              onDragLeave={onImageDragLeave}
              // onDrag={onImageDrag}
              key={key}
            >
              <img className="preview-image" src={URL.createObjectURL(file)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropzone;
