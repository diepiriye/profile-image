
import { useState } from 'react'


function App() {
  const [photo, setPhoto] = useState([]);
  function changeMe(e){
    const pictures = e.target.files;
    console.log(pictures)
    const pictureArray = Array.from(pictures)
    console.log(pictureArray)
    const pictureMap = pictureArray.map((file)=>{
      return URL.createObjectURL(file)
    })
    console.log(pictureMap)
    setPhoto(pictureMap)
  }
  
  function removeMe(index){
    const own = photo.filter((value,index,arr)=> arr.indexOf(value) !== index )
    setPhoto(own);
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="clean-mock">
        <i className="fa-solid fa-camera-retro"></i>
          <p>Clean mock</p>
        </div>
        <div className="main-container">
          <div className="form-container">
            <div className="card">
              <div className="card-image">
                <img src="./images/drop.png" alt="" className="card-pic"/>
              </div>
              <h4>Drag & Drop</h4>
              <span>Upload only png, jpg, or jpeg</span>
              <label htmlFor="upload-file">Upload Image</label>
              <input type="file"
               multiple accept="image/png, image/jpg, image/jpeg" 
               id="upload-file" 
               onChange={changeMe}
               />
            </div>
          </div>
        </div>   
      </div>
      <div className="picture-space">
        {photo && photo.map((pic,index,arr)=>{
          return(
          <div className="picture-image-container" key={pic.toString()}>
            <img src={pic} alt="" className="picture-image"/>
            <button className="delete" onClick={()=>removeMe(arr.indexOf(pic))}>Delete</button>
          </div>
          );
        })}  
      </div>
    </div>
  );
}

export default App;
