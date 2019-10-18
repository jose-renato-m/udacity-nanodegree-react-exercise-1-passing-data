import React, { Component } from 'react'

class ListProfiles extends Component {
  render() {
    return (
      <ol className='profile-list'>
      {this.props.profiles.map((profile) => (
        <li key={profile.id}>
         {profile.userID}
        </li>
      ))}
      </ol>
    )
  }
}

export default ListProfiles