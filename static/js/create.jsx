import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'

class Create extends Component {
  //TODO This version is unusable for now
  //static proptypes = {
    //onCreateEvent: PropTypes.func.isRequired
  //}
  handleSubmit(e) {
    e.preventDefault()
    const contact = serializeForm(e.target, { hash: true })
    this.props.onCreateEvent(contact)
  }

  render() {
    return (
      <div>
        <Link className='close-create-contact' to='/'>Close</Link>
        <form onSubmit={this.handleSubmit.bind(this)} className='create-contact-form'>
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='location' placeholder='Location'/>
            <input type='text' name='date' placeholder='Date'/>
            <input type='number' name='remain' placeholder='Remaining'/>
            <button>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Create
