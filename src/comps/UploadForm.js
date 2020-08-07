import React, { useState } from 'react'

const UploadForm = () => {

    const [file, setFiles] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)) {
            setFiles(selected);
            setError('');
        }else {
            setFiles(null);
            setError("please an image file (png or jpeg)")
        }
    }
    return (
      
        <form>
        <label>
          <input type="file" onChange={changeHandler}/>
          <span>+</span>
        </label>
            <div className="output">
              { error && <div className="error">{error}</div>}
              { file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm
