import React from 'react'
import ListItem from './ListItem.js'

export default React.createClass({
  render() {
    return (
      <article>
        <section>
          <ListItem data={[{name:"waltz"}]}/>
        </section>
      </article>
    )
  }
})
