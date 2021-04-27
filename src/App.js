import React, { useReducer, useState } from "react";
import DropZone from "./Dropzone";
import "./App.scss"; // install node-sass to use scss
// import FormInput from '../src/components'
import DeleteZone from './DeleteZone'

const reducer = (state =[], action) => {
   console.log('reducer state', state)
   console.log('reducer action', action)
   if (action.type === 'ADD_FILES') {
     return action.files
   } return; 
}

function App() {
  const [files, dispatch] = useReducer(reducer, []);
  const onDragOver = (e) => {
    e.preventDefault();
  };

  console.log(files);

  const onDrop = (e) => {
    e.preventDefault();
    let newfileList = e.dataTransfer.files;
    console.log(newfileList);
    let newFileToSet = [ ...newfileList]; // [obj1,ob2,..new]
    console.log(newFileToSet, "teeing");
    dispatch({type: 'ADD_FILES',  files: [...files, ...newFileToSet]}); // or setFiles(files.concat(...newfileList))
    console.log('fiii' , files)
  };

  return (
    <div className="App">
      <h1>Files-Image Drag and drop feature</h1>
      <input type="text" placeholder="Enter text here..." name="text" />
      <div>
        <li></li>
      </div>
      <div draggable={true} onDrop={ondrop} onDragOver={onDragOver}>
        <p>Hi! you can drag your texts here...</p>
      </div>
      <DropZone onDrop={onDrop} onDragOver={onDragOver} files={files} />
      <DeleteZone onDragOver={onDragOver} ondrop={onDrop}/>
    </div>
  );
}
export default App;
