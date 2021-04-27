import React from "react";

const DeleteZone = ({onDragOver,onDropDelete }) => {

    
  return (
    <>
      <div onDragOver={onDragOver} onDrop={onDropDelete} >
        <p>Drag file or Image to delete here...</p>
      </div>
    </>
  );
};

export default DeleteZone;
