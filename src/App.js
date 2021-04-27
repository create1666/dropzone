import logo from "./logo.svg";
import Dropzone from "./Dropzone";
import React from "react";
import { v4 } from "uuid";
import "./App.scss";

function App() {
  const [files, setFiles] = React.useState([]);
  const [preview, setPreview] = React.useState([]);
  console.log(files);
  console.log(preview);
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
    // console.log(e.dataTransfer.files);
    console.log("I am working");

    if (e.dataTransfer.getData("text")) {
      console.log("isText");
      const id = e.dataTransfer.getData("text");
      const element = document.getElementById(id);
      console.log(e.target.contains(element))
      if (e.target.contains(element)) {
        e.target.appendChild(element);
      }
    } else {
      console.log("isFile");
      let newFiles = e.dataTransfer.files;
      newFiles = [...newFiles];
      console.log(newFiles);
      newFiles = newFiles.map((file) => ({
        file,
        id: v4(),
      }));
      setFiles(files.concat(...newFiles)); // concat(...[1,2,3,4]) -> concat(1,2,3,4)
    }
  };

  const onDeleteDrop = (e) => {
    console.log("Something is dropped to be deleted");
    const dragId = e.dataTransfer
      .getData("text")
      .replace("blob:http://localhost:3000/", "");
    console.log(files, "files");
    console.log(dragId, "dragId");
    const fileteredImgs = files.filter((file) => file.id !== dragId);
    console.log(fileteredImgs, "fil");
    setFiles(fileteredImgs);
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
      <div
        className="delete-item"
        onDrop={onDeleteDrop}
        onDragOver={onDragOver}
      >
        Drag here to delete
      </div>
    </>
  );
}

export default App;
