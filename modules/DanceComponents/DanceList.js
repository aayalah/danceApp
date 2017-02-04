import React from 'react'
import ListItem from './ListItem.js'
import danceStyles from '../../data.js'
import {getCategories} from '../../api/login'
export default React.createClass({
  getInitialState() {
    return {data: []};
  },
  componentDidMount() {
    var comp = this;
    getCategories(localStorage.getItem("user"), localStorage.getItem("password")).then(function(response){
      return response.json();
    }).then(function(responseData){
      return responseData;
    }).then(function(data){
      comp.setState({data: data});
    });
  },
  render() {
    return (
     <article>
        <section>
          <ListItem data={this.state.data}/>
        </section>
      </article>
    )
  }
})
