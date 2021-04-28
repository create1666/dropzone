import REACT from 'react'

const DropZone = ({onDrop, onDragOver, files}) => {

 
  const imgLists = files.map((file, key) => {
    return <div key={key}>
      <img className='preview-image' src={URL.createObjectURL(file)}></img>
    </div>
  })
  return <>
  <div className='drag-drop-zone'  onDrop={onDrop} onDragOver={onDragOver}>
     <p>Hi! you can drag your files here...</p>
     <div>
       <div className="img-preview-wrapper">
       {imgLists}
       </div>
     </div>
  </div>
  
  </>
}

export default DropZone