import React, { Component } from 'react';
import * as firebase from 'firebase';

class FileUpload extends Component {  
  constructor() {
    super();
    this.state = {
       uploadValue: 0
    }
    this.handleOnChange = this.handleOnChange.bind(this); 
  }

  handleOnChange (event) {  
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`pictures/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', (snapshot) => { // on progress
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      });
    }, (error) => { // error
      this.setState({
        message: `Ha ocurrido un error: ${error.message}`
      });      
    }, () => { // done
      this.setState({
        message: 'Archivo subido!',
        picture: task.snapshot.downloadURL
      });
    });
  }

  render() {
    return (
      <div>
        <progress value={ this.state.uploadValue } max='100'>
          { this.state.uploadValue } %
        </progress>
        <br />
        <input type='file' onChange= { this.handleOnChange }/>
        <br />
        <img width='90' src={ this.state.picture } />
      </div>
    )
  }
}

export default FileUpload;