import logo from './logo.svg'
import { useState } from 'react'

function App() {
  const [photo, setPhoto] = useState();
  function changeMe(e){
    setPhoto(URL.createObjectURL(e.target.files[0]))
    
  }
  function drophere(e){
    setPhoto(URL.createObjectURL(e.target.files[0]))
  }




  return (
    <div className="App">
      <div className="container">
        <div className="clean-mock">
        <i class="fa-solid fa-camera-retro"></i>
          <p>Clean mock</p>
        </div>
        <div className="main-container">
          <div className="form-container">
            <div className="card">
              <div className="card-image">
                <img src={photo} alt="" className="card-pic"/>
              </div>
              <h4>Drag & Drop</h4>
              <span>Upload only png, jpg, or jpeg</span>
              <label for="upload-file">Upload Image</label>
              <input type="file"
               accept="image/png, image/jpg, image/jpeg" 
               id="upload-file" 
               onChange={changeMe}
               onDrop={drophere}
               />
            </div>
          </div>
        </div>   
      </div>
    </div>
  );
}

export default App;
