import logo from "./logo.svg";
import Dropzone from "./Dropzone";
import React from 'react'
import "./App.scss";

function App() {
  const [files, setFiles] = React.useState([])
  const [preview, setPreview] = React.useState([])
  console.log(files)
  console.log(preview)
  const onDragStart = (e) => {
    console.log(e.dataTransfer);

    e.dataTransfer.setData("text", e.target.id);
    console.log("Drag start");
  };

  const onDragEnd = (e) => {
    console.log("Draga end");
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    const newFiles = e.dataTransfer.files
    setFiles(files.concat(...newFiles)) // concat(...[1,2,3,4]) -> concat(1,2,3,4)

    const id = e.dataTransfer.getData("text");
    const element = document.getElementById(id);
    e.target.appendChild(element);
  };
  return (
    <>
      <div className="App">
        <p
          id="drag-p"
          draggable={true}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          We will be dargging this very soon
        </p>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        A new div
      </div>
      <Dropzone files={files} onDrop={onDrop} onDragOver={onDragOver} />
      <div className='delete-item'>Drag here to delete</div>
    </>
  );
}

export default App;
