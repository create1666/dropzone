import REACT from 'react'

const DropZone = ({onDrop, onDragOver, files}) => {
 
 
  const imgLists = files.map((file, key) => {
    return <div key={key}>
      <img src={URL.createObjectURL(file)}></img>
    </div>
  })
  return <>
  <div onDrop={onDrop} onDragOver={onDragOver}>
     <p>Hi! you can drag your files here...</p>
     <div>
       <div>
       {imgLists}
       </div>
     </div>
  </div>
  </>
}

export default DropZone