import REACT,{useState} from 'react'

const DropZone = ({onDrop, onDragOver, files}) => {
 
  const [files,] = useState()
  const imgLists = files.map((file) => {
    return <img src={URL.createObjectURL(file)}></img>
  })
  return <>
  <div onDrop={onDrop} onDragOver={onDragOver}>
     <p>Hi! you can drag your files here...</p>
     <div>
       {imgLists}
     </div>
  </div>
  </>
}

export default DropZone