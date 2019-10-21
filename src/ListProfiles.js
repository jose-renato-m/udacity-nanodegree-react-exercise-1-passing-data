import React, { Component } from 'react'

class ListProfiles extends Component {
  render() {
    return (
      <ol className='profile-list'>
      {this.props.profiles.map((profile) => (
        <li key={profile.id} className='profile-list-item'>
          <div className='user-favorite-movie'>
           {`${id.users.name}'s favorite movie is ${favoriteMovieID.movies.name}.`}
          </div>
        </li>
      ))}
      </ol>
    )
  }
}

export default ListProfiles