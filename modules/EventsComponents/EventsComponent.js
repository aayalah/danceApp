import React from 'react'
import ListItem from './ListItem.js'
import danceStyles from '../../data.js'
export default React.createClass({
  render() {
    return (
     <article>
        <section>
          <ListItem data={danceStyles}/>
        </section>
      </article>
    )
  }
})
