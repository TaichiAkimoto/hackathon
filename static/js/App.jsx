// App.jsx
import React from "react";
import { Route } from 'react-router-dom'

import Event from './event'
import Create from './create'
import * as API from './api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { events: [] }
    this.createEvent = this.createEvent.bind(this)
  }
  callEvent() {
    API.getEvent().then((events) => {
      this.setState({ events: events.contents })
    })
  }
  createEvent(event) {
    API.createEvent(event).then((result) => {
      console.log(result)
      console.log('success')
      this.callEvent()
    })
  }
  componentDidMount() {
    this.callEvent()
  }

  render () {
    return (
      <div>
        <Route exact path='/' render={() => (
	       <Event events={this.state.events}/>
        )} />
	<Route path='/:eventid/apply' render={({ history }) => (
	  <Create
      onCreateEvent={(contact) => {
        this.createEvent(contact)
        history.push('/')
      }}
    />
	)}/>
      </div>
    )
  }
}

export default App
