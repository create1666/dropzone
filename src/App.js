import React, {useState} from "react";
import DropZone from "./Dropzone";
import "./App.scss"; // install node-sass to use scss

function App() {

  const [files, setFiles] = useState([])
  const onDragOver = (e) => {
    e.preventDefault()
  }

  console.log(files)

  const onDrop = (e) => {
    e.preventDefault()
    const newfileList=e.dataTransfer.files
    console.log(newfileList)
    const newItemToSet = [...files, ...newfileList ] // [obj1,ob2,..new]
    console.log(newItemToSet, 'teeing')
    setFiles(newItemToSet) // or setFiles(files.concat(...newfileList))
  }

  
  return <div className={App}>
    <h1>Files-Image Drag and drop feature</h1>
    <DropZone onDrop={onDrop} onDragOver={onDragOver} files={files}/>
  </div>
}
export default App;

