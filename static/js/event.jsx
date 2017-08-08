import React from "react";
import { Link } from 'react-router-dom'

class Event extends React.Component {
  render() {
    return (
      <div>
        {this.props.events.length==0 && (
          <span>Pease wait</span>
        )}
        <ol className='contact-list'>
          {this.props.events.map((event) => (
            <li key={event.id} className='contact-list-item'>
              <div className='contact-details'>
                <p>{event.location}</p>
                <p>{event.date}</p>
                <p>{event.remain}</p>
                <p>{event.id}</p>
              </div>
              <Link
		to={`/${event.id}/apply`}
	      >
		Apply
	      </Link>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Event
