import React from "react";
import DropZone from "./Dropzone";
import "./App.scss"; // install node-sass to use scss

function App() {

  const [files, setFiles] = useState([])
  const onDragOver = () => {
    e.preventDefault()
  }

  const onDrop = () => {
    e.preventDefault()
    const newfileList=e.dataTranfer.files
    setFiles([...files, newfileList ])
  }

  
  return <div className={App}>
    <h1>Files-Image Drag and drop feature</h1>
    <DropZone/>
  </div>
}
export default App;

