import React from 'react'
import {uploadVideo} from '../../api/login'
export default React.createClass({
  getInitialState: function() {
   return {display: false, title: "", video: "", category:"", description: "", categories: [], file:[]};
  },
  submitVideo(){
    console.log("upload")
    console.log(this.state.video)
    var comp = this;
    uploadVideo(localStorage.getItem("user"), localStorage.getItem("password"), this.state.title, this.state.video, this.state.categories, this.state.description, this.state.file).then(function(response){
      return response.json();
    }).then(function(responseData){
      return responseData;
    }).then(function(data){
      console.log("data");
    });
    //comp.props.callback();
  },
  titleChanged(event){
    this.setState({title: event.target.value})
  },
  videoChanged(event){
    this.setState({video: event.target.value, file: event.target.files})

    console.log(event.target.files)
  },
  categoryChanged(event){
    this.setState({category: event.target.value})
  },
  descriptionChanged(event){
    this.setState({description: event.target.value})
  },
  addCategory(event) {
    if(event.key === 13 || event.which === 13) {
      this.setState({categories: this.state.categories.concat(event.target.value)})
      this.setState({category: ""})
    }

  },
  displayCategories() {
    return this.state.categories.map((item, key) => <span key={key} className="categoryLabel">{item}</span>)
  },
  cancel() {
    this.props.callback();
  },
  render() {
    return <div className="mymodal">
            <div className="uploadContainer">
                <span>Title: </span><input type="text" placeholder="Enter Title" name="title" value={this.state.title} onChange={this.titleChanged}></input>
                <span>Video:</span><input type="file" placeholder="Enter Video" name="video" value={this.state.video} onChange={this.videoChanged}></input>
                <span>Category:</span><input type="text" placeholder="Enter Categories" name="category" onKeyPress={this.addCategory} value={this.state.category} onChange={this.categoryChanged}></input>
                <div>{this.displayCategories()}
                </div>
                <h4> Description </h4>
                <textarea value={this.state.description} onChange={this.descriptionChanged}>
                </textarea>
                <button type="submit" onClick={this.submitVideo}>Submit</button>
                <button type="submit" onClick={this.cancel}>Cancel</button>
              </div>
          </div>
        }
})
